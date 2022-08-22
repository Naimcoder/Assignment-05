const cartArrey = [];
// ===========================================================
function display(cardList) {
     // ---------
     const listItem = document.getElementById('crad-list');
     listItem.innerHTML = '';
     // ---------
     for (let index = 0; index < cardList.length; index++) {
          // ---------
          const name = cartArrey[index];
          // ---------
          if (cartArrey.length > 5) {
               break;
          }
          // ---------
          const ol = document.createElement('ol');
          ol.innerHTML = `
           <li>${name}</li>
          `;
          listItem.appendChild(ol);
          // ---------
     }
}
// ========================================================

// ============================================================
function select(element) {
     const playerName = element.parentNode.children[0].innerText;
     cartArrey.push(playerName);
     display(cartArrey);
}
// ==================================================================
 
// buget part start 
// =================================================================
function getInputTextValueById(inputId) {
     const inputfild = document.getElementById(inputId);
     const inputstring = inputfild.value;
     const inputNumber = parseInt(inputstring);
     return inputNumber;
}

function getElementTextValueById(ElementId) {
     const Element = document.getElementById(ElementId);
     const ElementNumberstring = Element.innerText;
     const ElementNumber = parseInt(ElementNumberstring);
     return ElementNumber;
}

function setTextValueById(ElementId, Newvalue) {
     const ElementNumber = document.getElementById(ElementId);
     ElementNumber.innerText = Newvalue;
}

// ==========================================================================
document.getElementById('calculat-total-btn').addEventListener('click', function () {
     const ExpensesTotalElement = getElementTextValueById('Expenses-Total');
     const ManagerTotalNumber = getInputTextValueById('manager-input-fild');
     const coashTotalNumber = getInputTextValueById('coach-input-fild');
     const totalBalanceAmount = ExpensesTotalElement + ManagerTotalNumber + coashTotalNumber;

     setTextValueById('total-Amount', totalBalanceAmount);

});
document.getElementById('Calculate-btn').addEventListener('click', function () {
     const playerElementTotalNumber = getInputTextValueById('player-input-fild');
     const totalAmount = playerElementTotalNumber * 5;
     setTextValueById('Expenses-Total', totalAmount);
      
})
// buget part end 
// =========================================================