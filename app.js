// Add DOM selectors to target input and UL movie list
var inp = document.querySelector("input");
var myMovieList = document.querySelector("ul");
var h5 = document.getElementById("movieHistory");

// Example of a simple function that clears the input after a user types something in
function clearInput() {
    inp.value = "";
}

function clearMovies() {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    myMovieList.innerHTML = '';
}

// This function is executed when the user clicks [ADD MOVIE] button.
function addMovie() {
    // Step 1: Get value of input
    var userTypedText = inp.value;
    // Step 2: Create an empty <li></li>
    var li = document.createElement("li"); // <li></li>

    // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
    var textToInsert = document.createTextNode(userTypedText);

    // Step 4: Insert text into li
    // <li>Harry Potter </li>
    li.appendChild(textToInsert);

    // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
    myMovieList.appendChild(li);

    // Step 6: Call the clearInput function to clear the input field
    clearInput();

    //create <table></table>
    var tableElement = document.createElement("TABLE");
    //append <table></table> to <h5 id ="movieHistory"></h5>
    h5.appendChild(tableElement);
    // create<tr></tr>
    var tableRow = document.createElement("TR");
    // append <table> <tr></tr> </table>
    tableElement.appendChild(tableRow);
    //create <th></th>
    var tableHead = document.createElement("TH");
    // prepare text node to insert to <th></th>
    var firstHead = document.createTextNode("Name of movies");
    tableHead.appendChild(firstHead);
    // prepare text node to insert to <th></th>
    var secondHead = document.createTextNode("Number of times watch");
    tableHead.appendChild(secondHead);
    // append <th> to <tr>
    tableRow.appendChild(tableHead);
    //create <td></td>
    var tableData = document.createElement("TD");
    //prepare text to insert <td> user input </td>
    var movieName = document.createTextNode(userTypedText);
    // append <td> user input </td> 
    tableData.appendChild(movieName);
    // create <tr></tr>
    var tableRow2 = document.createElement("TR");
    // set id <tr id="dataContent"></tr>
    tableRow2.appendChild(tableData);
    // append <table> <tr> <td> user input </tr> </table>
    tableElement.appendChild(tableRow2);

    var numOfWatch = document.createTextNode("0");
    tableData.appendChild(numOfWatch);

    movieHistory = {};
    //store name of movie and number of watch to object
    // check object
    movieHistory["name of movies"] = userTypedText;
    movieHistory["num of watch"] = 0;
    // length of movieHistory. check index
    if (userTypedText == Object.values(movieHistory).indexOf(0)){
        movieHistory["num of watch"] += 1;
        console.log(movieHistory["num of watch"]);
        
    }
    
}
