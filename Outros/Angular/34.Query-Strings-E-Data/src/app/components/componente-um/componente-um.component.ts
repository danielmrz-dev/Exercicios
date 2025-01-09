import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-um',
  standalone: true,
  imports: [],
  templateUrl: './componente-um.component.html',
  styleUrl: './componente-um.component.scss'
})
export class ComponenteUmComponent implements OnInit {

  // @Input() nome: string = ''
  // @Input() set nome(value: string) {
  //   console.log(value);
  // }

  private readonly _activatedRoute = inject(ActivatedRoute)
  ngOnInit(): void {
    // console.log("OnInit => Componente um");
    // console.log("Nome => ", this.nome);
    console.log("Snapshot (Uma única vez) => ", this._activatedRoute.snapshot.queryParams)

    this._activatedRoute.queryParams.subscribe((params) => {
      console.log("Subscribe Params (Escutando todas as mudanças) => ", params);
      
    })
  }
}
