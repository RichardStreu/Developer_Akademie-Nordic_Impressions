// Images ################################################################

const images = [
  {
    src: "./assets/img/1ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "1",
  },
  {
    src: "./assets/img/2ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "2",
  },
  {
    src: "./assets/img/3ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "3",
  },
  {
    src: "./assets/img/4ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "4",
  },
  {
    src: "./assets/img/5ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "5",
  },
  {
    src: "./assets/img/6ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "6",
  },
  {
    src: "./assets/img/7ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "7",
  },
  {
    src: "./assets/img/8ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "8",
  },
  {
    src: "./assets/img/9ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "9",
  },
  {
    src: "./assets/img/10ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "10",
  },
  {
    src: "./assets/img/11ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "11",
  },
  {
    src: "./assets/img/12ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "12",
  },
  {
    src: "./assets/img/13ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "13",
  },
  {
    src: "./assets/img/14ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "14",
  },
  {
    src: "./assets/img/15ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "15",
  },
  {
    src: "./assets/img/16ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "16",
  },
  {
    src: "./assets/img/17ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "17",
  },
  {
    src: "./assets/img/18ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "18",
  },
  {
    src: "./assets/img/19ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "19",
  },
  {
    src: "./assets/img/20ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "20",
  },
  {
    src: "./assets/img/21ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "21",
  },
  {
    src: "./assets/img/22ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "22",
  },
  {
    src: "./assets/img/23ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "23",
  },
  {
    src: "./assets/img/24ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "24",
  },
  {
    src: "./assets/img/25ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "25",
  },
  {
    src: "./assets/img/26ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "26",
  },
  {
    src: "./assets/img/27ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "27",
  },
  {
    src: "./assets/img/28ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "28",
  },
  {
    src: "./assets/img/29ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "29",
  },
  {
    src: "./assets/img/30ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
    accessKey: "30",
  },
];

// References ################################################################

// navbar buttons
const swipeGalleryBtnRef = document.getElementById("swipeGalleryBtn");
const gridViewBtnRef = document.getElementById("gridViewBtn");
const singleViewBtnRef = document.getElementById("singleViewBtn");

// dialog Image

const dialogImageRef = document.getElementById("dialogImage");
const dialogImgContainerRef = document.getElementById("dialogImgContainer");
const downloadLinkRef = document.getElementById("downloadLink");
const dialogButtonBackwardRef = document.getElementById("dialogButtonBackward");
const dialogButtonForwardRef = document.getElementById("dialogButtonForward");

// Main Sections +++++++++++++++++++++++++++++++++++++++++++

const main = document.querySelector("main");

// Swipe Gallery

const swipeGalleryRef = document.getElementById("swipeGallerySection");

const swipeGalleryContainerRef = document.getElementById("swipeGalleryContainer");

const swipeImageNodelistRef = document.querySelectorAll(".swipe-image");

// Grid Gallery

const gridGalleryRef = document.getElementById("gridGallerySection");

const gridImageNodelistRef = document.querySelectorAll(".grid-image");

// Single Gallery

const singleGalleryRef = document.getElementById("singleGallerySection");

const singleCurrentImageRef = document.getElementById("singleCurrentImage");
let singleCurrentImage = images[0];

const singleBottomBarRef = document.getElementById("singleBottomBar");

const singleImgSkipBtnBackwardsRef = document.getElementById(
  "singleImgSkipBtnBackwards"
);
const singleImgSkipBtnForwardsRef = document.getElementById(
  "singleImgSkipBtnForwards"
);

const singleImgCountCurrentNumberRef = document.getElementById(
  "singleImgCountCurrentNumber"
);
const singleImgCountImagesLengthRef = document.getElementById(
  "singleImgCountImagesLength"
);

// Global Variables
//########################################################################################################################################################################################################################

let dialogImageRefID;
let currentDialogImageIndex;

function dialogImgRefIdToIndex() {
  currentDialogImageIndex = parseInt(dialogImageRefID) - 1;
  return currentDialogImageIndex;
}

let isSkipBtnPushed = false;

// Functions ########################################################################################################################################################################################################################

// function to assign an image to the dialog image box
// dialogButtonBackwardRef
// dialogButtonForwardRef

function openAndShowDialogContent(id) {
  dialogImageRef.src = images[id + 1].src;
  downloadLinkRef.href = images[id + 1].src;
  dialogImgContainerRef.classList.remove("d-none");
  dialogImgContainerRef.classList.remove("opacity-zero");
}

function closeAndHideDialogContent() {
  if (isSkipBtnPushed === true) {
    return;
  } else {
    dialogImgContainerRef.classList.add("opacity-zero");
    setTimeout(() => {
      dialogImgContainerRef.classList.add("d-none");
    }, 810);
  }
}

