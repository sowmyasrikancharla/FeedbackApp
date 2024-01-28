import {Component} from 'react'
import './LastPage.css'

class LastPage extends Component {
  render() {
    console.log('hello')
    return (
      <div className="sub-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/love-emoji-img.png"
          className="heart"
          alt="love emoji"
        />
        <h1 className="head">Thank You!</h1>
        <p>We will use your feedback to improve our customer care service</p>
      </div>
    )
  }
}
export default LastPage
