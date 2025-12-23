# EuroHorse 2026 - Julklappssida

En rolig och personlig julklappssida för Amanda med en entrébiljett till EuroHorse 2026.

## Funktioner

- 🎫 Snygg biljettdesign med gradient-header
- ⏰ Nedräkning till 19 februari 2026
- 🎉 Konfetti-effekt när man klickar "Jag kommer!"
- 💾 Spara biljetten som bild (PNG)
- 🌍 Språkväxling Svenska/English
- 🕵️ Easter egg: skriv "lucifer" på tangentbordet
- 📱 Responsiv design för desktop och mobil

## Kom igång

```bash
# Installera dependencies
npm install

# Starta utvecklingsserver
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Deploy till GitHub och Vercel

### 1. Skapa ett nytt repository på GitHub

1. Gå till [GitHub](https://github.com) och skapa ett nytt repository
2. Välj ett namn (t.ex. `eurohorse-2026-gift`)
3. **Viktigt:** Skapa INTE med README, .gitignore eller license (vi har redan dessa)

### 2. Pusha koden till GitHub

```bash
# Lägg till ditt GitHub-repo som remote (ersätt med ditt repo-URL)
git remote add origin https://github.com/DITT-ANVÄNDARNAMN/DITT-REPO-NAMN.git

# Byt branch-namn till main (om GitHub använder main)
git branch -M main

# Pusha koden
git push -u origin main
```

### 3. Deploy till Vercel

1. Gå till [Vercel](https://vercel.com) och logga in
2. Klicka på "Add New Project"
3. Välj ditt GitHub-repository
4. Vercel kommer automatiskt detektera Next.js
5. Klicka på "Deploy" - inga extra inställningar behövs!

Projektet är redo för Vercel och kommer automatiskt deploya vid varje push till main-branchen.

## Teknologi

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- html2canvas (för att spara som bild)
- canvas-confetti (för konfetti-effekt)

