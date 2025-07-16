import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import {
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';


bootstrapApplication(App, {
  providers: [
    provideHttpClient(
      withFetch(),
    ),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ],
}).catch((err) => console.error(err));
