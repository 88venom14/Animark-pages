# AniMark

Fan website for the anime "Alya Sometimes Hides Her Feelings in Russian" (Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san).

## Features

- Episode browser with VK Video iframe support
- Google Sheets integration for episode data management
- Responsive design with anime-themed UI
- Sakura petal animations and character backgrounds
- Single-file production build

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Google Sheets API

## Setup

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
VITE_GOOGLE_SHEETS_API_KEY=your_api_key_here
VITE_GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here
VITE_GOOGLE_SHEETS_SHEET_NAME=Sheet1
```

### Google Sheets Structure

Create a spreadsheet with the following columns:

| id | anime_title | video_url | video_type | poster_url |
|----|-------------|-----------|-----------|------------|
| 1  | Episode 1   | https://... | iframe   | https://... |

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── utils/
│   ├── animeData.ts
│   └── googleSheets.ts
└── components/
    ├── AnimeInfoCard.tsx
    ├── CharacterBackground.tsx
    ├── EpisodeSelector.tsx
    ├── Header.tsx
    ├── SakuraPetals.tsx
    └── VideoPlayer.tsx

public/
├── characters/
├── images/
└── favicon.png
```

## License

This is a fan project. All anime content belongs to their respective owners.
