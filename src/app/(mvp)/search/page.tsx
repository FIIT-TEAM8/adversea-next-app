import Logo from "@/components/atoms/Logo";
import SearchField from "@/components/molecules/SearchField";
import SearchResultItem from "@/components/molecules/SearchResultItem";
import { GenericPageProps } from "@/models/GenericPageProps";
import { SearchEntityItem } from "@/models/SearchEntityItem";
import { SearchEntityResponse } from "@/models/SearchEntityResponse";
import { Button, TextField } from "@mui/material";



export default async function Page({ params, searchParams }: GenericPageProps) {

  const method = "rough";
  const name = searchParams.name;

  let entities: SearchEntityResponse[] | undefined;

  if (name) {
    const res = await fetch(`https://virtserver.swaggerhub.com/dominik-horvath/search-service/1.0.0/search?method=${method}&name=${encodeURIComponent(String(name))}`);
    entities = await res.json()
  } else {
    entities = undefined;
  }

  if (entities) {
    entities = [
      {
        name: "majo kocner",
        name_ascii: "majo kocner",
        type: "person",
        locations: ["bratislava", "slovenska republika", "banska bystrica"],
        source: ["articles"]
      },
      {
        name: "marian kocner",
        name_ascii: "marian kocner",
        type: "person",
        locations: ["bratislava", "slovenska republika"],
        source: ["pep", "orsr"]
      },
      {
        name: "kocner s.r.o.",
        name_ascii: "kocner sro",
        type: "organization",
        locations: ["bratislava", "slovakia"],
        source: ["orsr"]
      },
    ]
  }

  return (
    <div className="flex justify-center bg-white mt-20">

      <div className="p-5 w-[40rem]">
        <div className="w-full flex items-center justify-center mb-8">
          <Logo />
        </div>
        <SearchField defaultValue={name ? String(name) : ""} />
        <div className="p-1">
          {entities ? entities.map((entity, index) => (
            <SearchResultItem key={`${index}-entity-result-item`} entity={entity} />
          )) : null}
        </div>


      </div>
    </div>
  );
}