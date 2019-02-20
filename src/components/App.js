import React, { Component } from 'react';
import '../css/App.css';

import AddApointments from './AddAppointments';
import ListAppointments from './ListAppointment';
import SearchAppointments from './SearchAppointment';

class App extends Component {
  render() {
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddApointments />
              <SearchAppointments />
              <ListAppointments />
            </div>
          </div>
        </div>
      </div>
    </main>
    );
  }
}

export default App;
