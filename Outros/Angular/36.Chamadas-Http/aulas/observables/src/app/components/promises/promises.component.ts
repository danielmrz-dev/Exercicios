import { Component, inject } from '@angular/core';
import { PromisesService } from './promises.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-promises',
  standalone: true,
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss'
})
export class PromisesComponent {

  private readonly promises = inject(PromisesService)

  ngOnInit() {
    
    // console.log('Antes da promise');
    
    // this.promises.promiseSimples()
    // .then((resposta) => console.log(resposta))
    // .catch((erro) => console.log(erro))
    
    // console.log('Depois da promise');
    // this.promiseAllSettled()

    // await this.promises.getUsers().then(console.log);
    this.promises.getPromiseInterval().then((value) => {
      console.log(value);      
    })
  }
  
  promiseAll() {
    Promise.all([this.promises.getUsers(), this.promises.getTodos()])
    .then((values) => {
      console.log(values);
    })
    .catch((erro) => {
      console.log('Tipo do erro => ', erro.status);      
    })
    .finally(() => {
      console.log('Finally!');      
    })    
  }

  promiseRace() {
    Promise.race([this.promises.getUsers(), this.promises.getTodos()])
    .then((value) => {
      console.log(value);
    })
    .catch((erro) => {
      console.log('Tipo do erro => ', erro.status);      
    })
    .finally(() => {
      console.log('Finally!');      
    })    
  }

  promiseAny() {
    Promise.any([this.promises.getUsers(), this.promises.getTodos()])
    .then((value) => {
      console.log(value);
    })
    .catch((erro) => {
      console.log('Tipo do erro => ', erro.status);      
    })
    .finally(() => {
      console.log('Finally!');      
    })    
  }
  promiseAllSettled() {
    Promise.allSettled([this.promises.getUsers(), this.promises.getTodos()])
    .then((value) => {
      console.log(value);
    })
    .catch((erro) => {
      console.log('Tipo do erro => ', erro.status, erro.ok);      
    })
    .finally(() => {
      console.log('Finally!');      
    })    
  }

  async userTodos() {

    try {
      console.log('Pegando user todos');
      const users = await this.promises.getUsers();
      const userTodos = await this.promises.getUserTodos(users[3].id)
      console.log(userTodos);
    } catch (error: any) {
        console.log(error.status, error.ok);
    } finally {
        console.log('Cabou!');
        
    }
    

    // this.promises.getUsers()
    //   .then((response) => {
    //     this.promises.getUserTodos(response[0].id)
    //       .then((userTodos) => {
    //         console.log(userTodos);            
    //       })
    //   })
    
  }
}
