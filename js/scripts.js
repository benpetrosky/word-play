$(function() {
  $("form").submit(function(event) {
    var sentenceInput = $("input#sentence").val();
// The quick brown fox jumps over the lazy dog
    for (var index = 0; index <= sentenceInput.length; index ++) {
      var sentenceInput = sentenceInput.replace("a","-");
      var sentenceInput = sentenceInput.replace("e","-");
      var sentenceInput = sentenceInput.replace("i","-");
      var sentenceInput = sentenceInput.replace("o","-");
      var sentenceInput = sentenceInput.replace("u","-");
    }


    $(".sentence").text(sentenceInput);


    $("#story").show();

    event.preventDefault();
  });

});






















// $(document).ready(function(){
//   $("#formOne").submit(function(event) {
//
//     var userInput = $("input#userInput").val(){
//
//     $(".answer").text(userInput)
//     };
//     //
//
//     // var puzzle = ["#formOne"]
//     // // var vowels = ["a", "e", "i", "o", "u"]
//     // // puzzle.toString();
//     // // vowels.toString();
//     // // for (var index = 0; index < puzzle.length; index += 1) {
//     // //   puzzle[index]
//     // // }
//     $("#output").show();
//
//     event.preventDefault();
//
//   });
//
// });
