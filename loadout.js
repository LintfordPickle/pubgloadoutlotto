const WEAPONS_AR = ['Scar-L','M16A4','Groza','AKM','M416','QBZ95','Beryl','Mk47','G36C']
const WEAPONS_CRATE = ['AUG A3','Mk14','AWM'];
const WEAPONS_DMR = ['SKS','Mini 14','SLR','QBU','VSS Vintorez']
const WEAPONS_RIFLE = ['Winchester Model 1894']
const WEAPONS_SMG = ['Micro UZI', 'UMP45', 'Tommy Gun','Vector','PP-19 Bizon','MP5K']
const WEAPONS_SNIPER = ['M24','Karabiner 98 Kurz','Winchester Model 1894','Mosin Nagant']

class Loadout {
    constructor() {
        this.newLoadout();
    }

    newLoadout() {
        this.primary_weapon = WEAPONS_AR[Math.floor(Math.random() * WEAPONS_AR.length)];
        this.secondary_weapon = WEAPONS_DMR[Math.floor(Math.random() * WEAPONS_DMR.length)];
    }
}

module.exports = Loadout