# misw4410-2024-13-modernizacion-sw

Repositorio que contiene la aplicación legado para modernizar.

## Importante

Para ejecutar el proyecto, hay que tener en cuenta lo siguientes versiones:

- Node: 10.24.1
- Npm: 6.14.12

### Ejecución del proyecto

Debido a que el proyecto es antiguo, puede que la ejecución de este falle con el comando `npm run node`, por lo tanto ejecute: `npx nodemon index.js`

Para levantar la base de datos, ejecute `docker compose up` y posteriormente `npm run database`

### Credenciales

Por defecto se crean estos Usuarios con diferentes roles:

- Usuario común

```
email: user@user.com
password: 123456
```

- Empleado

```
email: employee@employee.com
password: 123456
```

- Administrador

```
email: admin@admin.com
password: 123456
```

### Variables de entorno

Para el correcto funcionamiento de la app, por favor realice un archivo .env en la raíz del proyecto con las variables que están en el archivo .env.example

## Créditos al autor

- **Guilherme Carra** - [GitHub](https://github.com/GuilhermeCarra/) - [Glitch](https://glitch.com/@GuilhermeCarra/) - [Linkedin](https://www.linkedin.com/in/guilherme-carra/)
