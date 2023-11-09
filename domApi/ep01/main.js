/* document.body.querySelector("#app").innerHTML = `
  <button type="button class="hello1">Check the input</button>
  <button type="button class="hello2">Hello2</button>
  <button type="button class="hello3">Hello3</button>

  <div>
    <input type="text" class="name" placeholder="Type your name" />
  </div>

  <div class="parent-button">
    <button class="helloworld-button" type="button">
      <span>Hello</span>
      <span>World</span>
    </button>
  </div>
`;

document.querySelector("button").addEventListener("click", (event) => {
  const input = document.querySelector(".name");
  console.log(input.value);
});
document
  .querySelector(".helloworld-button")
  .addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("event from button", event);
  });
document.querySelector(".parent-button").addEventListener("click", (event) => {
  console.log("event from div", event);
});

document.querySelector(".name").addEventListener("keyup", (event) => {
  console.log("input keyup", event);
});

document.body.addEventListener("keyup", (event) => {
  console.log(event.key);
});
 */

// DOM API 4 of 6
/* document.querySelector("#app").innerHTML = `
  <input />
  <button>Click</button>
`;

document.querySelector("button").addEventListener("click", (event) => {
  const currentValue = document.querySelector("input").value;

  document.querySelector("input").value = currentValue + "*";
});

let count = 0;
setInterval(() => {
  count += 1;
  document.querySelector("#app").innerHTML = `
    <input />
    <button>Click</button>
    <p>count: ${count}</p>
  `;
}, 5000); */

// 5 of 6
document.querySelector("#app").innerHTML = `
  <button class="btn-add-card" type="button">Add card</button>

  <div class="cards"></div>
`;

let cardCount = 0;

document.querySelector(".btn-add-card").addEventListener("click", (event) => {
  cardCount += 1;
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <p>Card #${cardCount}</p>
    <button class="btn-hello" type="button" data-number="${cardCount}">hello</button>
  `;

  const myCardCount = cardCount;
  // card.querySelector(".btn-hello").addEventListener("click", (event) => {
  //   console.log(`hello! ${myCardCount}`);
  // });
  document.querySelector(".cards").appendChild(card);
});

document.querySelector(".cards").addEventListener("click", (event) => {
  //console.log("click from .cards", event);
  const maybeButton = event.target;
  if (maybeButton.matches(".btn-hello")) {
    const cardName = maybeButton.parentElement.children[0].innerText;
    // console.log("button is clicked", cardName);
    console.log("button is clicked", maybeButton.getAttribute("data-number"));
  } else {
    console.log("somthing else. let's ignore this");
  }
});
