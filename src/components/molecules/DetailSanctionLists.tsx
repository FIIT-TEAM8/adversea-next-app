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
    <div className="items-center text-center shadow-lg rounded-xl p-10 w-3/4 md:w-2/4 mt-10 bg-white">
      <h3 className="text-adversea-green text-2xl items-center mb-3 font-medium">Sanction lists</h3>
      <div className="text-adversea-grey">
        {lists ? lists.map((list, index) => (
          <h3 className="text-adversea-grey text-sm items-center mt-1" key={index}>{list}</h3>
        )) : null}
      </div>
    </div>
  )
}