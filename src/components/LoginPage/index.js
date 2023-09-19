import {Component} from 'react'
import './index.css'
import GreenLightRedLight from '../GreenLightRedLight'

class LoginPage extends Component {
  state = {
    name: '',
    email: '',
    mobile: '',
    difficultyLevel: '',
    start: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeMobile = event => {
    this.setState({mobile: event.target.value})
  }

  optionSelect = event => {
    this.setState({
      difficultyLevel: event.target.value,
    })
    console.log(event.target.value)
  }

  startBtn = event => {
    event.preventDefault()
    const {name, email, mobile} = this.state
    if (name.length !== 0 && email.length !== 0 && mobile.length !== 0) {
      this.setState({start: true})
    }
  }

  renderLogin = () => {
    const {name, email, mobile, difficultyLevel} = this.state
    console.log(name, email, mobile, difficultyLevel)

    return (
      <form className="login-container" onSubmit={this.startBtn}>
        <img
          src="https://res.cloudinary.com/dunicojo6/image/upload/v1695056465/download_fmqxji.png"
          alt="logo"
          className="heading-image"
        />
        <h1 className="head">Please Register Below To Start</h1>
        <div className="inputs">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            onChange={this.onChangeName}
            required
          />
        </div>
        <div className="inputs">
          <label htmlFor="Email">E-Mail</label>
          <input
            id="Email"
            type="email"
            placeholder="Email"
            onChange={this.onChangeEmail}
            required
          />
        </div>
        <div className="inputs">
          <label htmlFor="phone">Mobile Number</label>
          <input
            id="phone"
            type="text"
            placeholder="Mobile Number"
            onChange={this.onChangeMobile}
            required
          />
        </div>
        <div className="inputs">
          <label htmlFor="level">Difficulty Level</label>
          <div id="level" className="radio">
            <input
              type="radio"
              name="difficulty"
              id="easy"
              value="Easy"
              onClick={this.optionSelect}
            />
            <label htmlFor="easy">Easy</label>
            <input
              type="radio"
              name="difficulty"
              id="medium"
              value="Medium"
              onClick={this.optionSelect}
            />
            <label htmlFor="medium">Medium</label>
            <input
              type="radio"
              name="difficulty"
              value="Hard"
              id="hard"
              onClick={this.optionSelect}
            />
            <label htmlFor="hard">Hard</label>
          </div>
        </div>
        <button type="submit" className="start-btn">
          Start Game
        </button>
      </form>
    )
  }

  renderStartGame = () => {
    const {name, difficultyLevel} = this.state
    return <GreenLightRedLight name={name} difficulty={difficultyLevel} />
  }

  render() {
    const {start} = this.state
    return (
      <div>{start === true ? this.renderStartGame() : this.renderLogin()}</div>
    )
  }
}

export default LoginPage
