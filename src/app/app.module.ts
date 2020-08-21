import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EmpresaEditComponent } from './empresas/edit/edit.component';
import { EmpresaListComponent } from './empresas/list/list.component';
import { FuncionarioEditComponent } from './funcionarios/edit/edit.component';
import { FuncionarioListComponent } from './funcionarios/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaEditComponent,
    EmpresaListComponent,
    FuncionarioEditComponent,
    FuncionarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
