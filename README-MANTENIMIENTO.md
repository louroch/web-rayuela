# Modo de Mantenimiento - Rayuela

## 📋 Descripción

Este proyecto incluye un modo de mantenimiento que permite mostrar una página de "En construcción" mientras trabajas en cambios locales o en producción.

## 🚀 Cómo Usar

### Desarrollo Local

1. **Crear archivo `.env.local`** en la raíz del proyecto:
   ```bash
   cp env.example .env.local
   ```

2. **Habilitar modo mantenimiento**:
   - Edita `.env.local`
   - Cambia `MAINTENANCE_MODE=false` a `MAINTENANCE_MODE=true`

3. **Deshabilitar modo mantenimiento**:
   - Cambia `MAINTENANCE_MODE=true` a `MAINTENANCE_MODE=false`

4. **Reiniciar el servidor de desarrollo** después de hacer cambios:
   ```bash
   npm run dev
   ```

### Producción (Vercel)

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Ve a **Settings** → **Environment Variables**
3. Agrega una nueva variable:
   - **Name**: `MAINTENANCE_MODE`
   - **Value**: `true` (para activar) o `false` (para desactivar)
4. Haz un nuevo deploy

## 🎨 Personalización

La página de mantenimiento se puede personalizar en `app/page.tsx`. Actualmente incluye:
- Título: "Estamos trabajando para usted"
- Logo: `/assets/mantenimiento.png`
- Mensaje personalizado
- Diseño responsivo

## 📝 Notas

- El modo de mantenimiento solo afecta la página principal (`/`)
- Las demás rutas seguirán funcionando normalmente
- Recuerda desactivar el modo mantenimiento cuando termines de trabajar
