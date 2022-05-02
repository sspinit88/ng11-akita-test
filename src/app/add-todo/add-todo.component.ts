import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent
  implements OnInit {

  form: FormGroup | undefined;

  constructor(
    protected fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  onSubmit(): void {

    if (!this.form || this.form.invalid) {
      return;
    }

    console.log('this.form.value():', this.form.value);
  }
}
