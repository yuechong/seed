import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModules } from './pages-routing.module';
import { PagesComponent } from './index';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModules]
})
export class PagesModule {}
