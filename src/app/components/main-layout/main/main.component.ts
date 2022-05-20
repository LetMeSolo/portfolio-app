import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  // @Input()
  // isMainPageVisible!: boolean;

  isMogoProjectVisible: boolean = true;
  isActiveBoxProjectVisible: boolean = false;
  isFilmsProjectVisible: boolean = false;
  isBildCompanyProjectVisible: boolean = false;
  isSnakeGameProjectVisible: boolean = false;

  showMogoProject() {
    this.isMogoProjectVisible = true;
    this.isActiveBoxProjectVisible = false;
    this.isFilmsProjectVisible = false;
    this.isBildCompanyProjectVisible = false;
    this.isSnakeGameProjectVisible = false;
  }
  showActiveBoxProject() {
    this.isMogoProjectVisible = false;
    this.isActiveBoxProjectVisible = true;
    this.isFilmsProjectVisible = false;
    this.isBildCompanyProjectVisible = false;
    this.isSnakeGameProjectVisible = false;
  }

  showFilmsProject() {
    this.isMogoProjectVisible = false;
    this.isActiveBoxProjectVisible = false;
    this.isFilmsProjectVisible = true;
    this.isBildCompanyProjectVisible = false;
    this.isSnakeGameProjectVisible = false;
  }
  showBildCompanyProject() {
    this.isMogoProjectVisible = false;
    this.isActiveBoxProjectVisible = false;
    this.isFilmsProjectVisible = false;
    this.isBildCompanyProjectVisible = true;
    this.isSnakeGameProjectVisible = false;
  }
  showSnakeGameProject() {
    this.isMogoProjectVisible = false;
    this.isActiveBoxProjectVisible = false;
    this.isFilmsProjectVisible = false;
    this.isBildCompanyProjectVisible = false;
    this.isSnakeGameProjectVisible = true;
  }


  ngOnInit(): void {
  }

}
