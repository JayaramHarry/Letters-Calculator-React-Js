// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', count: 0}

  countCharecter = event => {
    this.setState({searchInput: event.target.vale})
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {searchInput, count} = this.state
    return (
      <div className="bg-container">
        <div className="input-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="input-label" htmlFor="input-box">
            Enter the phrase
          </label>
          <input
            className="search-input"
            type="text"
            id="input-box"
            placeholder="Enter the phrase"
            value={searchInput}
            onChange={this.countCharecter}
          />
          <div className="count-latter-container">
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
