
const quotes = ["Hello world","Stay strong","Never give up","Code more"];
function gen(){
 let q = quotes[Math.floor(Math.random()*quotes.length)];
 document.getElementById("q").innerText = q;
}
