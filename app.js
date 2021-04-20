const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

/*
fetch('url')
.then(Resolve)
.then(Reject) OR .catch(Reject)

OR directly 

fetch('url').then(ResolveFuntion, RejectFuntion)

*/

const app = document.querySelector("#app");
let divR = document.createElement("div");
divR.className = "row";
app.appendChild(divR);

fetch(URL)
  .then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw new Error(
        `Encountered something unexpected: ${response.status} ${response.statusText}`
      );
    }
  })
  .then((data) => {
    data.forEach(item => {
      let divC = document.createElement("div");
      divC.className = "column";
      let img = document.createElement("img");
      img.src = item.url;
      let p = document.createElement("p");
      p.textContent = item.author + " - " + item.title;
      divC.appendChild(img);
      divC.appendChild(p);
      divR.appendChild(divC);
    });
  })
  .catch((error) => {
    // Handle the error
    console.log(error);
  });