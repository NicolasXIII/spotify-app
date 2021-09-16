import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-change-symmetry',
  templateUrl: './cards-change-symmetry.component.html',
  styleUrls: ['./cards-change-symmetry.component.scss']
})
export class CardsChangeSymmetryComponent implements OnInit {

  @Input() cards !: any[];
  @Input() type !: string;
  cardsSymmetry : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
