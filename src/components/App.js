import React, { Component } from 'react';
import '../styles/App.css';
import EventList from './EventList';
import Favorites from './Favorites';
import NewEvent from './NewEvent';
import Header from './Header';
import SearchBar from './SearchBar';
import Footer from './Footer';
// import { Link } from 'react-router';
import { map, extend } from 'lodash';
import firebase, { reference } from '../firebase';
import { BrowserRouter, Match } from 'react-router'
import { render } from 'react-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      eventList: [],
      filteredEvents: null,
    }
  }

  componentDidMount() {
  reference.on('value', (snapshot) => {
    const barrelraces = snapshot.val() || {};
    this.setState({
      eventList: map(barrelraces, (val, key) => extend(val, { key }))
    });
  });
}

toggleFavorite (key) {
  this.state.eventList.map(event => {
        if(key === event.key) {
        return firebase.database().ref('barrelraces').child(key).update({
            favorite: !event.favorite,
          })
        } else {
          return false;
        }
      })
    };

filteredDisplay(filteredEvents) {
  this.setState({filteredEvents: filteredEvents});
}

  render() {

    const { eventList, filteredEvents } = this.state;

    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <SearchBar
          eventList={eventList}
          filteredDisplay={this.filteredDisplay.bind(this)}
        />
        <Match exactly pattern="/" render={()=> (
            <EventList
              eventList={filteredEvents?filteredEvents:eventList}
              toggleFavorite={this.toggleFavorite.bind(this)}
            />
          )}
        />
      <Match exactly pattern="/favorites" render={()=> (
            <Favorites
              eventList={filteredEvents?filteredEvents:eventList}
              toggleFavorite={this.toggleFavorite.bind(this)}
            />
          )}
        />
      <Match exactly pattern="/addnewevent" render={ () => (
            <NewEvent
            />
          )}
        />
      <Footer />
      </div>
      </BrowserRouter>
    );
  }
};

render(<App />, document.getElementById('root'))
