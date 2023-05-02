import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // public formData: FormGroup =  new FormGroup({
  //   email: new FormControl(''),
  //   name: new FormControl('')
  // });

  public formData2 = this.formBuilder.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    })
  })

  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  public onSubmit(): void {
    // console.log('form data = ', this.formData.value);
    this.common.submitData(this.formData2.value)
  }

}
