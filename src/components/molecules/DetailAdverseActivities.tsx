import { Button, Link } from "@mui/material";
import { AmsDetailResponse } from "@/models/AmsDetailResponse";

type Props = {
    detailData: AmsDetailResponse
}

export default function DetailAdverseActivities({ detailData }: Props) {

    const details = detailData.slice(0, 3);

    const pattern = /https?:\/\/([^/]+)/;

    const sourcesArray = details.map(obj => {
        const match = obj.link.match(pattern);
        const name = match ? match[1] : null;
        return {
          name: name,
          link: obj.link
        };
      });

  return (
    <div className="overflow-x-auto mt-8 w-full lg:w-2/4">
      <h3 className="text-white text-2xl flex items-center mb-3 font-medium mt-8">Adverse activites in media</h3>
      <div className="bg-white md:p-5 md:rounded-xl">
        <table className="w-full text-sm text-left divide-y divide-gray-200 p-10">
            <thead className="text-sm text-adversea-dark-grey bg-white rounded-xl">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">
                        Article
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">
                        Source
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">
                        Country
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">
                        Detected adverse activities
                    </th>
                </tr>
            </thead>
            <tbody>
                {details ? details.map((detail, index) => (
                    <tr className="odd:bg-white even:bg-gray-100" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-adversea-grey">
                        {detail.title}
                    </th>
                    <td className="px-6 py-4 text-sm text-adversea-grey">
                        <Link href={sourcesArray[index].link}>{sourcesArray[index].name}</Link>
                    </td>
                    <td className="px-6 py-4 font-sm text-adversea-grey">
                        {detail.region}
                    </td>
                    <td className="px-6 py-4 font-sm text-adversea-grey">
                        {detail.gpt3_adverse_behaviour_keywords === "None" ? detail.keywords : detail.gpt3_adverse_behaviour_keywords.split(",").slice(0, 3).join(", ")}
                    </td>
                </tr>
                )) : null}
            </tbody>
        </table>
        </div>
        <div className="text-right text-sm mb-10">
          <Button
            variant="outlined"
            className="py-3 px-4 bg-white text-adversea-green mt-3 text-xs"
            sx={{
              ':hover': {
                bgcolor: '#015951',
                color: 'white',
                borderColor: '#015951',
              },
            }}
          >
              All articles
          </Button>
      </div>
    </div>

  )
}