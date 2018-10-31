import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ToastProvider } from './../../../providers/toast/toast';
import { ProdutosProvider } from './../../../providers/produtos/produtos';


@IonicPage()
@Component({
  selector: 'page-list-produtos',
  templateUrl: 'list-produtos.html',
})
export class ListProdutosPage {
  produtos: Observable<any[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastProvider, private produtosProvider:ProdutosProvider) {
      this.produtos = this.produtosProvider.getAll();
    }

    newItemProdutos() {
      this.navCtrl.push('EditProdutosPage');
    }

    editItemProdutos(categoria: any) {                      // categoria.key é igual ao
      this.navCtrl.push('EditProdutosPage', { categoriaKey: categoria.key });
    }

    removeItemProdutos(key: string, hasImg: boolean) {
      this.produtosProvider.remove(key, hasImg);
      this.toast.show('Produto removido com sucesso.');
    }

}
