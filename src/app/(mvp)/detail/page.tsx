import { Typography, Grid, Button } from '@mui/material';
import { BsBuildingFill, BsPersonFill } from "react-icons/bs"
import ficoData from './fico.json';
// import Statistics from './statistics';
import Logo from "@/components/atoms/Logo";
import DetailInfo from "@/components/molecules/DetailInfo";
import DetailSanctionLists from "@/components/molecules/DetailSanctionLists";
import DetailPEPs from "@/components/molecules/DetailPEPs";
import DetailAdverseActivities from "@/components/molecules/DetailAdverseActivities";
import { GenericPageProps } from "@/models/GenericPageProps";
import { DetailEntityResponse } from '@/models/DetailEntityResponse';
import { AmsDetailResponse } from '@/models/AmsDetailResponse';
import DetailAssociatedOrgs from '@/components/molecules/DetailAssociatedOrgs';
import DetailAssociatedPeople from '@/components/molecules/DetailAssociatedPeople';
import { stringify } from 'querystring';

export default async function Detail({ params, searchParams }: GenericPageProps) {

  const name = searchParams.name;

  let entity: DetailEntityResponse;
  let ams_detail: AmsDetailResponse;

  const res = await fetch(`https://adversea.com/api/peps/search?q=${name}`);
  entity = await res.json()

  const res2 = await fetch(`https://adversea.com/api/adverse-entity/detail?name=${name}`);
  ams_detail = await res2.json()

  return (
    <div className="mb-20">
      <div className="flex justify-center bg-white mt-15">
      <div className="p-5 w-[50rem]">
        <div className="w-full flex items-center justify-center mb-8">
          <Logo />
        </div>
        <div className="p-1">
            <DetailInfo entity={entity} />
        </div>
        <div className="p-1">
          <DetailSanctionLists entity={entity} />
        </div>
        <div className="p-1">
          <DetailPEPs entity={entity} />
        </div>
        <div className="p-1">
          <DetailAdverseActivities detailData={ams_detail} />
        </div>
        <div className="p-1">
          <DetailAssociatedOrgs detailData={ams_detail} />
        </div>
        <div className="p-1">
          <DetailAssociatedPeople detailData={ams_detail} />
        </div>
      </div>
    </div>
      {/* <Statistics/> */}
    </div>
  );
};