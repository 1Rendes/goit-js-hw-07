const input = document.querySelector("input");
let amount;
input.addEventListener(
  "change",
  (event) => (amount = event.currentTarget.valueAsNumber)
);
const createButton = document.querySelector("button[data-create]");
const boxes = document.querySelector("#boxes");
createButton.addEventListener("click", createBoxes);
function createBoxes() {
  if (amount <= 100 && amount >= 1 && amount / Math.floor(amount) === 1) {
    //перевірка введеного числа, дробове не приймається.
    const dataHtml = [];
    for (let i = 1; i <= amount; i++) {
      const htmlToInsert = `
        <div style="background-Color: ${getRandomHexColor()}; width: ${
        20 + i * 10
      }px;
         height: ${20 + i * 10}px; border-radius: 10px; text-align: center">
          <p style="margin: 0;">${i}</p>
        </div>
`;
      dataHtml.push(htmlToInsert);
    }
    boxes.innerHTML = dataHtml.join("");
    input.value = "";
  } else {
    return alert("Insert integer between 1 and 100"); //вибачте, не за тз, але так краще.
  }
}
const destroyButton = document.querySelector("button[data-destroy]");
destroyButton.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
