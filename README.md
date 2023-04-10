# Timed-Quiz

## Description

In this project, I created an interactive timed quiz using CSS, HTML, JS, and Web API. The user  must answer a multiple choice quiz where the questions and their answer choices are generated at random. They must answer all the questions within 90 seconds. Their score is the time they have remaining once the quiz is over. Every question answered incorrectly will result in a 10 seconds penalty. At the end of the quiz, the user will be able to view the result page where they are able to enter their initial to be displayed on the High Score page. 

This projects allowed me to practice traversing the DOM, learn how to actively remove and add elements, set attributes, and save and retrieve data from local storage. There were many problems I have encountered and learned how to over come them while completing this project. I learned how event listeners work and how I can control when they are fired. I had issues with dynamically adding elements to populate the highscore list, because I did not understand that the html file must be loaded fully before the having the script run. In order to address this issue, I created a separate script file for my separate html file for the highscore page and used the window.onload event. I also discovered that I can also use element.addEventListner("DOMContentLoaded", myFunction) to make sure that all the DOM content is fully loaded before my function is called. This worked if I only wanted to link my two html files to one script file. 

## Table of Contents (Optional)

N/A

## Installation

None required. Just access HTML, CSS, and JS files to examine the codes.

## Usage

1. Access the repository from https://github.com/Dinh282/timed-quiz.git. 
2. Clone repo to local machine.
3. Examine index.html file with VS Code using live server extensions. 
4. Click on the Start Quiz button to start the quiz.
5. Once done, you can enter your initial and see it displayed in the highscore page.
6. The local store can also be examine in the application tab of the inspect element tool in the chrom browser.

Alternatively:
1. Visit https://dinh282.github.io/timed-quiz/.
2. Start the quiz by clicking ont he quiz button. 
3. You can also use the inspect tool to examine the source code form the browser as well as the local storage to see what information is storage there.

Image of webpage:
![image of Timed Quiz Main Page](./Assets/images/timed-quiz-main-page-img.png.png)
![image of Timed Quiz Question](./Assets/images/question-img.png)
![image of Timed Quiz Results](./Assets/images/result-img.png)
![image of Timed Quiz Highscore Page](./Assets/images/high-score-img.png)

## Credits
1. https://www.youtube.com/@JamesQQuick (James Q Quick Youtube channel has a tutorial on how to create a quiz using JS.)
2. https://www.w3schools.com/js/js_htmldom_eventlistener.asp (Helped me with understanding event listeners)
3. https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event (Helped me understand window.onload events)
4. https://www.youtube.com/@WebDevSimplified (Web Dev simplified helped me with manipulating the DOM)
5. https://plainenglish.io/blog
23-funny-programmer-questions-30714f6d8164 (Where I got my questions for the quiz)
6. My Instructor and TAs.


## License

Please refer to the LICENSE section in the repository.

---