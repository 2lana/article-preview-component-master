const shareImage = document.querySelector("#visible-image-share");
const shareBox = document.querySelector(".share-box");

shareImage.addEventListener("click", function () {
  shareBox.classList.toggle("share-hidden");
});
