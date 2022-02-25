import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import AddtoCart from "../components/AddtoCart";
import { addtocart } from "../redux/cartSlice";


const ProductPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [productSize,setProductSize] = useState()
  const [showBag,setShowBag] = useState(false)

  const getfromlocal = JSON.parse(localStorage.getItem("men"));

  const params = router.query.productPage;

  const getProduct = getfromlocal[params];

  const { title, _id, size, brand, description, price,img } = getProduct;

  const handleCart = () => {


    const payload = {
      title,
      brand,
      id:_id,
      price,
      img,
      psize:productSize,
      quantity:1
    }
    dispatch(addtocart(payload));
    setShowBag(true)
  };

  return (
    <main className=" max-w-[1500px] mx-auto grid grid-cols-3 p-4 gap-x-8">
      {/* Images */}
      <div className="grid col-span-2 grid-cols-3 gap-2 ">
        {getProduct?.images.map(
          (i, index) =>
            i.src &&
            i.view !== "default" && (
              <img
                key={index}
                src={i.src}
                alt="product images"
                className="contain cursor-pointer hover:scale-95 transition-all "
              />
            )
        )}
      </div>

      {/* Details */}

      <div className="flex flex-col space-y-4">
        <h1 className="font-bold uppercase text-xl ">{brand}</h1>
        <p className="-mt-8">{title}</p>
        <hr />
        <h1 className="font-semibold text-lg">Rs {price}</h1>
        <div>
          <p className="uppercase font-semibold mb-4">Select Size</p>
          <div className="flex space-x-4">
            {size[0].split(",").map((i) => (
              <span
                onClick={()=>setProductSize(i)}
                className="rounded-full flex justify-center cursor-pointer hover:border-red-500 items-center w-12 h-12 border-2"
                key={i}
              >
                {i}
              </span>
            ))}
          </div>
        </div>
        <br />

        

         { showBag ? <Button name={'Go to Bag'} onClick={()=>router.push('/cart')}/> : <AddtoCart onClick={handleCart} />}
      </div>
    </main>
  );
};

export default ProductPage;
