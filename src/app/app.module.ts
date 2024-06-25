import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './shared/product/product.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './Common/login/login.component';
import { OTPVerifyComponent } from './Common/otpverify/otpverify.component';
import { AddSecurityQuestionsComponent } from './Common/add-security-questions/add-security-questions.component';
import { ProductMappingStractureComponent } from './Common/product-mapping-stracture/product-mapping-stracture.component';
import { AuditHeadDeshboardComponent } from './Common/Dashboard/audit-head-deshboard/audit-head-deshboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    LoginComponent,
    OTPVerifyComponent,
    AddSecurityQuestionsComponent,
    ProductMappingStractureComponent,
    AuditHeadDeshboardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
