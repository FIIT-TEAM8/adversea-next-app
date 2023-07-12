import { Typography, Grid, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ficoData from './fico.json';

const Detail = () => {

  const aliases = ficoData.pep.properties.alias.slice(0, 5);
  const displayedAliases = aliases.join(', ');

  const sanctionLists = [
    "European Union Consolidated Financial Sanction List",
    "UK Sanctions List"
  ]

  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }} alignItems={"center"}>
        <Grid item xs={1} sm={1} md={2} marginLeft={"20vw"} marginTop={"8vh"} fontSize={150}>
          <PersonIcon fontSize="inherit"/>
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
    </div>
  );
};

export default Detail;