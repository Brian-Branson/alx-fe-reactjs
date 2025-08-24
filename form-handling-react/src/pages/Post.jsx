import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  return (
    <>
      <h1>Post #{id}</h1>
      <p>This page demonstrates dynamic routing with a variable ":id".</p>
    </>
  );
}
