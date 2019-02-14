import React, { Component } from "react";

import Navbar from "./components/navbar";
import Banner from "./components/banner";
import CardUi from "./components/card";
import Panel from "./components/panel";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      apiSectionUrl: {
        characters: "https://rickandmortyapi.com/api/character",
        locations: "https://rickandmortyapi.com/api/location",
        episodes: "https://rickandmortyapi.com/api/episode"
      },
      content: []
    };
    this.getInfoApi = this.getInfoApi.bind(this);
    this.testFunction = this.testFunction.bind(this);
  }
  getInfoApi(url) {
    fetch(url)
      .then(data => data.json())
      .then(dataApi => {
        this.setState(prevState => {
          return {
            isLoading: true,
            content: dataApi.results,
            info: dataApi.info
          };
        });
      });
  }

  componentDidMount() {
    this.getInfoApi(this.state.apiSectionUrl.characters);
  }

  testFunction() {
    console.log("Anda?");
  }

  render() {
    let cards =
      Array.isArray(this.state.content) &&
      this.state.content.map((card, index) => (
        <CardUi key={index} info={card} />
      ));
    let info = [];
    for (var key in this.state.info) {
      info.push(this.state.info[key]);
    }
    
    return (
      <div>
        <header className="header">
          <Navbar />
          <Banner />
        </header>
        <main className="main-app">
          <Panel
            className="panel-app"
            handleInfo={this.getInfoApi}
            sections={this.state.apiSectionUrl}
          />
          <div className="body-app">
            {this.state.isLoading ? null : "CARGANDO..."}

            <p>
              Numero de resultados{" "}
              <span style={{ fontWeight: "bolder" }}>{info[0]}</span> - Paginas{" "}
              <span style={{ fontWeight: "bolder" }}>{info[1]}</span>
            </p>

            <div className="cards-container">{cards}</div>
            <div className="footer-app">
              {info[3] === "" ? null : (
                <button
                  onClick={e => {
                    this.getInfoApi(e.target.value);
                  }}
                  value={info[3]}
                >
                  <i className="fas fa-arrow-left" />
                </button>
              )}
              <button
                onClick={e => {
                  this.getInfoApi(e.target.value);
                }}
                value={info[2]}
              >
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
