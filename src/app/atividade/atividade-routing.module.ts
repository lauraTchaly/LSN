import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtividadePage } from './atividade.page';

const routes: Routes = [
  {
    path: '',
    component: AtividadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtividadePageRoutingModule {}
