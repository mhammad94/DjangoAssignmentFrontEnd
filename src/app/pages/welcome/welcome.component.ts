import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isCollapsed = false;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.login('hello12345', 'harry18876789.').subscribe(res => {
      console.log(res)
    })
    // this.authService.createUser("harry@gmail.com","hello12345", "harry18876789.", "Harry", "Jhonson").subscribe(res => {
    //   console.log(res)
    // })
  }

}
