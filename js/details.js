
const detailContainer = document.querySelector(".container");

const queryString = document.location.search;
const parms = new URLSearchParams(queryString)

const id = parms.get("id");
console.log(id);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '80cbaf5156mshaec93ee0aa12115p1180e7jsnd424500bfab5',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + url;

  async function getData(){
    const result = await fetch(corsEnabledUrl, options);
    const response = await result.json();
    console.log(response);

    const detail = response[id];

    console.log(detail);

    detailContainer.innerHTML = `<div>
                                    <h2>${detail.title}</h2>
                                    <h3>${detail.developer}</h3>
                                    <p>${detail.genre}</p>
                                </div>`
    document.title = `${detail.title}`
    
  }

  getData();
