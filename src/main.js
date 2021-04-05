// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var userCover = document.getElementById('cover');
var userDesc1 = document.getElementById('descriptor1');
var userDesc2 = document.getElementById('descriptor2');
var userTitle = document.getElementById('title');

//BUTTON VARS
var createNewBookBtn = document.querySelector('.create-new-book-button');
var homeBtn = document.querySelector('.home-button');
var makeYourOwnCoverBtn = document.querySelector('.make-new-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var showRandomCoverBtn = document.querySelector('.random-cover-button');
var viewSavedBtn = document.querySelector('.view-saved-button');

//PAGE AREA VARS
var formArea = document.querySelector('.form-view');
var homePageArea = document.querySelector('.home-view');
var savedCoversArea = document.querySelector('.saved-view');

// We've provided a few variables below this
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', randomCover);
createNewBookBtn.addEventListener('click', createNewBook);
homeBtn.addEventListener('click', exposeHomePage);
makeYourOwnCoverBtn.addEventListener('click', hideHomePage);
saveCoverBtn.addEventListener('click', addCoverToSaved);
savedCoversArea.addEventListener('dblclick', deleteSavedCover);
showRandomCoverBtn.addEventListener('click', randomCover);
viewSavedBtn.addEventListener('click', showSavedArea);

// Create your event handlers and other functions here 👇
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomCover(event) {
  event.preventDefault();
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);
};


function createNewBook(event) {
  event.preventDefault();
  if (userCover.value !== '' && userTitle.value !== '' && userDesc1.value !== '' && userDesc2.value !== '') {
    currentCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
    saveUserValuesToRespectiveArrays();
    formAddHidden();
    homeRemoveHidden();
    saveCoverBtnRemoveHidden();
    loadCoverElements();
    popDescriptors();
  }
};

function addCoverToSaved() {
  if(!savedCovers.includes(currentCover)) {
  savedCovers.push(currentCover);
  }
};

function deleteSavedCover() {
  var coverToTrash = event.target.closest('.mini-cover');
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === Number(coverToTrash.id)) {
      savedCovers.splice([i], 1);
      clearSavedAreaInnerHTML();
      displaySavedCovers(savedCovers);
    }
  }
};

function displaySavedCovers(savedCovers) {
  clearSavedAreaInnerHTML();
  for (var i = 0; i < savedCovers.length; i++) {
    var savedMiniCover =
      `
      <section class="saved-covers-section mini-cover" id=${savedCovers[i].id}>
        <img class="cover-image" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>
     `
     savedCoversArea.insertAdjacentHTML('afterbegin', savedMiniCover);
   }
};

function clearSavedAreaInnerHTML() {
  savedCoversArea.innerHTML = '';
}

function popDescriptors() {
  tagline2.innerText = descriptors.pop();
  tagline1.innerText = descriptors.pop();
};

function saveUserValuesToRespectiveArrays() {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value, userDesc2.value);
};

function loadCoverElements() {
  coverImage.src = covers.pop();
  coverTitle.innerText = titles.pop();

};
// HIDE PAGE AREA FUNCTIONS TO REFACTOR
function hideHomePage() {
  homeAddHidden();
  formRemoveHidden();
  savedAreaAddHidden();
  homeBtnRemoveHidden();
  saveCoverBtnAddHidden();
  showRandomCoverBtnAddHidden();
};

function showSavedArea() {
  addMiniClassToSavedCoversArea();
  homeAddHidden();
  savedAreaRemoveHidden();
  formAddHidden();
  showRandomCoverBtnAddHidden();
  saveCoverBtnAddHidden();
  homeBtnRemoveHidden();
  displaySavedCovers(savedCovers);
};

function exposeHomePage() {
  homeRemoveHidden();
  formAddHidden();
  savedAreaAddHidden();
  saveCoverBtnRemoveHidden();
  showRandomCoverBtnRemoveHidden();
  homeBtnAddHidden();
};

function homeAddHidden() {
  homePageArea.classList.add('hidden');
};

function homeRemoveHidden() {
  homePageArea.classList.remove('hidden');
};

function formAddHidden() {
  formArea.classList.add('hidden');
};

function formRemoveHidden() {
  formArea.classList.remove('hidden');
};

function savedAreaAddHidden() {
  savedCoversArea.classList.add('hidden');
};

function savedAreaRemoveHidden() {
  savedCoversArea.classList.remove('hidden');
};

function saveCoverBtnAddHidden() {
  saveCoverBtn.classList.add('hidden');
};

function saveCoverBtnRemoveHidden() {
  saveCoverBtn.classList.remove('hidden');
};

function showRandomCoverBtnAddHidden() {
  showRandomCoverBtn.classList.add('hidden');
};

function showRandomCoverBtnRemoveHidden() {
  showRandomCoverBtn.classList.remove('hidden');
};

function homeBtnAddHidden() {
  homeBtn.classList.add('hidden');
};

function homeBtnRemoveHidden() {
  homeBtn.classList.remove('hidden');
};

function addMiniClassToSavedCoversArea() {
  savedCoversArea.classList.add('mini-cover');
};
