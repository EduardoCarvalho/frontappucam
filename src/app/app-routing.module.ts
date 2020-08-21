import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaEditComponent } from './empresas/edit/edit.component';
import { EmpresaListComponent } from './empresas/list/list.component';
import { FuncionarioEditComponent } from './funcionarios/edit/edit.component';
import { FuncionarioListComponent } from './funcionarios/list/list.component';

const routes: Routes = [
    { path: '', redirectTo: '/empresa', pathMatch: 'full' },
    { path: 'empresa-list', component: EmpresaListComponent },
    { path: 'empresa-edit', component: EmpresaEditComponent },
    { path: 'funcionario-list', component: FuncionarioListComponent },
    { path: 'funcionario-edit', component: FuncionarioEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
