// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var showRandomCoverBtn = document.querySelector('.random-cover-button');
var makeYourOwnCoverBtn = document.querySelector('.make-new-button');
var formArea = document.querySelector('.form-view');
var homePageArea = document.querySelector('.home-view');
var saveCoverBtn = document.querySelector('.save-cover-button');
var homeBtn = document.querySelector('.home-button');
var viewSavedBtn = document.querySelector('.view-saved-button');
var savedCoversArea = document.querySelector('.saved-view');


// We've provided a few variables below this
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', randomCover);
showRandomCoverBtn.addEventListener('click', randomCover);
makeYourOwnCoverBtn.addEventListener('click', hideHomePage);
viewSavedBtn.addEventListener('click', showSavedArea);
homeBtn.addEventListener('click', exposeHomePage);




// Create your event handlers and other functions here 👇
function randomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);
  console.log(currentCover);
};


function hideHomePage() {
formArea.classList.remove('hidden');
homePageArea.classList.add('hidden');
saveCoverBtn.classList.add('hidden');
showRandomCoverBtn.classList.add('hidden');
homeBtn.classList.remove('hidden');
};


function showSavedArea() {
  homePageArea.classList.add('hidden');
  savedCoversArea.classList.remove('hidden');
  showRandomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
};

function exposeHomePage() {
  homePageArea.classList.remove('hidden');
  formArea.classList.add('hidden');
  showRandomCoverBtn.classList.remove('hidden');
  saveCoverBtn.classList.remove('hidden');
};

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
