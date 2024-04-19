const MAX_TRY = 5;
let tryCount = 0;
const Url = "https://api.escuelajs.co/api/v1/products"
const cont = document.querySelector(".container");
const input = document.querySelector('input')

async function getData(Url) {
  try {
    const resp = await fetch(Url);
    const data = await resp.json();
    console.log(data);
    return data;
  } catch (er) {
    tryCount++;
    if (tryCount < MAX_TRY) {
      console.log("retring", er);
      return getData();
    }
  } finally {
    console.log("finally");
  }
}

function displayData(data) {
  cont.innerHTML = data
    .map(
      (el) =>
        `
  <h2>${el.title}</h2>
  `
    )
    .join("");
}

async function main() {
  input.addEventListener('input', async (e) =>{
    const filterUrl = `${Url}?title=${e.target.value}`
    const data = await getData(filterUrl);
    displayData(data);
    console.log(filterUrl)
  })
}

main();






/* function mouseCoordinates(delay, cb) {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, delay);
    };
}

function catchMouseCoordinate(event) {
    console.log(` X - ${event.clientX}, Y - ${event.clientY}`);
}

const debouncedMouseCoordinates = mouseCoordinates(100, catchMouseCoordinate);

document.addEventListener('mousemove', debouncedMouseCoordinates); */
