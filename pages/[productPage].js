import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import AddtoCart from "../components/AddtoCart";
import { addtocart } from "../redux/cartSlice";

const ProductPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [productSize, setProductSize] = useState();
  const [sizActive, setSizeActive] = useState({
    sizeClicked: "",
    SelectSize: true,
  });

  const [showBag, setShowBag] = useState(false);
  const searchparams = window.location.href.split('/').slice(-1)[0].split('?')

  const getfromlocal = JSON.parse(localStorage.getItem(router.query.gender || searchparams[1].split('=')[1]));
  const params = router.query.productPage || searchparams[0];


  const getProduct = getfromlocal[params];

  const { title, _id, size, brand, description, price, img } = getProduct;

  const handleCart = () => {
    if (!sizActive.sizeClicked) return setSizeActive((prev) => ({ ...prev, SelectSize: false }));
    setSizeActive((prev) => ({ ...prev, SelectSize: true }));

    const payload = {
      title,
      brand,
      id: _id,
      price,
      img,
      psize: productSize,
      quantity: 1,
    };
    dispatch(addtocart(payload));
    setShowBag(true);
  };

  const handleSize = (i) => {
    setProductSize(i);
    setSizeActive({ sizeClicked: i, SelectSize: true });
  };

  return (
    <main className=" max-w-[1500px] mx-auto grid  grid-cols-3 p-4 gap-x-8">
      {/* Images */}
      <div className="grid col-span-3  xl:col-span-2 grid-cols-3 gap-2 ">
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

      <div className="xl:flex xl:flex-col space-y-4 col-span-3 xl:col-span-1 mt-8 xl:mt-0">
        <h1 className="font-bold uppercase text-xl ">{brand}</h1>
        <p className="-mt-8">{title}</p>
        <hr />
        <h1 className="font-semibold text-lg">Rs {price}</h1>
        <div>
          <p className="uppercase font-semibold mb-4">Select Size</p>
          <p
            className={`${
              !sizActive.SelectSize ? `block` : `hidden`
            } animate-bounce mb-4 text-red-400`}
          >
            Please select a Size
          </p>

          <div className="flex gap-4 flex-wrap ">
            {size[0].split(",").map((i) => (
              <span
                onClick={() => handleSize(i)}
                className={` ${
                  sizActive.sizeClicked === i && `text-red-400 border-red-500`
                }  rounded-full flex-shrink-0  flex justify-center cursor-pointer hover:border-red-500 items-center w-12 h-12 border-2`}
                key={i}
              >
                {i}
              </span>
            ))}
          </div>
        </div>
        <br />

        {showBag ? (
          <Button name={"Go to Bag"} onClick={() => router.push("/cart")} />
        ) : (
          <AddtoCart onClick={handleCart} />
        )}
      </div>
    </main>
  );
};

export default ProductPage;
