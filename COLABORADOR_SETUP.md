# 🤝 Configuración para Colaborador

## 📋 **Pasos para el colaborador:**

### **1. Trabajar en el repositorio principal (NO en fork)**
```bash
# Clonar el repositorio principal
git clone https://github.com/DaniVillalba03/AdelgazaSinSalirDeCasaWebTracker.git
cd AdelgazaSinSalirDeCasaWebTracker

# Configurar upstream (ya está configurado como origin)
git remote -v
```

### **2. Flujo de trabajo para actualizaciones:**
```bash
# Hacer cambios en el código
# Confirmar que estás en la rama main
git checkout main

# Hacer pull antes de commit (buena práctica)
git pull origin main

# Agregar cambios
git add .
git commit -m "descripción del cambio"

# Push al repositorio principal
git push origin main
```

### **3. 🚀 Auto-deploy en Vercel:**
- ✅ Cada `git push origin main` disparará automáticamente el deploy en Vercel
- ✅ Vercel está configurado para auto-deploy desde la rama `main`
- ✅ Los cambios estarán disponibles en ~2-3 minutos

### **4. 📱 URL del sitio:**
- **Producción:** https://adelgaza-sin-salir-de-casa-web-trac.vercel.app

### **5. 🔧 Estructura del proyecto:**
- `src/pages/Index.tsx` - Página principal
- `src/components/` - Componentes React
- `public/assets/` - Imágenes y recursos
- `vercel.json` - Configuración de despliegue

### **6. ⚠️ Importante:**
- Siempre hacer `git pull` antes de empezar a trabajar
- Probar cambios localmente antes de hacer push
- Usar mensajes de commit descriptivos
- No trabajar en el fork, usar el repo principal

### **7. 🧪 Probar localmente:**
```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Ver en: http://localhost:5173
```

## 📞 **Contacto:**
- Si hay problemas con deploys, revisar: https://vercel.com/dashboard
- Los errores aparecen en la consola de Vercel