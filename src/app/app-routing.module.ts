import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'atividade',
    loadChildren: () => import('./atividade/atividade.module').then( m => m.AtividadePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cadastrar-perfil',
    loadChildren: () => import('./cadastrar-perfil/cadastrar-perfil.module').then( m => m.CadastrarPerfilPageModule)
  },
  {
    path: 'perfil-view',
    loadChildren: () => import('./perfil-view/perfil-view.module').then( m => m.PerfilViewPageModule)
  },
  {
    path: 'model',
    loadChildren: () => import('./model/model.module').then( m => m.ModelPageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