function dialogImageSkipForward() {
  if (currentDialogImageIndex === images.length - 1) {
    dialogImageRef.src = images[0].src;
    downloadLinkRef.href = images[0].src;
    currentDialogImageIndex = 0;
    isSkipBtnPushed = true;
  } else {
    dialogImageRef.src = images[currentDialogImageIndex + 1].src;
    downloadLinkRef.href = images[currentDialogImageIndex + 1].src;
    currentDialogImageIndex += 1;
    console.log(currentDialogImageIndex);
    isSkipBtnPushed = true;
  }
}

function dialogImageSkipBackward() {
  if (currentDialogImageIndex === 0) {
    dialogImageRef.src = images[images.length - 1].src;
    downloadLinkRef.href = images[images.length - 1].src;
    currentDialogImageIndex = images.length - 1;
    isSkipBtnPushed = true;
  } else {
    dialogImageRef.src = images[currentDialogImageIndex - 1].src;
    downloadLinkRef.href = images[currentDialogImageIndex - 1].src;
    currentDialogImageIndex -= 1;
    isSkipBtnPushed = true;
  }
}

function closeAndHideDialogImage() {
  isSkipBtnPushed = false;
  setTimeout(() => {
    closeAndHideDialogContent();
  }, 10);
}

dialogButtonForwardRef.addEventListener("click", dialogImageSkipForward);
dialogButtonBackwardRef.addEventListener("click", dialogImageSkipBackward);
dialogImageRef.addEventListener("click", closeAndHideDialogImage);

// functions to highlight the gallery type button, which was choosen
// #########################################################

function highlightSwipeButton() {
  if (swipeGalleryBtnRef.classList.contains("btn-box-shadow")) {
    return;
  } else {
    swipeGalleryBtnRef.classList.add("btn-box-shadow");
    gridViewBtnRef.classList.remove("btn-box-shadow");
    singleViewBtnRef.classList.remove("btn-box-shadow");
  }
}

function highlightGridButton() {
  if (gridViewBtnRef.classList.contains("btn-box-shadow")) {
    return;
  } else {
    gridViewBtnRef.classList.add("btn-box-shadow");
    swipeGalleryBtnRef.classList.remove("btn-box-shadow");
    singleViewBtnRef.classList.remove("btn-box-shadow");
  }
}

function highlightSingleButton() {
  if (singleViewBtnRef.classList.contains("btn-box-shadow")) {
    return;
  } else {
    singleViewBtnRef.classList.add("btn-box-shadow");
    swipeGalleryBtnRef.classList.remove("btn-box-shadow");
    gridViewBtnRef.classList.remove("btn-box-shadow");
  }
}

// functions to display the choosen gallery
// #########################################################

function chooseSwipeGallery() {
  gridGalleryRef.classList.add("opacity-zero");
  singleGalleryRef.classList.add("opacity-zero");
  swipeGalleryRef.classList.remove("opacity-zero");

  swipeGalleryRef.classList.remove(
    "z-index-ten",
    "z-index-twenty",
    "z-index-thirty"
  );
  gridGalleryRef.classList.remove(
    "z-index-ten",
    "z-index-twenty",
    "z-index-thirty"
  );
  singleGalleryRef.classList.remove(
    "z-index-ten",
    "z-index-twenty",
    "z-index-thirty"
  );
  swipeGalleryRef.classList.add("z-index-thirty");
  singleGalleryRef.classList.add("z-index-twenty");
  gridGalleryRef.classList.add("z-index-ten");
}

function chooseGridGallery() {
  swipeGalleryRef.classList.add("opacity-zero");
  singleGalleryRef.classList.add("opacity-zero");
  gridGalleryRef.classList.remove("opacity-zero");

  swipeGalleryRef.classList.remove(
    "z-index-ten",
    "z-index-twenty",
    "z-index-thirty"
  );
  gridGalleryRef.classList.remove(
    "z-index-ten",
    "z-index-twenty",
    "z-index-thirty"
  );
  singleGalleryRef.classList.remove(
    "z-index-ten",
    "z-index-twenty",
    "z-index-thirty"
  );
  gridGalleryRef.classList.add("z-index-thirty");
  swipeGalleryRef.classList.add("z-index-twenty");
  singleGalleryRef.classList.add("z-index-ten");
}

