import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import RecipeModal from './recipe-modal';

const Recipe = ({ recipe, handleChange }) => {
  const [showMore, setShowMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Card style={{ width: '18rem', margin: '1rem'}}>
      <Card.Body>
        <Card.Title style={{ color: '#007bff' }}>{recipe.nombre}</Card.Title>
        <Card.Text>
          <strong>Categoría:</strong> {recipe.categoria}
          <br />
          <strong>Tiempo de preparación:</strong> {recipe.tiempo_preparacion}
          <br />
          <strong>Porciones:</strong> {recipe.porciones}
          <br />
          <strong>Ingredientes:</strong> {showMore ? recipe.ingredientes.join(', ') : `${recipe.ingredientes.slice(0, 3).join(', ')}, ...`}
          <br />
          {recipe.ingredientes.length > 3 && (
            <Button variant="link" onClick={handleToggleShowMore}>
              {showMore ? 'Mostrar menos' : 'Mostrar más'}
            </Button>
          )}
          <br />
          <label>
            <input
              type="checkbox"
              checked={recipe.apto_veganos}
              onChange={() => handleChange(recipe.nombre)}
            />
            Apto para veganos
          </label>
        </Card.Text>
        <Button variant="primary" onClick={openModal}>Ver instrucciones</Button>
      </Card.Body>
      <RecipeModal isOpen={modalIsOpen} closeModal={closeModal} instructions={recipe.instrucciones} />
    </Card>
  );
};

export default Recipe;
