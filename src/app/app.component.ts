import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-app';

  constructor() {
  }

  isMainPageVisible: boolean = true;
  isAboutUsPageVisible: boolean = false;
  isContactsPageVisible: boolean = false;

  showMainPage() {
    this.isMainPageVisible = true;
    this.isAboutUsPageVisible = false;
    this.isContactsPageVisible = false;
  }
  showAboutUsPage() {
    this.isMainPageVisible = false;
    this.isAboutUsPageVisible = true;
    this.isContactsPageVisible = false;
  }
  showContactsPage() {
    this.isMainPageVisible = false;
    this.isAboutUsPageVisible = false;
    this.isContactsPageVisible = true;
  }
}
