export interface TermsAndPrivacy {
  statusCode: number;
  message: string;
  data: Data;
}

export interface Data {
  title: string;
  content: string;
  image: string;
}
