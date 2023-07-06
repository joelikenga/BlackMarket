import React, { useContext, useEffect, useState } from "react";
import {
  Apple,
  ArrowRight,
  ChevronFoward,
  Desktop,
  Gamepad,
  Gym,
  Hairdryer,
  HomeAndOffice,
  More,
  Phone,
  Shirt,
  Television
} from "../../../public/svgIcons";
import Link from "next/link";
import { ProductContext } from "@/app/shop/ProductContext";
import {url} from "@/app/myApi";

export const SearchAndCategory = () => {
  const categories = [
    { name: "Groceries", icon: <Apple />, link: "../" },
    { name: "Health & Beauty", icon: <Hairdryer />, link: "../" },
    { name: "Home & office", icon: <HomeAndOffice />, link: "../" },
    { name: "phones & tablets", icon: <Phone />, link: "../" },
    { name: "Computing", icon: <Desktop />, link: "../" },
    { name: "Electronics", icon: <Television />, link: "../" },
    { name: "gaming", icon: <Gamepad />, link: "../" },
    { name: "fashion", icon: <Shirt />, link: "../" },
    { name: "sports", icon: <Gym />, link: "../" },
    { name: "other categories", icon: <More />, link: "../" },
  ];

  const [data, setData] = useState([]);
  const { filteredData, setFilteredData } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setFilteredData(data);
    })
    .catch((error) => {
      console.log(error);
      // setError(error); // Set the error state
    });
}, []);

const handleChange = (e) => {
  setSearchTerm(e.target.value);
};

useEffect(() => {
  if (!data) {
    return; // Return early if data is not available yet
  }

  if (searchTerm === "") {
    setFilteredData(data);

  } else {
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredResults);
  }
}, [searchTerm,data]);

  return (
    <main className="flex justify-between">
      <div className="text-my_dark_2 static w-[20rem]">
        {/* Search query section */}
        <form className="rounded border-my_dark border-2 m-2 relative flex items-center">
          <input
            className="outline-0 border-0 w-full h-fit rounded p-1 font-semibold"
            autoFocus
            placeholder="search..."
            type="text"
            value={searchTerm}
            onChange={handleChange}
          />
          <div className="cursor-pointer m-[0.1rem] bg-my_dark_2 text-my_yellow p-[0.3rem] text-xl rounded">
            <ArrowRight />
          </div>
        </form>

        {/* Categories section */}
        <div className="m-4">
          {categories.map((category, index) => (
            <Link
              href={category.link}
              key={index}
              className="flex justify-between border-my_yellow bg-my_dark p-2 my-1.5 rounded text-xl hover:ml-2 hover:border-l-8 hover:duration-200 hover:ease-out"
            >
              <div className="inline-flex gap-2 items-center capitalize">
                <i>{category.icon}</i>
                <p className="text-sm mt-1 font-bold">{category.name}</p>
              </div>
              <i>
                <ChevronFoward />
              </i>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
};
