import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;
  readonly loginForm = this.fb.nonNullable.group({
    email: ['admin@fincore.pe', [Validators.required, Validators.email]],
    password: ['Admin123', [Validators.required, Validators.minLength(6)]],
    remember: [true]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly messageService: MessageService
  ) {}

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.authService.login(this.loginForm.getRawValue())
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/dashboard';
          this.messageService.add({ severity: 'success', summary: 'Welcome back', detail: 'Secure session started.' });
          this.router.navigateByUrl(returnUrl);
        },
        error: (error: Error) => this.messageService.add({ severity: 'error', summary: 'Login failed', detail: error.message })
      });
  }
}
