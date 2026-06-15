import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  readonly profileForm = this.fb.group({
    fullName: ['Víctor Díaz', [Validators.required, Validators.minLength(3)]],
    email: ['victor.diaz@fincore.pe', [Validators.required, Validators.email]],
    office: ['Lima Financial Center', Validators.required],
    bio: ['Frontend engineer focused on enterprise banking experiences.']
  });

  readonly preferencesForm = this.fb.group({
    compactTables: [false],
    showFinancialHints: [true],
    defaultCurrency: ['PEN'],
    theme: ['Enterprise Light']
  });

  readonly currencies = ['PEN', 'USD', 'EUR'].map((value) => ({ label: value, value }));
  readonly themes = ['Enterprise Light', 'High Contrast', 'Blue Soft'].map((value) => ({ label: value, value }));

  constructor(private readonly fb: FormBuilder, private readonly messageService: MessageService) {}

  save(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.messageService.add({ severity: 'success', summary: 'Settings saved', detail: 'Profile and preferences were saved locally.' });
  }
}
