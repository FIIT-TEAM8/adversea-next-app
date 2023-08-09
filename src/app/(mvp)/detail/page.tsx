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
import * as amplitude from '@amplitude/analytics-node';

export default async function Detail({ params, searchParams }: GenericPageProps) {
  amplitude.track('Show Detail', undefined, {
    user_id: 'user@amplitude.com',
  });

  const name = searchParams.name;

  let entity: DetailEntityResponse;
  let ams_detail: AmsDetailResponse;

  const res = await fetch(`${process.env.PEP_API_URL}/peps/search?q=${name}`);
  entity = await res.json()

  const res2 = await fetch(`${process.env.AMS_API_URL}/adverse-entity/detail?name=${name}`);
  ams_detail = await res2.json()

  return (
    <div className="mb-20 bg-white">
      <div className="block justify-center">
        <div className="">
          <div className="flex items-center justify-center mb-12 h-20">
            <Logo />
          </div>
          <div className="flex p-1 justify-center items-center bg-adversea-green h-auto">
              <DetailInfo entity={entity} />
          </div>
        </div>
        <div className="mt-12 text-center block justify-center">
          <div className="flex p-1 text-center justify-center">
            <DetailSanctionLists entity={entity} />
          </div>
          <div className="flex p-1 text-center justify-center mb-20">
            <DetailPEPs entity={entity} />
          </div>
          <div className="flex p-1 text-center justify-center bg-adversea-green">
            <DetailAdverseActivities detailData={ams_detail} />
          </div>
          <div className="block md:flex p-1 text-center justify-center">
            <div className="p-5 md:ml-0 w-4/4 lg:w-1/4">
              <DetailAssociatedOrgs detailData={ams_detail} />
            </div>
            <div className="p-5 md:ml-0 w-4/4 lg:w-1/4">
              <DetailAssociatedPeople detailData={ams_detail} />
            </div>
          </div>
        </div>
      </div>
      {/* <Statistics/> */}
    </div>
  );
};