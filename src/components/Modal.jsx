import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ isOpen, onClose, details }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Details</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h3>Numero : N{details.id}</h3><hr/>
            <img src={details.image} className="card-img-top" alt={details.title} style={{objectFit: 'cover' }} /><hr/>
            <h3>Titre :</h3>{details.title}<hr/>
            <h3>Prix :</h3>{details.price}DH<hr/>
            <h3>Description :</h3>{details.description}<hr/>
            <h3>Categorie :</h3>{details.category}<hr/>
            <h3>Rating :</h3><span className="badge badge-pill bg-warning">{details.rating.rate}/{details.rating.count}</span>
          </div>
          <div className="modal-footer">
          <button onClick={onClose} className="btn btn-primary">Retour</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
