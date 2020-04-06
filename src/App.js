import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Character } from './Character';
import { SearchAndSortHeader } from './Search';
import { Filter } from './Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      species: [],
      filteredItems: [],
      filterName: '',
      filterGender: '',
      filterSpecies: [],
      sort: 'asc'
    }
  };

  updateFilter = e => {
    const target = e.target;
    let value = target.value;
    const name = target.name;

    if (target.type === 'checkbox') {
      target.checked ?
        this.state.filterSpecies.push(target.value) :
        this.state.filterSpecies.pop(target.value);
      value = this.state.filterSpecies;
    }

    this.setState({
      [name]: value
    });

    if (name === 'sort') {
      this.sortById(value);
    }
  };

  filterByName = e => {
    let initialItems = this.state.items;
    let filteredList = initialItems.filter(item => item.name.toLowerCase().includes(this.state.filterName.toLowerCase()));
    this.setState({ filteredItems: filteredList });
    e.preventDefault();

  };

  sortById(order) {
    let initialItems = this.state.items;
    let filteredList = order === 'asc' ?
      initialItems.sort((a, b) => (a.id > b.id) ? 1 : -1) : initialItems.sort((a, b) => (a.id < b.id) ? 1 : -1);
    this.setState({ filteredItems: filteredList });
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
            filteredItems: result.results,
            species: result.results.map(item => item.species).filter((x, i, a) => a.indexOf(x) === i),
            filterSpecies: result.results.map(item => item.species).filter((x, i, a) => a.indexOf(x) === i)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, filteredItems, filterSpecies, species } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container" role="main">
          <div className="row">
            <div className="col-sm-3">
              <h3>Filters</h3>
              <Filter species={species} filterSpecies={filterSpecies} onChange={this.updateFilter} />
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-12"><SearchAndSortHeader onChange={() => this.updateFilter} onClick={() => this.filterByName} sort={this.state.sort} />
                </div>
                <div className="col-sm-12"><Character items={filteredItems} filterSpecies={filterSpecies} /></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
