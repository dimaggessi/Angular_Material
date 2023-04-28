import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormfieldInputComponent } from './formfield-input/formfield-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonsIconsComponent },
  { path: 'formFieldInput', component: FormfieldInputComponent },
  { path: 'progressBar', component: ProgressSpinnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
