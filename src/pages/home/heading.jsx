import React from "react";
import "./heading.css";

export default function heading({ language }) {
  return language.lang === "cs-cz" ? (
    <h1 className="hedding">
      Instruktorka <span className="hedding__highlited">Wim Hof Metody</span>
      <br />
      Zuzana Ježková
    </h1>
  ) : (
    <h1 className="hedding">
      Zuzana Jezkova <br />
      <span className="hedding__highlited">Wim Hof Method</span>
      <br />
      Instructor
    </h1>
  );
}
