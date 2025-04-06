import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserHttpClientService } from '../../../core/services/user-http-client.service';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  private _userService: UserHttpClientService = inject(UserHttpClientService);
  private photo: File | null = null;
  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      ci: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phono: ['', Validators.required],
      address: ['', [Validators.required]],
      birthdate: ['', Validators.required],
      photo: ['']
    });
  }

  onSubmit() {
    this._userService.setUser(this.buildFormData()).subscribe((response) => {
      console.log(response);
    } );
  }


  setPhoto(inputRef: HTMLInputElement) {
    const file = inputRef.files?.[0];
    this.photo = file ? file : null;
  }

  buildFormData(): FormData {
    const formData = new FormData();

    for (const key in this.userForm.value) {
      if (key === 'photo' && this.photo) {
        formData.append(key, this.photo, this.photo.name);
      } else {
        formData.append(key, this.userForm.value[key]);
      }
    }
    return formData;
  }
}
