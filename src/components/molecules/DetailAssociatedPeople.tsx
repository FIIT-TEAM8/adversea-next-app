import { SearchEntityItem } from "@/models/SearchEntityItem";
import DetailInfoAttribute from "../atoms/DetailInfoAttribute";
import Link from "next/link";
import { Button } from "@mui/material";
import { DetailEntityResponse } from "@/models/DetailEntityResponse";

type Props = {
  entity: DetailEntityResponse
}

export default function DetailAssociatedPeople({ entity }: Props) {
  return (
    <div className="mt-8 flex items-center">
      <div className="w-2/4">
        <h3 className="text-adversea-green text-xl flex items-center mb-3">Associated with these people</h3>
        <div className="text-adversea-grey">
          <h3 className="text-adversea-grey text-sm flex items-center mt-1">Ján Kuciak</h3>
          <h3 className="text-adversea-grey text-sm flex items-center mt-1">Pavol Rusko</h3>
          <h3 className="text-adversea-grey text-sm flex items-center mt-1">Róbert Fico</h3>
        </div>
      </div>
    </div>
  )
}