const resultContainer = document.querySelector(".resultContainer");
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
    try{
    const result = await fetch(corsEnabledUrl, options);
    const response = await result.json();
    console.log(response);

    resultContainer.innerHTML = "";

    for (i = 0; i < 20; i++){
        
        resultContainer.innerHTML += `<a href="details.html?id=${i}">
                                        <div class="resultStyle">
                                            <h3>Game title: ${response[i].title}</h3>
                                            <h3>Developer: ${response[i].developer}</h3>
                                            <p>Genre: ${response[i].genre}</p>
                                        </div>
                                    </a>`
                                    
    } 
    }catch(error){
        console.log(error);
    }

}

getData();

