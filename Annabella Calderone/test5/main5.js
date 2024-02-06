// Objetos en JavaScript

const persona = {
    nombre: "Annabella",
    apellido: "calderone",
    edad: 50,
    esAutorizado: true
  };
  
  console.log(persona.nombre); // Salida: Annabella
  const nombreCompleto = persona.nombre + ' ' + persona.apellido;
  persona.edad = 50;
  
  // Objetos anidados:
  const persona2 = {
    nombre: "Annabella",
    apellido: "Calderone",
    edad: 50,
    esAutorizado: true,
    direccion: {
      calle: los patos,
      avenida: 6,
      codigoPostal: '1604'
    }
  };
  
  console.log(persona2.direccion.calle); // Salida: 6
  