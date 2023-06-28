import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const NewsPage = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <h1 className="text-6xl mb-2">This is the NewsPage</h1>
      <ul className="list-disc grid gap-4 text-lg">
        {data.map((data) => (
          <li className="mx-6 underline hover:text-blue-400">
            <NavLink
              className={({ isPending }) =>
                `${isPending ? "bg-yellow-200" : ""}`
              }
              to={`/news/${data.id}`}
              key={data.id}
            >
              {data.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <a href="/" className="text-blue-500">
        Back
      </a>
    </>
  );
};

export default NewsPage;
