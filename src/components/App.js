import React from "react";
import Header from "./global/Header";
import Beers from "./Beers/Beers";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Beers />
      </div>
    );
  }
}
