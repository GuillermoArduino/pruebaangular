import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductModalComponent } from './product-modal/product-modal.component'; // Asegúrate de importar el modal si es necesario

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    // Aquí no necesitas agregar ProductModalComponent como proveedor a menos que esté siendo usado como un servicio o directiva.
    // Si es un componente que usas en templates, no es necesario agregarlo aquí.
  ]
};
