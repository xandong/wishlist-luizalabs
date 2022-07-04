import {
  CardProductBasic,
  ICardBasicItem,
} from "../components/CardProductBasic";
import { Header } from "../components/Header";
import { useRequest } from "../hooks/useRequest";
import { Main } from "../components/styled-components/Main";

export function Home() {
  const { data } = useRequest<[]>(
    "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e"
  );
  return (
    <>
      <Header />
      <Main>
        <h2 className="mb-6 text-lg font-extrabold">Home</h2>

        <section className="w-full flex justify-center">
          <ul className="flex flex-wrap justify-center gap-4">
            {data?.map((product: ICardBasicItem) => (
              <CardProductBasic
                key={product.id}
                id={product.id}
                type="default"
                sku={product.sku}
                title={product.title}
                price={product.price}
                favorite={localStorage.getItem(`${product.sku}`) ? true : false}
              />
            ))}
          </ul>
        </section>
      </Main>
    </>
  );
}
