import React, { Component } from "react";
import AccordionItem from "./AccordionItem";
import "./card.scss";
class Card extends Component {
  state = {
    first: this.props.first,
    phone: this.props.phone,
    full: this.props.full,
    email: this.props.email,
    path: this.props.path,
  };
  render() {
    return (
      <div className="contents d-flex flex-column">
        <div className="book">
          <div className="accordion">
            <AccordionItem
              full={this.state.full}
              title={this.state.first}
              phone={this.state.phone}
              email={this.state.email}
              path={this.state.path}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
