import { NgModule } from '@angular/core';
import { PageOptionValuePipe } from './page-option-value/page-option-value';
import { GematriaPipe } from './gematria/gematria';
@NgModule({
	declarations: [PageOptionValuePipe,
    GematriaPipe],
	imports: [],
	exports: [PageOptionValuePipe,
    GematriaPipe]
})
export class PipesModule {}