function chooseSingleGallery() {
  swipeGalleryRef.classList.add("opacity-zero");
  gridGalleryRef.classList.add("opacity-zero");
  singleGalleryRef.classList.remove("opacity-zero");

  swipeGalleryRef.classList.remove(
    "z-index-ten",
    "z-index-twenty",
    "z-index-thirty"
  );
  gridGalleryRef.classList.remove(
    "z-index-ten",
    "z-index-twenty",
    "z-index-thirty"
  );
  singleGalleryRef.classList.remove(
    "z-index-ten",
    "z-index-twenty",
    "z-index-thirty"
  );
  singleGalleryRef.classList.add("z-index-thirty");
  gridGalleryRef.classList.add("z-index-twenty");
  swipeGalleryRef.classList.add("z-index-ten");

  singleCurrentImageRef.src = singleCurrentImage.src;
  singleCurrentImageRef.classList.add("image-scale-up");
}

swipeGalleryBtnRef.addEventListener("click", highlightSwipeButton);
swipeGalleryBtnRef.addEventListener("click", chooseSwipeGallery);

gridViewBtnRef.addEventListener("click", highlightGridButton);
gridViewBtnRef.addEventListener("click", chooseGridGallery);

singleViewBtnRef.addEventListener("click", highlightSingleButton);
singleViewBtnRef.addEventListener("click", chooseSingleGallery);

// functions for swipe gallery
// #########################################################
// swipeImageNodelistRef
// swipeGalleryContainerRef

swipeGalleryContainerRef.addEventListener("wheel", (event) => {
  event.preventDefault();
  swipeGalleryContainerRef.scrollLeft += event.deltaY * 5;
});

function viewDialogImageFromSwipeGallery() {
  dialogImageRef.src = this.src;
  downloadLinkRef.href = this.src;

  // assign ID to global variable
  dialogImageRefID = this.accessKey;
  dialogImgRefIdToIndex();

  dialogImgContainerRef.classList.remove("d-none");
  setTimeout(() => {
    dialogImgContainerRef.classList.remove("opacity-zero");
  }, 10);
}

swipeImageNodelistRef.forEach((element) =>
  element.addEventListener("click", viewDialogImageFromSwipeGallery)
);

// functions for grid gallery
// #########################################################

function viewDialogImageFromGridGallery() {
  dialogImageRef.src = this.src;
  downloadLinkRef.href = this.src;
  // assign ID to global variable
  dialogImageRefID = this.accessKey;
  dialogImgRefIdToIndex();

  dialogImgContainerRef.classList.remove("d-none");
  setTimeout(() => {
    dialogImgContainerRef.classList.remove("opacity-zero");
  }, 10);
}

gridImageNodelistRef.forEach((element) =>
  element.addEventListener("click", viewDialogImageFromGridGallery)
);

// funtions for single gallery
// #########################################################

// singleGalleryRef
// singleBottomBarRef
// singleCurrentImageRef
// singleImgSkipBtnBackwardsRef
// singleImgSkipBtnForwardsRef
// singleImgCountCurrentNumberRef
// singleImgCountImagesLengthRef
// dialogImageRef

// .image-transition-eight-sec
// .image-transition-zero-three-sec
// .opacity-zero

singleImgCountImagesLengthRef.innerHTML = images.length;
let currentImage = images[0];
let currentImageIndex = images.indexOf(currentImage);

// function to skip one image forward

function imageSkipForward() {
  if (currentImageIndex < images.length - 1) {
    // change the basic classes for animation
    singleCurrentImageRef.classList.remove("image-transition-eight-sec");
    singleCurrentImageRef.classList.add("image-transition-zero-three-sec");
    singleCurrentImageRef.classList.add("opacity-zero");

    setTimeout(() => {
      let imageIndexForward = currentImageIndex + 1;
      currentImageIndex = imageIndexForward;
      // call the image counter
      singleImgCountCurrentNumberRef.innerHTML = imageIndexForward + 1;
      // assign new image
      singleCurrentImageRef.src = images[imageIndexForward].src;
      singleCurrentImageRef.classList.remove("opacity-zero");
      singleCurrentImageRef.classList.remove("image-scale-up");
    }, 500);
    setTimeout(() => {
      singleCurrentImageRef.classList.remove("image-transition-zero-three-sec");
      singleCurrentImageRef.classList.add("image-transition-eight-sec");
      singleCurrentImageRef.classList.add("image-scale-up");
      singleCurrentImage = images[currentImageIndex];
    }, 1000);
  } else {
    // change the basic classes for animation
    singleCurrentImageRef.classList.remove("image-transition-eight-sec");
    singleCurrentImageRef.classList.add("image-transition-zero-three-sec");
    singleCurrentImageRef.classList.add("opacity-zero");

    setTimeout(() => {
      let imageIndexForward = 0;
      currentImageIndex = imageIndexForward;
      // call the image counter
      singleImgCountCurrentNumberRef.innerHTML = imageIndexForward + 1;
      // assign new image
      singleCurrentImageRef.src = images[imageIndexForward].src;
      singleCurrentImageRef.classList.remove("opacity-zero");
      singleCurrentImageRef.classList.remove("image-scale-up");
    }, 500);
    setTimeout(() => {
      singleCurrentImageRef.classList.remove("image-transition-zero-three-sec");
      singleCurrentImageRef.classList.add("image-transition-eight-sec");
      singleCurrentImageRef.classList.add("image-scale-up");
      singleCurrentImage = images[currentImageIndex];
    }, 1000);
  }
}

