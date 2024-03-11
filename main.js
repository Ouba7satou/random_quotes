const container = document.querySelector(".container");
const text = document.querySelector(".text");
const author = document.querySelector(".author");
const about = document.querySelector(".about");
const share = document.querySelector(".share");
const button = document.querySelector(".getqout");

const getQout = function () {
  fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json")
    .then((res) => {
      //console.log(res);
      const data = res.json();
      return data;
    })
    .then((res) => {
      const random = Math.floor(Math.random() * res.length);
      if (!res[random].author) {
        author.textContent = `Unkown`;
      } else {
        author.textContent = `${res[random].author}`;
      }
      text.textContent = `${res[random].text}`;
      /*  if (!res[random].tag) {
        about.textContent = `Unkown Tag`;
      } else {
        about.textContent = `${res[random].tag}`;
      } */
    })
    .catch((err) => console.log(err))
    .finally(() => console.log(`Fetch Done`));
};
getQout();
button.addEventListener("click", () => {
  text.textContent = ``;
  author.textContent = ``;
  // about.textContent = ``;
  getQout();
});

const shareTwitter = function () {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${text.textContent} "${author.textContent}"`;
  window.open(tweetUrl, "_blank");
};
share.addEventListener("click", shareTwitter);
