import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";


const ImagesContainer = ({ lists, title }) => {
  const router = useRouter()
  return (
    <div className="grid lg:grid-cols-5  cursor-pointer mt-4  mx-8 gap-x-8 gap-y-0 lg:gap-y-0">
      <h1 className="lg:col-span-5 pl-4 pt-4 font-bold text-2xl uppercase">{title}</h1>

      <div className="grid grid-flow-col  lg:col-span-5 lg:grid-cols-5 mt-4 lg:-mt-1 gap-x-4 overflow-x-auto">
        {lists.map((item) => (
          <div key={item} onClick={()=>router.push('/men')} className="relative h-72 lg:h-[30rem] w-[40vw] sm:w-[30vw] lg:w-auto ">
            <Image src={item}  layout="fill" objectFit="contain"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesContainer;
