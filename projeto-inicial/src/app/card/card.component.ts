import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano = { //OBJETO QUE POSSUI PROPS QUE POSSUI OUTROS OBJS
    infos: {
      tipo: 'Simples',
      preco: 100
    }   
  };

  // plano = { # PARTE 2
  //   tipo: 'Simples',
  //   preco: 100
  // };

    //   tipo = 'Teste'; # PARTE 1
    // preco = 500;
    // setTimeout(() => { 
    //   console.log('Set Timeout')
    //   this.tipo = 'Simples'
    // }, 4000);
  //   return 'R$' + this.preco + ',00/Mês';
  // }
}
