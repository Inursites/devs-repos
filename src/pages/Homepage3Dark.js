import React from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import Herosection from "../components/sections/Herosection";
import OpenSourceRepositories from "../components/sections/OpenSourceRepositories";
import { Helmet } from "react-helmet";

function Homepage3() {
  document.body.classList.add("dark");
  return (
    <>
      <Helmet>
        <title>Inursites. Web3 devs labs. Open Source.</title>
        <meta name="description" content="nursites. Software engineers. Web3 devs lab. Joins us." />
      </Helmet>
      <Header3 logoSource="/images/Inursites.png" />
      <main className="content-3">
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-works">
          <OpenSourceRepositories />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
    </>
  );
}

export default Homepage3;
