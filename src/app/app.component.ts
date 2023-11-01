import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTempleteDrivenForm';
  countryList:Country[]=[
    new Country("1","India"),
    new Country("2","England"),
    new Country("3","South Africa")
  ]

  onSubmit(contactForm:any){
    console.log(contactForm.value);
  }

}

export class Country{
  id;
  name;

  constructor(id:String,name:String){
    this.id=id;
    this.name=name;
  }
}
