import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store/hook';
import { updateFormState } from '../../store/tableSlice';
import { Inputs } from '../../types';

interface IProps {
  setIsOpen: (value: boolean) => void;
  modalStep: number;
  setModalStep: (value: number) => void;
}

const Step2: FC<IProps> = ({ setIsOpen, modalStep, setModalStep }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(updateFormState(data));
    setModalStep(modalStep + 1);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <form
      className={`modal__form ${modalStep === 1 && 'active'}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <button className='modal__close' onClick={closeModal}></button>

      <div className='modal__step'>
        <h2 className='title'>Bank Data</h2>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>IBAN *</span>
            <input
              type='text'
              className='input'
              {...register('iban', { required: true })}
            />
          </label>
          {errors.iban && <p className='text-error'>This field is required</p>}
        </div>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>BIC *</span>
            <input
              type='text'
              className='input'
              {...register('bic', { required: true })}
            />
          </label>
          {errors.bic && <p className='text-error'>This field is required</p>}
        </div>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>Bank name *</span>
            <input
              type='text'
              className='input'
              {...register('bankName', { required: true })}
            />
          </label>
          {errors.bankName && (
            <p className='text-error'>This field is required</p>
          )}
        </div>

        <div className='modal__btn-wrap'>
          <button className='btn btn--white' type='button' onClick={closeModal}>
            Cancel
          </button>
          <button
            className='btn btn--white'
            type='button'
            onClick={() => setModalStep(modalStep - 1)}
          >
            Previous
          </button>
          <button className='btn' type='submit'>
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default Step2;
