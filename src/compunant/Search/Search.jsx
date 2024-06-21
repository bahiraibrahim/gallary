/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import data from "../../json/data.js";
import { Link } from "react-router-dom";
import CategoryCard from "../category/CategoryCard.jsx";

const SearchBar=()=> {
  <Link to="/search"></Link>;
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <div className="mb-3 col-4 mx-auto text-center d-flex">
            <label className="form-label h4">بــــحــــث</label>
            <input
              type="text"
              className="from-control w-100"
              value={filter}
              onChange={searchText.bind(this)}
            />
          </div>
        </div>
        {dataSearch.map((item) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
              <CategoryCard {...item}/>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SearchBar;
