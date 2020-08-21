import { Component, OnInit } from '@angular/core';
import { Empresa } from  '../shared/empresa';
import { EmpresaService } from  '../shared/empresa.service';
import { EmpresaDataService } from  '../shared/empresa-data.service';

@Component({
  selector: 'empresa-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EmpresaEditComponent implements OnInit {
    empresa: Empresa;
    key: string = '';

  constructor(private empresaService: EmpresaService, private empresaDataService: EmpresaDataService) { }

  ngOnInit(): void {
      this.empresa = new Empresa();
      this.empresaDataService.currentEmpresa.subscribe(data => {
          if (data.empresa && data.key) {
              this.empresa = new Empresa();
              this.empresa.cnpj = data.empresa.cnpj;
              this.empresa.razaoSocial = data.empresa.razaoSocial;
              this.empresa.nomeFantasia = data.empresa.nomeFantasia;
              this.key = data.key;
          }
      })
  }

  onSubmit() {
      if (this.key) {
          this.empresaService.update(this.empresa, this.key);
      } else {
          this.empresaService.insert(this.empresa);
      }

      this.empresa =  new Empresa();

  }

}
