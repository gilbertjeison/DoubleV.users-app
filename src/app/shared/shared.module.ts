import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './modules/angular-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsernameValidationDirective } from './directives/username-validation.directive';
import { NgxBarcode6Module } from 'ngx-barcode6';

@NgModule({
  declarations: [
    UsernameValidationDirective
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    NgxBarcode6Module
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    UsernameValidationDirective,
    NgxBarcode6Module
  ]
})
export class SharedModule { }
