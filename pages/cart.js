import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import Button from "../components/Button";
import Image from "next/image";


const Cart = () => {
  const cartselect = useSelector((state) => state.cart.cartItems);
  const totalmrp = cartselect.reduce((a, i) => a + i.quantity * i.price, 0);

  return (
    <main className="grid  grid-cols-3  xl:grid-cols-5   max-w-[1500px] mx-auto  px-4 mt-12">
      {/* left */}
      <div className="col-span-3 grid gap-y-6 relative ">
        {cartselect.length ? (
          cartselect.map((i) => <CartCard key={i.id} item={i} />)
        ) : (
          <div className=" w-full  h-60 flex flex-col items-center">
            <Image src='/cart.svg' layout="fill" objectFit="contain" className="object-top  " />
            <p className="mt-80  text-xl font-semibold  ">Please add Items in Cart</p>
          </div>
        )}
      </div>

      {/* right */}
      <div className="col-span-3 xl:col-span-2 " >
        <div className="flex flex-col space-y-2 mb-6 mt-36 xl:mt-0 ">
          <h1 className="mb-4">Price Details</h1>
          <div className="flex justify-between ">
            <p>Total Mrp</p>
            <p>Rs {totalmrp}</p>
          </div>
          <div className="flex justify-between border-b-2">
            <p>Discount Mrp</p>
            <p>Rs {Math.round(totalmrp * 0.3)}</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total Amount</p>
            <p>Rs {totalmrp - Math.round(totalmrp * 0.3)}</p>
          </div>
        </div>

        <Button name={"Place Order"} />
      </div>
    </main>
  );
};

export default Cart;
