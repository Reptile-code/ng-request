import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom([BrowserModule]),
    provideAnimations(),
  ],
};
