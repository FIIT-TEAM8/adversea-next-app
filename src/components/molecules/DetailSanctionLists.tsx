import { SearchEntityItem } from "@/models/SearchEntityItem";
import DetailInfoAttribute from "../atoms/DetailInfoAttribute";
import Link from "next/link";
import { Button } from "@mui/material";
import { DetailEntityResponse } from "@/models/DetailEntityResponse";

type Props = {
  entity: DetailEntityResponse
}

export default function DetailSanctionLists({ entity }: Props) {

  let lists = ["None"]
  if (entity.sanctions) {
    lists = entity.sanctions.sanctions.split(",")
  }

  return (
    <div className="mt-8 flex items-center">
      <div className="w-2/4">
        <h3 className="text-adversea-green text-xl flex items-center mb-3">Sanction lists</h3>
        <div className="text-adversea-grey">
          {lists ? lists.map((list, index) => (
            <h3 className="text-adversea-grey text-sm flex items-center mt-1">{list}</h3>
          )) : null}
        </div>
      </div>
    </div>
  )
}