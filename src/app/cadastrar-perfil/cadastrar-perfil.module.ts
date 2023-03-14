import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarPerfilPageRoutingModule } from './cadastrar-perfil-routing.module';

import { CadastrarPerfilPage } from './cadastrar-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarPerfilPageRoutingModule
  ],
  declarations: [CadastrarPerfilPage]
})
export class CadastrarPerfilPageModule {}
