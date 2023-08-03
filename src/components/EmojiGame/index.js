/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0}

  clickEmoji = () => {
    console.log(`clicked....`)
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore} = this.state

    return (
      <div className="main-container">
        <NavBar score={score} topScore={topScore} />
        <EmojiCard emojisList={emojisList} clickEmoji={this.clickEmoji} />
        <WinOrLossCard score={score} />
      </div>
    )
  }
}

export default EmojiGame
