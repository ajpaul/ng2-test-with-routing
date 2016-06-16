import { bootstrap }    	from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } 	from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provideStore }	 	from '@ngrx/store';

import { AppComponent } 	from './app/app.component';
import { names } 			from './app/component1/name';
import { luminaireTypes }   from './app/luminaireTypes/luminaireTypes.reducer';

export function main(): Promise<any> {

	return bootstrap(AppComponent, [
		ROUTER_PROVIDERS,
		provide(LocationStrategy, {useClass: HashLocationStrategy}),
		provideStore({ names, luminaireTypes })
	])
	.catch(err => console.error(err));

}

if (process.env.ENV === 'production') {
	document.addEventListener('DOMContentLoaded', () => main());
} else {
	let ngHmr = require('angular2-hmr');
	ngHmr.hotModuleReplacement(main, module);
}

