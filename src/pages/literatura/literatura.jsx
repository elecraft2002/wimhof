import { PrismicRichText, usePrismicDocumentsByType } from "@prismicio/react";
import React from "react";
import { Fade } from "react-reveal";
import "./literatura.css";
import LiteraturaBlock from "./LiteraturaBlock";
import "../home/recenze.css";

export default function Literatura({ language }) {
  const literatura = usePrismicDocumentsByType("literatura", {
    pageSize: 100,
    lang: language.lang,
  });
  const odkazy = usePrismicDocumentsByType("odkazy", {
    pageSize: 100,
    lang: language.lang,
  });
  const videa = usePrismicDocumentsByType("videa", {
    pageSize: 100,
    lang: language.lang,
  });
  console.log(videa);
  return (
    <div className="gallery">
      <div>
        <Fade left>
          <h2 className="gallery__heading">
            {language.lang !== "en-eu" ? "Literatura" : "Literature"}
          </h2>
        </Fade>
      </div>
      <div className="recenze__list">
        {literatura[1].state === "loaded"
          ? literatura[0].results.map((data, i) => {
              return <LiteraturaBlock key={i} data={data} />;
            })
          : null}
      </div>
      <div>
        <Fade left>
          <h2 className="gallery__heading">
            {language.lang !== "en-eu" ? "Odkazy" : "Links"}
          </h2>
        </Fade>
      </div>
      <div className="recenze__list">
        {odkazy[1].state === "loaded"
          ? odkazy[0].results.map((data, i) => {
              return (
                <a
                  key={i}
                  href={odkazy[0]?.results[0]?.data.odkaz?.url}
                  target={"_blank"}
                >
                  <LiteraturaBlock data={data} />
                </a>
              );
            })
          : null}
      </div>
      <div>
        <Fade left>
          <h2 className="gallery__heading">
            {language.lang !== "en-eu" ? "Videa" : "Videos"}
          </h2>
        </Fade>
      </div>
      <div className="recenze__list">
        {videa[1].state === "loaded"
          ? videa[0].results.map((data, i) => {
              const embed = data.data.video;
              console.log(embed);
              return (
                <div>
                  <PrismicRichText key={i} field={embed} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
