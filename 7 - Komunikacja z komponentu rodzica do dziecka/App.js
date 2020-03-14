class Dziecko extends React.Component {

  render() {
    return (
      <input type="button" value="Klik" onClick={this.props.wyzwalaczRodzic}/>
    )
  }

}

class Rodzic extends React.Component {

  state = {
    licznik: 0
  }

  zwiększLicznik = () => {
    this.setState({
      licznik: this.state.licznik + 1
    })
  }

  render() {
    return (
      <React.Fragment>
        <Dziecko wyzwalaczRodzic={this.zwiększLicznik}/>
        <p>{this.state.licznik}</p>
      </React.Fragment>
    )
  }

}

ReactDOM.render(<Rodzic/>, document.getElementById('root'));