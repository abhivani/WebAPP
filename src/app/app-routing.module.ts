import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Common/login/login.component';
import { ProductComponent } from './shared/product/product.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'',component:LoginComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
