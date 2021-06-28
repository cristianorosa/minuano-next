import Header from "../components/layout/Header"
import Nav from "../components/layout/Nav";
import Dashboard from "./dashboard";

import { useState } from "react";

export default function Home() {
  const [isNavOpen, setNavOpen] = useState(false);

  function toogle_nav() {
    isNavOpen ? setNavOpen(false) : setNavOpen(true);    
  }

  return (
    <>
      <Header onClick={() => toogle_nav()}/>
      <div className={isNavOpen ? "container container-open" : "container"}>
        <Nav isNavOpen={isNavOpen}/>
        <Dashboard isNavOpen={isNavOpen}/>
      </div>
      
    </>
  )
}