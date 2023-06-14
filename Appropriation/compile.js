  
    
    function quote(){
        var quoteArray = ["","",""]
        var authorArray = ["","",""]
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
    