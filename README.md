# Práctica 4 · CI/CD con GitHub Actions

Aplicación Angular (gestor de tareas) con integración y despliegue continuos.

- **CI**: en cada pull request contra `main` se instalan las dependencias con `npm ci`, se ejecutan los tests con cobertura mínima (80 % sentencias, funciones y líneas; 70 % ramas) y se compila con `ng build`.
- **CD**: en cada push a `main` se repite la CI y se despliega en GitHub Pages.
- La rama `main` está protegida: no se puede fusionar una PR si la CI falla.

**Web:** https://franjdaw.github.io/Practica-CD-CI/

Autor: Francisco José Jiménez Núñez · 2º DAW
