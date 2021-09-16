import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-symmetric',
  templateUrl: './cards-symmetric.component.html',
  styleUrls: ['./cards-symmetric.component.scss']
})
export class CardsSymmetricComponent implements OnInit {

  @Input() cards!: any[];
  @Input() type!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
