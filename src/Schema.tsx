export type Note = {
  id: number;
} & NoteData;

export interface NoteData {
  title: String;
  body: string;
  tags: Tag[];
}
export interface Tag {
  id: number;
  label: string;
}
