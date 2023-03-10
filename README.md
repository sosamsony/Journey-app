
# Journey Planner by Samson Sanyaolu (TASK ANSWER)
This project is a journey planner that takes an unordered set of boarding passes and produces a description of how to complete the journey. The boarding passes are stored in a JSON array and the description of the journey is output to a web page.


## Prerequisites
A web browser (e.g. Google Chrome, Mozilla Firefox, Microsoft Edge)


## Running the External Sorting Project
Download the project files from the repository.
Open the External Sorting Folder.
Open the exSorting.html file in a web browser.
Copy and Past the given JSON array in the input field
Click the "Sort and Plan Journey" button to shuffle the array of boarding passes and output a description of the journey.

## Running the Internal Sorting Project
Download the project files from the repository.
Open the Internal Sorting Folder.
Open the intSorting.html file in a web browser.
Click the "Sort and Plan Journey" button to shuffle the array of boarding passes and output a description of the journey.


## Sorting Algorithm
The sorting algorithm used in this project is a simple comparison sort that sorts the array of boarding passes by the 'from' location. The complexity of the algorithm is O(n * log(n)), as it uses the built-in sort method of the JavaScript Array object, which has a complexity of O(n * log(n)).


## Extending the code towards New Types of Transportation
To extend the code to support new types of transportation, you can add new properties to the JSON objects in the boardingPasses array to store any relevant information about the new transportation types. For example, if you want to support boats, you could add a new deck property to the JSON objects to store the deck number where the passenger's cabin is located.
You can then modify the generateJourneyDescription function to output the description of the journey for the new transportation types. For example, you can add a new case to the function to handle the boat type and output the deck number in the description of the journey.

## Assumption:
It is assumed that the JSON objects in the boardingPasses array will always have a type property with a string value that represents the type of transportation (e.g. 'train', 'airplane', 'bus', 'boat').


## Tech Stack
- HTML5
- Javascript ES6
- Given API

# Contact:
> My Email: samsonosanyaolu@gmail.com.com or hello@sosamson.com

<br />
<a target="_blank" href="https://sosamson.com">
  <img src="https://sosamson.com/static/media/me.46fe38dcac1824f4760e.png" alt="Powered by Samson">
</a>


# Thank You!
