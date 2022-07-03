import { Link } from "react-router-dom";
import { useRequest } from "../components/hooks/useRequest";
import { Main } from "../components/styled-components/Main";
import { CardProductBasic } from "../components/CardProductBasic";

export function Wishlist() {
  const { data } = useRequest<[]>(
    "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e"
  );

  return (
    <Main>
      <h2 className="mb-6 text-lg font-extrabold">
        <Link to="/" className="hover:underline hover:text-purple-850">
          Home
        </Link>
        {" > Lista de desejos"}
      </h2>
      <section className="w-full flex justify-start">
        <ul className="flex flex-wrap justify-center gap-4">
          {data?.map(
            (el: {
              id: number;
              sku: number;
              title: string;
              price: number;
              favorite: boolean;
            }) =>
              localStorage.getItem(`${el.sku}`) && (
                <CardProductBasic
                  key={el.id}
                  id={el.id}
                  type="wishlist"
                  sku={el.sku}
                  title={el.title}
                  price={el.price}
                  favorite={localStorage.getItem(`${el.sku}`) === "true"}
                />
              )
          )}
        </ul>
      </section>
    </Main>
  );
}
