import {Component} from 'react'
import './index.css'

class GreenLightRedLight extends Component {
  state = {score: 0, timer: 40, color: '', status: true}

  componentDidMount() {
    this.startGame()
  }

  startTimer = () => {
    const {timer} = this.state
    let count = timer
    const startGame = setInterval(() => {
      count -= 1
      if (count > -1) {
        this.setState({timer: count})
      }
    }, 1000)
  }

  startGame = () => {
    this.setState({timer: 40})
    this.startTimer()
    this.colorChanging()
  }

  colorChanging = () => {
    let counter = 0
    const colorChange = setInterval(() => {
      if (counter % 2 === 0) {
        this.setState({color: 'green'})
      } else {
        this.setState({color: 'red'})
      }
      counter += 1
    }, 1000)
  }

  stopGame = () => {
    const {color, startGame, colorChange} = this.state
    if (color === 'red') {
      clearInterval(colorChange)
      clearInterval(startGame)
      this.setState(prevState => ({status: !prevState.status}))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    }
  }

  renderResult = () => {
    const {timer, score} = this.state
    const {difficulty} = this.props
    let n
    if (difficulty === 'Easy') {
      n = 10
    } else if (difficulty === 'Medium') {
      n = 15
    } else if (difficulty === 'Hard') {
      n = 25
    }

    return (
      <>
        {timer >= 0 && score >= n ? (
          <div className="btn-container">
            <h1>You Win!</h1>
          </div>
        ) : (
          <div className="btn-container">
            <h1>Game Over!</h1>
          </div>
        )}
      </>
    )
  }

  render() {
    const {timer, score, color, status} = this.state
    const {name, difficulty} = this.props

    let difColor
    let time

    if (difficulty === 'Easy') {
      difColor = 'green'
    } else if (difficulty === 'Medium') {
      difColor = 'orange'
    } else {
      difColor = 'red'
    }

    if (timer > 30) {
      time = 'green'
    } else if (timer > 20) {
      time = 'orange'
    } else {
      time = 'red'
    }

    let btnColor
    if (color === 'red') {
      btnColor = 'red-btn-color'
    } else {
      btnColor = 'green-btn-color'
    }

    return (
      <>
        {status ? (
          <>
            <div className="main-container">
              <h1>
                Hi, <span className="name">{name}</span>
              </h1>
              <h1>
                Difficulty Level: <span className={difColor}>{difficulty}</span>
              </h1>
              <h1>
                Score: <span>{score}</span>
              </h1>
              <h1>
                Time Remaining: <span className={time}>{timer}</span>
              </h1>
            </div>
            <div className="btn-container">
              <button
                type="button"
                className={`color-btn ${btnColor}`}
                onClick={this.stopGame}
              >
                Click on Green to Score
              </button>
            </div>
          </>
        ) : (
          this.renderResult()
        )}
      </>
    )
  }
}

export default GreenLightRedLight
