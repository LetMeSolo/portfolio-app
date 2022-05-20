import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input()
  isMainPageVisible!: boolean;

  @Input()
  isAboutUsPageVisible!: boolean;

  @Input()
  isContactsPageVisible!: boolean;

  @Output() onMainPageSelect = new EventEmitter();

  @Output() onAboutUsPageSelect = new EventEmitter();

  @Output() onContactsPageSelect = new EventEmitter();

  ngOnInit(): void {
  }

  showMainPage() {
    this.onMainPageSelect.emit();
  }
  showAboutUsPage() {
    this.onAboutUsPageSelect.emit();
  }
  showContactsPage() {
    this.onContactsPageSelect.emit();
  }

}
