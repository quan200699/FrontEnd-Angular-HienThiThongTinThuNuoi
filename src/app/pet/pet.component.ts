import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  petName = 'corgi';
  petImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/WelshCorgi.jpeg/300px-WelshCorgi.jpeg';

  constructor() {
  }

  ngOnInit() {
  }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }
}
