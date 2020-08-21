import { Injectable } from '@angular/core';
import { Empresa } from './empresa';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private db: AngularFireDatabase) { }

  insert(empresa: Empresa) {
      this.db.list('empresa').push(empresa)
        .then((result: any) => {
            console.log(result.key);
        });
  }

  update(empresa: Empresa, key: string) {
      this.db.list('empresa').update(key, empresa)
        .catch((error: any) => {
            console.error(error);
        });
  }

  getAll() {
      return this.db.list('empresa')
        .snapshotChanges()
        .pipe(
            map(changes => {
                return changes.map(c => ({key: c.payload.key, ...c.payload.exportVal() }));
            })
        );
  }

  delete(key: string) {
      this.db.object(`empresa/${key}`).remove();

  }
}
