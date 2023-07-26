export type DetailEntityResponse = {
    "pep": {
      "id": string,
      "schema": string,
      "name": string,
      "name_ascii": string,
      "aliases": string,
      "birth_date": string,
      "addresses": string,
      "emails": string,
      "phones": string,
      "countries": string,
      "countries_full": string,
      "dataset": string
    },
    "query": string,
    "sanctions": {
      "id": string,
      "schema": string,
      "name": string,
      "name_ascii": string,
      "addresses": string,
      "aliases": string,
      "birth_date": string,
      "countries": string,
      "countries_full": string,
      "dataset": string,
      "identifiers": string,
      "sanctions": string
    }
}