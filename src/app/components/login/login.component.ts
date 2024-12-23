import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private injector: Injector, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
    
  }

  loginFormSubmit() {
    console.log("form values are", this.loginForm.value);
    const authService = this.injector.get(AuthService);
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    
    this.router.navigate(['./home'])

    if(authService.login(username, password)){
    }
  }

}
