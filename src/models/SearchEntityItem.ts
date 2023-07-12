export type SearchEntityItem = {
    name: string;
    type: "company" | "person";
    age?: number;
    numArticles?: number;
    dominantLocation: string;
    pageUrl: string;
}