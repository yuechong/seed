import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSharedModule } from '@app/app.shared.module';

import { HomeComponent } from '@views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [AppSharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModule {}
