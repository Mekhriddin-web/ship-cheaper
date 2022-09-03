import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { addTableRow } from '../../store/tableSlice';
import { Inputs } from '../../types';

interface IProps {
  setIsOpen: (value: boolean) => void;
  modalStep: number;
  setModalStep: (value: number) => void;
}

const Step3: FC<IProps> = ({ setIsOpen, modalStep, setModalStep }) => {
  const dispatch = useAppDispatch();
  const formState = useAppSelector(state => state.table.formState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(addTableRow({ ...formState, ...data, id: `id-${Math.random()}` }));
    setIsOpen(false);
    setModalStep(0);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <form
      className={`modal__form ${modalStep === 2 && 'active'}`}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <button className='modal__close' onClick={closeModal}></button>

      <div className='modal__step'>
        <h2 className='title'>Contact</h2>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>Fax</span>
            <input type='text' className='input' {...register('fax')} />
          </label>
        </div>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>E-mail</span>
            <input
              type='email'
              className='input'
              {...register('email', {
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
            />
          </label>
          {errors.email && (
            <p className='text-error'>The mail is not valid. </p>
          )}
        </div>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>Birthday</span>
            <input type='date' className='input' {...register('birthday')} />
          </label>
        </div>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>Homepage</span>
            <input type='text' className='input' {...register('homepage')} />
          </label>
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
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Step3;
