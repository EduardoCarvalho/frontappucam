import { Funcionario } from './../shared/funcionario';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../shared/funcionario.service';
import { Observable } from 'rxjs';
import { FuncionarioDataService } from '../shared/funcionario-data.service';

@Component({
  selector: 'funcionario-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class FuncionarioListComponent implements OnInit {

    funcionarios: Observable<any>;

    constructor(private funcionarioService: FuncionarioService, private funcionarioDataService: FuncionarioDataService) { }

    ngOnInit() {
        this.funcionarios = this.funcionarioService.getAll();
    }

    delete(key: string) {
        this.funcionarioService.delete(key);
    }

    edit(funcionario: Funcionario, key: string) {
        this.funcionarioDataService.changeFuncionario(funcionario, key);
    }

}
