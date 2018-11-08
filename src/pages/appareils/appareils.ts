import {Component} from '@angular/core';
import {ModalController} from "ionic-angular";
import {SingleAppareilPage} from "./single-appareil/single-appareil";

@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html'
})

export class AppareilsPage {

    constructor(private modalCtrl: ModalController) {

    }

    appareilsList = [
        {
            name: 'Machine à laver',
            description: [
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

    onLoadAppareil(appareil: { name: string, description: string[] }) {
        let modal = this.modalCtrl.create(SingleAppareilPage, {appareil: appareil});
        modal.present();

    }
}

