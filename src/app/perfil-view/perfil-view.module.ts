import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilViewPageRoutingModule } from './perfil-view-routing.module';

import { PerfilViewPage } from './perfil-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilViewPageRoutingModule
  ],
  declarations: [PerfilViewPage]
})
export class PerfilViewPageModule {}
