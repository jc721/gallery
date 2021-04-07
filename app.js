const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

/*
fetch('url')
.then(Resolve)
.then(Reject) OR .catch(Reject)

OR directly 

fetch('url').then(ResolveFuntion, RejectFuntion)

*/

fetch(URL)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let divR = document.createElement("div");
    divR.className = "row";
    app.appendChild(divR);
    data.forEach(item => {
      let divC = document.createElement("div");
      divC.className = "column";
      let img = document.createElement("img");
      img.src = item.url;
      divC.appendChild(img);
      divR.appendChild(divC);
    });
  });

const app = document.querySelector("#app");




