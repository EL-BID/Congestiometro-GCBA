# Congestiómetro - Instrucciones para su ejecución

1. Tener instalado y en ejecución Docker Desktop.

2. Clonar el repo
   
3. Crear un archivo .env en la raíz del proyecto (siguiendo el ejemplo de .env.example), con la ubicaición del contexto para la compilación de la imagen Docker del ETL (ETL_DOCKER_CONTEXT),  el archivo con variables de entorno de ejecución (ETL_ENVIRONMENT_FILE) y la clave de administración que servirá para resguardar todo el sistema (ADMIN_SECRET); la cual, por defecto es `congestiometro`

4. Ejecutar el script `./startup.sh`; si fuera necesario, hacer ejecutables los scripts de la raíz del proyecto con `chmod +x *.sh`
