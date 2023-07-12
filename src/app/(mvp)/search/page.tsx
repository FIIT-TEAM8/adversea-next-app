import SearchResultItem from "@/components/molecules/SearchResultItem";
import { SearchEntityItem } from "@/models/SearchEntityItem";
import { TextField } from "@mui/material";


export default function Page() {

  const entities: SearchEntityItem[] = [
    {
      name: "Marian Kocner",
      dominantLocation: "Bratislava",
      type: "person",
      age: 67,
      numArticles: 151,
      pageUrl: "/page-for-marian-kocner-idk"
    },
    {
      name: "Marian Kocneri",
      dominantLocation: "Stupava",
      type: "person",
      age: 26,
      numArticles: 1,
      pageUrl: "/page-for-marian-kocneri-idk"
    },
    {
      name: "Mariankocner s.r.o.",
      dominantLocation: "Stupava",
      type: "company",
      pageUrl: "/page-for-marian-kocneri-idk"
    }
  ]
  return (
    <div className="flex justify-center bg-white mt-20">
      <div className="p-5 w-[40rem]">
        <TextField label="Search" variant="outlined" fullWidth />
        {entities.map((entity, index) => (
          <SearchResultItem key={`${index}-entity-result-item`} entity={entity}/>
        ))}
      </div>
    </div>
  )
}