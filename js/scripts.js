 $(document).ready(function() {
     $("form#quizBoard").submit(function(event) {
         var questionOne = $("input:radio[name=qstOne]:checked").val();
         var questionTwo = $("input:radio[name=qstTwo]:checked").val();
         var questionThree = $("input:radio[name=qstThree]:checked").val();
         var questionFour = $("input:radio[name=qstFour]:checked").val();
         var questionFive = $("input:radio[name=qstFive]:checked").val();

         var totalScore = parseInt(questionOne) + parseInt(questionTwo) + parseInt(questionThree) + parseInt(questionFour) + parseInt(questionFive);
         $("#totalScore").text("Total Score " + totalScore + "mks");
         $("form#quizBoard").hide();
         event.preventDefault();
         $("result#totalScore").show();
     });
 });