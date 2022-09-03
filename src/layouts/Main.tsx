import Table from '../components/Table';
import Modal from 'react-modal';
import { useState } from 'react';
import Step1 from '../components/Steps/Step1';
import Step2 from '../components/Steps/Step2';
import Step3 from '../components/Steps/Step3';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 34px rgba(0, 0, 0, 0.24)',
    border: 0,
    borderRadius: 0,
    padding: '30px 30px 20px 25px',
  },
};

Modal.setAppElement('#root');

const Main = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalStep, setModalStep] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main className='pt20'>
      <div className='container'>
        <button className='btn btn--green' onClick={openModal}>
          Add
        </button>
        <Table />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Modal registration'
      >
        <Step1
          setIsOpen={setIsOpen}
          modalStep={modalStep}
          setModalStep={setModalStep}
        />
        <Step2
          setIsOpen={setIsOpen}
          modalStep={modalStep}
          setModalStep={setModalStep}
        />
        <Step3
          setIsOpen={setIsOpen}
          modalStep={modalStep}
          setModalStep={setModalStep}
        />
      </Modal>
    </main>
  );
};

export default Main;
