import { SearchEntityItem } from "@/models/SearchEntityItem";
import DetailInfoAttribute from "../atoms/DetailInfoAttribute";
import Link from "next/link";
import { Button } from "@mui/material";
import { DetailEntityResponse } from "@/models/DetailEntityResponse";

type Props = {
  entity: DetailEntityResponse
}

export default function DetailAdverseActivities({ entity }: Props) {

  return (
  
    <div className="relative overflow-x-auto mt-8">
      <h3 className="text-adversea-green text-xl flex items-center mb-3">Adverse activites in media</h3>
        <table className="w-full text-sm text-left text-adversea-purple">
            <thead className="text-sm text-gray-700 bg-purple-300 text-adversea-green">
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
                <tr className="bg-purple-100">
                    <th scope="row" className="px-6 py-4 font-medium text-adversea-grey">
                        Murder of slovak journalist
                    </th>
                    <td className="px-6 py-4 text-sm text-adversea-grey">
                        BBC
                    </td>
                    <td className="px-6 py-4 font-sm text-adversea-grey">
                        GB
                    </td>
                    <td className="px-6 py-4 font-sm text-adversea-grey">
                        murder, conspiracy
                    </td>
                </tr>
                <tr className="border-b bg-purple-100">
                    <th scope="row" className="px-6 py-4 font-medium text-adversea-grey whitespace-nowrap">
                        Súd Mariána Kočnera
                    </th>
                    <td className="px-6 py-4 text-sm text-adversea-grey">
                        aktuality.sk
                    </td>
                    <td className="px-6 py-4 font-sm text-adversea-grey">
                        SK
                    </td>
                    <td className="px-6 py-4 font-sm text-adversea-grey">
                      murder, assasination, corruption
                    </td>
                </tr>
                <tr className="border-b bg-purple-100">
                    <th scope="row" className="px-6 py-4 font-medium text-adversea-grey whitespace-nowrap">
                        Vražda slovenského novináře
                    </th>
                    <td className="px-6 py-4 font-sm text-adversea-grey">
                        seznam.cz
                    </td>
                    <td className="px-6 py-4 font-sm text-adversea-grey">
                        CZ
                    </td>
                    <td className="px-6 py-4 font-sm text-adversea-grey">
                        murder
                    </td>
                </tr>
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