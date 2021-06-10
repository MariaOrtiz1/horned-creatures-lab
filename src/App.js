import React, { Component } from 'react';
import './App.css';
import  {animals} from './data.js';
import Header from './header.js';
import ImageList from './ImageList'
import Dropdown from './Dropdown';
// import Body from './Body.js';


export default class App extends Component {
  // this is declaring the state
  state = {
  }

  // for every 
  handleAnimalChange = (e) => {
      this.setState({ filterHorns: e.target.value})
  }

  handleKeyWordChange = (e) => {
    this.setState({ filterKeywords: e.target.value})
}

  render() {
      let filteredAnimals = animals; 

      if (this.state.filterHorns) {
          filteredAnimals = filteredAnimals.filter(animal => animal.horns === +(this.state.filterHorns))
      }
      if (this.state.filterKeywords) {
        filteredAnimals = filteredAnimals.filter(animal => animal.keyword === this.state.filterKeywords)
    }

    const animalTypeOptions = Array.from(new Set(animals.map(animal => animal.keyword)));
    const animalHornsOptions = Array.from(new Set(animals.map(animal => animal.horns)));
      return (
        <div className="main">
          <Header />
          <div>
                <Dropdown options={animalTypeOptions} event={this.handleKeyWordChange}/>
                <Dropdown options={animalHornsOptions} event={this.handleAnimalChange}/>
              <ImageList zoo={filteredAnimals} />
          </div>
        </div>
      )
  }
}


// export default class App extends Component {
//   render() {
//       return (
//         <div className="App">
//           <Body title="Trackin' state!"/>
//         </div>
//       );
//     }
// }