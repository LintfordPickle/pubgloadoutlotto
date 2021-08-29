'use strict';

const PUBG_Loadout = require("./pubg_loadout");
const PUBG_Map = require("./pubg_map");

class PUBG_Session {
    constructor() {
        this.loadOut = new PUBG_Loadout();
        this.mappoint = new PUBG_Map();
    }

    getIsMapNameValid(mapname) {
      return this.mappoint.isMapNameValid(mapname);
    }

    getNewSessionData(mapname){
      if(this.getIsMapNameValid(mapname) == false) {
        return `${mapname} is not recognized as a valid map name`;
      }

      this.getNewDropPoint(mapname);
      this.getNewWeaponLoadout(mapname);

      return this.printDropPoint();
    }

    getNewWeaponLoadout(mapname) {
      this.loadOut.newLoadout(mapname);
    }

    getNewDropPoint(mapname){
        this.mappoint.getNewDropPoint(mapname);
    }

    printDropPoint() {
        let loadout = this.printLoadout();
        let leader = this.getRandomLeaderColor();
        return `You're going to: **${this.mappoint.droppoint}**\n\n${loadout}\n\n${leader}`;
    }

    getCurrentLoadout() {
      let loadout = this.printLoadout();
      return `Your current spicey loadout is:\n\n${loadout}`;
    }

    printLoadout() {
        return `Primary: **${this.loadOut.primary_weapon}**\n` +
            `Secondary: ** ${this.loadOut.secondary_weapon}**`;
    }

    getRandomLeaderColor() {
      let r = Math.floor(Math.random() * 4)
      if(r === 0){ return '**Orange** player is the leader';}
      if(r === 1){ return '**Green** player is the leader';}
      if(r === 2){ return '**Yellow** player is the leader';}
      return '**Blue** player is the leader';
    }
}

module.exports = PUBG_Session