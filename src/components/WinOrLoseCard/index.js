// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {score} = props

  return (
    <div>
      {score === 12 ? (
        <div className="result-container">
          <div>
            <h1>You Win</h1>
            <p>Best Score </p>
            <p className="score">{score}/12</p>
            <div>
              <button type="button" className="play-button">
                Play Again
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="lose game"
          />
        </div>
      ) : (
        <div className="result-container">
          <div>
            <h1>You Win</h1>
            <p>Best Score </p>
            <p className="score">{score}/12</p>
            <div>
              <button type="button" className="play-button">
                Play Again
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="lose game"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLossCard
