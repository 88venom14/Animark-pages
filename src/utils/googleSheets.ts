export interface SheetEpisode {
  id: number;
  title: string;
  video_url: string;
  video_type: string;
  poster_url: string;
}

const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID;
const SHEET_NAME = import.meta.env.VITE_GOOGLE_SHEETS_SHEET_NAME || "Лист1";

export async function fetchEpisodes(): Promise<SheetEpisode[]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(SHEET_NAME)}?key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Google Sheets API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (!data.values || data.values.length < 2) {
    console.warn("No data found in spreadsheet");
    return [];
  }

  const headers = data.values[0].map((h: string) => h.trim().toLowerCase());
  const rows = data.values.slice(1);

  const episodes = rows
    .map((row: string[]) => {
      const episode: Record<string, string | number> = {};

      headers.forEach((header: string, index: number) => {
        const value = row[index] || "";

        if (header === "anime_title") {
          episode["title"] = value;
        } else if (header === "id") {
          const numericValue = value.replace(/[^0-9]/g, "");
          episode[header] = parseInt(numericValue) || 0;
        } else {
          episode[header] = value;
        }
      });

      return episode as unknown as SheetEpisode;
    })
    .filter((ep: SheetEpisode) => ep.id > 0 && ep.title)
    .sort((a: SheetEpisode, b: SheetEpisode) => a.id - b.id);

  return episodes;
}

export async function fetchEpisodeById(episodeId: number): Promise<SheetEpisode | null> {
  const episodes = await fetchEpisodes();
  return episodes.find((ep) => ep.id === episodeId) || null;
}
