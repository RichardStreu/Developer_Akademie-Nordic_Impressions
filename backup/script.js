// Images ################################################################

const images = [
  {
    src: "./assets/img/1ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/2ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/3ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/4ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/5ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/6ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/7ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/8ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/9ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/10ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/11ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/12ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/13ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/14ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/15ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/16ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/17ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/18ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/19ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/20ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/21ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/22ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/23ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/24ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/25ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/26ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/27ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/28ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/29ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
  },
  {
    src: "./assets/img/30ni.jpg",
    alt: "Image by www.pixabay.com",
    discription: "",
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

// Main Sections +++++++++++++++++++++++++++++++++++++++++++

// Swipe Gallery

const swipeGalleryRef = document.getElementById("swipeGallerySection");

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

// Functions ########################################################################################################################################################################################################################################################################################################################################################################################################################################

// function to assign an image to the dialog image box

// later in function assignImageToDialogBox
// dialogImageRef.src = images[0].src;
// downloadLinkRef.href = images[0].src;

function closeAndHideDialogContent() {
  dialogImgContainerRef.classList.add("opacity-zero");
  singleGalleryRef.classList.remove("opacity-zero");

  setTimeout(() => {
    dialogImgContainerRef.classList.add("d-none");
  }, 410);
}

dialogImgContainerRef.addEventListener("click", closeAndHideDialogContent);

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
  console.log(swipeGalleryRef);
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
  console.log(gridGalleryRef);
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
  // console.log(singleGalleryRef);
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

// functions for grid gallery
// #########################################################

// gridImageNodelistRef

console.log(gridImageNodelistRef[5].src);

// function to view the dialog image from the grid gallery

function viewDialogImageFromGridGallery() {
  dialogImageRef.src = this.src;
  downloadLinkRef.href = this.src;
  singleGalleryRef.classList.add("opacity-zero");
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
    return;
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
    return;
  }
}

singleImgSkipBtnForwardsRef.addEventListener("click", imageSkipForward);
singleImgSkipBtnBackwardsRef.addEventListener("click", imageSkipBackward);

// function to view the dialog image from the single gallery

function viewDialogImageFromSingleGallery() {
  dialogImageRef.src = images[currentImageIndex].src;
  downloadLinkRef.href = images[currentImageIndex].src;
  singleGalleryRef.classList.add("opacity-zero");
  dialogImgContainerRef.classList.remove("d-none");
  setTimeout(() => {
    dialogImgContainerRef.classList.remove("opacity-zero");
  }, 10);
}

singleCurrentImageRef.addEventListener(
  "click",
  viewDialogImageFromSingleGallery
);
