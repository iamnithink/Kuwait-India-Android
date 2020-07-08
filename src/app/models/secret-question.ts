import { SecretQuestion } from "./secret-question";

export interface SecretQuestion {
  Status: string;
  ErrorCode: string;
  SecretQuestion: string;
  ErrorDesc?: string;
}
