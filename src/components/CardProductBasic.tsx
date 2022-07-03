import { Backspace, Heart, XCircle } from "phosphor-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export interface ICardBasicItem {
  id: number;
  title: string;
  type: "default" | "wishlist";
  sku: number;
  price: number;
  favorite: boolean;
}

export function CardProductBasic({
  title,
  type,
  sku,
  price,
  favorite,
}: ICardBasicItem) {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const navigate = useNavigate();

  function saveFavorites() {
    localStorage.setItem("product", `${sku}`);
  }

  isFavorite
    ? localStorage.setItem(`${sku}`, `${isFavorite}`)
    : localStorage.removeItem(`${sku}`);

  return (
    <li className="relative">
      {type === "default" ? (
        <button
          className="z-10 absolute"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <div className="absolute -top-2 -left-0.5">
            <Backspace size={40} weight="fill" className="-rotate-90" />
          </div>
          <div className="absolute left-2 top-0.5">
            {isFavorite ? (
              <Heart size={20} weight="fill" color="#D00" />
            ) : (
              <Heart size={20} weight="fill" color="#fff" />
            )}
          </div>
        </button>
      ) : (
        <button
          className="z-10 absolute right-1 top-1 rounded-full hover:bg-purple-850 hover:text-zinc-50 transition-colors"
          onClick={() => {
            localStorage.removeItem(`${sku}`);
            setIsFavorite(false);
            navigate("/");
            setTimeout(() => {
              navigate("/wishlist");
            }, 1);
          }}
        >
          <XCircle size={32} />
        </button>
      )}
      <Link
        onClick={saveFavorites}
        to={`products/${sku}`}
        className="w-48 min-h-[18rem] p-2 mb-4
        flex flex-col items-center gap-4
        font-semibold
      bg-zinc-50 rounded 
        border border-zinc-300 shadow-sm hover:shadow-md
        relative transition-all"
      >
        <figure>
          <img src="https://github.com/xandong.png" className="w-48 h-40" />
          <figcaption className="px-1 mt-2 text-center">{title}</figcaption>
        </figure>
        <span className="text-yellow-400">R$ {price}</span>
      </Link>
    </li>
  );
}
