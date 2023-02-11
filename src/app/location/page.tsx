import { useParams } from "react-router-dom";

const Location = () => {
  const { id } = useParams();

  return <>Location {id}</>;
};

export default Location