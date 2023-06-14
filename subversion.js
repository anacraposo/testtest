  
    
    function quote(){
        var quoteArray = ["In Paul Cronin’s 2004 documentary, Film as a Subversive Art: Amos Vogel and Cinema 16, Vogel states his definition of the word subversive as “anything that changes or undermines previous ways of thinking and feeling. Subversive art makes you look at things in a new and very different way. It disrupts. It destroys, and thereby builds up new realities and new truths.","The art of subversion, of revolution, is to dislodge established customs by probing down to their origins in order to show how they lack authority and justice.","The art of subversion, of revolution, is to dislodge established customs by probing down to their origins in order to show how they lack authority and justice."]
        var authorArray = ["Blaise Pascal (1966). “Pascal Pensées”, Penguin Classics","Blaise Pascal (1966). “Pascal Pensées”, Penguin Classics","Blaise Pascal"]
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
    