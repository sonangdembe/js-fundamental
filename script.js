const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord, timer;
let score = 0; // Initialize score outside the initGame function
let usedWords = new Set(); // Keep track of used words

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            timeText.innerText = maxTime;
        } else {
            clearInterval(timer);
            if (inputField.value === "") {
                // If no input is provided until time ends, reset the score to zero
                score = 0;
                alert("Time's up! You didn't enter any word. Your score has been reset to 0.");
            } else {
                const finalScore = score;
                alert(`Time's up! Your final score: ${finalScore}`);
            }
            initGame();
        }
    }, 1000);
};

const getRandomWord = () => {
    // Get a random word that has not been used in the current round
    let randomObj = words[Math.floor(Math.random() * words.length)];
    while (usedWords.has(randomObj.word)) {
        randomObj = words[Math.floor(Math.random() * words.length)];
    }
    usedWords.add(randomObj.word);
    return randomObj;
};

const initGame = () => {
    initTimer(30);
    usedWords.clear(); // Clear the usedWords set for a new round
    const randomObj = getRandomWord();
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
};

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (!userWord) return alert("Please enter the word to check!");
    if (userWord !== correctWord) {
        alert(`Oops! ${userWord} is not the correct word. Your score: ${score}`);
        score = 0;
    } else {
        score++;
        alert(`Congrats! ${correctWord.toUpperCase()} is the correct word. Your score: ${score}`);
    }
    initGame();
};

const handleEnterKey = event => {
    if (event.key === "Enter") {
        checkWord();
    }
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
inputField.addEventListener("keypress", handleEnterKey);

initGame();
