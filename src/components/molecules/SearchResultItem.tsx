import { SearchEntityItem } from "@/models/SearchEntityItem";
import SearchResultAttribute from "../atoms/SearchResultAttribute";
// import { BsBuilding, BsPersonFill } from "react-icons/bs"

type Props = {
  key: string;
  entity: SearchEntityItem
}

export default function SearchResultItem({ key, entity }: Props) {
  return (
    <div key={key} className="mt-8 w-2/3">
      {/* <h3 className="text-adversea-green text-xl"><BsBuilding />{entity.name}</h3> */}
      <div className="text-adversea-grey">
        <SearchResultAttribute label="AGE" value={entity.age} />
        <SearchResultAttribute label="LOCATION" value={entity.dominantLocation} />
        <SearchResultAttribute label="ARTICLES" value={entity.numArticles} />
      </div>
    </div>
  )
}