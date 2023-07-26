import { Typography, Grid, Button } from '@mui/material';
import { BsBuildingFill, BsPersonFill } from "react-icons/bs"
import ficoData from './fico.json';
// import Statistics from './statistics';
import Logo from "@/components/atoms/Logo";
import DetailInfo from "@/components/molecules/DetailInfo";
import { GenericPageProps } from "@/models/GenericPageProps";
import { DetailEntityResponse } from '@/models/DetailEntityResponse';

export default async function Detail({ params, searchParams }: GenericPageProps) {

  const name = searchParams.name;

  // let entity: DetailEntityResponse;

  const res = await fetch(`https://virtserver.swaggerhub.com/xsipka/peps/1.0.0/search?q=${name}&full_results=true`);
  let entity = await res.json()

  console.log(entity);
  entity = entity.pep;

  const aliases = ficoData.pep.properties.alias.slice(0, 5);
  const displayedAliases = aliases.join(', ');

  const sanctionLists = [
    "European Union Consolidated Financial Sanction List",
    "UK Sanctions List"
  ]
  const iconClasses = "mr-2"
  
  // const entity = {
  //     "id": "string",
  //     "schema": "string",
  //     "name": "Robert Fico",
  //     "name_ascii": "string",
  //     "aliases": "string",
  //     "birth_date": "2023-07-26T09:00:11.603Z",
  //     "addresses": "string",
  //     "emails": "string",
  //     "phones": "string",
  //     "countries": "string",
  //     "countries_full": "string",
  //     "dataset": "string"
  // }

  return (
    <div>
      <div className="flex justify-center bg-white mt-15">
      <div className="p-5 w-[50rem]">
        <div className="w-full flex items-center justify-center mb-8">
          <Logo />
        </div>
        <div className="p-1">
          <DetailInfo entity={entity} />
        </div>
      </div>
    </div>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }} alignItems={"center"}>
        <Grid item xs={1} sm={1} md={2} marginLeft={"20vw"} marginTop={"8vh"} fontSize={150}>
        <BsPersonFill className={iconClasses} />
        </Grid>
        <Grid item xs={2} sm={4} md={4} marginTop={"12vh"}>
          <Typography variant="h4" marginBottom={"2vh"}>{ficoData.pep.properties.name}</Typography>
          <Typography>Aliases: {displayedAliases}</Typography>
          <Typography>Gender: {ficoData.pep.properties.gender}</Typography>
          <Typography>Birth Date: {ficoData.pep.properties.birthDate}</Typography>
          <Typography>Birth Place: {ficoData.pep.properties.birthPlace}</Typography>
          <Typography>Nationality: {ficoData.pep.properties.nationality}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }}>
        <Grid item xs={1} sm={1} md={2} marginLeft={"20vw"} marginTop={"5vh"}>
          <Typography variant="h6">Sanction lists:</Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4} marginTop={"5vh"}>
          <Typography>{sanctionLists[0]},</Typography>
          <Typography>{sanctionLists[1]}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }}>
        <Grid item xs={1} sm={1} md={2} marginLeft={"20vw"} marginTop={"5vh"}>
          <Typography variant="h6">PEP:</Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4} marginTop={"5vh"}>
          <Typography>{sanctionLists[0]},</Typography>
          <Typography>{sanctionLists[1]}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }}>
        <Grid item xs={1} sm={1} md={2} marginLeft={"20vw"} marginTop={"5vh"}>
          <Typography variant="h6">Associated with these organizations:</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 0 }} columns={{ xs: 2, sm: 4, md: 20 }}>
        <Grid item xs={1.2} marginLeft={"20vw"} marginTop={"2vh"}>
          <Button color="info"
                  variant="text"
                  style={{
                    backgroundColor: "rgb(38, 166, 154)",
                  }}>
              Smer SD
            </Button>
        </Grid>
        <Grid item xs={1.5} marginTop={"2vh"}>
          <Button color="info"
                  variant="text"
                  style={{
                    backgroundColor: "rgb(38, 166, 154)",
                  }}>
            Markíza
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }}>
        <Grid item xs={1} sm={1} md={2} marginLeft={"20vw"} marginTop={"5vh"}>
          <Typography variant="h6">Associated with these people:</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 0 }} columns={{ xs: 2, sm: 4, md: 20 }}>
        <Grid item xs={1.8} marginLeft={"20vw"} marginTop={"2vh"}>
          <Button color="info"
                  variant="text"
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(38, 166, 154)",
                  }}>
              Róbert Kaliňák
            </Button>
        </Grid>
        <Grid item xs={1.4} marginTop={"2vh"}>
        <Button color="info"
                  variant="text"
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(38, 166, 154)",
                  }}>
            Ján Kuciak
        </Button>
        </Grid>
        <Grid item xs={2} marginTop={"2vh"}>
          <Button color="info"
                  variant="text"
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(38, 166, 154)",
                  }}>
              Marián Kočner
          </Button>
        </Grid>
      </Grid>
      {/* <Statistics/> */}
    </div>
  );
};