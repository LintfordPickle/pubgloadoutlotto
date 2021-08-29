'use strict';

const MAPS = ['ERANGEL','MIRAMAR','SANHOK','VIKENDI','KARAKIN','TAEGO']

const ERANGEL_DROP_POINTS = ['Zharki','Shooting Range','Severny','Stalber','Kameshki','Georgopol North','Georgopol South','Rozhok','Yasnaya Polyana','Mansion','Hospital','Ruins','Sunken Town','School / Apartments','Prison','Lipovka','Shelter','Mylta','Mylta Power','Farm','Pochinki','Gatka','Quarry','Ferry Pier','Primorsk','Military Base','Novorepnoye']
const MIRAMAR_DROP_POINTS = ['La Cobreria', 'Water Treatment','Torre Anumada','La Bendita','Campo Militar','Tierra Bronca','Cruz del Valle','Crater Fields','Algahtara','El Pozo','San Martin','Hacienda','El Azahar','Junkyard','Mone Nuevo','Pecado','La Bendita','Impala','Los Leones North','Los Leones East','Los Leones South','Puerto Pariso','Valle del Mar','Prison','Los Higos','Chumacera','Minas Generales']
const SANHOK_DROP_POINTS = ['Ha Tinh','Tat Mok','Khao','Airfield','Paradise Ressort','Camp Alpha','Camp Bravo','Bootcamp','Ruins','Pai Nam','Quarry','Lakawi East (villages)','Lakawi','Kampong','Cave','Ruins','Tambang','Na Kham','Sammee','Camp Charlie','Ban Tai','Getaway']
const VIKENDI_DROP_POINTS = ['Port','Zabava','Cosmodrome','Trevno','Cargo Depot','Peshkova','Coal Mine','Krichas','Debro Mesto','Goroka','Abbey','Podvosto','Cement Factory','Villa','Castle','Lumber Yard','Dino Land North','Dino Land South','Vihar','Sawmill','Winery','Volnova','Cantra','Milnar','Pilnec']
const KARAKIN_DROP_POINTS = ['Bahr Sahir','Al Habar','Hadiqa Nemo','Al Hayik','Cargo Ship','Grid [G-O]']
const TAEGO_DROP_POINTS = ['Wol Song','Army Base','Shipyard East','Shipyard West','Yong Cheon','Go Dok','Hae Moo Sa','Palace','Airport','Kang Neung','Terminal East','Terminal West','Fishing Camp','Kang Neung','Buk San Sa','Ho San','Oh Hyang','Song Am','Studio','School','Prison','Ha Po']
const PARAMO_DROP_POINTS = ['Capaco','Helipad','Atahul','Makalpa'] // TODO: Map grid points (not enough named locations)
const HAVEN_DROP_POINTS = ['Closest Commander Building', 'Farthest Commander Building','Industrial Park','Rail Yard','Steel Mill','Coal Yards','Docks','Residential']

class PUBG_Map {
    constructor() {
        this.droppoint = 'Not selected';
    }

    isMapNameValid(mapname){
      return MAPS.includes(mapname.toUpperCase());
    }

    getNewDropPoint(mapname) {
        if(mapname.toUpperCase() === 'ERANGEL') {
            this.droppoint = ERANGEL_DROP_POINTS[Math.floor(Math.random() * ERANGEL_DROP_POINTS.length)];
            return;
        } else if(mapname.toUpperCase() === 'MIRAMAR') {
            this.droppoint = MIRAMAR_DROP_POINTS[Math.floor(Math.random() * MIRAMAR_DROP_POINTS.length)];
            return;
        } else if(mapname.toUpperCase() === 'SANHOK') {
            this.droppoint = SANHOK_DROP_POINTS[Math.floor(Math.random() * SANHOK_DROP_POINTS.length)];
            return;
        } else if(mapname.toUpperCase() === 'VIKENDI') {
            this.droppoint = VIKENDI_DROP_POINTS[Math.floor(Math.random() * VIKENDI_DROP_POINTS.length)];
            return;
        } else if(mapname.toUpperCase() === 'KARAKIN') {
            this.droppoint = KARAKIN_DROP_POINTS[Math.floor(Math.random() * KARAKIN_DROP_POINTS.length)];
            return;
        } else if(mapname.toUpperCase() === 'TAEGO') {
            this.droppoint = TAEGO_DROP_POINTS[Math.floor(Math.random() * TAEGO_DROP_POINTS.length)];
            return;
        } else if(mapname.toUpperCase() === 'PARAMO') {
            this.droppoint = PARAMO_DROP_POINTS[Math.floor(Math.random() * PARAMO_DROP_POINTS.length)];
            return;
        } else if(mapname.toUpperCase() === 'HAVEN') {
            this.droppoint = HAVEN_DROP_POINTS[Math.floor(Math.random() * HAVEN_DROP_POINTS.length)];
            return;
        }

        return 'map not recognized'
    }
}

module.exports = PUBG_Map