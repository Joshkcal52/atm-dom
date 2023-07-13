function withdraw(cB, wA) {
  if (wA > cB) {
    return "not enough funds";
  } else {
    return (cB -= wA);
  }
}

function deposit(cB, dA) {
  return (cB += dA);
}

function renderWithdraw() {
  const withdrawWrapper = document.querySelector(".withdraw-wrapper");
  const withdrawInput = document.createElement("input");
  const submitBtn = document.createElement("button");
  const hTag = document.createElement("h3");
  const textNode = document.createElement("p");

  // withdrawWrapper.className("withdraw-wrapper");
  withdrawInput.className("withdraw-input");
  hTag.className("withdraw-text");
  textNode.className("current-balance");

  hTag.textContent = "How much would you like to withdraw?";
  console.dir(hTag);
  console.dir(textNode);
  currentBalance.textContent = cB;
  
  withdrawWrapper.appendChild(hTag); 
  withdrawWrapper.appendChild(textNode); 
  withdrawWrapper.appendChild(withdrawInput);
  withdrawWrapper.appendChild(submitBtn);

}

function renderDeposit() {
  const depositWrapper = document.querySelector(".deposit-wrapper")
  const depositInput = document.createElement("input");
  const submitBtn = document.createElement("button");
  const hTag = document.createElement("h3");
  const textNode = document.createElement("p");

  withdrawInput.className = "withdraw-input";
  hTag.className = "withdraw-text";
  textNode.className = "current-balance";
  submitBtn.textContent = "SUBMIT";

  hTag.textContent = "How much would you like to Withdraw?"
  console.dir(hTag);
  console.dir(textNode);
  currentBalance.textContent = cB;

  withdrawWrapper.appendChild(hTag); 
  withdrawWrapper.appendChild(textNode); 
  withdrawWrapper.appendChild(withdrawInput);
  withdrawWrapper.appendChild(submitBtn);



}
let currentBalance = 0;

const btns = document.querySelectorAll(".btn");
console.log(btns);
btns[0].addEventListener("click", () =>  )
