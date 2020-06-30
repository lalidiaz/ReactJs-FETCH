import React from 'react';
import Carousel from './Components/Carousel'
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=polaroid&limit=6')
    const jsonData = await data.json()

    this.setState({
      products: jsonData.results
    })
  }

  render() {
    return (
      <div className="App">
        <Carousel products={this.state.products} />
      </div>
    );
  }
}


export default App;
