import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilViewPage } from './perfil-view.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilViewPageRoutingModule {}
