import edu from './page/about/about.js';
export  let data = [];

const router = new Navigo("/", { hash: true });
router
  .on({
  	"/": () => {
      
      //**  Selecting DOM elements
      const main = document.getElementById('main');
      const addUserBtn = document.getElementById('add-user');
      const doubleMoneyBtn = document.getElementById('double');
      const showMillionairesBtn = document.getElementById('show-millionaires');
      const sortBtn = document.getElementById('sort');
      const calculateWealthBtn = document.getElementById('calculate-wealth');
      
      //** Setting Event listeners
        addUserBtn.addEventListener('click', getRandomUser);
        doubleMoneyBtn.addEventListener('click', edu.doubleMoney);
        showMillionairesBtn.addEventListener('click', edu.showOnlyMil);
        sortBtn.addEventListener('click', edu.sortRiches);
        calculateWealthBtn.addEventListener('click', edu.calculateWealth);

      
      

      //** Calling the function to get three random user**
      getRandomUser();
      getRandomUser();
      getRandomUser();

      //** Get Random User from given API**
      async function getRandomUser(){
        const res = await fetch('https://randomuser.me/api');
        //console.log(res)
        const data = await res.json();
        //console.log(data);
        const user = data.results[0];
        //console.log(user)
        // creating customer object user
        const newUser = {
          name: `${user.name.first} ${user.name.last}`,
          money: Math.floor(Math.random() * 1000000)
        }

        edu.addData(newUser);
      }

      edu.updateDOM();

      edu.moneyFormat( );
     

      edu.doubleMoney();

      edu.showOnlyMil();

      edu.calculateWealth();

      edu.sortRiches();


    },
    "about": () =>  {
      const content = document.querySelector(".content");
      content.innerHTML = `<h5>This is the about page</h5><h6>This page was created back in 1992<a href="/user/2?foo=bar" data-navigo>click me</a></h6>`;
    }
	})
  .resolve();



