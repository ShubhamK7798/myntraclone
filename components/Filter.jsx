import { useRouter } from "next/router";
import React, { useState } from "react";

let queryParams = [];
const Filter = ({ category, brand }) => {
  const router = useRouter();

  const [showBrandModal,setShowBrandModal] = useState(false)

  const handleClear = ()=> {
    queryParams = []
    router.push({
      query: { filter: queryParams },
    });
    }

  const handlecheckbox = (e) => {
    const { name, checked } = e.target;

    checked && queryParams.push(name);
    if (!checked) {
      const newparams = queryParams.filter((i) => i !== name);
      queryParams = newparams;
    }

    router.push({
      query: { filter: queryParams },
    });
  };

  return (
    <div className="">
      <div className="flex justify-between">
      <h1 className="font-semibold mb-4 text-lg">Filter</h1>
      <i onClick={handleClear} className="cursor-pointer">Clear All</i>
      </div>

      <div>
        <h1 className="mb-4 font-semibold">Category</h1>
        {category.map((i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                id={i}
                name={i}
                onChange={handlecheckbox}
                data-brand="Category"
              />
              <label htmlFor={i}>
                <span className="font-serif ml-8">{i} </span>
              </label>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <div className="relative">
        <h1 className="mb-4 font-semibold ">Brand</h1>
        {brand.slice(0,10).map((i) => {
          return (
            <div key={i}>
              <input type="checkbox" id={i} name={i} onChange={handlecheckbox}  data-brand="Brand" />
              <label htmlFor={i}>
                <span className="font-serif ml-8">{i} </span>
              </label>
            </div>
          );
        })}

        {brand.length > 10 && <div className="">
        <button className="mt-4 text-red-400"  onClick={()=>setShowBrandModal(true)}> + More Brands</button>

        <div className={showBrandModal ?  `  flex pr-4 pt-4 justify-between absolute h-fit w-fit z-50 top-0 bg-white` : `hidden`}>
          <div className="">

        {brand.slice(10).map((i) => {
          return (
            <div key={i}>
              <input type="checkbox" id={i} name={i} onChange={handlecheckbox} data-brand="Brand" />
              <label htmlFor={i}>
                <span className="font-serif ml-8">{i} </span>
              </label>
            </div>
          );
        })}
        </div>
          <i className="cursor-pointer" onClick={()=>setShowBrandModal(false)  }>X</i>

        </div>

        </div>}
      </div>
    </div>
  );
};

export default Filter;
