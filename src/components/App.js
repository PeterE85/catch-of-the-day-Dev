import React from 'react'
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = (fish) => {
    //console.log("adding fish");
    //sacar una copia del estado antes de poner lo nuevo
    const fishes = {...this.state.fishes};

    //adicionar los nuevo al estado
    fishes[`fish${Date.now()}`] = fish;

    //actualizar el nuevo estado
    this.setState({
      fishes: fishes
    });    
  };
  //==============================
  loadSampleFishes = () => {
    //alert('Loading Ssample');
    this.setState({
      fishes: sampleFishes
    });
  };

  //===========================
  addToOrder = (key) => {
    //una copia del stado
    const order = {...this.state.order};

    //adiciona una orden o aumenta el numero de la misma orden
    order[key] = order[key] + 1 || 1;

    //actualizar el stado
    this.setState({order});
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className="menu">
          <Header tagline="Fresh Seadfood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish 
                key={key}  
                index={key}
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>

        <Order 
          fishes={this.state.fishes} 
          order={this.state.order}
        /> 

        <Inventory 
          addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes} 
        />               
      </div>
    )
  }
}

export default App;