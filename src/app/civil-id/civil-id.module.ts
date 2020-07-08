import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CivilIdPage } from './civil-id.page';

const routes: Routes = [
  {
    path: '',
    component: CivilIdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CivilIdPage]
})
export class CivilIdPageModule {}
