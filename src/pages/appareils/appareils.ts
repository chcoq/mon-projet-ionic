import {Component} from '@angular/core';
import {SingleAppareilPage} from "./single-appareil/single-appareil";
import {Appareil} from "../../models/Appareil";
import {AppareilsService} from "../../services/appareils.service";
import {MenuController, ModalController} from "ionic-angular";

@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html'
})

export class AppareilsPage {

    appareilsList: Appareil[];

    constructor(private modalCtrl: ModalController,
                private appareilsService: AppareilsService,
                private menuCtrl: MenuController) {
    }

    ionViewWillEnter() {
        this.appareilsList = this.appareilsService.appareilsList.slice();
    }

    onLoadAppareil(index: number) {
        let modal = this.modalCtrl.create(SingleAppareilPage, {index: index});
        modal.present();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }
}

