import { Empresa } from './../shared/empresa';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../shared/empresa.service';
import { Observable } from 'rxjs';
import { EmpresaDataService } from '../shared/empresa-data.service';


@Component({
  selector: 'empresa-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class EmpresaListComponent implements OnInit {
  empresas: Observable<any>;

  constructor(private empresaService: EmpresaService, private empresaDataService: EmpresaDataService) { }

  ngOnInit() {
      this.empresas = this.empresaService.getAll();
  }

  delete(key: string) {
      this.empresaService.delete(key);
  }

  edit(empresa: Empresa, key: string) {
      this.empresaDataService.changeEmpresa(empresa, key);
  }

}
