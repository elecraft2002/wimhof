import {
  useAllPrismicDocumentsByType,
  usePrismicDocumentsByIDs,
  usePrismicDocumentsByType,
} from "@prismicio/react";
import React from "react";
import Course from "../../components/course/Course";
import "./courses.css";
import { Fade } from "react-reveal";
import * as prismicH from "@prismicio/helpers";

export default function Courses({ language, data }) {
  const [courses, state] = useAllPrismicDocumentsByType("kurz", {
    lang: language.lang,
  });
  let courseListSorted = courses;
  // console.log(Date.now())

  if (state.state !== "loaded") return null;
  if (!courses) return null;
  courseListSorted.sort((a, b) => {
    return (
      prismicH.asDate(a.data.datum_kurzu) - prismicH.asDate(b.data.datum_kurzu)
    );
  });
  return (
    <div className="courses">
      <Fade top delay={500}>
        <h2 id="courses" className="courses__headding">
          {data.kurzy[0].text}
        </h2>
      </Fade>
      <ul className="courses__list">
        {courseListSorted.map((course) => {
          //console.log(course)
          if (prismicH.asDate(course.data.datum_kurzu)?.getTime() > Date.now())
            return <Course language={language} key={course.id} course={course}></Course>;
          return null;
        })}
      </ul>
    </div>
  );
}
