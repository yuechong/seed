import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppSharedModule } from './app.shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from '@app/views/login';
import { ForgetComponent } from '@app/views/forget';
import { RegisterComponent } from '@app/views/register';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AppSharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
