import { SearchEntityItem } from "@/models/SearchEntityItem";
import DetailInfoAttribute from "../atoms/DetailInfoAttribute";
import { BsBuildingFill, BsPersonFill } from "react-icons/bs"
import Link from "next/link";
import { Button } from "@mui/material";
import { DetailEntityResponse } from "@/models/DetailEntityResponse";

type Props = {
  entity: DetailEntityResponse
}

export default function DetailInfo({ entity }: Props) {
  const iconClasses = "mr-8"
  const icon = <BsPersonFill className={iconClasses} />
  const url = `/detail?name=${encodeURIComponent(entity.name)}`
  return (
    <div className="mt-8 flex items-center">
      <div className="w-2/4">
        <h3 className="text-adversea-green text-4xl flex items-center mb-8">{icon}{entity.name}</h3>
        <div className="text-adversea-grey">
          <DetailInfoAttribute label="Aliases" value={entity.aliases} />
          <DetailInfoAttribute label="Birth date" value={entity.birth_date?.slice(0,10).replaceAll('-', '.')} />
          <DetailInfoAttribute label="Adresses" value={entity.addresses} />
          <DetailInfoAttribute label="Emails" value={entity.emails} />
        </div>
      </div>
    </div>
  )
}