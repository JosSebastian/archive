export interface Content {
  id?: number;

  medium?: string;
  title?: string;
  description?: string;
  genres?: string[];
  status?: string;
  rating?: number;

  volumes?: {
    volume?: number;
    chapter?: number;
  }[];

  note?: string;
  notes?: {
    volume: number;
    chapter: number;
    note: string;
  }[];

  time?: {
    first: string;
    last: string;
  };
}
