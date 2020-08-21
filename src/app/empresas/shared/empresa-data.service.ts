import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaDataService {
    private empresaSource = new BehaviorSubject({ empresa: null, key: ''});
    currentEmpresa = this.empresaSource.asObservable();

    constructor() { }

    changeEmpresa(empresa: Empresa, key: string) {
        this.empresaSource.next({ empresa: empresa, key: key });
    }

}
