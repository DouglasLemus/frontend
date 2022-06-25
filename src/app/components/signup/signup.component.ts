import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  singupForm!: FormGroup;  


  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.singupForm = this.createFormGroup();
  }

  createFormGroup():FormGroup{
    return new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(2)]),
      email: new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required, Validators.minLength(7)]),
    })

  }
  signup():void{
    this.authService.signup(this.singupForm.value).subscribe((msg) => console.log(msg));
  }
}
