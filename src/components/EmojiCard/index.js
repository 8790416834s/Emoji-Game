// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisList, clickEmoji} = props

  const onClickEmoji = () => {
    clickEmoji()
  }

  return (
    <ul className="emoji-list">
      {emojisList.map(eachEmoji => (
        <li className="list-item">
          <button
            type="button"
            key={eachEmoji.id}
            className="emoji-button"
            onClick={onClickEmoji}
          >
            <img src={eachEmoji.emojiUrl} alt={eachEmoji.emojiName} />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default EmojiCard
