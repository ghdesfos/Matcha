import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Matcha</h1>
        <h2>Find your match</h2>
      </header>
    );  
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>This is the footer</h3>
      </footer>
    );  
  }
}

class FeedPersonElement extends Component {
  render() {
    return (
      <div class="block-image">
        <p>Test</p>
        <p>{this.props}</p>
        <p>{this.props.personName}</p>
        <img src={this.props.personImage} />
      </div>
   );
 }
}

class Body extends Component {
  render() {
    const peopleImages = [
      {name: 'Sophie', image: 'https://pbs.twimg.com/media/DfkhrO1XUAEYkdw?format=jpg&name=small'},
      {name: 'Charles', image: 'https://pbs.twimg.com/media/DfkhrO1XUAEYkdw?format=jpg&name=small'},
      {name: 'Emilie', image: 'https://pbs.twimg.com/media/DfkhrO1XUAEYkdw?format=jpg&name=small'}
    ]
  
    return (
      <div id="feed">
        {peopleImages.map(person => {
          return(<p>test</p>);
          //return (<FeedPersonElement key={person.name} personName={person.name} personImage={person.image} />);
        })}
      </div>
    );    
  }
}


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;