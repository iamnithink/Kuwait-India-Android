import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { SharedModule } from "../components/shared/shared.module";
import { CreditCardPipe } from "../pipes/creditCard/credit-card.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage,
      },
    ]),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
