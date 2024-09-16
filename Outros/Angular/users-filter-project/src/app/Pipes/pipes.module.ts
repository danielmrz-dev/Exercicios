import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { EnderecoPipe } from './endereco.pipe';
import { StatusPipe } from './status.pipe';
import { DataCadastroPipe } from './data-cadastro.pipe';
import { DashEmptyPipe } from './dash-empty.pipe';

@NgModule({
    declarations: [
      PhonePipe,
      EnderecoPipe,
      StatusPipe,
      DataCadastroPipe,
      DashEmptyPipe
    ],
    exports: [
      PhonePipe,
      EnderecoPipe,
      StatusPipe,
      DataCadastroPipe,
      DashEmptyPipe
    ]
})
export class PipesModule {
    
}