import React, { Component } from 'react'

class App extends Component {
  render(){
    return(
      componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => 
          this.setState({
            data.name
         })
        )
      }
    )
  }
}

export default App;