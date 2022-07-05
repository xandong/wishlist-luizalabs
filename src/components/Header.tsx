require("dotenv").config();
import { Heart, MagnifyingGlass, MapPin, Phone } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useMedia from "use-media";
// import { useRequest } from "../hooks/useGetGeolocation";
import { LiNav } from "./styled-components/LiNav";

export function Header() {
  const [geolocation, setGeolocation] = useState("Cidade: São Paulo");
  const [toggleHamburguer, setToggleHamburguer] = useState(false);
  const [search, setSearch] = useState("");
  const isWideScreen = useMedia({ minWidth: 768 });

  function handleButtonNav() {
    setToggleHamburguer(!toggleHamburguer);
  }

  function getLocation() {
    return;
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(showPosition);
    // }
    // function showPosition(position: {
    //   coords: { latitude: any; longitude: any };
    // }) {
    //   const { data } = use(
    //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.API_KEY_GEOLOCATION}`
    //   );
    //   console.log(data);
    // }
  }

  function handleSearch(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  return (
    <header className="w-full px-8 py-6 bg-purple-850 text-zinc-50 font-medium flex justify-between md:items-baseline items-center gap-4 border-t-4 border-purple-950 relative shadow z-20">
      <Link to="/">
        <h1 className="text-2xl font-extrabold">MagaNets</h1>
      </Link>
      <button
        data-testid="btn-hamburguer"
        onClick={handleButtonNav}
        className="md:hidden w-12 h-12 rounded-full flex flex-col justify-center items-center gap-2 transition-all"
      >
        {toggleHamburguer ? (
          <>
            <div className="w-8 h-1 bg-zinc-50 rotate-45 -mb-3"></div>
            <div className="w-8 h-1 bg-zinc-50 -rotate-45"></div>
          </>
        ) : (
          <>
            <div className="w-8 h-1 bg-zinc-50"></div>
            <div className="w-8 h-1 bg-zinc-50"></div>
            <div className="w-8 h-1 bg-zinc-50"></div>
          </>
        )}
      </button>
      {toggleHamburguer || isWideScreen ? (
        <nav className="max-w-[80%] md:bg-inherit bg-zinc-50 md:text-zinc-50 text-zinc-600 rounded md:p-0 p-2 md:static absolute top-20 right-2 flex md:flex-col flex-col-reverse gap-2 z-10 md:border-none border-2 border-zinc-200 shadow-xl">
          <ul className=" flex md:flex-row flex-col md:justify-between items-center md:opacity-100 md:gap-2 gap-4">
            <LiNav>
              <MapPin size={16} weight="fill" />
              <button onClick={getLocation}>{geolocation}</button>
            </LiNav>
            <LiNav>
              <Phone size={16} weight="fill" />
              <a href="tel:+5508007733838">Central de atendimento</a>
            </LiNav>
            <LiNav>
              <Heart size={16} weight="fill" />
              <Link to="/wishlist">Lista de desejos</Link>
            </LiNav>
          </ul>

          <form
            onSubmit={handleSearch}
            className="md:max-w-full md:w-[600px] md:mt-2 
        flex items-center
      text-zinc-800
        relative group"
          >
            <button className="absolute left-0 p-3 hover:text-purple-850 transition-colors">
              <MagnifyingGlass size={16} weight="bold" />
            </button>
            <input
              className="flex-1 py-2 px-2 pl-12
            bg-zinc-50 rounded
            hover:shadow-inner hover:shadow-done hover:shadow-zinc-200
            focus:rounded-3xl
            focus:placeholder:text-purple-850
            transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Busca"
              type="search"
            />
          </form>
        </nav>
      ) : (
        <></>
      )}
    </header>
  );
}
