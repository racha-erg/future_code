import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-couse-card',
  standalone: true,
  imports: [],
  templateUrl: './couse-card.component.html',
  styleUrl: './couse-card.component.scss'
})
export class CouseCardComponent {

@Input() coursetitle: string = '';
}
