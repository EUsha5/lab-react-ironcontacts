import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contact from './Contact.js'


class CharList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: contacts.slice(0,5), 
    }
  }

  
  showContacts() {
    return this.state.contacts.map((oneContact, index) => {
      return (
        <Contact
        key={index}
        pictureUrl={oneContact.pictureUrl}
        name={oneContact.name}
        popularity={oneContact.popularity} 
        deleteClickHandler = {()=>this.deleteContact(index)}
        />
        )
      })
    }
    
  addContact() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length + 5)];
    let newContact = this.state.contacts;
    newContact.push(randomContact);
    return this.setState({contacts: newContact});
  }

  deleteContact(contactToRemove) {
    const removeContact = [...this.state.contacts];
    removeContact.splice(contactToRemove, 1)
    this.setState({contacts: removeContact})
  }

  sortByName() {
    let sortedContacts = this.state.contacts
    sortedContacts.sort((a, b)=> {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    this.setState({ contacts: sortedContacts})
  }

  sortByPop() {
    let sortedContacts = this.state.contacts
    sortedContacts.sort((a, b)=>{
      return b.popularity - a.popularity
    })
    this.setState({ contacts: sortedContacts})
  }

    render() {
    return (
      <div className="list">
      <button onClick = {()=> this.addContact()}>Add Contact</button>
      <button onClick = {()=> this.sortByName()}>Sort By Name</button>
      <button onClick = {()=> this.sortByPop()}>Sort By Popularity</button>
       <table>
         <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.showContacts()}
        </tbody>
        </table>
      </div>
    );
  }
}

export default CharList;