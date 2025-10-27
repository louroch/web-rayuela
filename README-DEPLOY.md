# Guía de Despliegue en Vercel - Rayuela

## Problema Identificado

Vercel estaba devolviendo un error 404 porque:
1. El proyecto está en el subdirectorio `web-rayuela`
2. La configuración no indicaba correctamente dónde está el proyecto
3. Se usaba incorrectamente `Head` de Next.js Pages Router en App Router

## Soluciones Aplicadas

### 1. Configuración de Vercel
- ✅ Creado `vercel.json` en la raíz con la configuración correcta
- ✅ Creado `package.json` en la raíz para scripts de build
- ✅ Corregido `app/page.tsx` (eliminado uso incorrecto de `Head`)
- ✅ Formateado `app/layout.tsx` para mejor legibilidad

### 2. Configuración en Vercel Dashboard

Ve a tu proyecto en Vercel y configura:

**Settings → General → Root Directory**
```
web-rayuela
```

**Settings → General → Build Command**
```
npm run build
```

**Settings → General → Output Directory**
```
.next
```

### 3. Variables de Entorno

Agrega estas variables en **Settings → Environment Variables**:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-de-aplicacion
SMTP_FROM=tu-email@gmail.com
CONTACT_EMAIL=contacto@somosrayuela.com
```

### 4. Dominio Personalizado

Si usas el dominio `somosrayuela.com`, configura:
- **Settings → Domains** → Agrega el dominio
- Actualiza los registros DNS según Vercel indique

**Registros DNS comunes que necesitas configurar:**
- **Tipo A**: `@` apunta a `76.76.21.21`
- **Tipo CNAME**: `www` apunta a `cname.vercel-dns.com`

## Comandos Útiles

### Desarrollo Local
```bash
cd web-rayuela
npm install
npm run dev
```

### Build Local
```bash
cd web-rayuela
npm run build
npm start
```

## Notas Importantes

1. **Variables de Entorno**: Son necesarias para el formulario de contacto
2. **SMTP**: Usa Gmail o cualquier servicio SMTP compatible
3. **Deploy**: Haz un redeploy después de cambiar la configuración

## Verificación

Después del deploy, verifica:
- ✅ La página principal carga correctamente
- ✅ Todas las rutas funcionan (`/nosotros`, `/servicios`, etc.)
- ✅ El formulario de contacto funciona (requiere variables de entorno)

## Troubleshooting

### Error 404 después del deploy

**Si ves error 404 con ID como `gru1::g579c-...`:**

1. **Verifica que el dominio esté configurado:**
   - Ve a Settings → Domains en Vercel
   - Confirma que `somosrayuela.com` está listado

2. **Revisa los registros DNS:**
   - Asegúrate de que apunten a Vercel
   - Puede tardar hasta 48 horas en propagarse

3. **Prueba el dominio temporal de Vercel:**
   - Debería verse así: `tu-proyecto.vercel.app`
   - Si funciona ahí, el problema es DNS

4. **Verifica el Root Directory:**
   - Settings → General → Root Directory debe ser `web-rayuela`
