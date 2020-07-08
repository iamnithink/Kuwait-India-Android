import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { HistoryPage } from "./history.page";
import { CreditCardPipe } from "../pipes/creditCard/credit-card.pipe";
import { SharedModule } from "../components/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: HistoryPage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), SharedModule],
  declarations: [HistoryPage],
})
export class HistoryPageModule {}
