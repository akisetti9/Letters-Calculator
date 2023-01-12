// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    count: 0,
  }

  onChangeSearchInput = event => {
    this.setState(prevState => ({
      searchInput: event.target.value,
      count: prevState.count + 1,
    }))
  }

  render() {
    const {searchInput, count} = this.state
    return (
      <div className="container">
        <div className="box">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="phraseText">Enter the phrase</label>
          <input
            id="phraseText"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="input"
          />
          <p className="count">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
