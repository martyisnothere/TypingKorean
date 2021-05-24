let targetWord = "단어";

const targetEl = document.querySelector('#target');
const meaningEl = document.querySelector('#meaning');

const form = document.querySelector('#text-input-form');
const inputEl = document.querySelector('#text-input');

const pickRandomWord = (wordList) => {
    return wordList[Math.floor(Math.random() * (wordList.length - 1))];
}

const updateTargetWord = (wordListItem) => {
    targetWord = wordListItem.Word;
    targetEl.innerHTML = targetWord;
    meaningEl.innerHTML = wordListItem.Meaning;
}

updateTargetWord(pickRandomWord(wordList));

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputEl.value == targetWord) {
        inputEl.value = "";
        updateTargetWord(pickRandomWord(wordList));
    }
})