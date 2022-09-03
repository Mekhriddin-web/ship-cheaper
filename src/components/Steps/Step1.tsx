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

const Step1: FC<IProps> = ({ setIsOpen, modalStep, setModalStep }) => {
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
      className={`modal__form ${modalStep === 0 && 'active'}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <button className='modal__close' onClick={closeModal}></button>
      <div className={`modal__step`}>
        <h2 className='title'>Invoice Address</h2>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>Company *</span>
            <input
              type='text'
              className='input'
              {...register('company', { required: true })}
            />
          </label>
          {errors.company && (
            <p className='text-error'>This field is required</p>
          )}
        </div>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>Name *</span>
            <input
              type='text'
              className='input'
              {...register('name', { required: true })}
            />
          </label>
          {errors.name && <p className='text-error'>This field is required</p>}
        </div>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>Additional</span>
            <input type='text' className='input' {...register('additional')} />
          </label>
        </div>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>Street</span>
            <input type='text' className='input' {...register('street')} />
          </label>
        </div>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>Postal Code</span>
            <input
              type='number'
              className='input'
              {...register('postalCode')}
            />
          </label>
        </div>
        <div className='modal__group'>
          <label className='modal__label'>
            <span className='modal__group-title'>Country</span>
            <select
              className='input select'
              defaultValue=''
              {...register('country')}
            >
              <option value='' disabled></option>
              <option value='Ukraine'>Ukraine</option>
              <option value='Germania'>Germania</option>
            </select>
          </label>
        </div>

        <div className='modal__btn-wrap'>
          <button className='btn btn--white' type='button' onClick={closeModal}>
            Cancel
          </button>
          <button className='btn' type='submit'>
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default Step1;
