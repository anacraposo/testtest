  
    
    function quote(){
        var quoteArray = ["More than any other art form, net art entails shifts in context, since it is potentially mutable and can evolve through different versions due to contributions by the public and changes in its habitat, the Internet. (Traditional artworks can also go through different versions but these are mostly the result of a more controlled reinterpretation of the work by the artist or an art institution)."," Free culture shunts aside print-era conceptions of copyright, authorship, textuality, and collective memory, and seeks to replace them with copyleft, a cultural commons that gives onto collaborative creativity, a widespread acknowledgment and acceptance o versioning (which resembles performance far more than writing), and rogue archives","Consider the dream of hypermedia, put forth by Ted Nelson and others over the last three decades: (...) That everyone have the ability to produce their own documents, and connect them with any other public documents. That the author may constantly create new versions of his or her own document, and individuals may create their own versionsof any public document."]
        var authorArray = ["Christiane Paul - Context and Archive: Presenting and Preserving Net-based Art","Abigail De Kosnik - Rogue Archives, Digital Cultural Memory and Media Fandom, 2016","Abigail De Kosnik - Rogue Archives, Digital Cultural Memory and Media Fandom, 2016"]
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
    
    
    
        
      
    
    