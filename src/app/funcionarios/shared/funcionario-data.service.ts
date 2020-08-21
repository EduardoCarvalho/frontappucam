import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioDataService {

    private funcionarioSource = new BehaviorSubject({ funcionario: null, key: ''});
    currentFuncionario = this.funcionarioSource.asObservable();

    constructor() { }

    changeFuncionario(funcionario: Funcionario, key: string) {
        this.funcionarioSource.next({ funcionario: funcionario, key: key });
    }
}
