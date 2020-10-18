import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

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
          {/* <p>35 days left</p>  */}
        </div>
        <div className="bottomleft">
          <p>© Copyright - 2020 - PAKVAPES</p>
        </div>
      </div>
    )
  }
}

export default App
