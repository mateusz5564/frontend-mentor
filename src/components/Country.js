import { useParams } from "react-router-dom";

const Country = () => {
  const { name } = useParams();

  return (
    <>
      <h2>Country {name}</h2>
    </>
  );
};

export default Country;
