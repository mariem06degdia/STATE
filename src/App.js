import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'mariem',
        bio: 'no comment.',
        imgSrc: 'no comment',
        profession: 'consepteur',
      },
      show: false,
      interval: 0,
    };
  }
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { person, show, interval } = this.state;
    return (
      <div>
        <h1>My Profile</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since last mount: {interval} seconds</p>
      </div>
    ); 
  }
}
export default App;

