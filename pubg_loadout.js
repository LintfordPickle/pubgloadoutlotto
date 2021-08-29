const WEAPON_MAP_ERANGEL_PRIMARY = ['AKM','Beryl M762','Crossbow','DP-28','M16A4','M249','M416','UMP45','Tommy Gun','SCAR-L','S686','S1897','S12K','PP-19 Bizon','Mk47 Mutant','Micro UZI','Vector']
const WEAPON_MAP_ERANGEL_SECONDARY = ['Karabiner 98 Kurz','M16A4','M24','VSS Vintorez','SLR','SKS','Mk47 Mutant','Mini 14','Any 5.56mm Weapon','Any 7.62mm Weapon']

const WEAPON_MAP_MIRAMAR_PRIMARY = ['AKM','Beryl M762','Crossbow','M16A4','M249','M416','UMP45','Tommy Gun','SCAR-L','S686','S1897','S12K','PP-19 Bizon','Mk47 Mutant','Micro UZI','Vector']
const WEAPON_MAP_MIRAMAR_SECONDARY = ['Karabiner 98 Kurz','Mini 14','Winchester Model 1984','SLR','SKS','Mk47 Mutant','M24','VSS Vintorez']

const WEAPON_MAP_SANHOK_PRIMARY = ['AKM','Beryl M762','Crossbow','M16A4','M249','M416','UMP45','Tommy Gun','QBZ','S686','S1897','S12K','PP-19 Bizon','Mk47 Mutant','Micro UZI','Vector']
const WEAPON_MAP_SANHOK_SECONDARY = ['Karabiner 98 Kurz','QBU','SLR','SKS','Mk47 Mutant','M24']

const WEAPON_MAP_VIKENDI_PRIMARY = ['AKM','Beryl M762','Crossbow','G36C','M16A4','M249','M416','Vector','UMP45','Tommy Gun','S686','S1897','S12K','PP-19 Bizon','MP5K','Mk47 Mutant','Micro UZI']
const WEAPON_MAP_VIKENDI_SECONDARY = ['Karabiner 98 Kurz','M16A4','M24','VSS Vintorez','SLR','SKS','Mk47 Mutant','Mini 14']

const WEAPON_MAP_KARAKIN_PRIMARY = ['AKM','Beryl M762','Crossbow','G36C','M16A4','M249','M416','Vector','UMP45','Tommy Gun','S686','S1897','S12K','MP5K','Mk47 Mutant','Micro UZI']
const WEAPON_MAP_KARAKIN_SECONDARY = ['Karabiner 98 Kurz','M16A4','M24','SLR','SKS','Mk47 Mutant','Mini 14']

const WEAPON_MAP_TAEGO_PRIMARY = ['AKM','Beryl M762','Crossbow','M16A4','M249','M416','UMP45','Tommy Gun','SCAR-L','S686','S1897','S12K','Mk47 Mutant','Micro UZI','Vector','K2']
const WEAPON_MAP_TAEGO_SECONDARY = ['Karabiner 98 Kurz','M16A4','M24','SLR','SKS','Mk47 Mutant','Mini 14','MK12']

const WEAPONS_ANY_PRIMARY = ['Any 9mm','Any .45 ACP Weapon','Any 5.56mm Weapon','Any 7.62mm Weapon']
const WEAPONS_ANY_SECONDARY = ['Any 5.56mm Weapon','Any 7.62mm Weapon']
const WEAPONS_CRATE = ['AUG A3','Mk14','AWM','Groza'];

class PUBG_Loadout {
    primary_weapon = 'none-selected';
    secondary_weapon = 'none-selected';

    constructor() {
    }

    newLoadout(mapname) {
        this.getNewLoadout(mapname);
    }

    getNewLoadout(mapname) {
      if(mapname.toUpperCase() === 'ERANGEL') {
        this.primary_weapon = WEAPON_MAP_ERANGEL_PRIMARY[Math.floor(Math.random() * WEAPON_MAP_ERANGEL_PRIMARY.length)];
        this.secondary_weapon = WEAPON_MAP_ERANGEL_SECONDARY[Math.floor(Math.random() * WEAPON_MAP_ERANGEL_SECONDARY.length)];
      } else if(mapname.toUpperCase() === 'MIRAMAR') {
        this.primary_weapon = WEAPON_MAP_MIRAMAR_PRIMARY[Math.floor(Math.random() * WEAPON_MAP_MIRAMAR_PRIMARY.length)];
        this.secondary_weapon = WEAPON_MAP_MIRAMAR_SECONDARY[Math.floor(Math.random() * WEAPON_MAP_MIRAMAR_SECONDARY.length)];
      } else if(mapname.toUpperCase() === 'SANHOK') {
        this.primary_weapon = WEAPON_MAP_SANHOK_PRIMARY[Math.floor(Math.random() * WEAPON_MAP_SANHOK_PRIMARY.length)];
        this.secondary_weapon = WEAPON_MAP_SANHOK_SECONDARY[Math.floor(Math.random() * WEAPON_MAP_SANHOK_SECONDARY.length)];
      } else if(mapname.toUpperCase() === 'VIKENDI') {
        this.primary_weapon = WEAPON_MAP_VIKENDI_PRIMARY[Math.floor(Math.random() * WEAPON_MAP_VIKENDI_PRIMARY.length)];
        this.secondary_weapon = WEAPON_MAP_VIKENDI_SECONDARY[Math.floor(Math.random() * WEAPON_MAP_VIKENDI_SECONDARY.length)];
      } else if(mapname.toUpperCase() === 'KARAKIN') {
        this.primary_weapon = WEAPON_MAP_KARAKIN_PRIMARY[Math.floor(Math.random() * WEAPON_MAP_KARAKIN_PRIMARY.length)];
        this.secondary_weapon = WEAPON_MAP_KARAKIN_SECONDARY[Math.floor(Math.random() * WEAPON_MAP_KARAKIN_SECONDARY.length)];
      } else if(mapname.toUpperCase() === 'TAEGO') {
        this.primary_weapon = WEAPON_MAP_TAEGO_PRIMARY[Math.floor(Math.random() * WEAPON_MAP_TAEGO_PRIMARY.length)];
        this.secondary_weapon = WEAPON_MAP_TAEGO_SECONDARY[Math.floor(Math.random() * WEAPON_MAP_TAEGO_SECONDARY.length)];
      }
    }
}

module.exports = PUBG_Loadout