import { useParams } from "react-router-dom";
import NewPost from "./NewPost";

export default function EditPost() {
  const { id } = useParams();
  console.log(id);

  return (
    <NewPost initialText={id} />
  );
}