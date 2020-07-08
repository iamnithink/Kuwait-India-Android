import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { RemittanceDetailsPage } from "./remittance-details.page";
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatSelectModule } from "@angular/material";

const routes: Routes = [
  {
    path: "",
    component: RemittanceDetailsPage,
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
  declarations: [RemittanceDetailsPage],
})
export class RemittanceDetailsPageModule {}
