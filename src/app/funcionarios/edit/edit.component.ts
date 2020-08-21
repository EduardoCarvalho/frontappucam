import { Component, OnInit } from '@angular/core';
import { Funcionario } from  '../shared/funcionario';
import { FuncionarioService } from  '../shared/funcionario.service';
import { FuncionarioDataService } from  '../shared/funcionario-data.service';

@Component({
  selector: 'funcionario-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class FuncionarioEditComponent implements OnInit {

    funcionario: Funcionario;
    key: string = '';

  constructor(private funcionarioService: FuncionarioService, private funcionarioDataService: FuncionarioDataService) { }

  ngOnInit(): void {
      this.funcionario = new Funcionario();
      this.funcionarioDataService.currentFuncionario.subscribe(data => {
          if (data.funcionario && data.key) {
              this.funcionario = new Funcionario();
              this.funcionario.cpf = data.funcionario.cpf;
              this.funcionario.nome = data.funcionario.nome;
              this.key = data.key;
          }
      })
  }

  onSubmit() {
      if (this.key) {
          this.funcionarioService.update(this.funcionario, this.key);
      } else {
          this.funcionarioService.insert(this.funcionario);
      }

      this.funcionario =  new Funcionario();

  }

}
