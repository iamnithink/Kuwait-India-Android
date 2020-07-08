export interface SendAmountPostData {
  UserID: string;
  SessionToken: string;
  BeneficiaryID: string;
  FC_AMOUNT: string;
  KD_AMOUNT: string;
  TransToken: string;
  Rate: string;
  SourceOfFunds: string;
  PurposeCode: string;
  Commission: string;
}
