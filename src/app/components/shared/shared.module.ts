import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransactionComponent } from "../transaction/transaction.component";
import { IonicModule } from "@ionic/angular";
import { CreditCardPipe } from "src/app/pipes/creditCard/credit-card.pipe";

@NgModule({
  declarations: [TransactionComponent, CreditCardPipe],
  imports: [CommonModule, IonicModule],
  exports: [TransactionComponent, CreditCardPipe],
})
export class SharedModule {}
