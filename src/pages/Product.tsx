import { Link, useParams } from "react-router-dom";
import { CardProductComplete } from "../components/CardProductComplete";
import { useRequest } from "../components/hooks/useRequest";
import { Main } from "../components/styled-components/Main";

export function Product() {
  const { data } = useRequest<[]>(
    "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e"
  );
  const { sku } = useParams();
  const filterProduct = (e: { sku: string }) => e.sku == sku;

  const product = data?.filter(filterProduct);

  return (
    <Main>
      <h2 className="mb-6 text-lg font-extrabold">
        <Link to="/" className="hover:underline hover:text-purple-850">
          Home
        </Link>
        {` > ${product[0].title}`}
      </h2>
      <section className="w-full flex justify-center">
        <CardProductComplete />
      </section>
    </Main>
  );
}
