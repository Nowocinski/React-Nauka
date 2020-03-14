class App extends React.Component {

  state = {
    text: '',
    number: 0
  }

  handleClick = () => {
    console.log('Dodano litere');
    this.setState({
        text: this.state.text + 'A'
    });
  }

  render() {
    return(
      <React.Fragment>
        <button onClick={this.handleClick}>Dodaj "A"</button>
        <h1>Number: {this.state.number}</h1>
        <h1>{this.state.text}</h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));