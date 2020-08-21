import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

    constructor(private db: AngularFireDatabase) { }

    insert(funcionario: Funcionario) {
        this.db.list('funcionario').push(funcionario)
          .then((result: any) => {
              console.log(result.key);
          });
    }

    update(funcionario: Funcionario, key: string) {
        this.db.list('funcionario').update(key, funcionario)
          .catch((error: any) => {
              console.error(error);
          });
    }

    getAll() {
        return this.db.list('funcionario')
          .snapshotChanges()
          .pipe(
              map(changes => {
                  return changes.map(c => ({key: c.payload.key, ...c.payload.exportVal() }));
              })
          );
    }

    delete(key: string) {
        this.db.object(`funcionario/${key}`).remove();

    }
}
