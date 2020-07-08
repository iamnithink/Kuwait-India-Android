import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SignUpPage } from "./sign-up.page";

import { MatStepperModule, MatSelectModule, MatInputModule, MatFormFieldModule } from "@angular/material";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { ScrollingModule } from "@angular/cdk/scrolling";

const routes: Routes = [
  {
    path: "",
    component: SignUpPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    CdkStepperModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSelectModule,
    ScrollingModule,
  ],
  declarations: [SignUpPage],
})
export class SignUpPageModule {}
