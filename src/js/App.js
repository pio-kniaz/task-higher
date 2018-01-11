// ~Variables~

// url
let url = ('https://picsum.photos/list')

// button
const btn = document.querySelector("#btn");
const author = document.querySelector("#author")

// counter;
let counter1 = 0;
let counter2 = 1;
let counter3 = 2;

// pictures
let picture1 = document.querySelector('#box1');
let picture2 = document.querySelector('#box2');
let picture3 = document.querySelector('#box3');


// fetch before click
fetch(url)
  .then(hendleErrors)
  .then(parseJSON)
  .then(udaptedTemplateBefore)
  .catch(errorDisplay)

// fetch after click

btn.addEventListener("click", () => {
  // imgs counters
  counter1 = counter1 + 3;
  counter2 = counter2 + 3;
  counter3 = counter3 + 3;
  fetch(url)
    .then(hendleErrors)
    .then(parseJSON)
    .then(updatedTemplate)
    .catch(errorDisplay)
})


// Functions
function errorDisplay(err) {
  console.log("Eror !!!");
  console.log(err);
}

function hendleErrors(res) {
  if (!res.ok) {
    throw Error(res.status)
  }
  return res;
}

function parseJSON(res) {
  return res.json().then((parsedData) => {
    return parsedData[0].id
  })
}

function updatedTemplate(data) {

  let template1 = `<img src="https://picsum.photos/200?image=${data+counter1}" alt="Beautiful Picture">`
  let template2 = `<img src="https://picsum.photos/200?image=${data+counter2}" alt="Beautiful Picture">`
  let template3 = `<img src="https://picsum.photos/200?image=${data+counter3}" alt="Beautiful Picture">`
  picture1.innerHTML = template1
  picture2.innerHTML = template2
  picture3.innerHTML = template3

}

function udaptedTemplateBefore(data) {

  let template1 = `<img src="https://picsum.photos/200?image=${data}" alt="Beautiful Picture">`
  let template2 = `<img src="https://picsum.photos/200?image=${data+1}" alt="Beautiful Picture">`
  let template3 = `<img src="https://picsum.photos/200?image=${data+2}" alt="Beautiful Picture">`

  picture1.innerHTML = template1;
  picture2.innerHTML = template2
  picture3.innerHTML = template3
}
