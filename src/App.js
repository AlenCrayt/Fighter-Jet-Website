//React App made by Agustin Santisteban
//importing libraries
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import random from "random";
//importing custom components and arrays with which the webpage is assembled
import FighterCarousel from "./carousel.jsx";
import FighterCategories from "./categories.jsx";
import CardComparer from "./stat_comparison.jsx";
import JetArticle from "./article.jsx";
import MainArticle from "./main_article.jsx";
import F_L from "./fighter_list.jsx";

//Create an empty array that will hold the index of the planes in the stat cards selected by the user
let card_collection = [];

export default function App() {
  //Hooks are declared
  const [click, IsClicked] = useState(false);
  const [showStats, SetshowStats] = useState(false);
  const [index, SetIndex] = useState(1);
  const [generationShown, SetGen] = useState(0);

  //Functions which process the onclick events when they happen on webpage elements
  const selected_id = (id_received) => {
    //If the webpage is currently showing stat cards a click on a stat card will not show the main article of a plane but instead add it's index to the card_collection array which will in turn "add" it to the stat comparer
    if (showStats === true) {
      IsClicked(false);
      card_collection.push(id_received - 1);
    } else {
      IsClicked(true);
    }
    SetIndex(id_received);
  }
  const gen_received = (gen_now) => {
    SetGen(gen_now);
  }
  const stats_or_articles = (display_selected) => {
    //If the user clicks on the article category when he was on the stat card webpage the card_collection array will be emptied
    if (display_selected === false) {
      card_collection = [];
    }
    SetshowStats(display_selected);
  }

  //Main webpage JSX
  return (
    <>
      <header className="container text-center">
        <h1>Fighters</h1>
        <h4>A webpage dedicated to showcasing fighter jets</h4>
      </header>
      <main className="container text-center" id="mainSection">
        <FighterCarousel carousel_assets={F_L[random.int(0, F_L.length - 1)]} />
        <FighterCategories clicked_gen={gen_received} clicked_display={stats_or_articles}/>
        {showStats && (<CardComparer cards_list={card_collection} plane_list={F_L}/>)}
        <div className="row">
          <JetArticle plane_list={F_L} current_plane={selected_id} filter_for={generationShown} show_cards={showStats}/>
        </div>
        <div className="main_article">
          {click && (<div className="row justify-content-end"><button className="col-sm-1" id="close_button" onClick={() => IsClicked(false)}>X</button></div>)}
          {click && <MainArticle plane_selected={F_L[index - 1]} />}
        </div>
      </main>
      <footer className="container text-center">
        <p>Fighter jets website. All rights reserved</p>
      </footer>
    </>
  );
}