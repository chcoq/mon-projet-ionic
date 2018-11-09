import {Appareil} from "../models/Appareil";

export class AppareilsService {
    appareilsList : Appareil[] = [
        {
            name: 'Machine à laver',
            description: [
                'Volume: 6 litres',
                'temps de lavage: 2 heures',
                'Consomation:173 kWh/an'
            ],
            isOn :true
        },
        {
            name: 'Télévision',
            description: [
                'Dimensions: pouces',
                'Consommation : 22 kWh/an'
            ],
            isOn :true
        },
        {
            name: 'Ordinateur',
            description: [
                'Marque: Asus',
                'Consommation: 500 kWh/an'
            ],
            isOn :false
        },
    ];
}
