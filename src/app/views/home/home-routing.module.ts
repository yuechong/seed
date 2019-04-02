import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      ...report,
      ...dataManage,
      ...assessConfig,
      ...systemManagement,
      ...logManagement,
      ...Home,
      ...Statistics
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
