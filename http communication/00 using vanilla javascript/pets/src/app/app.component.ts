import { Component } from '@angular/core';
import { PetsService } from './pets.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="fetchPets()">Fetch Pets</button>

    <hr>

    <ul>
      <li *ngFor="let pet of pets">{{pet.name}}</li>
    </ul>
  `
})
export class AppComponent {
  pets;

  constructor(private petsService: PetsService) {}

  // fetchPets() {
  //   this.petsService.fetchPets()
  //     .then((result) => {
  //       this.pets = result;
  //     });
  // }

  async fetchPets() {
    this.pets = await this.petsService.fetchPets();
  }
}
