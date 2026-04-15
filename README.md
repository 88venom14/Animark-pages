# AniMark

Фан-сайт аниме «Аля иногда кокетничает по-русски» (Toki Doki Bosotto Russia-go de Dereru Tonari no Alya-san).

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

```
VITE_GOOGLE_SHEETS_API_KEY=ваш_api_ключ
VITE_GOOGLE_SHEETS_SPREADSHEET_ID=ваш_id_таблицы
VITE_GOOGLE_SHEETS_SHEET_NAME=Лист1
```

### Структура Google Sheets

Создайте таблицу со следующими столбцами:

| id | anime_title | video_url | video_type |
|----|-------------|-----------|-----------|
| 1  | Эпизод 1    | https://... | iframe   |
