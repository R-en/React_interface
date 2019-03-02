import React, { Component } from 'react';
import '../css/App.css';

import AddApointments from './AddAppointments';
import ListAppointments from './ListAppointment';
import SearchAppointments from './SearchAppointment';

class App extends Component {
  constructor(){
    super();
    this.state = {
      myAppointments: [],
      lastIndex:0
    }
  }

  componentDidMount(){
    fetch('./data.json')
        .then(response => response.json())
        .then (result => {
          const apts = result.map(item => {
            item.aptID = this.state.lastIndex;
            this.setState({lastIndex: this.state.lastIndex+1})
            return item;
          })

          this.setState({
            myAppointments : apts
          });
        })
  }

  render() {
  
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddApointments />
              <SearchAppointments />
              <ListAppointments appointments = {this.state.myAppointments} />
            </div>
          </div>
        </div>
      </div>
    </main>
    );
  }
}

export default App;
