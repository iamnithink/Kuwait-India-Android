import { SecretQuestionSignup } from "./secret-question-signup";

export interface SecretQuestionSignupList {
  Status: string;
  ErrorCode: string;
  ErrorDesc: string;
  SecretQuestionsList: [SecretQuestionSignup];
}
