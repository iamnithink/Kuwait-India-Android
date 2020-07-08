import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { Routes, RouterModule } from "@angular/router"

import { IonicModule } from "@ionic/angular"

import { TransactionDetailsPage } from "./transaction-details.page"
import { SharedModule } from "../components/shared/shared.module"

const routes: Routes = [
  {
    path: "",
    component: TransactionDetailsPage
  }
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [TransactionDetailsPage]
})
export class TransactionDetailsPageModule {}
