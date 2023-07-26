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
    obj.gpt3_organizations?.forEach(org => { // Optional chaining here to handle undefined orgs field
      orgsCount[org] = (orgsCount[org] || 0) + 1; // Nullish coalescing operator here to handle undefined orgsCount[org]
    });
  });

  const orgsArray = Object.keys(orgsCount).map(org => ({ org, count: orgsCount[org] })).slice(0, 5);

  return (
    <div className="mt-8 flex items-center">
      <div className="w-2/4">
        <h3 className="text-adversea-green text-xl flex items-center mb-3">Associated with these organizations</h3>
        <div className="text-adversea-grey">
          {orgsArray ? orgsArray.map((org, index) => (
            <h3 className="text-adversea-grey text-sm flex items-center mt-1">{org.org}</h3>
          )) : null}
        </div>
      </div>
    </div>
  )
}