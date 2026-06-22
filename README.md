# Fun Tickets

Fun Tickets es una API backend para una pagina de venta de tickets para recitales musicales. El proyecto permite consultar usuarios, eventos, tickets vendidos y un endpoint de health check.

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- pnpm

## Instalacion

1. Clonar el repositorio o descargar el proyecto.
2. Entrar a la carpeta del proyecto:

```bash
cd "Backend II Clase 1"
```

3. Instalar las dependencias:

```bash
pnpm install
```

## Configuracion de variables de entorno

Crear un archivo `.env` en la raiz del proyecto con las siguientes variables:

```env
PORT=8080
MONGO_URL=mongodb://127.0.0.1:27017/fun-tickets
```

Variables disponibles:

| Variable | Descripcion |
| --- | --- |
| `PORT` | Puerto donde se ejecuta el servidor. |
| `MONGO_URL` | URL de conexion a la base de datos MongoDB. |

## Como ejecutar

Modo desarrollo:

```bash
pnpm dev
```

Modo produccion:

```bash
pnpm start
```

La API queda disponible en:

```text
http://localhost:8080
```

> Nota: si cambias el valor de `PORT` en el archivo `.env`, tambien cambia el puerto de la URL.

## Estructura de carpetas

```text
.
|-- package.json
|-- pnpm-lock.yaml
|-- README.md
`-- src
    |-- app.js
    |-- server.js
    |-- utils.js
    |-- middlewares/
    |-- public/
    |-- services/
    |-- views/
    |-- dao/
    |   |-- common.dao.js
    |   |-- event.dao.js
    |   |-- health.dao.js
    |   |-- ticket.dao.js
    |   |-- user.dao.js
    |-- config/
    |   |-- database.js
    |   `-- env.js
    |-- controllers/
    |   |-- event.controller.js
    |   |-- health.controller.js
    |   |-- ticket.controller.js
    |   `-- user.controller.js
    |-- models/
    |   |-- event.model.js
    |   |-- health.model.js
    |   |-- ticket.model.js
    |   `-- user.model.js
    `-- routes/
        |-- event.routes.js
        |-- health.routes.js
        |-- ticket.routes.js
        `-- user.routes.js
```

## Rutas disponibles

### Health

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| `GET` | `/api/health` | Obtiene informacion de estado de la API. |

### Usuarios

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| `GET` | `/api/users` | Obtiene todos los usuarios registrados. |

Modelo de usuario:

```js
{
  email: String,
  password: String,
  role: "admin" | "user"
}
```

### Eventos

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| `GET` | `/api/events` | Obtiene todos los eventos musicales disponibles. |

Modelo de evento:

```js
{
  name: String,
  date: Date,
  place: String,
  price: Number,
  capacity: Number,
  status: Boolean
}
```

### Tickets

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| `GET` | `/api/tickets` | Obtiene todos los tickets vendidos o generados. |

Modelo de ticket:

```js
{
  user: ObjectId,
  event: ObjectId
}
```

## Estado actual

El proyecto cuenta con rutas de consulta `GET` para usuarios, eventos, tickets y health check. Para completar el flujo de venta de tickets, se podrian agregar rutas `POST`, `PUT` y `DELETE`, validaciones, autenticacion y manejo de stock/capacidad de eventos.
