import { SearchEntityItem } from "@/models/SearchEntityItem";
import DetailInfoAttribute from "../atoms/DetailInfoAttribute";
import Link from "next/link";
import { Button } from "@mui/material";
import { AmsDetailResponse } from "@/models/AmsDetailResponse";

type Props = {
  detailData: AmsDetailResponse
}

export default function DetailAssociatedOrgs({ detailData }: Props) {

  const orgsCount: { [key: string]: number } = {};

  detailData.forEach(obj => {
    obj.gpt3_organizations?.forEach(org => {
      orgsCount[org] = (orgsCount[org] || 0) + 1;
    });
  });

  const orgsArray = Object.keys(orgsCount).map(org => ({ org, count: orgsCount[org] })).slice(0, 5);

  return (
    <div className="mt-8 items-center">
      <div className="text-center shadow-lg rounded-xl p-10">
        <h3 className="text-adversea-green text-2xl items-center mb-3 font-medium">Associated with these organizations</h3>
        <div className="text-adversea-grey">
          {orgsArray ? orgsArray.map((org, index) => (
            <h3 className="text-adversea-grey text-sm items-center mt-1" key={index}>{org.org}</h3>
          )) : null}
        </div>
      </div>
    </div>
  )
}