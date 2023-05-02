import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {
  public dataCOmments = [];

  public formData = this.formBuilder.group({
    content: ['', Validators.required],
    postId: ['', Validators.required]
  })

  constructor(
    private httpService: HttpServerService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.httpService.getComments().subscribe(data => {
      this.dataCOmments = data
    });
  }

  public clearForm(): void {
    this.formData.controls['content'].setValue('');
    this.formData.controls['postId'].setValue('');
  }

  public onSubmit(): void {
    const data = {
      body: this.formData.controls['content'].value,
      postId: this.formData.controls['postId'].value
    };

    this.httpService.postComment(data).subscribe();

    this.ngOnInit();
    this.clearForm();


  }

}
