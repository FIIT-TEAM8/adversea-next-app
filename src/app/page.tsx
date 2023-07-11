import { Button } from '@mui/material';

const HomePage = () => {
  // const handleButtonClick = () => {
  //   redirect('/detail');
  // };

  return (
    <div>
      <h1>Welcome to the First Page</h1>
      <Button variant="contained" href={'/detail'}>
        Go to Second Page
      </Button>
    </div>
  );
};

export default HomePage;