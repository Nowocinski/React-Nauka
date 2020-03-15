// W WIELU KOMPONENTACH
// KOMUNIKACJA MIĘDZY KOMPONENTAMI:
// HEAD->CONTAINER->BODY
// CONTAINER->HEAD

class HeaderComponent extends React.Component {

  render() {
    return (
      <React.Fragment>
        <input type="button" value="-10" onClick={this.props.handleClickParent.bind(this, -10, 'Odejmowanie')}/>
        <input type="button" value="-1" onClick={this.props.handleClickParent.bind(this, -1, 'Odejmowanie')}/>
        <input type="button" value="Reset" onClick={this.props.handleClickParent.bind(this, -this.props.result, 'Czyszczenie wyniku')}/>
        <input type="button" value="+1" onClick={this.props.handleClickParent.bind(this, 1, 'Dodawanie')}/>
        <input type="button" value="+10" onClick={this.props.handleClickParent.bind(this, 10, 'Dodawanie')}/>
        </React.Fragment>
    )
  }

}

class BodyComponent extends React.Component {

  render() {

    // debugger

    return (
      <React.Fragment>
        <h1>Liczba kliknięć: {this.props.containerState.count}</h1>
        <h1>Wynik: {this.props.containerState.result}</h1>

        {this.props.containerState.operation != null ? <h1>Wyknana operacja: {this.props.containerState.operation}</h1> : null}
      </React.Fragment>
    )
  }

}

class ContainerComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      result: 0,
      operation: null
    }

    this.handleClickParent = this.handleClickParent.bind(this)
  }

  handleClickParent(number, operation, _this) {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      result: prevState.result + number,
      operation: operation
    }))
  }

  render() {

    return(
      <React.Fragment>
        <HeaderComponent handleClickParent={this.handleClickParent} result={this.state.result}/>
        <BodyComponent containerState={this.state}/>
      </React.Fragment>
    )
  }

}

ReactDOM.render(<ContainerComponent/>, document.getElementById('root'))