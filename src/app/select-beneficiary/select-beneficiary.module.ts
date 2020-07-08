import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectBeneficiaryPage } from './select-beneficiary.page';

const routes: Routes = [
  {
    path: '',
    component: SelectBeneficiaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectBeneficiaryPage]
})
export class SelectBeneficiaryPageModule {}
