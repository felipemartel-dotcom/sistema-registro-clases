# Sistema de Registro de Clases

## Documentación

Este documento proporciona una guía completa sobre cómo utilizar el sistema de registro de clases desarrollado por **felipemartel-dotcom**.

### Características
- Registro de clases de manera sencilla y eficiente.
- Interfaz de usuario intuitiva.
- Soporte para múltiples cursos y estudiantes.
- Almacenamiento de datos seguro y estructurado.

### Instrucciones de Uso
1. **Acceso al Sistema**: Inicie sesión en el sistema utilizando su cuenta. Si no tiene una cuenta, regístrese como nuevo usuario.
2. **Registro de Clases**:
   - Vaya a la sección de "Registro de Clases".
   - Complete el formulario con los detalles de la clase, incluyendo nombre, duración y número de estudiantes.
3. **Visualización de Clases**: Los usuarios pueden ver todas las clases registradas en la sección de "Clases".
4. **Modificación y Eliminación**: Para modificar o eliminar una clase, seleccione la clase deseada y elija la opción correspondiente.

### Estructura de Archivos
```plaintext
/sistema-registro-clases/
├── src/
│   ├── main.py           # Archivo principal del sistema.
│   ├── classes.py        # Lógica de clases y funciones.
│   ├── database.py       # Manejo de la base de datos.
│   └── utils.py          # Funciones de utilidad.
├── tests/
│   └── test_classes.py   # Pruebas unitarias para clases.
└── README.md             # Este documento.
```

### Almacenamiento de Datos
Los datos del sistema se almacenan en una base de datos SQLite, que es fácil de configurar y mantener. Los detalles de conexión se encuentran en el archivo `database.py`.

### Guía de Solución de Problemas
1. **Problemas de Inicio de Sesión**: Asegúrese de que su cuenta esté activada. Si olvidó su contraseña, utilice la opción "Olvidé mi contraseña".
2. **Errores en el Registro de Clases**: Verifique que todos los campos del formulario estén completos y correctos. Si el problema persiste, consulte el administrador del sistema.
3. **Problemas de Conexión a la Base de Datos**: Asegúrese de que el archivo de base de datos esté accesible y correctamente configurado en `database.py`.

### Contacto
Para más información o asistencia, contacte a **felipemartel-dotcom** en la plataforma de soporte.