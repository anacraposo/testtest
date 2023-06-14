  
    
    function quote(){
        var quoteArray = ["One way to read the readymade is to say that it shifts an ordinary object into a different context and, by doing so, allows the viewer of the work to see it for itself – divorced from any use value.","With the unassisted readymade,art changed its focus from the form of the language to even his own mother and father.","Man can never expect to start from scratch; he must start from ready-made things, like even his own mother and father"]
        var authorArray = ["Post Internet. Notes on the Internet and Art by Gene McHugh, 2019","Media Appropriation and Explicitation by Tomás Laurenzo, 2016","Marcel Duchamp in a Interview with Katherine Kuh, 1961, in The Artist’s Voice: Talks with Seventeen Artists (New York/Evanston: Harper & Row, 1962), p. 90."]
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
    