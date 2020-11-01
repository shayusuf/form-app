import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  first_name:any;
  last_name:any;
  address:any;
  email:any;
  password:any;
  gender: string;
  genders: string[] = ['Male','Female','Others'];
}
