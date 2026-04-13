# AniMark

Фан-сайт аниме «Аля иногда кокетничает по-русски» (Toki Doki Bosotto Russia-go de Dereru Tonari no Alya-san).

## Возможности

- Браузер эпизодов с поддержкой VK Video через iframe
- Интеграция с Google Sheets для управления данными об эпизодах
- Адаптивный дизайн с аниме-тематикой
- Анимация лепестков сакуры и фоны с персонажами
- Одностраничная производная сборка

## Стек технологий

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Google Sheets API

## Установка

### Предварительные требования

- Node.js 18+
- npm или pnpm

### Установка зависимостей

```bash
npm install
```

### Переменные окружения

Создайте файл `.env` в корне проекта:

```
VITE_GOOGLE_SHEETS_API_KEY=ваш_api_ключ
VITE_GOOGLE_SHEETS_SPREADSHEET_ID=ваш_id_таблицы
VITE_GOOGLE_SHEETS_SHEET_NAME=Лист1
```

### Структура Google Sheets

Создайте таблицу со следующими столбцами:

| id | anime_title | video_url | video_type | poster_url |
|----|-------------|-----------|-----------|------------|
| 1  | Эпизод 1    | https://... | iframe   | https://... |

### Разработка

```bash
npm run dev
```

### Сборка

```bash
npm run build
```

### Предпросмотр

```bash
npm run preview
```

## Структура проекта

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

## Лицензия

Это фан-проект. Все права на аниме принадлежат их правообладателям.
