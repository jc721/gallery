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
    return response.json();
  })
  .then((data) => {
    data.forEach(item => {
      let divC = document.createElement("div");
      divC.className = "column";
      let img = document.createElement("img");
      img.src = item.url;
      divC.appendChild(img);
      divR.appendChild(divC);
    });
  });




