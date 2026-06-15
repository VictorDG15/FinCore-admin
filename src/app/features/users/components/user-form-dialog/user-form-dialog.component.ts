import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs';
import { UserRole, UserStatus } from '../../../../core/models/enums';
import { InternalUser, InternalUserPayload } from '../../../../core/models/user.model';
import { UserService } from '../../../../core/services/user.service';
import { SelectOption, toSelectOptions } from '../../../../shared/utils/select-options';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html'
})
export class UserFormDialogComponent implements OnChanges {
  @Input() visible = false;
  @Input() user: InternalUser | null = null;
  @Output() closed = new EventEmitter<void>();

  loading = false;
  readonly roleOptions: SelectOption<UserRole>[] = toSelectOptions(Object.values(UserRole));
  readonly statusOptions: SelectOption<UserStatus>[] = toSelectOptions(Object.values(UserStatus));
  readonly form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    role: [UserRole.Analyst, Validators.required],
    status: [UserStatus.Active, Validators.required],
    department: ['', Validators.required]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private readonly messageService: MessageService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] || changes['visible']) {
      this.user ? this.form.patchValue(this.user) : this.form.reset({ fullName: '', email: '', role: UserRole.Analyst, status: UserStatus.Active, department: '' });
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.userService.saveUser(this.form.getRawValue() as InternalUserPayload, this.user?.id)
      .pipe(finalize(() => this.loading = false))
      .subscribe((user) => {
        this.messageService.add({ severity: 'success', summary: 'User saved', detail: `${user.fullName} was saved.` });
        this.closed.emit();
      });
  }
}
