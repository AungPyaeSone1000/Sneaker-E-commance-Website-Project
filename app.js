const sliderWrapper = document.getElementsByClassName("slider-wrapper")[0];
const sliderItems = document.getElementsByClassName("slider-item");
const menuItems = document.querySelectorAll(".menu-item");
const currentProductImg = document.getElementsByClassName("product-img")[0];
const currentProductTitle = document.getElementsByClassName("product-title")[0];
const currentProductPrice = document.getElementsByClassName("product-price")[0];
const currentProductColours = document.querySelectorAll(".colour");
const currentProductSize = document.querySelectorAll(".size");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let chosenProduct = products[0];


//Assign Random colour to background circle and price tag
for (let i = 0; i < sliderItems.length; i++) {
  const sliderBg = sliderItems[i].getElementsByClassName('slider-bg')[0];
  const sliderPrice = sliderItems[i].getElementsByClassName('slider-price')[0];
  const randomColor = getRandomColour();
  sliderBg.style.backgroundColor = randomColor;
  sliderPrice.style.color = randomColor;
}

//Random colour generator
function getRandomColour() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
      //Slider Animation
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
      //Assign product for cooresponding each slide
        chosenProduct = products[index];
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;
        currentProductColours.forEach((colour,index)=>{
          colour.style.backgroundColor=chosenProduct.colors[index].code;
        })
    })
})

//Change Img according to colour
currentProductColours.forEach((colour,index)=>{
  colour.addEventListener("click",()=>{
    currentProductImg.src = chosenProduct.colors[index].img;
  })
})

//Add style for size
currentProductSize.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSize.forEach((size)=>{
      size.style.backgroundColor = "white";
      size.style.color = "black";
    })
    size.style.backgroundColor = "black";
    size.style.color = "white";
    
  })
})