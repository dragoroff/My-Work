import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent {
  @Input('book') book: any;
  defaultBookPrice: number = 100;
  noImage: string = './assets/images/No-image-foung.jpg';
}
