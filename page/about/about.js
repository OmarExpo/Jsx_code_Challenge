export default {
  addData, updateDOM, showOnlyMil, moneyFormat,calculateWealth, sortRiches, doubleMoney
};

import {data} from '../../script.js'

//** Add Data into DOM**
function addData(obj){
  data.push(obj);

  updateDOM();
}

 // Money formatting function *
 function moneyFormat(number){
  //return "$"+(number?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')); ** found in Stack overflow site **
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}

//** Update DOM using forEach() function**
function updateDOM(providedData = data){
  // first clear main div
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${moneyFormat(item.money)}`;
    main.appendChild(element);
  })

}


//** show millionaires only using filter() function**
function showOnlyMil(){
  data.filter(item => {
    return item.money >= 1000000;
  })

  updateDOM();
}

//** Double money**
function doubleMoney(){
  data.map(user => {
    return {user, money: (user.money) * 2};
  })

  updateDOM();
}

//** Calculate total wealth of all by using reduce()function **
function calculateWealth(){
  const wealth = data.reduce((acc, num) => {
   return acc + num.money
  }, 0);
    
  const wealthEl = document.createElement('div');
  //wealthEl.classList.add('person');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${moneyFormat(wealth)}</strong></h3>`

  main.appendChild(wealthEl);

  
}

//** Using sort() function for sort riches from top-to-bottom**
function sortRiches(){
  data.sort((a, b) => {
   return b.money - a.money;
  })
  updateDOM();
}
