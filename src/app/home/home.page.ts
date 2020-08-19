import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  count = [
    {
      'nom': 'Woo Tarkovski',
      'texte': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repudiandae, perspiciatis qui nisi excepturi inventore quam iure nesciunt architecto dolorum laboriosam voluptate maiores vel earum harum beatae rerum, magnam ipsum?',
      'date': '20 mais 2019',
      'image': '../../assets/image/2.jpg'
    },
    {
      'nom': 'Flora Blanche',
      'texte': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quaerat quo tempora voluptates perspiciatis earum consequuntur. Tempora voluptates perferendis pariatur magni, voluptatem voluptate laborum earum accusamus. Debitis temporibus ea libero.',
      'date': '12 juin 2017',
      'image': '../../assets/image/1.jpg'
    },
    {
      'nom': 'Alan Drosovich',
      'texte': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque perspiciatis officia quo aliquam incidunt esse cupiditate fugit velit! Necessitatibus accusantium dicta nobis magni suscipit sunt perferendis provident est? Repellendus.',
      'date': '07 octobre 2011',
      'image': '../../assets/image/1.jpg'
    },
    {
      'nom': 'Lea Veroy',
      'texte': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempore veniam quam, provident pariatur repellat ea eos dolore cumque nihil explicabo quaerat odit rem! Aspernatur consequuntur necessitatibus doloribus veniam quos.',
      'date': '20 mais 2019',
      'image': '../../assets/image/2.jpg'
    }
  ]
  constructor() {
  }

}
