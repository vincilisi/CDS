# Istituto di Vigilanza CDS — Website

Sito ufficiale dell’Istituto di Vigilanza **CDS – Costantini Divisione Sicurezza**, sviluppato in **Next.js 14**, con un design istituzionale, moderno e premium.  
Il progetto integra animazioni avanzate, componenti modulari e un’estetica coerente con l’identità aziendale.

---

## 💞 Tecnologie utilizzate

- **Next.js 14 (App Router)**
- **React 18**
- **TailwindCSS**
- **IntersectionObserver API** per animazioni on-scroll
- **Next/Image** per ottimizzazione immagini
- **CSS 3D Transform** per effetti avanzati (Cubo News)
- **Componenti modulari** (Navbar, Footer, BackToTop, NewsCube)

---

## 🍀 Struttura del Progetto

app/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── BackToTop.tsx
│   ├── NewsCube.tsx
│
├── azienda/
│   └── page.tsx
│
├── page.tsx (Home)
│
public/
└── media/ (immagini del sito)


---

## ✨ Animazioni Implementate

### ✔ Animazioni On‑Scroll (IntersectionObserver)
Ogni sezione entra in scena con:
- fade‑in  
- slide‑up  
- slide‑left / slide‑right (timeline)  
- reset automatico quando si esce dal viewport  

Le animazioni si ripetono sia in salita che in discesa.

---

### ✔ Timeline Alternata Destra/Sinistra
La sezione *“La nostra storia”* presenta una timeline con:
- entrata alternata da sinistra e destra  
- effetto elegante e dinamico  
- perfetta leggibilità  

---

### ✔ Cubo News 3D (NewsCube Component)
Un componente dedicato che mostra le news con:
- rotazione 3D automatica  
- 4 facce del cubo → 4 news  
- navigazione manuale tramite puntini  
- effetto premium e moderno  

---

## 🧱 Componenti Principali

- **Navbar** — menu superiore responsivo  
- **Footer** — footer istituzionale  
- **BackToTop** — pulsante fluttuante  
- **NewsCube** — cubo 3D con rotazione  
- **AziendaPage** — pagina aziendale con animazioni on‑scroll e timeline  

---

## 📄 Come Aggiungere il Cubo News nella Home

```tsx
import NewsCube from "./components/NewsCube";

export default function Home() {
  return (
    <>
      {/* ... altre sezioni ... */}
      <NewsCube />
      {/* ... footer ... */}
    </>
  );
}
🛠 Requisiti
Node.js 18+

Next.js 14

TailwindCSS configurato


npm install
npm run dev
npm run build
npm start



📌 Note Importanti
Tutte le immagini devono essere posizionate in /public/media/

Le animazioni on‑scroll funzionano grazie a IntersectionObserver

Il cubo 3D richiede due classi globali:

css
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}


🏢 Autore
Sito sviluppato da Vincenzo Antonino Lisitano  
per Istituto di Vigilanza CDS – Costantini Divisione Sicurezza


## 📄 Licenza

Questo progetto è protetto da copyright © 2024 **Vincenzo Antonino Lisitano**.

È vietata la copia, la distribuzione, la modifica o l’utilizzo del codice e dei contenuti presenti in questo repository senza autorizzazione scritta dell’autore.

L’uso non autorizzato, totale o parziale, è perseguibile secondo le normative vigenti in materia di proprietà intellettuale.

Per richieste di utilizzo, collaborazione o concessione di licenza, contattare direttamente:

**Autore:** Vincenzo Antonino Lisitano
