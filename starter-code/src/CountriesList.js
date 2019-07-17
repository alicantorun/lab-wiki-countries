import React, { Component } from "react";

export default class CountriesList extends Component {
  render() {
    return (
      <a className="list-group-item list-group-item-action" href="/ABW">
        {this.props.data.cca3}
      </a>
    );
  }
}
