

let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

darkThemeButton.onclick = function () {
  document.body.classList.add('dark');
  darkThemeButton.classList.add('active');
  lightThemeButton.classList.remove('active');
};

lightThemeButton.onclick = function () {
  document.body.classList.remove('dark');
  lightThemeButton.classList.add('active');
  darkThemeButton.classList.remove('active');
};
serifFontButton.onclick = function () {
  document.body.classList.add('serif');
  sansSerifFontButton.classList.remove('active');
  serifFontButton.classList.add('active');
};


sansSerifFontButton.onclick = function () {
  // код переключения шрифта
  document.body.classList.remove('serif');
  sansSerifFontButton.classList.add('active');
  serifFontButton.classList.remove('active');
};


let articleSections = document.querySelectorAll('.main-article-section.short');

for (let articleSection of articleSections) {
  let moreButton = articleSection.querySelector('.more');
  moreButton.onclick = function () {
    articleSection.classList.remove('short');
  };
}
