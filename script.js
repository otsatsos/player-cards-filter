const teamText = document.getElementById("team");
const sportText = document.getElementById("sport"); 
const yearText = document.getElementById("year"); 
const headCoachText = document.getElementById("head-coach");  
const filterInput = document.getElementById("input-filter");
const playersCardsShowcase = document.getElementById("players-cards-showcase");

const myFavoriteFootballTeam = {
    team: "Argentina",
    sport: "Football",
    year: 1986,
    isWorldCupWinner: true,
    headCoach: {
      coachName: "Carlos Bilardo",
      matches: 7,
    },
    players: [
      {
        name: "Sergio Almirón",
        position: "forward",
        number: 1,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Sergio Batista",
        position: "midfielder",
        number: 2,
        isCaptain: false,
        nickname: null,
      },
       {
        name: "Ricardo Bochini",
        position: "midfielder",
        number: 3,
        isCaptain: false,
        nickname: "El Bocha",
      },
      {
        name: "Claudio Borghi",
        position: "midfielder",
        number: 4,
        isCaptain: false,
        nickname: "Bichi",
      },
      {
        name: "José Luis Brown",
        position: "defender",
        number: 5,
        isCaptain: false,
        nickname: "Tata",
      },
      {
        name: "Daniel Passarella",
        position: "defender",
        number: 6,
        isCaptain: false,
        nickname: "El Gran Capitán",
      },
      {
        name: "Jorge Burruchaga",
        position: "forward",
        number: 7,
        isCaptain: false,
        nickname: "Burru",
      },
      {
        name: "Néstor Clausen",
        position: "defender",
        number: 8,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "José Luis Cuciuffo",
        position: "defender",
        number: 9,
        isCaptain: false,
        nickname: "El Cuchu",
      },
      {
        name: "Diego Maradona",
        position: "midfielder",
        number: 10,
        isCaptain: true,
        nickname: "El Pibe de Oro",
      },
      {
        name: "Jorge Valdano",
        position: "forward",
        number: 11,
        isCaptain: false,
        nickname: "The Philosopher of Football",
      },
      {
        name: "Héctor Enrique",
        position: "midfielder",
        number: 12,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Oscar Garré",
        position: "defender",
        number: 13,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Ricardo Giusti",
        position: "midfielder",
        number: 14,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Luis Islas",
        position: "goalkeeper",
        number: 15,
        isCaptain: false,
        nickname: "El loco",
      },
      {
        name: "Julio Olarticoechea",
        position: "defender",
        number: 16,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Pedro Pasculli",
        position: "forward",
        number: 17,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Nery Pumpido",
        position: "goalkeeper",
        number: 18,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Oscar Ruggeri",
        position: "defender",
        number: 19,
        isCaptain: false,
        nickname: "El Cabezón",
      },
      {
        name: "Carlos Tapia",
        position: "midfielder",
        number: 20,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Marcelo Trobbiani",
        position: "midfielder",
        number: 21,
        isCaptain: false,
        nickname: "Calesita",
      },
      {
        name: "Héctor Zelada",
        position: "goalkeeper",
        number: 22,
        isCaptain: false,
        nickname: null,
      },
    ],
};

Object.freeze(myFavoriteFootballTeam);

const {team, sport, year, headCoach:{coachName}, players} = myFavoriteFootballTeam;

teamText.innerText = team;
sportText.innerText = sport;
yearText.innerText = year;
headCoachText.innerText = coachName;

filterInput.addEventListener("change",(e)=>{
    switch (e.target.value){
        case "none":
            playersCardsShowcase.innerHTML = ``;
            break;
        case "default":
            showPlayersCards(players);
            break;
        case "nicknames":
            showPlayersCards
        case "forward":
            showPlayersCards(players.filter(player=>player.position==="forward"));
            break;
    }
})

const showPlayersCards = (array) => {
    let HTMLstring=``;
    array.map((arr)=>{
       HTMLstring += `
       <div class="player-card">
        <p class="bold" id="player-card-name">${arr.name}</p>
        <p>Position: <span class="bold">${arr.position}</span></p>
        <p>Number: <span class="bold">${arr.number}</span></p>
        <p>Nickname: <span class="bold">${arr.nickname!=null ? arr.nickname : "N/A"}</span></p>
       </div>
       `;
    }
    );
    
    playersCardsShowcase.innerHTML = HTMLstring;
}