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
import DetailAssociatedOrgs from '@/components/molecules/DetailAssociatedOrgs';
import DetailAssociatedPeople from '@/components/molecules/DetailAssociatedPeople';

export default async function Detail({ params, searchParams }: GenericPageProps) {

  const name = searchParams.name;

  let entity: DetailEntityResponse;

  const res = await fetch(`https://virtserver.swaggerhub.com/xsipka/peps/1.0.0/search?q=${name}&full_results=true`);
  entity = await res.json()

  const aliases = ficoData.pep.properties.alias.slice(0, 5);
  const displayedAliases = aliases.join(', ');

  const sanctionLists = [
    "European Union Consolidated Financial Sanction List",
    "UK Sanctions List"
  ]
  const iconClasses = "mr-2"

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
          <DetailAdverseActivities entity={entity} />
        </div>
        <div className="p-1">
          <DetailAssociatedOrgs entity={entity} />
        </div>
        <div className="p-1">
          <DetailAssociatedPeople entity={entity} />
        </div>
      </div>
    </div>
      {/* <Statistics/> */}
    </div>
  );
};