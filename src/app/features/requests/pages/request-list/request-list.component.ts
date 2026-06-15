import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RequestStatus } from '../../../../core/models/enums';
import { InternalRequest } from '../../../../core/models/request.model';
import { RequestService } from '../../../../core/services/request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  loading = true;
  requests: InternalRequest[] = [];
  readonly status = RequestStatus;

  constructor(
    private readonly requestService: RequestService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.requestService.getRequests().subscribe((requests) => {
      this.requests = requests;
      this.loading = false;
    });
  }

  approve(request: InternalRequest): void {
    this.confirmStatusChange(request, RequestStatus.Approved, 'Approve request', 'This will mark the request as approved.');
  }

  reject(request: InternalRequest): void {
    this.confirmStatusChange(request, RequestStatus.Rejected, 'Reject request', 'This will mark the request as rejected.');
  }

  private confirmStatusChange(request: InternalRequest, status: RequestStatus, header: string, message: string): void {
    this.confirmationService.confirm({
      header,
      message,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.requestService.updateStatus(request.id, status).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Request updated', detail: `${request.code} is now ${status}.` });
        });
      }
    });
  }
}
