import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { MatieresComponent } from './matieres/matieres.component';
import {MatiereService} from "./matieres/matiere.service";
import { AjoutMatiereComponent } from './ajout-matiere/ajout-matiere.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {appEffects, getReducers, REDUCER_TOKEN} from "./store/index";
import { MatieresCloneComponent } from './matieres-clone/matieres-clone.component';
import { MatieresParentComponent } from './matieres-parent/matieres-parent.component';

import { PessoasParentComponent } from './pessoas-parent/pessoas-parent.component';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaService } from './pessoas/pessoa.service';
//import { PessoasCloneComponent } from './pessoas-clone/pessoas-clone.component';

//import { ReservaComponent } from './reserva/reserva.component';

import { CidadesParentComponent } from './cidades-parent/cidades-parent.component';
import { CidadesComponent } from './cidades/cidades.component';
import { CidadeService } from './cidades/cidade.service';
import { CriarCidadeComponent } from './criar-cidade/criar-cidade.component';

import { ReservasParentComponent } from './reservas-parent/reservas-parent.component';
//import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaService } from './reservas/reserva.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'matiere', component: MatieresParentComponent },
  { path: 'ajout-matiere', component: AjoutMatiereComponent },
  //{ path: '', redirectTo: '/pessoa', pathMatch: 'full' },
  { path: 'pessoa', component: PessoasParentComponent },
  { path: 'criar-pessoa', component: CriarPessoaComponent },
  {path: 'reserva', component: ReservasParentComponent },
  {path: 'cidade', component: CidadesParentComponent },
  {path: 'criar-cidade', component: CriarCidadeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MatieresComponent,
    AjoutMatiereComponent,
    MatieresCloneComponent,
    MatieresParentComponent,
    PessoasComponent,
    CriarPessoaComponent,
    PessoasParentComponent,
    //PessoasCloneComponent,
    ReservasComponent,
    ReservasParentComponent,
    CidadesComponent,
    CriarCidadeComponent,
    CidadesParentComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      name: '[TODOLIST]',
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [{
      provide: REDUCER_TOKEN,
      useFactory: getReducers
    },
    MatiereService,
    PessoaService,
    CidadeService,
    ReservaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
