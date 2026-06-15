# FinCore-admin

FinCore Admin es una aplicación **solo frontend** construida con **Angular 16** para portafolio profesional. Simula un dashboard empresarial bancario/financiero con autenticación fake, layout SaaS enterprise, módulos lazy loaded, servicios mock con RxJS y pantallas funcionales para clientes, cuentas, movimientos, solicitudes, reportes, usuarios internos y configuración.

> No requiere backend. No consume APIs externas. Toda la información se gestiona con mocks, servicios frontend y observables RxJS.

## Stack

- Angular 16
- TypeScript
- PrimeNG 16
- PrimeIcons
- Bootstrap 5
- RxJS
- Reactive Forms
- SCSS
- Lazy Loading
- Guards
- Interceptors
- Mock services

## Credenciales demo

Puedes usar las credenciales precargadas en el login:

```txt
Email: admin@fincore.pe
Password: Admin123
```

También funciona con cualquier email válido y una contraseña de 6 o más caracteres.

## Ejecutar localmente

```bash
npm install
ng serve
```

Abrir en el navegador:

```bash
http://localhost:4200
```

## Build de producción

```bash
ng build
```

## Arquitectura de carpetas

```txt
src/app/
  core/
    guards/
    interceptors/
    services/
    models/
    layout/
  shared/
    components/
    pipes/
    directives/
    utils/
  features/
    auth/
    dashboard/
    customers/
    accounts/
    transactions/
    requests/
    reports/
    users/
    settings/
```

## Módulos principales

### Auth
- Login profesional con Reactive Forms.
- Validación de email y password.
- Simulación de token fake en `localStorage`.
- `AuthGuard` para rutas privadas.
- `GuestGuard` para evitar entrar al login si ya existe sesión.
- Logout desde topbar.

### Layout
- Sidebar moderno tipo SaaS enterprise.
- Navbar superior con perfil, notificaciones y logout.
- Breadcrumb dinámico.
- Responsive para desktop y tablet.

### Dashboard
- KPIs financieros.
- Gráficos con PrimeNG Chart.
- Tabla de últimas operaciones.
- Indicadores visuales de clientes, cuentas, ingresos y solicitudes.

### Customers
- Tabla PrimeNG con paginación, ordenamiento y búsqueda.
- Crear y editar cliente con Reactive Forms.
- Modal de detalle.
- Estados visuales y risk score.

### Accounts
- Lista de cuentas bancarias.
- Filtros por tipo, moneda y estado.
- Detalle de cuenta en modal.
- Relación visual cuenta-cliente.

### Transactions
- Tabla avanzada de movimientos.
- Filtros por fecha, estado, tipo y monto.
- Badges de estado.
- Detalle de operación.
- Exportación simulada con toast.

### Requests
- Solicitudes internas con flujo visual.
- Estados: pendiente, aprobado y rechazado.
- Confirm dialog para aprobar/rechazar.
- Toast de éxito.

### Reports
- Cards de resumen.
- Filtros por fecha y categoría.
- Chart de desempeño.
- Tabla de resultados profesional.

### Users
- Lista de usuarios internos.
- Roles: `ADMIN`, `ANALYST`, `MANAGER`.
- Crear/editar usuario con validaciones.
- Estados visuales.

### Settings
- Datos de perfil.
- Preferencias visuales simuladas.
- Tema claro enterprise.

## Componentes reutilizables

- `app-page-header`
- `app-status-badge`
- `app-confirm-dialog`
- `app-empty-state`
- `app-loading`
- `app-search-box`
- `app-kpi-card`
- `app-form-field-error`
- `app-data-table-wrapper`

## Buenas prácticas aplicadas

- Separación por `core`, `shared` y `features`.
- Lazy loading por módulo funcional.
- Servicios mock separados por dominio.
- Interfaces y enums TypeScript.
- Reactive Forms para login, clientes, usuarios, reportes y filtros.
- Interceptor de autorización fake.
- Guards para rutas privadas y públicas.
- Manejo de loading, empty states y feedback con toasts.
- SCSS organizado por componente y variables globales.
- Componentes reutilizables para evitar repetición.
- UI sobria, moderna y responsive.

## Capturas sugeridas para GitHub/LinkedIn

1. Login enterprise.
2. Dashboard con KPIs y gráficos.
3. Lista de clientes con modal de creación.
4. Cuentas con filtros y detalle.
5. Transacciones con filtros avanzados.
6. Solicitudes con flujo visual y confirmación.
7. Reportes financieros.
8. Usuarios internos.
9. Configuración de perfil.

## Nota para portafolio

Este proyecto está pensado para demostrar dominio de arquitectura frontend enterprise con Angular: estructura escalable, separación de responsabilidades, UI profesional, formularios reactivos, lazy loading, mocks realistas y una experiencia visual cercana a una aplicación interna de una entidad financiera.
