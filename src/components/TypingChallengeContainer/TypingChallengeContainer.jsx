import React from 'react'
import './TypingChallengeContainer.css'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'

const TypingChallengeContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) => {
    return (
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">

                {/* Words typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />
                {/* characters typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

                {/* Speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>

            {/* Challenge */}
            <div className="typewritter-container">
                <TypingChallenge 
                testInfo={testInfo}    
                timerStarted={timerStarted}
                timeRemaining={timeRemaining}
                onInputChange={onInputChange}
                selectedParagraph={selectedParagraph}/>
            </div>
        </div>
    )
}

export default TypingChallengeContainer;