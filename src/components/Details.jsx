import React from 'react';
import Modal from './Modal';

const Details = ({ selC, onBack, setModalOpen }) => {
  const d = selC && selC.length > 0 ? selC[0] : null;
  if (!d) {
    return <div>No details available</div>;
  }

  return (
    <>
      <Modal isOpen={true} onClose={() => { onBack(); setModalOpen(false); }} details={d} />
    </>
  );
};

export default Details;