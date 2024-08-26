export interface Request<Data> {
  url: string;
  method: string;
  data?: Data;
}