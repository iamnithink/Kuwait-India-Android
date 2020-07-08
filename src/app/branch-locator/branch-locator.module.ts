import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BranchLocatorPage } from './branch-locator.page';

const routes: Routes = [
  {
    path: '',
    component: BranchLocatorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BranchLocatorPage]
})
export class BranchLocatorPageModule {}
