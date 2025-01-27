import { Team } from "./team";
import Player from "./Player";
const greeting: string = "Hello Devipriya!";
console.log(greeting);

let team1 : Team = new Team("RealMadrid");
let playerOne: Player = {name: "ronaldo", jersey:7, active: true};
let playerTwo: Player = {name: "messi", jersey:10, active: true};
let playerThree: Player = {name: "de bryune", jersey:17, active: true};
let playerFour: Player = {name: "rodrigue", jersey:9, active: true};
let playerFive: Player = {name: "mbape", jersey:27, active: true};


team1.addPlayer(playerOne);
team1.addPlayer(playerTwo);
team1.addPlayer(playerThree);
team1.addPlayer(playerFour);
team1.addPlayer(playerFive);
team1.removeplayer(3);
team1.setActive(2, false);
team1.logActivePlayers();
let listActivePlayers: Player[] = team1.getActivePlayers();
console.log("Active players of team " + team1.teamName);
for( const activePlayers of listActivePlayers){
  
console.log(`${activePlayers.name} ${activePlayers.jersey} ${activePlayers.active}`);
}