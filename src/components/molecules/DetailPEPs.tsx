import { SearchEntityItem } from "@/models/SearchEntityItem";
import DetailInfoAttribute from "../atoms/DetailInfoAttribute";
import Link from "next/link";
import { Button } from "@mui/material";
import { DetailEntityResponse } from "@/models/DetailEntityResponse";

type Props = {
  entity: DetailEntityResponse
}

export default function DetailPEPs({ entity }: Props) {

  let peps = "None"
  if (entity.pep) {
    peps = entity.pep.dataset
  }

  return (
    <div className="mt-8 items-center text-center shadow-lg rounded-xl p-10 w-3/4 md:w-2/4 bg-white">
      <h3 className="text-adversea-green text-xl md:text-2xl items-center mb-3 font-medium">PEP</h3>
      <div className="text-adversea-grey">
        {peps ?
          <h3 className="text-adversea-grey text-sm md:text-md items-center mt-1">{peps}</h3>
          : null}
      </div>
    </div>
  )
}