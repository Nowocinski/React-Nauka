class HeaderComponent extends React.Component {

  sendToParent = (event) => {
    this.props.triggerParent(event.target.value)
  }

  sendResetToParent = (event) => {
    this.props.triggerParent('')
    this.setState({
      inputText: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.sendToParent}/>
        <input type="button" value="Reset" onClick={this.sendResetToParent}/>
      </React.Fragment>
    )
  }

}

class BodyComponent extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>Tu pojaki się to co wpisałeś/aś</h1>
        <p>{this.props.textToShow}</p>
      </React.Fragment>
    )
  }

}

class ContainerComponent extends React.Component {

  state = {
    text: ''
  }

  changeState = (textState) => {
    this.setState({
      text: textState
    });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderComponent triggerParent={this.changeState}/>
        <BodyComponent textToShow={this.state.text}/>
      </React.Fragment>
    )
  }

}

ReactDOM.render(<ContainerComponent/>, document.getElementById('root'));