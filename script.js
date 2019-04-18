console.log('great jerb!');

const saywhat = document.querySelector("#output1");

const saywhat2 = document.querySelector("#output2");

const inputArea = document.querySelector("#message");

inputArea.addEventListener("keyup", function(event){
    // console.log("what is event", event);
    saywhat.textContent = event.target.value;
    saywhat2.textContent = event.target.value;
});