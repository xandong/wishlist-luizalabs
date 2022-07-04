import { Link, useParams } from "react-router-dom";
import {
  CardProductComplete,
  ICardProductComplete,
} from "../components/CardProductComplete";
import { useRequest } from "../components/hooks/useRequest";
import { Main } from "../components/styled-components/Main";

export function Product() {
  const { data } = useRequest<[]>(
    "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e"
  );
  const { sku } = useParams();
  const filterProduct = (e: { sku: string }) => e.sku == sku;

  const product: ICardProductComplete = (data?.filter(filterProduct))![0];
  console.log(product);

  const teste = {
    teste1() {
      console.log("olá");
    },
  };
  return (
    <Main>
      <h2 className="mb-6 text-lg font-extrabold">
        <Link to="/" className="hover:underline hover:text-purple-850">
          Home
        </Link>
        {` > ${product.title}`}
      </h2>
      {/* <section className="w-full flex justify-center">
        <CardProductComplete
          id={product.id}
          sku={product.sku}
          title={product.title}
          description={product.description}
          availableSizes={product.availableSizes}
          style={product.style}
          price={product.price}
          installments={product.installments}
          currencyFormat={product.currencyFormat}
          isFreeShipping={product.isFreeShipping}
        />
      </section> */}
    </Main>
  );
}
