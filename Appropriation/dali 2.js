

function getQuote(){

  var quotes = 
  [{img: "https://i.pinimg.com/750x/6d/9b/89/6d9b897774705d17ad957a8f557ed753.jpg",
  title: "<strong>LIFE SHARING:</strong> ",
    text: "<br><br>Originally commissioned by the <i>Walker Art Center</i> and curated by Steve Dietz, Life Sharing by Eva and Franco Mattes (0100101110101101.org) was a radical gesture of self-surveillance. For three years, the couple made the contents of their home computer accessible to the public. All of the contents including files, emails, bank statements, and so on were available in real time to be read, copied, and downloaded.<br>Life Sharing was a proto-typical meditation on living online. Made long before social medias widespread influence, the work pointed towards the blurring of the public and private spheres that characterize our current moment. A performance, a provocation, and a site of exchange, the project was based on the idea that <i>file sharing=life sharing</i>, suggesting that life had become inextricably enmeshed in digital culture and the network.<br><br>",
},
   {img:"https://i.pinimg.com/750x/c1/10/6d/c1106dcd878763077b271177eb71f327.jpg",
   title:"<strong>NINE EYES OF GOOGLE STREET VIEW:</strong>",
   text: "<br><br>Nine Eyes of Google Street View is both an archival project and a conceptual meditation on the state of photography in a time of automated imagemaking on a massive scale.<br>In 2008, Jon Rafman began to <b>collect</b> screenshots of images from Google Street View. At the time, Street View was a relatively new initiative, an effort to document everything in the world that could be seen from a moving car. A massive, undiscerning machine for image-making whose purpose is to simply <b>capture</b> everything, Street View takes photographs without apparent concern for ethics or aesthetics, from a supposedly neutral point of view.<br>Rafman conducted a close reading of Google Street View and began to isolate images from this massive database, publishing them on blogs, as PDFs, in books, and as large C-prints for gallery exhibition. In so doing, he <b>reframed</b> them within longer histories of photography and painting, raising questions about the meaning and function of these images and their implications for artists and image-makers.<br><br>",
    },
  ];
  
  
  
  var random = quotes[Math.floor(Math.random() * (quotes.length))];
  
  document.getElementById("myDisplay").innerHTML = "<p> "+ random.title+ random.text  + "<img src=" + random.img + ">" + "</p>";
  
  };
  
  window.onload=getQuote;
  
  
  



  let myElement = document.getElementById("myDiv");

let oneImages = ["https://i.pinimg.com/750x/6d/9b/89/6d9b897774705d17ad957a8f557ed753.jpg","https://i.pinimg.com/750x/c1/10/6d/c1106dcd878763077b271177eb71f327.jpg", "https://i.pinimg.com/750x/fc/a5/cb/fca5cb4c5b1d994ebb2c7f4f2bacceb9.jpg",
              ]

let randomImageURL = oneImages[Math.floor(Math.random() * oneImages.length)];

console.log(randomImageURL)

myElement.innerHTML += "<img src='" + randomImageURL + "'>"





    
  




    
