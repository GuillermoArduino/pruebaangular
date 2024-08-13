// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Asegúrate de que este archivo exista
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Importa la configuración

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    ...appConfig.providers
  ]
})
.catch((err) => console.error(err));
