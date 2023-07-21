export type SearchEntityResponse = {
  name: string;
  name_ascii: string;
  type: "person" | "organization";
  locations?: string[];
  source?: string[];
}