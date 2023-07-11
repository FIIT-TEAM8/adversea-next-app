import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ficoData from './fico.json';

const Detail = () => {

  const aliases = ficoData.pep.properties.alias.slice(0, 5);
  const displayedAliases = aliases.join(', ');

  return (
    <div>
      <PersonIcon />
      <Typography variant="h4">{ficoData.pep.properties.name}</Typography>
      <Typography>Aliases: {displayedAliases}</Typography>
      <Typography>Gender: {ficoData.pep.properties.gender}</Typography>
      <Typography>Birth Date: {ficoData.pep.properties.birthDate}</Typography>
      <Typography>Birth Place: {ficoData.pep.properties.birthPlace}</Typography>
      <Typography>Nationality: {ficoData.pep.properties.nationality}</Typography>
    </div>
  );
};

export default Detail;