import React, { Component } from 'react'
import { reference } from '../firebase'
import '../styles/NewEvent.css'

class NewEvent extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      date: '',
      location: '',
      city: '',
      state: '',
      sanction: '',
      addedmoney: '',
      time: '',
      entryfee: '',
      payout: '',
      contactName: '',
      contactNumber: '',
      description: '',
      favorite: false,
    }
  }

  addNewEvent (e) {
    e.preventDefault()
    console.log(reference)
    reference.push(this.state)
    this.setInitialState();
  }


  setInitialState() {
      let keys = Object.keys(this.state)
      keys.forEach((key) => {
      this.setState({[key]: ''})
      })
  }


  toggleSaveButton () {
    if(this.state.title.length > 1){
      return false
    }else{
      return true
    }
  }

  render() {

    let inputFields = Object.keys(this.state)

    const form = inputFields.map(field =>
      <div className='new-input-form'>
        <div>
          <p className='input-label'>  {field.toUpperCase()} </p>
        </div>
        <div>
           <input
           className={`${field}-input new-event-input`}
            value={this.state[field]}
             placeholder='.....'
             onChange={(e) => this.setState({
                [field] : e.target.value
               })
             }
           />
        </div>
      </div>)

    return (
      <section className='new-event'>
        { form }
        <button
        disabled={this.toggleSaveButton()}
        className='save-event-button'
        onClick={(e) => this.addNewEvent(e)}
        >
        SAVE NEW EVENT
        </button>
      </section>
      )
    }
  }

  export default NewEvent;
