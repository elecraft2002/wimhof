import { usePrismicDocumentsByType } from "@prismicio/react";
import moment from "moment/moment";
import React from "react";
import { Fade } from "react-reveal";
import "./gallery.css";
import GallerySection from "./GallerySection";

export default function Gallery({ language }) {
  let gallery = usePrismicDocumentsByType("galerie", { lang: language.lang });
  // gallery[0]?.results.map((section, i) => {
  //   console.log(section.data.nadpis[0].text);
  // });
  gallery[0]?.results.sort((a, b) => {
    const dateA = a.data.popis[0].text
      .replaceAll(".", "")
      .replace("  ", " ")
      .split(" ")
      .map((e) => {
        return e.length < 2 ? "0" + e : e;
      })
      .reverse()
      .join("");
    const dateB = b.data.popis[0].text
      .replaceAll(".", "")
      .replace("  ", " ")
      .split(" ")
      .map((e) => {
        return e.length < 2 ? "0" + e : e;
      })
      .reverse()
      .join("");
    // console.log(dateA - dateB);
    return dateB - dateA;
  });
  // console.log("------------");
  // gallery[0]?.results.map((section, i) => {
  //   console.log(section.data.nadpis[0].text);
  // });
  return (
    <div className="gallery">
      <div>
        <Fade left>
          <h2 className="gallery__heading">Galerie</h2>
        </Fade>
      </div>
      <div>
        {gallery[1].state == "loaded"
          ? gallery[0]?.results.map((section, i) => {
              // console.log(section.data);

              return <GallerySection key={i} section={section} />;
            })
          : null}
      </div>
    </div>
  );
}
