import { ProdutosProvider } from './../produtos/produtos';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoriasProvider {
  private PATH = 'categorias/';
  constructor(private db: AngularFireDatabase, private produtosProvider: ProdutosProvider) {}

  public getAll(){
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => { // aqui é uma lista para mapear
        return changes.map( m => ({ key: m.key, ...m.payload.val() }));
      })
  }
  //return changes.map(m => ({ key:m.key, nome: m.payload.val().nome }))

  get(categoriaKey: string){
    return this.db.object(this.PATH + categoriaKey)
      .snapshotChanges()
      .map(m => { // aqui já é m pois eu já tenho um único objeto
        return {key: m.key, ...m.payload.val()};
      });
  }

  save(categoriaData: any){
    const categoria = {
      nome: categoriaData.nome
    };

    if (categoriaData.key){
      // this.db.list(this.PATH).set(categoriaData.key, categoria); atualiza somente o campo que passar e substitui tudo o que está no firebase

      // Antes de atualizar as categorias nos Produtos
      // this.db.list(this.PATH).update(categoriaData.key, categoria);

      this.db.list(this.PATH)
        .update(categoriaData.key, categoria) // fazer a chamada para atualizar as categorias nos produtos
        .then(() => {
          this.produtosProvider.updateCategories(categoriaData.key, categoriaData.nome);
        })

    } else{
      this.db.list(this.PATH).push(categoria);
    }
  }

  remove(categoriaKey: string){
    this.db.list(this.PATH).remove(categoriaKey);
  }


}
