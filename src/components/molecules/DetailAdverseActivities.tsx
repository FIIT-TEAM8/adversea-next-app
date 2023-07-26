import { Button, Link } from "@mui/material";
import { AmsDetailResponse } from "@/models/AmsDetailResponse";

type Props = {
  entity: AmsDetailResponse
}

export default function DetailAdverseActivities({ entity }: Props) {

    const details = entity.slice(0, 3);

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
    <div className="relative overflow-x-auto mt-8">
      <h3 className="text-adversea-green text-xl flex items-center mb-3">Adverse activites in media</h3>
        <table className="w-full text-sm text-left text-adversea-grey">
            <thead className="text-sm text-gray-700 bg-gray-300 text-adversea-green">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Article
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Source
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Country
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Detected adverse activities
                    </th>
                </tr>
            </thead>
            <tbody>
                {details ? details.map((detail, index) => (
                    <tr className="bg-gray-100">
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
                        murder, conspiracy
                    </td>
                </tr>
                )) : null}
            </tbody>
        </table>
        <div className="text-right text-sm">
          <Button
            variant="outlined"
            className="py-3 px-4 bg-adversea-green text-white mt-3 text-xs"
            sx={{
              ':hover': {
                bgcolor: '#3eb8ac',
                color: 'white',
                borderColor: '#3eb8ac',
              },
            }}
          >
              All articles
          </Button>
      </div>
    </div>

  )
}