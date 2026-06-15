import { RequestStatus, RequestType } from './enums';

export interface InternalRequest {
  id: string;
  code: string;
  type: RequestType;
  customerName: string;
  owner: string;
  priority: 'Low' | 'Medium' | 'High';
  status: RequestStatus;
  createdAt: string;
  slaHours: number;
  summary: string;
}
