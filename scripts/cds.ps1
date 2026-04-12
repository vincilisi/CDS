param(
    [ValidateSet("doctor", "setup", "dev", "build", "start", "lint", "all")]
    [string]$Action = "doctor",

    [int]$Port = 3000,

    [switch]$SkipInstall,
    [switch]$SkipLint,
    [switch]$SkipBuild,

    [string]$NodeMinVersion = "20.9.0"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Write-Step {
    param([string]$Message)
    Write-Host "`n==> $Message" -ForegroundColor Cyan
}

function Write-Ok {
    param([string]$Message)
    Write-Host "[OK] $Message" -ForegroundColor Green
}

function Write-WarnLine {
    param([string]$Message)
    Write-Host "[WARN] $Message" -ForegroundColor Yellow
}

function Write-Fail {
    param([string]$Message)
    Write-Host "[FAIL] $Message" -ForegroundColor Red
    exit 1
}

function Invoke-Cmd {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Command,

        [string]$ErrorMessage = "Comando fallito"
    )

    Write-Host "> $Command" -ForegroundColor DarkGray
    cmd /c $Command
    if ($LASTEXITCODE -ne 0) {
        Write-Fail "$ErrorMessage (exit code: $LASTEXITCODE)"
    }
}

function Test-Command {
    param([Parameter(Mandatory = $true)][string]$Name)
    return $null -ne (Get-Command $Name -ErrorAction SilentlyContinue)
}

function Get-NodeVersion {
    $raw = node -v
    if (-not $raw) {
        return $null
    }

    $clean = $raw.Trim().TrimStart("v")
    try {
        return [Version]$clean
    }
    catch {
        return $null
    }
}

function Assert-Environment {
    Write-Step "Verifica ambiente"

    if (-not (Test-Command "node")) {
        Write-Fail "Node.js non trovato. Installa Node.js LTS e riprova."
    }

    if (-not (Test-Command "npm")) {
        Write-Fail "npm non trovato. Reinstalla Node.js e riprova."
    }

    $nodeVersion = Get-NodeVersion
    if ($null -eq $nodeVersion) {
        Write-Fail "Impossibile leggere la versione di Node.js."
    }

    $minimum = [Version]$NodeMinVersion
    if ($nodeVersion -lt $minimum) {
        Write-Fail "Node.js $nodeVersion rilevato, ma serve almeno $minimum."
    }

    $npmVersion = npm -v

    Write-Ok "Node.js $nodeVersion"
    Write-Ok "npm $npmVersion"

    if (-not (Test-Path "package.json")) {
        Write-Fail "package.json non trovato. Esegui lo script dalla root del progetto."
    }

    Write-Ok "Root progetto valida"
}

function Install-Dependencies {
    if ($SkipInstall) {
        Write-WarnLine "Installazione dipendenze saltata (--SkipInstall)"
        return
    }

    Write-Step "Installazione dipendenze"
    Invoke-Cmd "npm ci" "Installazione dipendenze fallita"
    Write-Ok "Dipendenze installate"
}

function Run-Lint {
    if ($SkipLint) {
        Write-WarnLine "Lint saltato (--SkipLint)"
        return
    }

    Write-Step "Esecuzione lint"
    Invoke-Cmd "npm run lint" "Lint fallito"
    Write-Ok "Lint completato"
}

function Run-Build {
    if ($SkipBuild) {
        Write-WarnLine "Build saltata (--SkipBuild)"
        return
    }

    Write-Step "Esecuzione build"
    Invoke-Cmd "npm run build" "Build fallita"
    Write-Ok "Build completata"
}

function Run-Dev {
    Write-Step "Avvio server di sviluppo"
    Invoke-Cmd "npm run dev -- -p $Port" "Avvio dev server fallito"
}

function Run-Start {
    Write-Step "Avvio server produzione"
    Invoke-Cmd "npm run start -- -p $Port" "Avvio server produzione fallito"
}

Write-Step "CDS Vigilanza Project Script"
Write-Host "Azione: $Action" -ForegroundColor Magenta

Assert-Environment

switch ($Action) {
    "doctor" {
        Write-Ok "Diagnostica completata"
    }
    "setup" {
        Install-Dependencies
        Write-Ok "Setup completato"
    }
    "lint" {
        Install-Dependencies
        Run-Lint
    }
    "build" {
        Install-Dependencies
        Run-Lint
        Run-Build
    }
    "dev" {
        Install-Dependencies
        Run-Dev
    }
    "start" {
        Install-Dependencies
        Run-Start
    }
    "all" {
        Install-Dependencies
        Run-Lint
        Run-Build
        Run-Start
    }
    default {
        Write-Fail "Azione non supportata: $Action"
    }
}
