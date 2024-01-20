/* eslint-disable react/prop-types */
import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ?" opacity-70 grayscale" :""}`} />
      <div className=" flex grow flex-col">
        <p className=" font-medium">{name}</p>
        <p className="  text-sm capitalize italic text-stone-500">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className=" text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
          <Button type="small">ADD TO CART</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;