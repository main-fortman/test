import React from 'react';
import ReactDOM from "react-dom";
import './styles/main.scss';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  handleClick = (e) => {
    console.log('Click! ' + this.state.date);
  }


  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>Привет, мир!!!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function Welcome(props) {
    return <h1 className="test">Привет, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Алиса" />
        <Welcome name="Базилио" />
        <Welcome name="Буратино" />
      </div>
    );
  }

  class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Ваш любимый вкус: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Выберите ваш любимый вкус:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Грейпфрут</option>
              <option value="lime">Лайм</option>
              <option value="coconut">Кокос</option>
              <option value="mango">Манго</option>
            </select>
          </label>
          <input type="submit" value="Отправить" />
        </form>
      );
    }
  }

  ReactDOM.render(
    <FlavorForm/>,
    document.getElementById('root')
  );