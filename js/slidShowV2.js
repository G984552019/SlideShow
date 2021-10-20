let count = 1;
let URL;
let src = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
function left() {
  count = count - 1;
  thumbnailsElement.children[count].classList.remove('selected');
  if(count == 0) {
    count = 19;
  }
  if(count<10){
    URL = src + "0" + count + ".jpg";
  } else {
    URL = src + count + ".jpg";
  }
  mainElement.setAttribute('src', URL);
  thumbnailsElement.children[count-1].classList.add('selected');
}
function right() {
  thumbnailsElement.children[count-1].classList.remove('selected');
  count = count + 1;
  if(count == 20) {
    count = 1;
  }
  if(count<10){
    URL = src + "0" + count + ".jpg";
  } else {
    URL = src + count + ".jpg";
  }
  mainElement.setAttribute('src', URL);
  thumbnailsElement.children[count-1].classList.add('selected');
}
