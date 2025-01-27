import Player from './Player.js';
export class Team {
    players: Player[] = [];
    teamName: string;

    constructor(teamName: string){
        this.teamName = teamName;

    }
    addPlayer(player: Player) : void{
        this.players.push(player);
    }
    
    removeplayer(index: number) : void{
        this.players.splice(index,1);
    }

    setActive(index: number, activeStatus: boolean) : void{
        for (let i= 0; i< this.players.length; i++) {
            if(index === i){
                this.players[i].active = activeStatus;
            }  
        }
    }
    getPlayerCount(): number{
        return this.players.length;
    }
    logActivePlayers(){
        for(const player of this.players){
            if (player.active === true){
                console.log(`Player: ${player.name} ${player.jersey} ${player.active}`);
            }
        }
    }
    getActivePlayers() : Player[]{
        let activePlayer: Player[] = [];
        for(const countPlayer of this.players){
            if(countPlayer.active === true){
                activePlayer.push(countPlayer);
            }
        }
    return activePlayer;
    }
    
}




