import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";

const Women = ({ productsdataa }) => {
  const router = useRouter();

  const [productsdata, setProductsdata] = useState(productsdataa);

  const params = router.query;

  const category = [...new Set(productsdata.map((item) => item.category))];
  const brand = [...new Set(productsdata.map((item) => item.brand))];

  return (
    <div className="grid grid-cols-6 max-w-[1500px] mx-auto pt-8 px-8">
      <div className="col-span-1 ">
        <Filter category={category} brand={brand} />
      </div>
      <div className="col-span-5 grid grid-cols-5 ">
        {productsdata.map(({ img, title, price, _id }) => (
          <ProductCard key={_id} id={_id} img={img} price={price} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Women;

export async function getStaticProps(context) {
  const res = await axios.get("http://localhost:3000/api/products", {
    params: {
      gender: "Women",
    },
  });
  const productsdataa = await res.data;
  return {
    props: {
      productsdataa,
    },
  };
}
