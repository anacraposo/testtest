  
    
    function quote(){
        var quoteArray = ["In this fluid media space, images and sounds morph across different bodies and carriers, acquiring more and more glitches and bruises along the way","The terms ‘glitch’ and ‘corruption artefacts’ in the broadest sense refer to images and objects that have been tampered with; their creation relates to the core of the media apparatuses used to store, produce and relay information.","Rather than painting, welding, and molding, artistic strike work consists of ripping, chatting, and posing. This accelerated form of artistic production creates punch and glitz, sensation and impact."]
        var authorArray = ["Hito Steyerl- Too Much World: Is the Internet Dead? P.6, 2013 ","David M. Berry- Postdigital Aesthetics Art, Computation and Design, p. 31, 2015","Hito Steyerl- The Wretched of the Screen, p.95 2012"]
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
    