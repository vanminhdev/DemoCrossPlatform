function countWords(str) {
  return str.split(" ").filter((word) => word !== "").length;
}

const sentence = "This is a sample sentence.";
const wordCount = countWords(sentence);
console.log(wordCount); // kết quả: 5
