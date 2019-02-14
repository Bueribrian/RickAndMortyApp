import React, { Component } from "react";

class CardUi extends Component {
  render() {
    let {
      name,
      id,
      gender,
      status,
      type,
      image,
      created,
      species,
      dimension,
      episode,
      air_date
    } = this.props.info;
    
    function genderTemplate() {
      if (gender === "" || null) {
        return null;
      } else if (gender === "Male") {
        return <i style={{ color: "lightblue" }} className="fas fa-mars" />;
      } else if (gender === "Female") {
        return <i style={{ color: "pink" }} className="fas fa-venus" />;
      }
    }

    function liveTemplate() {
      if (status == null) {
        return null;
      } else if (status === "Alive") {
        return (
          <span>
            Status : {status}{" "}
            <i style={{ color: "red" }} className="fas fa-heart" />
          </span>
        );
      } else if (status === "Dead") {
        return (
          <span>
            Status : {status} <i className="fas fa-skull" />
          </span>
        );
      } else {
        return (
          <span>
            Status : {status} <i className="fas fa-question" />
          </span>
        );
      }
    }

    return (
      <div className="card">
        <div className="card-header">
          <p>
            Id{" "}
            <span style={{ color: "orange", fontWeight: "bolder" }}>{id}</span>
          </p>
          <h2>{name}</h2>
          <h2>{genderTemplate()}</h2>
        </div>

        <div className="card-image">
          <img src={image} alt="" />
        </div>

        <div className="card-body">
          <p>{liveTemplate()}</p>
          {species ? <p>Species: {species}</p> : null}
          {type ? <p>Type: {type}</p> : null}
          {dimension ? <p>dimension: {dimension}</p> : null}
          {episode ? (
            <a href={episode} style={{ fontSize: "1rem" }}>
              episode
            </a>
          ) : null}
          {air_date ? <p>Air date: {air_date}</p> : null}
        </div>

        <div className="card-footer">
          <p>
            <span className="span-bolder">Date </span>
            {created[0]}
            {created[1]}
            {created[2]}
            {created[3]}
          </p>
        </div>
      </div>
    );
  }
}

export default CardUi;
