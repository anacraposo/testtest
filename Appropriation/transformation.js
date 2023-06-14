  
    
    function quote(){
        var quoteArray = ["(...) as “individuals” are changing the nature of the information age, [...] the creators and consumers of user-generated content are transforming art and politics and commerce, [...] they are the engaged citizens of a new digital democracy.","Networked computing allows for multiple transmediations and transformations of cultural texts, and the constant circulation, in online spaces, of those reworkings.","Transmediations and transformations are, in part, rememberings of culture-that- came- before; they are premised on a large-scale understanding of both individual texts as archives and of culture-as-archive, with online sharings of such appropriations constituting augmentations of the cultural archive."]
        var authorArray = ["Digital Folklore edited by Olia lialina & Dragan Espenschied, 2009","Rogue Archives- Digital Cultural Memory and Media Fandom by Abigail De Kosnik, 2016"]
        var quoteNumber = randomNumber(quoteArray.length,currentNumber)
        var quoteBody = quoteArray[quoteNumber]
        var quoteAuthor = authorArray[quoteNumber]
        currentNumber = quoteNumber
        document.getElementById("quoteBodyDesktop").innerHTML = '"' + quoteBody + '"'
        document.getElementById("quoteAuthorDesktop").innerHTML = quoteAuthor
        document.getElementById("quoteBodyMobile").innerHTML = '"' + quoteBody + '"'
        document.getElementById("quoteAuthorMobile").innerHTML = quoteAuthor
        
        var quoteAuthorURI = encodeURIComponent(quoteAuthor)
        }
        
    
    
        function randomNumber(numQuotes,previousNumber) {
        var number = Math.floor(Math.random() * numQuotes)
        if (previousNumber === null) {
        return number;
        }
        while (number === previousNumber) {
          number = Math.floor(Math.random() * numQuotes)
        }
        return number
        }
        
        var currentNumber = null;
        
        window.onload = quote;
    
    
    
    
        let myElement = document.getElementById("myDiv");
    
    let oneImages = ["https://i.pinimg.com/564x/52/0e/45/520e453a3de9a57ae1fe4cfd4f57e26e.jpg","https://i.pinimg.com/474x/1a/7e/a3/1a7ea3ad63558a0e1ab5a1252cbbbde0.jpg",
                    ]
    
    let randomImageURL = oneImages[Math.floor(Math.random() * oneImages.length)];
    
    console.log(randomImageURL)
    
    myElement.innerHTML += "<img src='" + randomImageURL + "'>"
    