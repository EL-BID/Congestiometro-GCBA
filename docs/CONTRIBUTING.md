# Guía de contribución 


¡Hola! Estamos muy emocionados por su interés a contribuir en el proyecto del Congestiómetro. Antes de enviar Pull Requests, asegúrate de tomarte un momento y leer las siguientes pautas:


+ [Código de conducta](CODE_OF_CONDUCT.md)
+ [Pautas para la apertura de Pull Requests](#pautas-para-la-apertura-de-pull-requests)
+ [Configuración de desarrollo](#configuración-de-desarrollo)
+ [Estructura del proyecto](#estructura-del-proyecto)
  
## Pautas para la apertura de Pull Requests

+ La rama `main` es solo un snapshot de la última versión estable. Todo el desarrollo debe realizarse en ramas dedicadas que apunten a la rama `development`. **No envíes PRs contra la rama `main`.**

+ Siempre realizar un checkout partiendo de la rama en cuestión, ej: `development` y realizar el merge contra esa misma rama al finalizar. Siga esta convención para la nueva rama: `númeroDeIssue-usuarioDeGithub-títuloDeCommit`.

+ Esta bien realizar varios commit pequeños mientras trabajas en el PR. Podemos realizar un squash antes de mergear la rama, si es necesario.

+ Si agregas una nueva característica:
  + Agrega un caso de prueba
  + Proporciona una razón convincente para agregar esta función. Idealmente, primero debes abrir un issue comentando la sugerencia y aguardar que se apruebe antes de trabajar en él.

+ Si arreglas un bug:
  + Si estas resolviendo un caso especial sigue la convención de nomenclatura de ramas mencionada anteriormente.
  + Proporciona una descripción detallada de la resolución del bug en el PR. Se prefiere una demostración en vivo.
  
## Configuración de desarrollo

Para poder correr la aplicación localmente en modo de desarrollo, deberás seguir las pautas establecidas en el [manual de instalación](INSTALL.md), pero, en lugar de correr el script `startup.sh` deberas:

1. Correr el script `startup.debug.sh`
2. Correr `npm --prefix ./ui install`
3. Correr `npm --prefix ./ui run serve`
4. Correr `npm --prefix ./ui run codegen`

Para desarrollar cambios, podrás editar archivos en distitntas carpetas que contienen partes específicas de la aplicación, a saber:

1. **ui**: contiene el codigo de la interface gráfica escrita en angular
2. **admin**: contiene el microservicio de autenticación y demás tareas de mantenimiento de backend
3. **database**: contiene los esquemas de datos
4. **model**: contiene el modelo de tensorflow

## Logs

Para ver los logs deberás correr `docker compose logs <servicio>` o `docker-compose logs <servicio>` según tengas docker desktop o docker engine con el plugin de compose.

