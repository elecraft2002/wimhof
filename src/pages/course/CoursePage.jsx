import { PrismicRichText, usePrismicDocumentByID } from "@prismicio/react";
import React from "react";
import { useParams } from "react-router";
import * as prismicH from "@prismicio/helpers";
import "./coursePage.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import topWave from "../../assets/svgs/wave.svg";
import downWave from "../../assets/svgs/wave_down.svg";
import Courses from "../../components/courses/Courses";
import { ReactComponent as LocationSvg } from "../../assets/svgs/location.svg";
import { ReactComponent as FoodSvg } from "../../assets/svgs/food-restaurant-icon.svg";
import { ReactComponent as InfoSvg } from "../../assets/svgs/info.svg";
import samolepka from "../../assets/images/samolepka.png";
import { ReactComponent as BagSvg } from "../../assets/svgs/shopping-bag.svg";
import ButtonClassic from "../../components/button/ButtonClassic";
import { Fade } from "react-reveal";

export default function CoursePage({ language }) {
  const page = usePrismicDocumentByID("YslmPxAAACIAXPpC", {
    lang: language.lang,
  });

  /*     const center = {
            lat: -3.745,
            lng: -38.523
        }; */

  function Map({ center }) {
    const containerStyle = {
      width: "400px",
      height: "400px",
      maxWidth: "100%",
    };
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyBNNnVAI6mPg8SWMszs2ud5anSpDkbW69c",
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
      setMap(null);
    }, []);

    return isLoaded ? (
      <GoogleMap
        //mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        id="google_map"
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    ) : (
      <></>
    );
  }

  const { id } = useParams();
  const course = usePrismicDocumentByID(id);
  const data = course[0]?.data;

  const date =
    data && data.datum_kurzu ? prismicH.asDate(data.datum_kurzu) : null;
  if (course[1].state == "loaded" && page[1].state == "loaded")
    return (
      <main>
        <div
          className="course__page__top"
          style={{
            backgroundImage: `url(${data.uvodni_fotografie_kurzu.url})`,
          }}
        >
          <Fade left delay={700}>
            <div>
              <h1 className="course__page__heading">
                {data.nadpis_kurzu[0]?.text}
              </h1>
              {data.datum_kurzu ? (
                <div className="course__date">
                  <p>
                    {date.getDate()}. {date.getMonth() + 1}.
                  </p>
                  <p>
                    {date.getMinutes() < 10
                      ? date.getHours() + ":" + "0" + date.getMinutes()
                      : date.getHours() + ":" + date.getMinutes()}
                  </p>
                </div>
              ) : null}
            </div>
          </Fade>
        </div>
        <section className="course__page__info">
          <img className="wave" src={topWave} alt="wave" />
          <div className="course__page__container">
            <Fade left delay={200}>
              <div className="info__block">
                <p className="info__heading">
                  <InfoSvg />
                  <h2>{page[0].data.informace[0].text}</h2>
                </p>
                <PrismicRichText field={data.dlouhy_popis_kurzu} />
              </div>
            </Fade>
            <Fade left delay={200}>
              <img src={samolepka} />
            </Fade>
            <Fade left delay={200}>
              <div className="info__block">
                <p className="info__heading">
                  <BagSvg />
                  <h2>{page[0].data.co_s_sebou[0].text}</h2>
                </p>
                <PrismicRichText field={data.co_s_sebou} />
              </div>
            </Fade>
            <Fade left delay={200}>
              <div className="info__block">
                <p className="info__heading">
                  <FoodSvg />
                  <h2>{page[0].data.jidlo[0].text}</h2>
                </p>
                <PrismicRichText field={data.jidlo} />
              </div>
            </Fade>
            <Fade left delay={200}>
              <div className="info__block">
                <p className="info__heading">
                  <LocationSvg />
                  <h2>{page[0].data.lokace[0].text}</h2>
                </p>
                <div>
                  <p>{data.lokace_kurzu}</p>
                  <Map
                    center={{
                      lat: data.presna_lokace_kurzu.latitude || 0,
                      lng: data.presna_lokace_kurzu.longitude || 0,
                    }}
                  />
                </div>
              </div>
            </Fade>
          </div>
          <ButtonClassic
            style={{ margin: "auto" }}
            target="_blank"
            href={data.odkaz_na_formular?.url}
          >
            {page[0].data.objednat_button[0].text}
          </ButtonClassic>
          <img className="wave--bottom" src={downWave} alt="wave" />
        </section>

        <Courses data={page[0].data} language={language} />
      </main>
    );
  return null;
}
