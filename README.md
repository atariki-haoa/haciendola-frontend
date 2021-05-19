## Frontend Haciendola

Instrucciones de instalación:

* Clonar repositorio
* npm install
* npm start (ejecuta ng-serve)

### Consideraciones

* La plataforma fue levantada en angular 10, y basado en la libreria de ngx-admin. 
* Si se ejecuta en Windows 10, instalar python2 para poder compilar bien algunas librerias.
* La librería gestiona con modulos propios muchos componentes utilizados, incluyendo el login.
* Por temas de tiempo no se implementaron endpoints en backend para recuperación de contraseña y reset de la misma (si estan las vistas, pero no funcionan)
* Por defecto apunta a localhost/api/products para los endpoints de consulta y localhost/auth/login para la authenticación.
