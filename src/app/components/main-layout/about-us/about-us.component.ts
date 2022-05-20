import { Component, Input, OnInit } from '@angular/core';
import { DogService } from 'src/app/shared/service/dog.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  randomImageUrl: string = "";

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.getRandomImage().subscribe((data: any) => {
      console.log(data);
      this.randomImageUrl = data.message;
    })
  }

  getRandomImage() {
    this.dogService.getRandomImage().subscribe((data: any) => {
      console.log(data);
      this.randomImageUrl = data.message;
    })
  }

}
