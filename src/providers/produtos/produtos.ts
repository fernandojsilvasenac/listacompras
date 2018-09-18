import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProdutosProvider {
  private PATH = 'listas/';

  constructor(private db: AngularFireDatabase) {}

  public getAll(){
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => { // aqui é uma lista para mapear
        return changes.map( m => ({ key: m.key, ...m.payload.val() }));
      })
  }

  get(listasKey: string){
    return this.db.object(this.PATH + listasKey)
      .snapshotChanges()
      .map(m => { // aqui já é m pois eu já tenho um único objeto
        return {key: m.key, ...m.payload.val()};
      });
  }

}
