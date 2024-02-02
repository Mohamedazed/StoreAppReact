import React, { useState, useEffect } from 'react';
import Details from './Details';


const Cards = () => {
  const [card, setCard] = useState([]);
  const [selC, setSelC] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setCard(data));
    } catch (error) {
      console.error('err :', error);
    }
  }, []);
  
  const displayCard = () => {
    const cardChunks = [];
    for (let i = 0; i < card.length; i += 3) {
      cardChunks.push(card.slice(i, i + 3));
    }

    return cardChunks.map((chunk, rowKey) => (
      <div key={rowKey} className="row">
        {chunk.map((card, colKey) => (
          <div key={colKey} className="col-md-4 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <img src={card.image} className="card-img-top" alt={card.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <h6 className="card-text text-warning">{card.price}DH</h6>
                <p className="card-text">{card.description.slice(0,100)}...</p>
                <button onClick={() => openModal(card)} className="btn btn-success">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    ));
  };
  const openModal = (card) => {
    setSelC(card);
    setModalOpen(true);
  };

  const handleBack = () => {
    setSelC(null);
    setModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && <Details selC={[selC]} onBack={handleBack} setModalOpen={setModalOpen} />}
      <h3>Liste des produits:</h3><hr/>
      {displayCard()}
    </div>
  );
};

export default Cards;
