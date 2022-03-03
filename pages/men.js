import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import ReactPaginate from 'react-paginate';

const Men = ({ productslist }) => {
  const router = useRouter();
  const filters = router.query.filter;
  const category = [...new Set(productslist.map((item) => item.category))];
  const brand = [...new Set(productslist.map((item) => item.brand))];
  const [page,setPage] = useState(0)

  localStorage.setItem("men", JSON.stringify(productslist));

  const isBrandinUrl = brand.filter((i) => filters?.includes(i));
  const isCategoryinUrl = category.filter((i) => filters?.includes(i));

  const filterCategory = isCategoryinUrl?.length
    ? productslist?.filter((i) => filters?.includes(i.category))
    : productslist;
  const filterCategoryBrand = isBrandinUrl?.length
    ? filterCategory?.filter((i) => filters?.includes(i.brand))
    : filterCategory;


  let productsPerPage = 15
  let productsdata = filterCategoryBrand.slice(page,page+productsPerPage)
  const pageCount = Math.ceil(filterCategoryBrand.length/productsPerPage)


  const handlePageClick = (e)=> {
    

    setPage(e.selected * productsPerPage)

  }

  return (
    <div className="grid overflow-x-hidden w-screen  xl:grid-cols-6 max-w-[1500px] mx-auto pb-12 ">
      <div className="col-span-1 pl-4 hidden xl:block mr-4">
        <Filter category={category} brand={brand} />
      </div>

      <div className=" grid gap-y-4 mx-auto grid-cols-2  sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:col-span-5 xl:gap-y-0 ">
        {productsdata.map(({ img, title, price, _id }, index) => (
          <ProductCard key={_id} index={index} id={_id} img={img} price={price} title={title} gender='men' />
        ))}



      <div className=" place-self-center  mt-12 hidden xl:block  col-span-5" >

      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName={`flex space-x-2 text-lg items-center`}
        disabledLinkClassName={`  !cursor-not-allowed hover:`}
        activeLinkClassName={` px-4 py-2   transition-colors duration-200 transform  rounded-md sm:inline   bg-blue-500  text-white`}
        pageLinkClassName={`hidden px-4 py-2  text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline   hover:bg-blue-500  hover:text-white `}
        nextLinkClassName={`px-4 py-2  text-gray-700 transition-colors duration-200 transform bg-white rounded-md  hover:bg-blue-500 hover:text-white `}
        previousLinkClassName={`px-4 py-2  text-gray-700 transition-colors duration-200 transform bg-white rounded-md  hover:bg-blue-500 hover:text-white `}
        />
        </div>
      </div>
        
       
    </div>
  );
};

export default Men;

export async function getServerSideProps(context) {
  console.log(context.pathname)
  const res = await axios.get(process.env.BASE_URL + '/api/products', {
    params: {
      gender: "Men",
    },
  });
  const productslist = await res.data;
  return {
    props: {
      productslist,
    },
  };
}
