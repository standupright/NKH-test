const navList = document.querySelectorAll(".nav__link");
const sliderList = document.querySelectorAll(".slider-list__item");

const addSliderClickHandler = (button, slide) => {
  button.addEventListener("click", () => {
    for (var i = 0; i < navList.length; i++) {
      sliderList[i].classList.remove("slider-list__item--current");
      navList[i].classList.remove("nav__link--current");
    }
    slide.classList.add("slider-list__item--current");
    button.classList.add("nav__link--current");
  });
};

for (var i = 0; i < navList.length; i++) {
  addSliderClickHandler(navList[i], sliderList[i]);
}

const accordeonButtons = document.querySelectorAll(".accordeon__button");

const addAccordeonButtonsHandler = function (button) {
  button.addEventListener("click", function () {
    this.classList.toggle("accordion__button--active");
    debugger;
    let wrapper = this.nextElementSibling;
    if (wrapper.style.maxHeight) {
      wrapper.style.maxHeight = null;
    } else {
      wrapper.style.maxHeight = wrapper.scrollHeight + "px";
    }
  });
}

for (let i = 0; i < accordeonButtons.length; i++) {
  addAccordeonButtonsHandler(accordeonButtons[i]);
}
