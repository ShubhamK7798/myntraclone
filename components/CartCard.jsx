import Image from "next/image";
import { useDispatch } from "react-redux";
import { deletecart, updatecart } from "../redux/cartSlice";
import {GiTireIronCross} from 'react-icons/gi'


const CartCard = ({ item }) => {
  const { brand, id, img, price, quantity, psize, title } = item;

  const dispatch = useDispatch();

  const handleQuantity = (e) => {
    const numb = parseInt(e.target.value);
    dispatch(updatecart({ id, quant: numb }));
  };

  return (
    <div className="flex  ">
      <div className="relative w-40 h-50 mr-4">
        <Image src={img} layout="fill" objectFit="contain" className="object-top" />
      </div>

      <div className="flex flex-col space-y-1 w-full ">
        <div className="flex justify-between w-full">
          <h1 className="font-bold">{brand}</h1>
          <i onClick={() => dispatch(deletecart({ id }))} className="cursor-pointer  mr-2 xl:mr-52">
            <GiTireIronCross/>
          </i>
        </div>

        <p>{title}</p>
        <p>Size : {psize}</p>

        <div>
          <label htmlFor="select">Quantity</label>
          <select
            className="cursor-pointer ml-4"
            name="quantity"
            id="select"
            onChange={handleQuantity}
          >
            <option key={id} value={quantity}>
              {quantity}
            </option>
            {[1, 2, 3, 4, 5].map(
              (q) =>
                q === quantity || (
                  <option key={q} value={q}>
                    {q}
                  </option>
                )
            )}
          </select>

          <p className="font-bold mt-2">Rs {price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
