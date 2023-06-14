
function getQuote(){

    var quotes = 
    [{img: "https://vignette.wikia.nocookie.net/bobsburgerpedia/images/b/b7/Gene_Belcher.png/revision/latest?cb=20130114043308",
    title: "<strong>LIFE SHARING:</strong> ",
      text: "<br><br>Originally commissioned by the <i>Walker Art Center</i> and curated by Steve Dietz, Life Sharing by Eva and Franco Mattes (0100101110101101.org) was a radical gesture of self-surveillance. For three years, the couple made the contents of their home computer accessible to the public. All of the contents including files, emails, bank statements, and so on were available in real time to be read, copied, and downloaded.<br>Life Sharing was a proto-typical meditation on living online. Made long before social medias widespread influence, the work pointed towards the blurring of the public and private spheres that characterize our current moment. A performance, a provocation, and a site of exchange, the project was based on the idea that <i>file sharing=life sharing</i>, suggesting that life had become inextricably enmeshed in digital culture and the network.<br><br>",
},
     {img:"https://i.pinimg.com/750x/6d/9b/89/6d9b897774705d17ad957a8f557ed753.jpg",
     title:"<strong>NINE EYES OF GOOGLE STREET VIEW:</strong>",
     text: "<br><br>Nine Eyes of Google Street View is both an archival project and a conceptual meditation on the state of photography in a time of automated imagemaking on a massive scale.<br>In 2008, Jon Rafman began to <b>collect</b> screenshots of images from Google Street View. At the time, Street View was a relatively new initiative, an effort to document everything in the world that could be seen from a moving car. A massive, undiscerning machine for image-making whose purpose is to simply <b>capture</b> everything, Street View takes photographs without apparent concern for ethics or aesthetics, from a supposedly neutral point of view.<br>Rafman conducted a close reading of Google Street View and began to isolate images from this massive database, publishing them on blogs, as PDFs, in books, and as large C-prints for gallery exhibition. In so doing, he <b>reframed</b> them within longer histories of photography and painting, raising questions about the meaning and function of these images and their implications for artists and image-makers.<br><br>",
      },
     
    ];
    
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
}
    
    window.onload=getQuote;
    
    
    function quote(){
    var quoteArray = ["(...) the concept of apppropriation is multifarious and unclear. The introduction of privately run commercial internet services and the mass availability of personal computers ignited massive cultural shifts that challenge previous understandings of appropriation in art.","The last hundred years of work indicate that it’s demonstrably impossible to destroy or dematerialize Art, which, like it or not, can only gradually expand, voraciously synthesizing every aspect of life. Meanwhile, we can take up the redemptive circulation of allegory through design, obsolete forms and historical moments, genre and the vernacular, the social memory woven into popular culture: a private, secular, and profane consumption of media. Production, after all, is the excretory phase in a process of appropriation.","The use of appropriation in internet art today comes organically as a natural practice of experiencing life online. We as internet users can easily relate to that. Generations that have experienced living with the internet share a common understanding of what it feels like spending numerous hours online following one link after the other, ending up consuming content without knowing how you ended up there"]
    var authorArray = ["It’s Just the Internet! Appropriation in Post Internet Art","Seth Price Two Statements on Carnivore, Dispersion, in Mass Effect p. 68 2015","It’s Just the Internet! Appropriation in Postinternet Art"]
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

let oneImages = ["https://i.pinimg.com/750x/6d/9b/89/6d9b897774705d17ad957a8f557ed753.jpg","https://i.pinimg.com/750x/c1/10/6d/c1106dcd878763077b271177eb71f327.jpg", "https://i.pinimg.com/750x/fc/a5/cb/fca5cb4c5b1d994ebb2c7f4f2bacceb9.jpg",
                ]

let randomImageURL = oneImages[Math.floor(Math.random() * oneImages.length)];

console.log(randomImageURL)

myElement.innerHTML += "<img src='" + randomImageURL + "'>"



    
  




    
