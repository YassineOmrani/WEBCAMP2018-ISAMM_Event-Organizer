import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  formData: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      name : ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['',Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;

    if (this.formData.invalid){
      return;
    }

    this.success = true;
  }
}
