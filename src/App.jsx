import React, { useEffect, useState } from "react";
import Navbar from "./componentes/Nabvar";
import Hero from "./componentes/Hero";
import Feature from "./componentes/Feature";
import Workflow from "./componentes/Workflow";
import History from "./componentes/History";
import Services from "./componentes/Services";
import About from "./componentes/About"; 
import Testimonials from "./componentes/Testimonials";
import Videos from "./componentes/Videos";
import { fetchComents } from "./services/comentsService";
import { ScaleLoader } from "react-spinners";
import { phrasesMusic } from "./constants";
import Footer from "./componentes/Footer";

const App = () => {
  /* Get Lastest Videos FB and Surverys (Response) */
  const [videosLink, setVideosLink] = useState([]);
  const [surveys, setSurvey] = useState([]);
  const [loading, setLoading] = useState(false);
  const [phrase, setPhrase] = useState(null);


  const loadSurvey = async () => {
    try {
      const survey = await fetchComents();
      setSurvey(survey);
    
    
    } catch (error) {
      console.error("Error fetching surveys:", error);
    }
  };

  const getPhrase = () => {
    const max = phrasesMusic.length;
    const random = Math.floor(Math.random() * max);
    const phrase = phrasesMusic[random];
    setPhrase(phrase);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([loadSurvey()]);
      } catch (err) {
        setError("Ocurrió un error al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    getPhrase();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-[90%] mx-auto px-6">
        <div id="Hero">
          <Hero />
        </div>
        <div id="About">
          <About />
        </div>
        <div id="Feature">
          <Feature />
        </div>
        <div id="History">
          <History />
        </div>
        <div id="Workflow">
          <Workflow />
        </div>
        <div id="Services">
          <Services />
        </div>
        <div id="Videos">
          <Videos />
        </div>
      </div>
      {/* Spinner */}
      {loading ? (
        <div className="max-w-[90%] h-[300px] mx-auto flex flex-col items-center justify-center">
          <ScaleLoader color="#f59e0b" size={50} />
          {phrase ? (
            <span className="text-lg text-neutral-400"> {phrase}</span>
          ) : (
            <span className="text-lg text-neutral-400"></span>
          )}
        </div>
      ) : (
        /* Videos And Testimonials */
        <>
          <div className="max-w-[90%] mx-auto pt-20 px-6">
            <div id="Testimonials">
              <Testimonials surveys={surveys} />
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default App;
