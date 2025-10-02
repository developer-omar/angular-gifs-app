import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
})
export class GifListItemComponent {
  imageUrl = input.required<string>();
}
// Esto es un comentario
// creo que deberia hacer algunos cambios
// en el codigo fuente de mi componente actual
