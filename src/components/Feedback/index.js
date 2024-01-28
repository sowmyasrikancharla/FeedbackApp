// Write your React code here.
<<<<<<< HEAD
// Write your React code here.
// eslint-disable-next-line max-classes-per-file
import {Component} from 'react'
import LastPage from './LastPage'
import FirstPage from './FirstPage'
import './index.css'

class Feedback extends Component {
  state = {emojiBool: true}

  deleteUser = () => {
    const {emojiBool} = this.state
    this.setState({emojiBool: false})
  }

  display = () => {
    const {emojiBool} = this.state
    const {resources} = this.props
    if (emojiBool === false) {
      return <LastPage />
    }
    return <FirstPage resources={resources} deleteUser={this.deleteUser} />
  }

  render() {
    return (
      <div className="con">
        <div className="sub-con">{this.display()}</div>
      </div>
    )
  }
}

export default Feedback
=======
>>>>>>> 62740eb6a027cc8679a551960b3177bcffc8f3a2
