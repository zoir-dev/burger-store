import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import { canExitGuard } from '../shared/guards/can-exit.guard';


const routes: Routes = [{ path: '', component: ContactComponent, canDeactivate: [canExitGuard] }]

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule.forChild(routes),
    NgIf, MatCardModule, MatInputModule, MatButtonModule
  ],
  exports: [ReactiveFormsModule, NgIf, MatCardModule, MatInputModule, MatButtonModule, RouterModule]
})
export class ContactModule { }
