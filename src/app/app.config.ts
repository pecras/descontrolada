import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideEnvironmentNgxMask } from 'ngx-mask'
import { provideRouter } from '@angular/router';
import { LOCALE_ID } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
     provideAnimationsAsync(), 
    provideEnvironmentNgxMask(),
    provideHttpClient(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: LOCALE_ID, useValue: 'pt-BR' }]
};
