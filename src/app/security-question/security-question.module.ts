import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SecurityQuestionPage } from './security-question.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityQuestionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SecurityQuestionPage]
})
export class SecurityQuestionPageModule {}
