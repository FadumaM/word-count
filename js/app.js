window.onload = function() {
  var userInput = document.getElementById("userInput");
  bindEventListeners();

  function bindEventListeners() {
    userInput.addEventListener('keydown', getValue);
    userInput.addEventListener('change', getValue);
  }

  function getValue() {
    var regex = /\s+/gi;
    var value = userInput.value;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    console.log(wordCount);
  }

};
