import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {SingleAppareilPage} from "./single-appareil/single-appareil";

@Component({
    selector:'page-appareils',
    templateUrl:'appareils.html'
})

export class AppareilsPage {

    constructor(private navCtrl: NavController){

    }

    appareilsList =[
    {
        name: 'Machine à laver',
        description:[
            'Volume: 6 litres',
            'temps de lavage: 2 heures',
            'Consomation:173 kWh/an'
        ]
    },
    {
        name: 'Télévision',
        description: [
            'Dimensions: pouces',
            'Consommation : 22 kWh/an'
        ]
    },
    {
        name: 'Ordinateur',
        description: [
            'Marque: Asus',
            'Consommation: 500 kWh/an'
        ]
    },
];
    onLoadAppareil(appareil:{name: string, description: string[]}){
        this.navCtrl.push(SingleAppareilPage,{appareil: appareil});

    }
}

