type Languages = 'en' | 'es' | 'fr' | 'ja';

interface User {
  username: string;
  _id: string;
}

interface Score {
  user: User;
  score: number;
  streak: number;
  createdAt: string;
}

interface ScoresByLang {
  [key in Languages]: Score[];
}
