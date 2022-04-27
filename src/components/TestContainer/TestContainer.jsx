import React from 'react'
import './TestContainer.css'
import "../TryAgain/TryAgain"
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'


const TestContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain

}) => {
    return (
        <div className="test-container">
            {timeRemaining > 0 ? (
                <div className="typing-challenge-container">
                <TypingChallengeContainer 
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    words={words} 
                    characters={characters} 
                    wpm={wpm}
                    selectedParagraph={selectedParagraph}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                    />
                </div>
            ) : (
                <div className="try-again-container">
                    <TryAgain  words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
                </div>
            )}
        </div>
        
    );
}

export default TestContainer;