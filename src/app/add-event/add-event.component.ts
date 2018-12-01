import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventData: FormGroup;
  public submitted: boolean = false;
  success: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    
  }
}
