import { useParams } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  console.log(id);

  return (
    <p>{id}</p>
  );
}