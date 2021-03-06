import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return monsters.map((monster) => {
      return (
        <div key={monster.id}>
          <h1>{monster.name} + "edited1"</h1>
        </div>
      );
    });
  }
}

export default CardList;
