function getWordCount(text, ...words) {
  let result = {};
  let wordsArray = splitIntoWords(text)

  switch (words.length) {
    case 0:
      wordsArray.forEach(word => {
        if (!result.hasOwnProperty([word])) {
          result[word] = getExactWordCount(wordsArray, word)
        }
      });
      break;
    case 1:
      return getExactWordCount(wordsArray, ...words);
    default:
      words.forEach((item) => result[item] = getExactWordCount(wordsArray, item))
  }
  return result;
}



//Получить массив слов
function splitIntoWords(text) {
  return text
    .replace(/[^A-zА-я\s]/g, '')
    .split(/\s+/);
}
//Получить кол-во повторений определенного слова
function getExactWordCount(wordsArray, word) {
  let count = 0;
  wordsArray.forEach(item => {
    if (item === word) count++
  })
  return count;
}
