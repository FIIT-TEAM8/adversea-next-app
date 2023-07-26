import { SearchEntityItem } from "@/models/SearchEntityItem";
import DetailInfoAttribute from "../atoms/DetailInfoAttribute";
import { BsBuildingFill, BsPersonFill } from "react-icons/bs"
import Link from "next/link";
import { Button } from "@mui/material";
import { DetailEntityResponse } from "@/models/DetailEntityResponse";

type Props = {
  entity: DetailEntityResponse
}

export default function DetailInfo({ entity }: Props) {
  const iconClasses = "mr-8"
  const icon = <BsPersonFill className={iconClasses} />

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
      aliases = entity.pep.aliases
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
    <div className="mt-8 flex items-center">
      <div className="w-2/4">
        <h3 className="text-adversea-green text-4xl flex items-center mb-8">{icon}{entity.query}</h3>
        <div className="text-adversea-grey">
          <DetailInfoAttribute label="Aliases" value={aliases} />
          <DetailInfoAttribute label="Birth date" value={birth_date} />
          <DetailInfoAttribute label="Adresses" value={addresses} />
          <DetailInfoAttribute label="Emails" value={emails} />
          <DetailInfoAttribute label="Phones" value={phones} />
          <DetailInfoAttribute label="Countries" value={countries} />
        </div>
      </div>
    </div>
  )
}