// function to skip one image backward

function imageSkipBackward() {
  if (currentImageIndex > 0) {
    // change the basic classes for animation
    singleCurrentImageRef.classList.remove("image-transition-eight-sec");
    singleCurrentImageRef.classList.add("image-transition-zero-three-sec");
    singleCurrentImageRef.classList.add("opacity-zero");

    setTimeout(() => {
      let imageIndexBackward = currentImageIndex - 1;
      currentImageIndex = imageIndexBackward;
      // call the image counter
      singleImgCountCurrentNumberRef.innerHTML = imageIndexBackward + 1;
      // assign new image
      singleCurrentImageRef.src = images[imageIndexBackward].src;
      singleCurrentImageRef.classList.remove("opacity-zero");
      singleCurrentImageRef.classList.remove("image-scale-up");
    }, 500);
    setTimeout(() => {
      singleCurrentImageRef.classList.remove("image-transition-zero-three-sec");
      singleCurrentImageRef.classList.add("image-transition-eight-sec");
      singleCurrentImageRef.classList.add("image-scale-up");
      singleCurrentImage = images[currentImageIndex];
    }, 1000);
  } else {
    // change the basic classes for animation
    singleCurrentImageRef.classList.remove("image-transition-eight-sec");
    singleCurrentImageRef.classList.add("image-transition-zero-three-sec");
    singleCurrentImageRef.classList.add("opacity-zero");

    setTimeout(() => {
      let imageIndexBackward = images.length - 1;
      currentImageIndex = imageIndexBackward;
      // call the image counter
      singleImgCountCurrentNumberRef.innerHTML = imageIndexBackward + 1;
      // assign new image
      singleCurrentImageRef.src = images[imageIndexBackward].src;
      singleCurrentImageRef.classList.remove("opacity-zero");
      singleCurrentImageRef.classList.remove("image-scale-up");
    }, 500);
    setTimeout(() => {
      singleCurrentImageRef.classList.remove("image-transition-zero-three-sec");
      singleCurrentImageRef.classList.add("image-transition-eight-sec");
      singleCurrentImageRef.classList.add("image-scale-up");
      singleCurrentImage = images[currentImageIndex];
    }, 1000);
  }
}

singleImgSkipBtnForwardsRef.addEventListener("click", imageSkipForward);
singleImgSkipBtnBackwardsRef.addEventListener("click", imageSkipBackward);

// let touchStartX;
// let touchEndX;

// function analyseAndDoSwipe() {
//   console.log(touchStartX);

//   if (touchStartX < touchEndX) {
//     imageSkipForward();
//   } else if (touchStartX > touchEndX) {
//     imageSkipBackward();
//   } else {
//     return;
//   }
// }


// singleCurrentImageRef.addEventListener("touchstart", (event) => {
//   touchStartX = event.touches[0].screenX;
// });

// singleCurrentImageRef.addEventListener("touchend", (event) => {
//   touchEndX = event.touches[0].screenX;
//   analyseAndDoSwipe();
// });

// function to view the dialog image from the single gallery

function viewDialogImageFromSingleGallery() {
  dialogImageRef.src = images[currentImageIndex].src;
  downloadLinkRef.href = images[currentImageIndex].src;

  // assign ID to global variable
  dialogImageRefID = images[currentImageIndex].accessKey;
  dialogImgRefIdToIndex();

  dialogImgContainerRef.classList.remove("d-none");
  setTimeout(() => {
    dialogImgContainerRef.classList.remove("opacity-zero");
  }, 10);
}

singleCurrentImageRef.addEventListener(
  "click",
  viewDialogImageFromSingleGallery
);

//
//
//
//
//

chooseSingleGallery();
highlightSingleButton();
