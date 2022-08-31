import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-profesional-angular';
  imgCody = 'assets/codys/1.png';
  ngOnInit(){
    this.getCodyImg();
  }

  getCodyImg(){
    let rand = Math.random() * 18;
    rand = Math.floor(rand);
    this.imgCody = `assets/codys/${rand}.png`;
  }
}
