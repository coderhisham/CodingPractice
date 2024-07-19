import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  /*
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/coderhisham")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);*/
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <img
        src={data.avatar_url}
        alt="avatar"
        className="rounded-full h-24 w-24 mx-auto"
      />
      <h1 className="text-4xl font-bold mt-4 text-orange-400">{data.name}</h1>
      <p className="text-xl">{data.bio}</p>
      <p className="text-xl mt-4 text-gray-400">{data.followers} followers</p>
      <p className="text-xl text-gray-400">{data.public_repos} Public Repos</p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/coderhisham");
  const data = await response.json();
  return data;
};
