  
    
    function quote(){
        var quoteArray = ["(...) the postproduction practice of pulling together sets of pre-authored images and information is as much an act of creation as making the images oneself.","This art of postproduction seems to respond to the proliferating chaos of global culture in the information age, which is characterized by an increase in the supply of works and the art world’s annexation of forms ignored or disdained until now","What unites the various configurations of the artistic use of the world gathered under the term postproduction is the scrambling of boundaries between consumption and production."]
        var authorArray = ["Los Angeles County Museum of Art Words without Pictures, p.232 2007","Nicolas Bourriaud- Postproduction: How art reprograms the world, p. 6, 2002","Nicolas Bourriaud- Postproduction: How art reprograms the world, p. 9, 2002 "]
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
    