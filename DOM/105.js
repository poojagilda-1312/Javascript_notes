//get set attribute
const link1 = document.querySelector("a")
console.log(link1.getAttribute("href"))
console.log((link1.getAttribute("href")).slice(1));
link1.setAttribute("href" ,"http://5200.com")
console.log(link1.getAttribute("href"))

const link = document.querySelector(".form-group input")
console.log(link.getAttribute("type"))

