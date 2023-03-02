import React from "react";
import { Headerr } from "./styleHeader";

function Header({ lanches, setLanchesFiltered, setLanchePesquisado }) {
  function dadosImput(event) {
    setLanchePesquisado(event.target.value);
    setLanchesFiltered(
      lanches.filter(
        (item) =>
          item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.category.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  function naoCarregarAPagina(event) {
    event.preventDefault();
  }
  return (
    <Headerr>
      <h1>
        Kiren Burguers
      </h1>

      <form>
        <input type="text" placeholder="Search Here" onChange={dadosImput} />
        <button onClick={(e) => naoCarregarAPagina(e)}>Search</button>
      </form>
    </Headerr>
  );
}

export default Header;