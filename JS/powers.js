
//Practice exercise 3

//Activate flight button
document.querySelector("#activate-flight").addEventListener("click", function(){
    enable('flight');
})
//Activate mindreading button
document.querySelector("#activate-mindreading").addEventListener("click", function(){
    enable('mindreading');
})
//Activate xray button
document.querySelector("#activate-xray").addEventListener("click", function(){
    enable('xray');
})
//Activate all button
document.querySelector("#activate-all").addEventListener("click", function all(){
    enable("xray");
    enable("mindreading");
    enable('flight');
})
//Deactivate all button
document.querySelector("#deactivate-all").addEventListener('click', function(){
    disable("xray");
    disable("mindreading");
    disable('flight');
})

//Function to add enabled and flashIt classes and remove disabled class
function enable(elementId){
        var xElement = document.getElementById(elementId);
        xElement.classList.remove("disabled");
        xElement.classList.add("enabled");
        xElement.classList.add("flashIt")
}
//Function to remove enabled and flashIt classes and add disabled class
function disable(elementId){
        var yElement = document.getElementById(elementId);
        yElement.classList.add('disabled');
        yElement.classList.remove('enabled');
        yElement.classList.remove('flashIt');
}        
 
//Variant method of solving this problem below 

// const powerDivs = document.querySelectorAll('.power');
// console.log(powerDivs);

// const toggle = {
//     on: function () {
//         powerDivs.forEach(powerDiv => {
//         powerDiv.classList.add('enabled')
//         powerDiv.classList.remove('disabled')d
//     })},
//     off: function () {
//         powerDivs.forEach(powerDiv => {
//             console.log('div id', powerDiv.id)
//         powerDiv.classList.add('disabled')
//         powerDiv.classList.remove('enabled')
//     })},   
        
// }

// function addPower(power){
//     console.log(power);
// }

// const activateAllButton = document.querySelector("#activate-all");
// const deactivateAllButton = document.querySelector("#deactivate-all");

// console.log("activate mind button id", mind.id.slice(9));

// activateAllButton.addEventListener('click', toggle.on);
// deactivateAllButton.addEventListener('click', toggle.off);

// addPower('flight');