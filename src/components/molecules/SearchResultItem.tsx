import { SearchEntityItem } from "@/models/SearchEntityItem";
import SearchResultAttribute from "../atoms/SearchResultAttribute";
import { BsBuildingFill, BsPersonFill } from "react-icons/bs"
import Link from "next/link";
import { Button } from "@mui/material";
import { SearchEntityResponse } from "@/models/SearchEntityResponse";

type Props = {
  key: string;
  entity: SearchEntityResponse
}

export default function SearchResultItem({ key, entity }: Props) {
  const iconClasses = "mr-2"
  const icon = entity.type === "person" ? <BsPersonFill className={iconClasses} /> : <BsBuildingFill className={iconClasses} />
  const url = `/detail?name=${encodeURIComponent(entity.name)}`
  return (
    <div key={key} className="mt-8 flex items-center">
      <div className="w-3/4">
        <Link href={url}><h3 className="text-adversea-green text-xl flex items-center">{icon}{entity.name}</h3></Link>
        <div className="text-adversea-grey">
          <SearchResultAttribute label="TYPE" value={entity.type} />
          <SearchResultAttribute label="LOCATIONS" list={entity.locations} />
          <SearchResultAttribute label="SOURCES" list={entity.source} />
        </div>
      </div>
      <div className="ml-3 sm:ml-auto items-center">
        <Link href={url}>
        <Button variant="outlined" className="py-3 px-4">DETAIL</Button>
        </Link>
      </div>
    </div>
  )
}