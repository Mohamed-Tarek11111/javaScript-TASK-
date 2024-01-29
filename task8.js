
const form = document.querySelector("form");
const m1 = document.querySelector("#m1");

function loadImage(url) {

  return new Promise((resolve, reject) => {
const img = new Image(500);
img.src = url;

   resolve(img)
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  loadImage(document.getElementById("m2").value)
    .then((img) => {
     document.getElementById("t1").innerText=""
       document.body.appendChild(img)
     
     const t1 = document.querySelector("#t1");
       

    t1.appendChild(img);

    })
    .catch((err) => {
      console.log(err);
    });
});




