import { SearchEntityItem } from "@/models/SearchEntityItem";
import SearchResultAttribute from "../atoms/SearchResultAttribute";
import { BsBuildingFill, BsPersonFill } from "react-icons/bs"
import Link from "next/link";
import { Button } from "@mui/material";

type Props = {
  key: string;
  entity: SearchEntityItem
}

export default function SearchResultItem({ key, entity }: Props) {
  const iconClasses = "mr-2"
  const icon = entity.type === "person" ? <BsPersonFill className={iconClasses} /> : <BsBuildingFill className={iconClasses} />
  return (
    <div key={key} className="mt-8 flex items-center">
      <div className="w-2/3">
        <Link href={entity.pageUrl}><h3 className="text-adversea-green text-xl flex items-center">{icon}{entity.name}</h3></Link>
        <div className="text-adversea-grey">
          <SearchResultAttribute label="AGE" value={entity.age} />
          <SearchResultAttribute label="LOCATION" value={entity.dominantLocation} />
          <SearchResultAttribute label="ARTICLES" value={entity.numArticles} />
        </div>
      </div>
      <div className="ml-auto">
        <Button variant="contained">DETAIL</Button>
      </div>
    </div>
  )
}