import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user-services/user.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm !: FormGroup
  loginForm !: FormGroup
  submitted: boolean = false

  ngOnInit(): void {
    
  }

  constructor(public formBuilder: FormBuilder, private userService: UserService, public router: Router) {
   this.registerForm = this.formBuilder.group({
      fullName: ['',[Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['',[Validators.required, Validators.minLength(10)]]
    });
  
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  }

  get f(){
    return this.registerForm.controls;
  }

  get login(){
    return this.loginForm.controls;
  }

  registerUser(){
    this.submitted = true;
    const {fullName, email, password, mobileNumber} = this.registerForm.value;
    this.userService.registerUser({
      "fullName": fullName,
      "email": email,
      "password": password,
      "mobileNumber": mobileNumber,
      "service":"advance"
    }).subscribe((result)=>{
      console.log(result);
      alert("Registration successfull");
    },error=>{console.log(error);});
    console.log(this.registerForm.value);
  }

  loginUser(){
    this.submitted = true;
      const {email, password} = this.loginForm.value;
      this.userService.loginUser({
          "email": email,
          "password": password
        }).subscribe((result: any)=>{
          localStorage.setItem("token",result.id);
          alert("User logged in successfully");
          console.log(result);},error=>{console.log(error);});
      console.log(this.loginForm.value);
  }
}
