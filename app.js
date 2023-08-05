const sliderItems = document.getElementsByClassName('slider-item');


//Assign Random colour to background circle
for (let i = 0; i < sliderItems.length; i++) {
  const sliderBg = sliderItems[i].getElementsByClassName('slider-bg')[0];
  const randomColor = getRandomColor();
  sliderBg.style.backgroundColor = randomColor;
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