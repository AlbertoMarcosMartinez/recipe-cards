import React, { useState } from 'react';
import RecipeCard from './components/recipe';
import Header from './components/header';
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'; // Importamos Container de react-bootstrap

const recipes = [
  {
    "nombre": "Conejo al Ajillo",
    "categoria": "Carnes",
    "tiempo_preparacion": "30 minutos",
    "porciones": 4,
    "ingredientes": [
      "1 conejo, troceado",
      "8 dientes de ajo, picados",
      "1 ramita de romero fresco",
      "150 ml de vino blanco",
      "Aceite de oliva virgen extra",
      "Sal y pimienta al gusto"
    ],
    "instrucciones": [
      "En una sartén, calienta el aceite de oliva.",
      "Añade los trozos de conejo y dorar por ambos lados.",
      "Agrega los ajos picados y saltea hasta que estén dorados.",
      "Incorpora el vino blanco y deja cocinar a fuego lento.",
      "Añade la ramita de romero, sal y pimienta al gusto.",
      "Cocina a fuego medio hasta que el conejo esté tierno.",
      "Sirve caliente y disfruta de tu Conejo al Ajillo."
    ],
    "consejos": [
      "Puedes acompañar con patatas asadas o arroz.",
      "Marida bien con un vino tinto de cuerpo medio."
    ],
    "apto_veganos": false
  },
  {
    "nombre": "Mejillones al Vapor",
    "categoria": "Mariscos",
    "tiempo_preparacion": "15 minutos",
    "porciones": 2,
    "ingredientes": [
      "1 kg de mejillones limpios",
      "2 dientes de ajo, picados",
      "1 hoja de laurel",
      "50 ml de vino blanco",
      "Perejil fresco, picado",
      "Sal al gusto"
    ],
    "instrucciones": [
      "Lava y limpia los mejillones bajo agua corriente.",
      "En una olla grande, calienta el vino blanco, ajo y hoja de laurel.",
      "Añade los mejillones y tapa la olla.",
      "Cocina a fuego medio-alto hasta que los mejillones se abran.",
      "Retira los mejillones abiertos, descarta los cerrados.",
      "Espolvorea con perejil fresco picado y sirve caliente."
    ],
    "consejos": [
      "Acompaña con pan para mojar en el delicioso caldo.",
      "Puedes agregar un toque de limón antes de servir."
    ],
    "apto_veganos": true
  },
  {
    "nombre": "Paella Valenciana",
    "categoria": "Plato Principal",
    "tiempo_preparacion": "1 hora",
    "porciones": 6,
    "ingredientes": [
      "300g de arroz bomba",
      "300g de pollo troceado",
      "300g de conejo troceado",
      "200g de judías verdes",
      "1 tomate maduro rallado",
      "1 pimiento rojo cortado en tiras",
      "1 pimiento verde cortado en tiras",
      "1 cebolla picada",
      "2 dientes de ajo picados",
      "1 ramita de romero",
      "Aceite de oliva virgen extra",
      "Sal y pimienta al gusto",
      "1,5 l de caldo de pollo caliente",
      "Hebras de azafrán"
    ],
    "instrucciones": [
      "En una paellera, calienta el aceite de oliva.",
      "Sofríe el pollo y el conejo hasta dorar.",
      "Añade la cebolla, el ajo, los pimientos y las judías verdes, sofríe por unos minutos.",
      "Incorpora el tomate rallado y cocina hasta que se evapore el líquido.",
      "Añade el arroz y remueve bien para que se impregne de todos los sabores.",
      "Incorpora el caldo de pollo caliente, el azafrán y el romero, sazona con sal y pimienta.",
      "Cocina a fuego medio durante unos 20-25 minutos hasta que el arroz esté tierno y se haya absorbido el líquido.",
      "Deja reposar unos minutos antes de servir."
    ],
    "consejos": [
      "No remuevas el arroz una vez que haya empezado a cocinarse para que quede suelto.",
      "La paella se sirve tradicionalmente con limón y alioli."
    ],
    "apto_veganos": false
  },
  {
    "nombre": "Tortilla Española",
    "categoria": "Entrante",
    "tiempo_preparacion": "30 minutos",
    "porciones": 4,
    "ingredientes": [
      "4-5 patatas medianas",
      "1 cebolla grande",
      "6 huevos",
      "Aceite de oliva virgen extra",
      "Sal al gusto"
    ],
    "instrucciones": [
      "Pela las patatas y córtalas en rodajas finas.",
      "Pela y corta la cebolla en rodajas finas.",
      "En una sartén grande, calienta abundante aceite de oliva.",
      "Añade las patatas y la cebolla y fríe a fuego medio hasta que estén tiernas pero no doradas.",
      "Retira las patatas y la cebolla con una espumadera y escúrrelas bien del exceso de aceite.",
      "En un bol grande, bate los huevos y sazona con sal al gusto.",
      "Agrega las patatas y la cebolla al bol con los huevos y mezcla bien.",
      "En una sartén más pequeña, calienta un poco de aceite y vierte la mezcla de huevos, patatas y cebolla.",
      "Cocina a fuego medio hasta que la tortilla esté dorada por un lado.",
      "Con la ayuda de un plato, da la vuelta a la tortilla y cocina el otro lado hasta que esté dorado y cuajado.",
      "Sirve caliente o a temperatura ambiente, cortada en porciones."
    ],
    "consejos": [
      "Puedes añadir pimiento rojo o verde cortado en tiras finas para darle más sabor y color.",
      "La tortilla española es deliciosa tanto caliente como fría."
    ],
    "apto_veganos": true
  },
  {
    "nombre": "Gazpacho Andaluz",
    "categoria": "Entrante",
    "tiempo_preparacion": "20 minutos",
    "porciones": 4,
    "ingredientes": [
      "1 kg de tomates maduros",
      "1 pepino",
      "1 pimiento verde",
      "1 pimiento rojo",
      "1 cebolla",
      "1 diente de ajo",
      "100 ml de aceite de oliva virgen extra",
      "50 ml de vinagre de vino",
      "Sal al gusto",
      "Pan duro (opcional, para espesar)"
    ],
    "instrucciones": [
      "Lava y trocea los tomates, pepino, pimientos y cebolla.",
      "Pela el diente de ajo.",
      "En una licuadora o procesador de alimentos, mezcla todos los ingredientes hasta obtener una mezcla homogénea.",
      "Añade sal al gusto y ajusta la consistencia añadiendo un poco de agua si es necesario.",
      "Refrigera durante al menos una hora antes de servir.",
      "Sirve frío, acompañado de trocitos de pan duro si lo deseas."
    ],
    "consejos": [
      "Puedes decorar con trozos pequeños de los ingredientes utilizados, como tomate, pepino o pimiento.",
      "Sirve en cuencos individuales o en un recipiente grande para compartir."
    ],
    "apto_veganos": true
  },
  {
    "nombre": "Pulpo a la Gallega",
    "categoria": "Plato Principal",
    "tiempo_preparacion": "1 hora",
    "porciones": 4,
    "ingredientes": [
      "1 pulpo de 1-1.5 kg",
      "4 patatas grandes",
      "Pimentón dulce",
      "Sal gorda",
      "Aceite de oliva virgen extra"
    ],
    "instrucciones": [
      "Limpia el pulpo bajo agua corriente, retirando cualquier resto de suciedad.",
      "En una olla grande, hierve agua con sal gorda.",
      "Cuando el agua esté hirviendo, sumerge el pulpo rápidamente tres veces, dejándolo después dentro de la olla.",
      "Cocina el pulpo durante unos 40-45 minutos, hasta que esté tierno.",
      "Mientras tanto, cuece las patatas en otra olla con agua y sal.",
      "Una vez cocidas, pela las patatas y córtalas en rodajas.",
      "Corta el pulpo cocido en rodajas de 1-2 cm de grosor.",
      "Coloca las rodajas de patata en un plato grande o fuente.",
      "Coloca encima las rodajas de pulpo.",
      "Espolvorea con pimentón dulce y sal gorda al gusto.",
      "Riega con un generoso chorro de aceite de oliva virgen extra.",
      "Sirve caliente, acompañado de pan."
    ],
    "consejos": [
      "El pulpo debe cocerse hasta que esté tierno pero no demasiado blando.",
      "El pimentón dulce y el aceite de oliva son clave para realzar el sabor del plato."
    ],
    "apto_veganos": false
  }
];



function App() {
  const [busqueda, setBusqueda] = useState('');
  const [recetasFiltradas, setRecetasFiltradas] = useState(recipes);

  // Manejar cambios en el campo de búsqueda
  const handleChange = (event) => {
    setBusqueda(event.target.value);
    // Filtrar las recetas basadas en la búsqueda
    const recetasFiltradas = recipes.filter((receta) =>
      receta.nombre.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecetasFiltradas(recetasFiltradas);
  };
  return (
    <div>
      {/* Header */}
      <Header />
      
      <Container className="mt-3" style={{ paddingLeft: '20px', paddingRight: '20px' }}>       
        {/* Campo de búsqueda centrado */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar receta..."
            value={busqueda}
            onChange={handleChange}
            style={{ width: '100%', maxWidth: '400px' }} // Ajustar el ancho del campo de búsqueda
          />
        </div>
        {/* Mostrar recetas filtradas */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
          {recetasFiltradas.map((receta, index) => (
            <RecipeCard key={index} recipe={receta} style={{ border: '2px solid #007bff', borderRadius: '10px', margin: '10px' }} />
          ))}
        </div>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;