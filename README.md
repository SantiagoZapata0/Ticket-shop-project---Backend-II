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
NODE_ENV=development
JWT_SECRET=mi_secreto
```

Variables disponibles:

| Variable    | Descripcion                                    |
| ----------- | ---------------------------------------------- |
| `PORT`      | Puerto donde se ejecuta el servidor.           |
| `MONGO_URL` | URL de conexion a la base de datos MongoDB.    |
| `NODE_ENV`  | Entorno de ejecución (development / production)|
| `JWT_SECRET`| Clave secreta para tokens JWT                  |  

## Como ejecutar

Modo desarrollo:

```bash
pnpm run dev
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
    |-- public/
    |-- views/
    |-- services/
        |-- user.services.js
    |-- repositories/
    |   |-- user.repository.js
    |-- middlewares/
    |   |-- session.middleware.js
    |-- utils/
    |   |-- utils.js
    |-- dao/
    |   |-- common.dao.js
    |   |-- user.dao.js
    |-- config/
    |   |-- database.js
    |   `-- env.js
    |-- controllers/
    |   |-- event.controller.js
    |   |-- ticket.controller.js
    |   |-- session.controller.js
    |   `-- user.controller.js
    |-- models/
    |   |-- event.model.js
    |   |-- ticket.model.js
    |   `-- user.model.js
    `-- routes/
        |-- event.routes.js
        |-- ticket.routes.js
        |-- session.routes.js
        `-- user.routes.js
```

## Notas sobre la arquitectura

El proyecto sigue una arquitectura en capas: Ruta → Controller → Service → 
Repository → DAO → Modelo. El flujo de registro de usuarios (`/api/sessions/register`) 
implementa el patrón completo.

## Rutas disponibles

### Health

| Metodo | Ruta          | Descripcion                              |
| ------ | ------------- | ---------------------------------------- |
| `GET`  | `/api/health` | Obtiene informacion de estado de la API. |

### Usuarios

| Metodo | Ruta         | Descripcion                             |
| ------ | ------------ | --------------------------------------- |
| `GET`  | `/api/users` | Obtiene todos los usuarios registrados. |

Modelo de usuario:

```js
{
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  role: "admin" | "organizer" | "user"
}
```

### Eventos

| Metodo | Ruta          | Descripcion                                      |
| ------ | ------------- | ------------------------------------------------ |
| `GET`  | `/api/events` | Obtiene todos los eventos musicales disponibles. |

Modelo de evento:

```js
{
  title: String,
  description: String,
  date: Date,
  place: String,
  capacity: Number,
  price: Number,
  status: "active" | "cancelled" | "finished"
}
```

### Tickets

| Metodo | Ruta           | Descripcion                                     |
| ------ | -------------- | ----------------------------------------------- |
| `GET`  | `/api/tickets` | Obtiene todos los tickets vendidos o generados. |

Modelo de ticket:

```js
{
  user: ObjectId,
  event: ObjectId
}
```

## Cómo probar el endpoint de registro

### `POST /api/sessions/register`

Registra un nuevo usuario en la plataforma. La contraseña se guarda hasheada con bcrypt y nunca se devuelve en la respuesta.

**Campos esperados (body JSON):**

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| `first_name` | String | Sí | Nombre del usuario |
| `last_name` | String | Sí | Apellido del usuario |
| `email` | String | Sí | Se normaliza automáticamente (trim + lowercase) |
| `password` | String | Sí | Mínimo 6 caracteres |

> El campo `role` no se acepta desde el body. Todo usuario se crea con `role: "user"` por defecto.

**Ejemplo de request:**

```json
{
    "first_name": "Santiago",
    "last_name": "Zapata",
    "email": "santiago@gmail.com",
    "password": "123456"
}
```

**Respuesta exitosa (201):**

```json
{
    "status": "Success",
    "message": "Usuario registrado correctamente.",
    "payload": {
        "id": "6a446c5b146207cacaa4ed90",
        "first_name": "Santiago",
        "last_name": "Zapata",
        "email": "santiago@gmail.com",
        "role": "user"
    }
}
```

**Posibles errores:**

| Código | Causa |
| --- | --- |
| `400` | Falta algún campo obligatorio |
| `400` | El email no tiene un formato válido |
| `400` | La contraseña tiene menos de 6 caracteres |
| `409` | El email ya está registrado |

### Cómo probarlo

1. Levantar el servidor con `pnpm run dev`
2. Enviar un `POST` a `http://localhost:8080/api/sessions/register` con Postman o Insomnia, con el body indicado arriba
3. Verificar en MongoDB (Compass o Atlas) que el campo `password` se guarda hasheado, nunca en texto plano

## Estado actual

El proyecto cuenta con rutas de consulta `GET` para usuarios, eventos, tickets, session y health check. Para completar el flujo de venta de tickets, se podrian agregar rutas `POST`, `PUT` y `DELETE`, validaciones, autenticacion y manejo de stock/capacidad de eventos.
