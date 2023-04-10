const clearBtn = document.getElementById("clear-hs-btn");

//the onload event is fired when the window object has been loaded. 
window.onload = function () {

    //we grab the scoreList array from local storage
    var scoreList = JSON.parse(localStorage.getItem('scoreList')) || [];
    const hsListElement = document.getElementById("hs-entries");
    //we use the .sort method to sort our array of player and their scores. The method 
    // compares two objects based on their "score" property.
    scoreList.sort((a, b) => b.score - a.score);
    const maxLength = 15;
    //this condition is to shorten the list of high scores to a max length of 10.
    //if the scoreList exceeds 10 entries, we use the slice method to take values from index 0 to maxlength.
    if (scoreList.length > maxLength){
        scoreList = scoreList.slice(0, maxLength);
     }
    
    //using for loop to populate the high score list and render it to page
    for(var i = 0; i < scoreList.length; i++) {
        var entry = scoreList[i];
        var hsEntry = document.createElement('li');
        hsEntry.textContent = `${entry.userInitial} - ${entry.score}`;
        hsListElement.appendChild(hsEntry);
        hsListElement.setAttribute('class', "hs-entries");
    }
}

clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});