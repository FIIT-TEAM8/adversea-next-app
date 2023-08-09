"use client"
import { SearchEntityItem } from "@/models/SearchEntityItem";
import DetailInfoAttribute from "../atoms/DetailInfoAttribute";
import Link from "next/link";
import { Button } from "@mui/material";
import { DetailEntityResponse } from "@/models/DetailEntityResponse";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

type Props = {
  entity: DetailEntityResponse
}

export default function DetailInfo({ entity }: Props) {
  const router = useRouter();

  const iconClasses = "mr-4 md:mr-8 text-4xl md:text-7xl"
  const icon = <AccountCircleOutlinedIcon className={iconClasses} />

  var aliases, birth_date, addresses, emails, phones, countries

  aliases = birth_date = addresses = emails = phones = countries = "Unknown"

  if (entity.sanctions) {
    if (entity.sanctions.aliases && entity.sanctions.aliases != "") {
      aliases = entity.sanctions.aliases
    }
    if (entity.sanctions.birth_date && entity.sanctions.birth_date != "") {
      birth_date = entity.sanctions.birth_date.slice(0,10).replaceAll('-', '.')
    }
    if (entity.sanctions.addresses && entity.sanctions.addresses != "") {
      addresses = entity.sanctions.addresses
    }
    if (entity.sanctions.emails && entity.sanctions.emails != "") {
      emails = entity.sanctions.emails
    }
    if (entity.sanctions.phones && entity.sanctions.phones != "") {
      phones = entity.sanctions.phones
    }
    if (entity.sanctions.countries && entity.sanctions.countries != "") {
      countries = entity.sanctions.countries
    }
  }
  else if (entity.pep) {
    if (entity.pep.aliases && entity.pep.aliases != "") {
      aliases = entity.pep.aliases.replaceAll(";", ", ")
    }
    if (entity.pep.birth_date && entity.pep.birth_date != "") {
      birth_date = entity.pep.birth_date.slice(0,10).replaceAll('-', '.')
    }
    if (entity.pep.addresses && entity.pep.addresses != "") {
      addresses = entity.pep.addresses
    }
    if (entity.pep.emails && entity.pep.emails != "") {
      emails = entity.pep.emails
    }
    if (entity.pep.phones && entity.pep.phones != "") {
      phones = entity.pep.phones
    }
    if (entity.pep.countries && entity.pep.countries != "") {
      countries = entity.pep.countries
    }
  }

  return (
    <div className="items-center w-3/4 md:w-3/4 lg:w-2/4">
      <div className="w-full">
        <div className="w-full items-center grid grid-cols-1 md:flex justify-center md:justify-between">
          <h3 className="flex text-white font-medium text-2xl md:text-3xl lg:text-5xl md:mb-8 mt-6 items-center justify-center md:justify-normal">{icon}{entity.query}</h3>
          <Button onClick={() => router.back()}>
            <FaRegArrowAltCircleLeft className="invisible md:visible md:text-5xl text-white items-center ml-5"/>
          </Button>
        </div>
        <div className="w-full lg:w-3/4 text-white">
          <div className="flex mt-1 text-sm md:text-md mb-8 justify-center lg:justify-normal">
            <div className="block">
              <div className="flex gap-10 md:gap-20">
                <span className="mr-6 text-white font-medium block">Aliases</span>
                <span className="ml-auto block">{aliases}</span>
              </div>
              <div className="flex gap-10 md:gap-20">
                <span className="mr-1 text-white font-medium block">Birth date</span>
                <span className="ml-auto block">{birth_date}</span>
              </div>
              <div className="flex gap-10 md:gap-20">
                <span className="mr-6 text-white font-medium block">Adresses</span>
                <span className="ml-auto block">{addresses}</span>
              </div>
              <div className="flex gap-10 md:gap-20">
                <span className="mr-6 text-white font-medium block">Emails</span>
                <span className="ml-auto block">{emails}</span>
              </div>
              <div className="flex gap-10 md:gap-20">
                <span className="mr-1 text-white font-medium block">Phones</span>
                <span className="ml-auto block">{phones}</span>
              </div>
              <div className="flex gap-10 md:gap-20">
                <span className="mr-6 text-white font-medium block">Countries</span>
                <span className="ml-auto block">{countries}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}