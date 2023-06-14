  
    
    function quote(){
        var quoteArray = ["Détournement is “to divert,” “to distract,” or “to re-direct” – the artist appropriates a media image and re-contextualizes it in order to negate its value as a fetishized commodity","Today, in the third decade of the public Internet, digital culture can- not be thought separately from memory-based making, so prominently do postmodern makers’ techniques (influenced by earlier movements, including Dada, surrealism, and situationism), such as collage, bricolage, intertextuality, détournement, culture jamming, and nostalgic reference, feature in digital creativity.","For the Situationists, the power of détournement, the transformation of pre-existing elements in a new ensemble, “stems from the double meaning, from the enrichment of most of the terms by the coexistence within them of their old and new senses."]
        var authorArray = ["Post Internet. Notes on the Internet and Art by Gene McHugh, 2019","Rogue Archives- Digital Cultural Memory and Media Fandom by Abigail De Kosnik, 2016","Marcus Boon - In Praise of Copying, 2013"]
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
    