// W JEDNYM KOMPONENCIE
class AppComponent extends React.Component {

  constructor(params) {
    super(params)
    this.state = {
      count: 0,
      result: 0,
      operation: null
    }

    // Przy użyciu konstruktora trzeba zbindować
    // dodaną metodę w ten sposób
    this.handleClick = this.handleClick.bind(this)
  }

  // argument this zawsze na końcu - odwrotnie do przekazywanych parametrów w onClick
  handleClick(number, operation, _this) {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      result: prevState.result + number,
      operation: operation
    }))
  }

  render() {
    return (
      <React.Fragment>
        <input type="button" value="-10" onClick={this.handleClick.bind(this, -10, 'Odejmowanie')}/>
        <input type="button" value="-1" onClick={this.handleClick.bind(this, -1, 'Odejmowanie')}/>
        <input type="button" value="Reset" onClick={this.handleClick.bind(this, -this.state.result, 'Czyszczenie wyniku')}/>
        <input type="button" value="+1" onClick={this.handleClick.bind(this, 1, 'Dodawanie')}/>
        <input type="button" value="+10" onClick={this.handleClick.bind(this, 10, 'Dodawanie')}/>

        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>

        {this.state.operation != null ? <h1>Wyknana operacja: {this.state.operation}</h1> : null}
      </React.Fragment>
    )
  }

}

ReactDOM.render(<AppComponent/>, document.getElementById('root'))