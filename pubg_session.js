'use strict';

const Loadout = require("./loadout");

class PUBG_Session {
    constructor() {
        this.loadOut = new Loadout();
    }

    startNewSession() {
        this.loadOut.newLoadout();
    }

    printsession() {
        return '' +
            `Primary: ${this.loadOut.primary_weapon}\n` +
            `Secondary: ${this.loadOut.secondary_weapon}\n\n` +
            'only kills with these weapons count!';
    }
}

module.exports = PUBG_Session