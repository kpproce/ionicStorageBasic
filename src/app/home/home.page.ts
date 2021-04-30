import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  tempName = 'Leeg';
  tempAge = 21;

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async setItem() {
    alert (this.tempName + ' opgeslagen in storage in de var tempName');
    await this.storage.set('name', this.tempName);
  }

  async getItem() {
    this.tempName = await this.storage.get('name');
  }

  defaultItem() {
      this.tempName = 'Leeg gemaakt';
  }
}
