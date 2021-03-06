import React, { Component } from 'react';
import DisplayEvent from './DisplayEvent';
import '../styles/Favorites.css'

class Favorites extends Component {
  render() {

    const { eventList } = this.props;

    const sortedEvents = eventList.sort(function (a, b) {
      return Date.parse(a.date) - Date.parse(b.date)
  });

    let favoritelist = sortedEvents.filter(event =>
    event.favorite === true)

    let favorites= favoritelist.map(event =>
      <DisplayEvent
        key={event.key}
        event={event}
        toggleFavorite={this.props.toggleFavorite}
      />
    )

    return (
      <div className="favorites-list">
        <div>
          { favorites }
        </div>
      </div>
    );
  }
}

export default Favorites;
