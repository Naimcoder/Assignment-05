// player cart selection start
// ======================================================================
const players = [];

function select(element) {
     const playerName = element.parentNode.children[0].innerText;
     const playersObj = {
          playerName: playerName
     };
     players.push(playersObj);
     // error handling
     if (players.length <= 5){
          // document.getElementById('selected-player-number').innerText = players.length;
          const select = element;
          select.innerText = 'selected';
          select.setAttribute('disabled', true);
          console.log(select);
     } else {
          return alert('You cant add more than 5 Players');
     }
     setPlayerName(players);
     console.log(players);
}

function setPlayerName(nameList) {
     const tableBody = document.getElementById('selected-player-list');
     tableBody.innerHTML = '';
     for (let i = 0; i < nameList.length; i++) {
          const names = nameList[i].playerName;
          console.log(names);
          const tr = document.createElement("tr");
          tr.innerHTML = `
          <th scope="row">${i + 1}</th>
          <td>${names}</td>
          `;
          tableBody.appendChild(tr);
     }
} 
// player cart selection end
// ======================================================================

// common js function start
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
// common js function End

// ==========================================================================
// calculate  start
document.getElementById('Calculate-btn').addEventListener('click', function () {
     const playerElementTotalNumber = getInputTextValueById('player-input-fild');
     if (isNaN(playerElementTotalNumber)) {
          return alert('You have to type number must')
     }
     let number = players.length;
     const totalAmount = playerElementTotalNumber * number;
     setTextValueById('Expenses-Total', totalAmount);
})
// ==========================================================================
// calculate  End


// ==========================================================================
// calculate total start
document.getElementById('calculat-total-btn').addEventListener('click', function () {
     const ExpensesTotalElement = getElementTextValueById('Expenses-Total');
     const ManagerTotalNumber = getInputTextValueById('manager-input-fild');
     const coashTotalNumber = getInputTextValueById('coach-input-fild');
     //  calculate total
     if (isNaN(ManagerTotalNumber) || isNaN(coashTotalNumber)) {
          return alert('You have to type number must')
     }
     const totalBalanceAmount = ExpensesTotalElement + ManagerTotalNumber + coashTotalNumber;
     setTextValueById('total-Amount', totalBalanceAmount);
});
// ==========================================================================
// calculate total start

