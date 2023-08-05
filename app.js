const sliderWrapper = document.getElementsByClassName("slider-wrapper")[0];
const sliderItems = document.getElementsByClassName("slider-item");
const menuItems = document.querySelectorAll(".menu-item");


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
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
    })
})