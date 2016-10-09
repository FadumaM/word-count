window.onload = function() {
  var userInput = document.getElementById("userInput");
  var wordLimitElement = document.getElementById("wordLimit");
  var wordCountElement = document.getElementById("wordCount");
  var wordLimitNumber = parseInt(wordLimitElement.innerHTML);
  bindEventListeners();

  function bindEventListeners() {
    userInput.addEventListener('keydown', getValue);
    userInput.addEventListener('change', getValue);
    userInput.addEventListener('blur', getValue);
    userInput.addEventListener('focus', getValue);
  }

  function getValue() {
    var regex = /\s+/gi;
    var value = userInput.value;
    if (value.length >= 1) {
      var wordCount = value.trim().replace(regex, ' ').split(' ').length;
      // console.log(wordCount);
      changeWordCount(wordCount);
      changeTextColor(wordCount);
    }
  }

  function changeWordCount(wordCount) {
    if (wordCount >= 1) {
      console.log(wordLimitNumber);
      wordLimitElement.innerHTML = wordLimitNumber - wordCount;
      wordCountElement.innerHTML = wordCount;
    }

  }


  function changeTextColor(wordCount) {
    if (wordCount > wordLimitNumber) {
      console.log("hi");
      userInput.className = "overLimit";
    }
  }
};
