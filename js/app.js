import "../sass/style.scss";

class Doggo {
  constructor() {
    this.apiUrl = "https://dog.ceo/api";
    this.imgEl = document.querySelector(".featured-dog img");

    this.init();
  }
  listBreeds() {
    return fetch(`${this.apiUrl}/breeds/list/all`)
      .then(resp => resp.json())
      .then(data => {
        return data.message;
      });
  }

  getRandomImage() {
    return fetch(`${this.apiUrl}/breeds/image/random`)
      .then(resp => resp.json())
      .then(data => data.message);
  }

  getRandomImageByBreed(breed) {
    return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
      .then(resp => resp.json())
      .then(data => data.message);
  }

  init() {
    this.getRandomImage().then(src => this.imgEl.setAttribute("src", src));

    this.listBreeds().then(breeds => console.log(breeds));
  }
}

// const imgTag = document.querySelector("img");
// //dodanie zdjęcia do htmla
// getRandomImage().then(imgSrc => imgTag.setAttribute("src", imgSrc));

//pobranie listy ras psów

// getRandomImageByBreed("bulldog/french").then(imgSrc =>
//   imgTag.setAttribute("src", imgSrc)
// );

document.addEventListener("DOMContentLoaded", () => {
  new Doggo();
});
