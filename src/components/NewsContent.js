import { useLoaderData } from "react-router-dom";

const NewsContent = () => {
  const { id, title, body } = useLoaderData();

  return (
    <>
      <h1>This is News (ID: {id})</h1>
      <h2 className="font-bold">{title}</h2>
      <p className="text-lg">{body}</p>
      <a href="/news" className="text-blue-500">
        Back
      </a>
    </>
  );
};

export default NewsContent;
