import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { EnderecoPipe } from './endereco.pipe';
import { StatusPipe } from './status.pipe';
import { DataCadastroPipe } from './data-cadastro.pipe';

@NgModule({
    declarations: [
      PhonePipe,
      EnderecoPipe,
      StatusPipe,
      DataCadastroPipe
    ],
    exports: [
      PhonePipe,
      EnderecoPipe,
      StatusPipe,
      DataCadastroPipe
    ]
})
export class PipesModule {
    
}