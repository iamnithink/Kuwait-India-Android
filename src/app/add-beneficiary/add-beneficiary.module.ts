import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { AddBeneficiaryPage } from "./add-beneficiary.page";
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatSelectModule } from "@angular/material";

const routes: Routes = [
  {
    path: "",
    component: AddBeneficiaryPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [AddBeneficiaryPage],
})
export class AddBeneficiaryPageModule {}
