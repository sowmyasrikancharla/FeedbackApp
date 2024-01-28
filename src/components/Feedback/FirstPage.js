import {Component} from 'react'
import './FirstPage.css'

const Single = props => {
  const {emojiDetails} = props
  // eslint-disable-next-line no-unused-vars
  const {id, name, imageUrl} = emojiDetails
  return (
    // eslint-disable-next-line react/button-has-type
    <li className="l">
      <img src={imageUrl} className="emoji-set" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

class FirstPage extends Component {
  render() {
    const {resources, deleteUser} = this.props
    const {emojis} = resources
    const onDelete = () => {
      deleteUser()
    }
    return (
      <div>
        <h1 className="head">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-con" onClick={onDelete}>
          {emojis.map(eachItem => (
            <Single emojiDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default FirstPage
