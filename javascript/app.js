// Variables
const quote = document.querySelector(".quotation")
const author = document.querySelector(".author")
const downloadBtn = document.getElementById("profile-cv")
const contact = document.getElementById("contact")
const skills = document.getElementById("skills")


generateRandOmQuote();
setInterval(generateRandOmQuote, 86400000)

// Event listners
downloadBtn.addEventListener("click", getDownloadFile)

contact.addEventListener("click", ()=>{
    contact.style.color = "green"
    window.location.href = "contact.html";
})

skills.addEventListener("click", ()=>{
    skills.style.color = "green"
    window.location.href = "skills.html"
})

// Functions

function generateRandOmQuote(){
    fetch("https://famous-quotes4.p.rapidapi.com/random?category=all&count=2",{
        method:'GET',
        headers:{
            'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com', // API host
            'X-RapidAPI-Key': '31fb4a9c44msh5b240862ddffaa7p1d407ejsnfeb85972bfe5' // Your API Key
        }
    })
    .then(response=>response.json())
    .then(data=>{
        // const quotation = `"${data[0].text}" - ${data[0].author}`
        // console.log(quotation)
        quote.innerText = `"${data[0].text}"`
        author.innerText = `-- ${data[0].author}`
    })
    .catch(error=>{
        console.log('Error fetching quote:', error)
    })
}

function getDownloadFile(){
    var link = document.createElement('a');
    link.href = "assets/SarathKumar Yeduru.pdf"
    link.download = "Resume.pdf"

    link.click()
}