import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Error() {
  return (
    <>
      <Header />
      <div className="flex-1 py-20 flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-semibold uppercase">
          Erro 404 - not found
        </h1>
        <h2 className="text-2xl font-medium">Página não encontrada...</h2>
        <Link
          className="mt-6 font-medium hover:text-purple-850 hover:underline"
          to="/"
        >
          Clique aqui para voltar a Home.
        </Link>
      </div>
    </>
  );
}
