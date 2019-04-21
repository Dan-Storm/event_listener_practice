console.log('great jerb!');
//Practice exercise 1

//Variable to store the input and print it to the dom
const saywhat = document.querySelector("#output1");
//Variable to store the input and print it to the dom
const saywhat2 = document.querySelector("#output2");
//store user input
const inputArea = document.querySelector("#message");
//Update text content of output 1 and 2.
inputArea.addEventListener("keyup", function (event) {
    saywhat.textContent = event.target.value;
    saywhat2.textContent = event.target.value;
});

//Practice exercise 2

//Transforming box from practice exercise 2
const audrey = document.getElementById("audrey")

document.addEventListener('scroll', function (event) {
    /*
        Add an event listener to the `document` object to listen
        for the "scroll" event.
    */
    audrey.style.width = `${(scrollY * .75)}px`;
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

    audrey.style.height = `${(scrollY * .19)}px`;
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */

    //Increase font size with scroll
    audrey.style.fontSize = `${(scrollY * .055)}px`;

    //Increase font opacity with scroll
    audrey.style.opacity = `${(scrollY * .0009)}`;
})