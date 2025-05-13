const yodaFaceDiv = document.querySelector('.sound-square')
const yodaLaugh = new Audio('./sounds/yoda_laugh.mp3')

const askBtn = document.querySelector('.ask-btn')
const clearBtn = document.querySelector('.clear-btn')
const input = document.querySelector('input')
const answerP = document.querySelector('.answer')
const info = document.querySelector('.info')

const yodaResponses = [
	'A clear path, I see not.',
	'Yes. Strong with the Force, this answer is.',
	'No. Dark clouds surround that future.',
	'The answer lies within you.',
	'In time, revealed it will be.',
	'Trust your feelings, you must.',
	'Hmm... Difficult to see. Always in motion is the future.',
	'Hmmm. The Force is not certain.',
	'Patience you must have.',
	'Yes, hmm. True it is.',
	'No, no, no. Dangerous, that is.',
	'Do or do not. There is no try.',
	'Feel the Force flow through you.',
	'When ready you are, the answer will come.',
	'Wrong path, that is.',
	'Powerful answer, that was.',
	'Chosen, your destiny has been.',
	'The future, clouded it is.',
	'Your path, uncertain it may be.',
	'Strong emotions, I sense.',
	'A question asked, a truth revealed.',
	'Seek the answer within.',
	'Certain, I am not.',
	'Yes. The Force agrees.',
	'No. The Force denies it.',
	'Soon, the answer you shall know.',
	'Doubt, I sense in you.',
	'Strong, your intuition is.',
	'Believe in yourself, you must.',
	'Not yet. Wait, you must.',
	'Already, you know the answer.',
	'The dark side clouds your question.',
	'What you seek, may find you.',
	'The answer is... yes, for now.',
	'Beware, for much fear I sense.',
	'The Force leads elsewhere.',
	'One step closer, you are.',
	'More questions than answers, there are.',
	'Trust the path before you.',
	'Fools rush in. Wait, you should.',
	'Follow your destiny, you must.',
	'This, a wise question was.',
	'Let go of fear, you must.',
	'Adventure ahead, I sense.',
	'Safe, that choice is not.',
	'Fortunate, you will be.',
	'A surprise, the future holds.',
	'Peace, if you choose it.',
	'Fear leads to the dark side.',
	'Much to learn, you still have.',
]

const generateAnswer = () => {
	const number = Math.floor(Math.random() * yodaResponses.length)
	return yodaResponses[number]
}

const displayError = message => {
	answerP.style.visibility = 'hidden'
	info.style.visibility = 'visible'
	info.textContent = message
}

const displayInfo = message => {
	answerP.style.visibility = 'visible'
	answerP.textContent = message
	info.style.visibility = 'hidden'
}

const isValidQuestion = () => {
	if (input.value.length <= 1) {
		displayError('Ask a question, you must, to receive an answer.')
		return
	}

	if (input.value.slice(-1) !== '?') {
		displayError('End with a question mark, your question must.')
		return
	}

	const answer = generateAnswer()
	displayInfo(answer)
}

const clearLabel = () => {
	answerP.style.visibility = 'hidden'
	info.style.visibility = 'hidden'
	input.value = ''
}

// addEventListeners

askBtn.addEventListener('click', isValidQuestion)
input.addEventListener('keydown', e => {
	if (e.key === 'Enter') {
		isValidQuestion()
	}
})

clearBtn.addEventListener('click', clearLabel)
yodaFaceDiv.addEventListener('mouseenter', () => {
	yodaLaugh.currentTime = 0
	yodaLaugh.play()
})
