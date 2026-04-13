export interface AnimeInfo {
  title: string;
  titleJapanese: string;
  titleRussian: string;
  description: string;
  rating: number;
  studio: string;
  year: number;
  episodes: number;
  genres: string[];
  posterUrl: string;
}

export const ANIME_INFO: AnimeInfo = {
  title: "Alya Sometimes Hides Her Feelings in Russian",
  titleJapanese: "時々ボソッとロシア語でデレる隣のアーリャさん",
  titleRussian: "Аля иногда кокетничает со мной по-русски",
  description:
    'Алиса Михайловна Кудзё — красивая наполовину русская, наполовину японская ученица, которая прошептывает свои чувства на русском языке, думая, что её одноклассник Масаака Кудзэ не понимает ни слова. Но Масаака тайно свободно говорит по-русски. То, что начинается как односторонний секрет, превращается в нежный и забавный танец невысказанных чувств и украденных взглядов. Тёплая школьная романтика, где каждое прошептанное русское слово приближает их друг к другу — даже если ни один из них не признается в этом.',
  rating: 7.73,
  studio: "Doga Kobo",
  year: 2024,
  episodes: 12,
  genres: ["Romance", "School", "Comedy", "Slice of Life"],
  posterUrl: "https://shikimori.one/system/animes/original/54744.jpg",
};
