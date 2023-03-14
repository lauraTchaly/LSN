import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtividadePageRoutingModule } from './atividade-routing.module';

import { AtividadePage } from './atividade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtividadePageRoutingModule
  ],
  declarations: [AtividadePage]
})
export class AtividadePageModule {}
