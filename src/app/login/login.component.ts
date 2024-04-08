import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private  userService : UserService){}

  ngOnInit():void {}


  login(loginForm: NgForm){
    this.userService.login(loginForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
    console.log(loginForm.value);
    console.log("Form is submitted");
  }
}
