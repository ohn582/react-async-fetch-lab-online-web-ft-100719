import React, { Component } from 'react'

class App extends Component {
<<<<<<< HEAD

  state = {
      peopleInSpace: []
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ peopleInSpace: people }))

  }
=======
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
>>>>>>> 0b345d583f10c53272f8f7a7314ece9fce865766

export default App;