export interface Content {
  id: number;

  medium: string;
  title: string;
  description: string;
  genre: string[];
  status: string;
  rating: number;

  volume: number;
  chapter: number;
  volumes: {
    volume: number;
    chapter: number;
  }[];

  note: string;
  notes: {
    volume: number;
    chapter: number;
    note: string;
  }[];

  time: {
    first: string;
    last: string;
  };
}
