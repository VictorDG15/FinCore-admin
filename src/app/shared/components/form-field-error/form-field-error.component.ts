import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html'
})
export class FormFieldErrorComponent {
  @Input() control: AbstractControl | null = null;
  @Input() label = 'This field';

  get message(): string | null {
    if (!this.control || !this.control.touched || !this.control.errors) {
      return null;
    }

    if (this.control.errors['required']) {
      return `${this.label} is required.`;
    }

    if (this.control.errors['email']) {
      return 'Enter a valid email address.';
    }

    if (this.control.errors['minlength']) {
      return `${this.label} is too short.`;
    }

    if (this.control.errors['min']) {
      return `${this.label} must be greater than the minimum allowed.`;
    }

    return `${this.label} is invalid.`;
  }
}
