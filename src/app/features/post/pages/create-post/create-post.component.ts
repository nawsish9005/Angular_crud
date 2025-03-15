import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  createPostForm = new FormGroup({
    title: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.minLength(6), Validators.maxLength(100)]}),
    content: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.maxLength(3000)]}), 
  });

  onFormSubmit(){
    console.log(this.createPostForm.value);
  }
}
