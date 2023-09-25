import React from "react";
import ParallaxScene from "./parallax/ParallaxScene";
import Courses from "../../components/courses/Courses";
import Pilire from "./Pilire";
import Recenze from "./Recenze";
import AboutMe from "./AboutMe";
import {
  usePrismicDocumentsByTag,
} from "@prismicio/react";

export default function Home({ language, url }) {
  let page = usePrismicDocumentsByTag("landing_page", { lang: language.lang });
  // page = page[0]?.results[0]
//   const page1 = usePrismicDocumentByID("YslmPxAAACIAXPpC", {
//     lang: language.lang,
//   });
//   console.log(page);
//   console.log(page1);
  // return "test"
  if (page[1].state === "loaded")
    return (
      <>
        <ParallaxScene data={page[0].results[0].data} url={url} language={language} />
        <Courses data={page[0].results[0].data} language={language} />
        <Pilire data={page[0].results[0].data} />
        <AboutMe data={page[0].results[0].data} />
        <Recenze data={page[0].results[0].data} language={language} />
      </>
    );
  return null;
}
