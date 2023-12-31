import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = new FormControl('');
  password = new FormControl('');


  constructor(private auth: AuthService, private router: Router) { }

  Login() {
    const usernameValue = this.username.value;
    const passwordValue = this.password.value;
    this.auth.loginUser(usernameValue!, passwordValue!)
      .subscribe(response => {
        // Log the response
        console.log(response),
          // Storing the JWT in LocalStorage
          localStorage.setItem('jwtToken', response);
          this.router.navigate(['/']);
      });

  }
}
