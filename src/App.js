import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    
  }

  render() {
    return (
      <div className="bgimg">
        <div className="image-background" style={{ height: window.screen.availHeight - 74 }} />
        <div className="topleft">
          <p>PAKVAPES</p>
        </div>
        <div className="middle">
          <h1>PAKVAPES IS COMING SOON</h1>
          <hr />
          <p>For Business Inqueries contact: pakvapes.business@gmail.com with subject: "Business Inquery"</p>
        </div>
        <div className="bottomleft">
          <p>© Copyright - 2021 - PAKVAPES</p>
        </div>
      </div>
    )
  }
}

export default App
