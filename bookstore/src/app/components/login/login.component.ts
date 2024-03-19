import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm !: FormGroup
  loginForm !: FormGroup
  submitOnRegister: boolean = false
  submitOnLogin: boolean = false
  ngOnInit(): void {
    
  }

  constructor(public formBuilder: FormBuilder, private userService: UserService, public router: Router) {
   this.registerForm = this.formBuilder.group({
      fullName: ['',[Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+91[0-9]{10}$/)]]
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
    this.submitOnRegister = true;
    const {fullName, email, password, phone} = this.registerForm.value;
    this.userService.registerUser({
      "fullName": fullName,
      "email": email,
      "password": password,
      "phone": phone,
      "service":"advance"
    }).subscribe((result)=>{
      console.log(result);
      alert("Registration successfull");
    },error=>{console.log(error);});
    console.log(this.registerForm.value);
  }

  loginUser(){
    this.submitOnLogin = true;
      if (this.loginForm.invalid) {
        return;
      }
    this.submitOnLogin = true;
    const {email, password} = this.loginForm.value;
    this.userService.loginUser({
        "email": email,
        "password": password
      }).subscribe((result: any)=>{
        localStorage.setItem("accessToken",result.result.accessToken);
        alert("User logged in successfully")
        console.log(result);},(error)=>{
          alert("Please enter valid password")
          console.log(error);});
    console.log(this.loginForm.value);
  }
}