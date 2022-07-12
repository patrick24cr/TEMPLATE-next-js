// import { useEffect, useState } from 'react';
// import counterData from '../api/counterData';
import Counter from '../components/Counter';
import data from '../utils/data/data.json';

function Home() {
  // const [value, setValue] = useState([]);

  // useEffect(() => {
  //   counterData.then(setValue);
  // }, []);

  return (
    <>
      {data.map(({ title, id }) => (
        <Counter counterTitle={title} key={id} />
      ))}
    </>
  );
}

export default Home;
