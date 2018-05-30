import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ListRestProvider } from '../../providers/list-rest/list-rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // incluir o list rest para podermos buscar a lista
  // incluir o loadingControler para não deixar o usuário esperando sem informar
  // Ambos precisam do import, se estiver utilizando o VSCode provavelmente ele já importou pra você.
  // Caso contrário, copie os imports acima.
  constructor(
    public navCtrl: NavController,
    public listRest: ListRestProvider, 
    public loadingCtrl: LoadingController 
  ) {}

  // definição de uma variável tipo any para abrigar os cards
  cards: any;

  // dentro do ionViewDidLoad buscar os cards
  ionViewDidLoad() {
    this.getCards(); 
  }

  getCards(){
    // aqui, quando iniciarmos a request já vamos ter um loading na tela, informando o usuário que algo está acontecendo
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();

    // aqui chamamos o provider que criamos anteriormente passando a api que vamos utilizar, / no caso.
    // com o retorno da promise, basta tratar.
    this.listRest.getList('/')
    .then(data => {
      this.cards = data['cards'];
      loading.dismiss();
    })
    .catch(err => {
      loading.dismiss();
      alert("Algo de errado não está certo. Tente novamente!")
    });
  }
}
