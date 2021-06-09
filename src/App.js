import React, { Component } from 'react';
import './App.css';
import  {animals} from './data.js';
import Header from './header.js';
import ImageList from './ImageList'
// import Body from './Body.js';


export default class App extends Component {
  // this is declaring the state
  state = {
  }

  // for every 
  handleAnimalChange = (e) => {
      this.setState({ filterHorns: e.target.value})
  }

  render() {
      let filteredAnimals = animals; 

      if (this.state.filterHorns) {
          filteredAnimals = animals.filter(animal => Number(animal.horns) === Number(this.state.filterHorns))
      }
      return (
        <div>
          <Header />
          <div>
              <label>
                  {/* calling back the event listerner */}
                  <select onChange={this.handleAnimalChange}>
                      <option value=''>All Animals</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='100'>100</option>
                  </select>
              </label>
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