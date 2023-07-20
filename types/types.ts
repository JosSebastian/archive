export type Id = number;

export type Medium = string;
export type Title = string;
export type Description = string;
export type Genre = string;
export type Genres = Genre[];
export type Status = string;
export type Rating = number;

export type Volume = {
  volume: number;
  chapter: number;
};
export type Volumes = Volume[];

export type Note = string;
export type Notes = {
  volume: Volume;
  note: Note;
}[];

export type Time = {
  first: string;
  last: string;
};

export interface Content {
  id?: Id;

  medium?: Medium;
  title?: Title;
  description?: Description;
  genres?: Genres;
  status?: Status;
  rating?: Rating;

  volumes?: Volumes;

  note?: Note;
  notes?: Notes;

  time?: Time;

  uid?: string;
}
