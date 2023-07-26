import { SearchEntityItem } from "@/models/SearchEntityItem";
import DetailInfoAttribute from "../atoms/DetailInfoAttribute";
import Link from "next/link";
import { Button } from "@mui/material";
import { AmsDetailResponse } from "@/models/AmsDetailResponse";

type Props = {
  detailData: AmsDetailResponse
}

export default function DetailAssociatedPeople({ detailData }: Props) {

  const pplCount: { [key: string]: number } = {};

  detailData.forEach(obj => {
    obj.adverse_behaviour?.forEach(person => {
      pplCount[person] = (pplCount[person] || 0) + 1;
    });
  });

  const pplArray = Object.keys(pplCount).map(person => ({ person, count: pplCount[person] })).slice(0, 5);

  return (
    <div className="mt-8 flex items-center">
      <div className="w-2/4">
        <h3 className="text-adversea-green text-xl flex items-center mb-3">Associated with these people</h3>
        <div className="text-adversea-grey">
          {pplArray ? pplArray.map((person, index) => (
            <h3 className="text-adversea-grey text-sm flex items-center mt-1">{person.person}</h3>
          )) : null}
        </div>
      </div>
    </div>
  )
}