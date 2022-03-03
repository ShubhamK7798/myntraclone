import axios from "axios";
import Image from "next/image";
import React, { useRef } from "react";
import { useState } from "react";
import Button from "../../components/Button";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import storage from "../../database/firebase";
import { useEffect } from "react";
import Link from "next/link";

const Admin = () => {
  const fileRef = useRef();
  const initialData = {
    title: "",
    category: "",
    price: "",
    size: [],
    brand: "",
    description: "",
  };
  const [formdata, setFormdata] = useState(initialData);

  const [imageUrl, setImageUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const names = ["title", "category", "price", "size", "brand", "description"];

  const date = new Date()
  const stringdate = date.toString()


  useEffect(() => {
    const upload = async () => {
      if (!imageUrl) return;
      const storageref = ref(storage, `products/${stringdate}${formdata.title}`);
      const uploadres = await uploadString(storageref, imageUrl, "data_url");
      uploadres &&
        getDownloadURL(storageref).then(async (res) => {
          setFormdata((prev) => ({ ...prev, img: res }));
        });
    };
    upload();
  }, [imageUrl,formdata.title,stringdate]);

  const handleformdata = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submitform = async (e) => {
    e.preventDefault();

    try {
      const postdata = await axios.post("/api/products", formdata);
      const res = await postdata;
      // setIsLoading(false);
      alert("form submited");
      setImageUrl("");
      setFormdata(initialData);
      e.target.reset();
    } catch (error) {
      alert(error);
    }

    
  };

  const uploadimage = async (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = async (e) => setImageUrl(e.target.result);
  };

  return (
    <main className="h-[90vh] bg-gray-50 flex px-12  ">

        <div>
           <Link href='/admin/users'   >
               <a>Users</a>
           </Link>
        </div>
        <div className="flex flex-1 flex-col space-y-4 max-w-5xl mx-auto items-center relative">

        
      {/* loading */}

      {isLoading && (
        <div className="flex justify-center h-full w-full items-center bg-black/50 absolute z-40">
          loading...
        </div>
      )}

      <h1 className="font-bold capitalize m-2 mt-4">Upload to Database</h1>
      <form method="POST" onSubmit={submitform} className="flex justify-around w-full">
        {/* left */}
        <div className="flex flex-col w-1/5 justify-around">
          <div className="relative h-80 w-full border flex  justify-center items-center">
            <input type="file" name="file" hidden onChange={uploadimage} ref={fileRef} />

            {imageUrl ? (
              <Image src={imageUrl} objectFit="contain" layout="fill" />
            ) : (
              <Button name="Upload Image" type="button" onClick={() => fileRef.current.click()} />
            )}
          </div>
          {/* {formdata.img ? <Button name="Submit" type="submit" /> : <h1>Please select Image</h1>} */}
          <Button name="Submit" type="submit" /> 
        </div>

        {/* right */}
        <div className="flex flex-col space-y-4 w-3/5">
          {names.map((item, index) => (
            <React.Fragment key={index}>
              <label className="font-semibold uppercase" htmlFor={item}>
                {item}
              </label>
              <input
                type="text"
                placeholder={item}
                name={item}
                id={item}
                value={formdata.item}
                onChange={handleformdata}
                className="p-2 placeholder:capitalize "
              />
            </React.Fragment>
          ))}
        </div>
      </form>
      </div>
    </main>
  );
};

export default Admin;
