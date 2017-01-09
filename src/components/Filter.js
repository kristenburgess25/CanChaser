import React, { Component } from 'react';
import '../styles/Filter.css'

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      sanctions: [],
      addedmoney: '',
      date: '',
    }
  }

filterByDate(e) {
  debugger;
  if (e.target.value) {
  let filteredEvents = this.props.eventList.filter(event => {
    const formattedDates = Date.parse(event.date);
    const selectedDate = Date.parse(e.target.value);
    if(formattedDates >= selectedDate ) {
      return event
    }
  })
  this.props.filteredDisplay(filteredEvents);
} else {
  this.props.filteredDisplay(null);
  }
}

filterByState(e) {
  if (e.target.value) {
  let filteredEvents = this.props.eventList.filter(event => {
    return event.state.toUpperCase().match(e.target.value)
  })
  this.props.filteredDisplay(filteredEvents);
} else {
  this.props.filteredDisplay(null);
  }
}

filterByMoney(e) {
let filteredEvents = this.props.eventList.filter(event => { if (event.addedmoney >= e.target.value){
    return event
    }
  })
if(filteredEvents){
  this.props.filteredDisplay(filteredEvents);
} else {
    this.props.filteredDisplay(null)
  }
}

  setSanctions(e) {
    const sanctions= this.state.sanctions;
    const checkedS = e.target.value
    if(sanctions.length){
    for(var i=0; i<sanctions.length; i++) {
      if(sanctions[i] === checkedS ) {
        return
      } else {
       sanctions.push(checkedS)
      }
    }
  } else if(!sanctions.length){
      sanctions.push(checkedS)
    }
  this.checkSanctions(sanctions);
}

checkSanctions(sanctions) {
  console.log(sanctions)
}


render () {

  return (
    <div className='filter-form'>
    <form>
    <p className='sanction-box'> Sanction : </p>
    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      value='NBHA'
      onChange={(e) => this.setSanctions(e)}
    />
    NBHA
    </div>

    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      value='NE-4D'
      onChange={(e) => this.setSanctions(e)}
    />
    NE4D
    </div>

    <div className='sanction-box'>
    <input className='sanction-check'
      type='checkbox'
      value='BBR'
      onChange={(e) => this.setSanctions(e)}
    />
    BBR
    </div>
    </form>
    <br></br>
    <p className='filter-date'> From Date : </p>
    <input
    className='filter-date'
    type='date'
    value={this.state.date}
    onChange={(e) => this.filterByDate(e)}
    />
  <br></br>
  <p className='filter-money'> Added Money > </p>
    $ <input
    className='filter-money'
    type='value'
    value={this.state.addedMoney}
    onChange={(e)=> this.filterByMoney(e)}
    />
  <br></br>
  <p className='filter-location'> State : </p>
    <select
      className='state-dropdown filter-location'
      value={this.state.state}
      onChange={(e)=> this.filterByState(e)}
    >
  	<option value="AL">Alabama</option>
  	<option value="AK">Alaska</option>
  	<option value="AZ">Arizona</option>
  	<option value="AR">Arkansas</option>
  	<option value="CA">California</option>
  	<option value="CO">Colorado</option>
  	<option value="CT">Connecticut</option>
  	<option value="DE">Delaware</option>
  	<option value="DC">District Of Columbia</option>
  	<option value="FL">Florida</option>
  	<option value="GA">Georgia</option>
  	<option value="HI">Hawaii</option>
  	<option value="ID">Idaho</option>
  	<option value="IL">Illinois</option>
  	<option value="IN">Indiana</option>
  	<option value="IA">Iowa</option>
  	<option value="KS">Kansas</option>
  	<option value="KY">Kentucky</option>
  	<option value="LA">Louisiana</option>
  	<option value="ME">Maine</option>
  	<option value="MD">Maryland</option>
  	<option value="MA">Massachusetts</option>
  	<option value="MI">Michigan</option>
  	<option value="MN">Minnesota</option>
  	<option value="MS">Mississippi</option>
  	<option value="MO">Missouri</option>
  	<option value="MT">Montana</option>
  	<option value="NE">Nebraska</option>
  	<option value="NV">Nevada</option>
  	<option value="NH">New Hampshire</option>
  	<option value="NJ">New Jersey</option>
  	<option value="NM">New Mexico</option>
  	<option value="NY">New York</option>
  	<option value="NC">North Carolina</option>
  	<option value="ND">North Dakota</option>
  	<option value="OH">Ohio</option>
  	<option value="OK">Oklahoma</option>
  	<option value="OR">Oregon</option>
  	<option value="PA">Pennsylvania</option>
  	<option value="RI">Rhode Island</option>
  	<option value="SC">South Carolina</option>
  	<option value="SD">South Dakota</option>
  	<option value="TN">Tennessee</option>
  	<option value="TX">Texas</option>
  	<option value="UT">Utah</option>
  	<option value="VT">Vermont</option>
  	<option value="VA">Virginia</option>
  	<option value="WA">Washington</option>
  	<option value="WV">West Virginia</option>
  	<option value="WI">Wisconsin</option>
  	<option value="WY">Wyoming</option>
  </select>
    </div>
    )
  }
}

export default Filter
