import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator } from './password-strength.validator';
import { passwordMatch } from './password-match';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent {
  public submitted: boolean = false;
  public data: any;
  console = console;
  constructor(private router: Router) {}
  userProfile = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        PasswordStrengthValidator,
      ]),
      cnfpassword: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        address1: new FormControl(''),
        state: new FormControl(''),
        pincode: new FormControl(''),
      }),
    },
    [passwordMatch('password', 'cnfpassword')]
  );
  // email = new FormControl('');
  update() {}
  onSubmit() {
    console.log('this.userProfile', this.userProfile.value.firstName !== null);

    this.submitted = true;
    this.data = this.userProfile.value;
    this.userProfile.reset();
  }

  // console.log(this.userProfile.get('firstName')?.value);
  // console.log(
  //   'this.userProfile.get([address,address1]',
  //   this.userProfile.get(['address', 'address1'])?.value
  // );
}
