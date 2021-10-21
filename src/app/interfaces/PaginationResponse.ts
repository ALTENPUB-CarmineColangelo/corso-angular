import {BaseResponse} from "./BaseResponse";

export interface PaginationResponse {
  count: number;
  next: string;
  previous: string;
  results: BaseResponse[]
}
