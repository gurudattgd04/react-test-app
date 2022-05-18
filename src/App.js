import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchCriteria: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearch = (event) => {
    const searchCriteria = event.target.value;
    this.setState(() => {
      return { searchCriteria };
    });
  };

  render() {
    const { monsters, searchCriteria } = this.state;
    const { onSearch } = this;

    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchCriteria.toLowerCase());
    });
    return (
      <div className="App">
        <SearchBox
          OnChangeHandler={onSearch}
          className="searchBox"
          placeholder="search monsters?"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
