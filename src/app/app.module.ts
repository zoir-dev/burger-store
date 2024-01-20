import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterOutlet, CoreModule, HttpClientModule],
  exports: [CoreModule, RouterOutlet, RouterModule, HttpClientModule]
})
export class AppModule { }
