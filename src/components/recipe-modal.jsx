import React from 'react';
import Modal from 'react-modal';

const RecipeModal = ({ isOpen, closeModal, instructions }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Instrucciones de la receta"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          maxHeight: '70%',
          overflow: 'auto'
        }
      }}
    >
      <div style={{ padding: '1rem' }}>
        <h2>Pasos para elaboración de la receta</h2>
        <button onClick={closeModal} style={{ marginBottom: '1rem' }}>Cerrar</button>
        <ul>
          {instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default RecipeModal;





