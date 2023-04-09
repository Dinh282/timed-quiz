window.onload = function () {


    // const userInitial = document.getElementById("user-initial").value;
    // const score = timeRemaining;
    // const playerScore = {userInitial, score};


    var scoreList = JSON.parse(localStorage.getItem('scoreList')) || [];
    
    // scoreList.push(playerScore);
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
    
    
    const hsListElement = document.getElementById("hs-entries");
     
        hsListElement.textContent = '';
   
    
    for(var i = 0; i < scoreList.length; i++) {
        var s = scoreList[i];
       var hsEntry = document.createElement('li');

        hsEntry.textContent = `${s.userInitial} - ${s.score}`;
       
        hsListElement.appendChild(hsEntry);
        
    }



}