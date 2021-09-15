import { Component, OnInit } from '@angular/core';
import 'boxicons';

/* https://www.youtube.com/watch?v=wEfaoAa99XY&t=1337s&ab_channel=CodingLab */

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  isCollapsed: boolean = true;
  sidebar?: any;
  closeBtn?: any;
  searchBtn?: any;

  constructor() { }

  ngOnInit(): void {

    this.sidebar = document.querySelector(".sidebar");
    this.closeBtn = document.querySelector("#btn");
    this.searchBtn = document.querySelector(".bx-search");

    this.closeBtn.addEventListener("click", () => {
      // Sidebar se abre cuando pulsas el bton de las rayas
      this.sidebar.classList.toggle("open");
      this.menuBtnChange(); //calling the function que cambia el icono
    });

    this.searchBtn.addEventListener("click", () => {
      // Sidebar open when you click on the search iocn
      this.sidebar.classList.toggle("open");
      this.menuBtnChange(); //calling the function que cambia el icono
    });
  }

  // cambia el icono de las rayistas, cuando abres y cierras
  menuBtnChange() {
    if (this.sidebar.classList.contains("open")) {
      this.closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
      this.closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
  }
}
