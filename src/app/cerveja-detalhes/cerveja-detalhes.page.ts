import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage implements OnInit {

  nome;
  detalhes;

  constructor(private route:ActivatedRoute) {
    console.log("EXECUTOU O CONSTRUTOR")
  }

  ngOnInit() {
    let idCerveja = this.route.snapshot.params.id;
    if (idCerveja === '50'){
      this.nome = 'Proibida'
      this.detalhes = 'Tão gostosa que é proibida. A melhor cerveja do Ceará.'
    }else if (idCerveja === '60'){
      this.nome = 'Skol'
      this.detalhes = 'A Puro Malte que Desce Redonda. A melhor cerveja da Bahia.'

    }

    }


}
