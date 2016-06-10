define([], function() {
  function LetterArrangement() {
  }

  /**
   * Renders game into container
   * @param  {HTMLElement} container
   */
  LetterArrangement.prototype.render = function(container) {
    var context = {
          imgUrl: "assets/images/cow.jpg",
          letters: [
            {
             letter: "C",
            },
            {
              letter: "K",
            },
            {
              letter: "O",
            },
            {
              letter: "W"
            },
            {
              letter: "G"
            }
          ]
      };

    var source = document.getElementById("entry").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(context);
    container.innerHTML = html;
  };

  var container = document.getElementById("gameSection");
  var letterArrangement = new LetterArrangement();

  return letterArrangement.render(container);
});
