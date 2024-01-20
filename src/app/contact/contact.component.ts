import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDirective } from '../shared/guards/can-exit.guard';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, IDirective {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  getError(errorName: string) {
    return this.myForm.controls[errorName]
  }

  submit() {
    console.log(this.myForm.value)
  }

  canExit(): boolean {
    if (this.myForm.value.name !== '' || this.myForm.value.email !== '') {
      return confirm('Are u sure to leave without saving data?')
    }
    return true
  }

}
