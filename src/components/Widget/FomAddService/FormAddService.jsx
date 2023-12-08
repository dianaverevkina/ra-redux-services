import { useDispatch, useSelector } from 'react-redux';
import { addService, changeServiceField, clearServiceFields, editService } from '../../../redux/actionsFuncs';
import { useState } from 'react';

export const FormAddService = () => {
  const [isError, setError] = useState(false);
  const formData = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  function handleChange(e) {
    if (isError) {
      setError(false)
    }

    const { name, value } = e.target;
    dispatch(changeServiceField({ name, value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const hasEmptyField = Object.entries(formData).some(([key, value]) => {
      if (key === 'id') return;
      return !value.trim();
      
    });

    if (hasEmptyField) {
      setError(true)
      return;
    }

    formData.id ? dispatch(editService({...formData})) : dispatch(addService(formData));

    dispatch(clearServiceFields());
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2 className="form__title">Add service</h2>
      <div className="form__block">
        <div className="form__field">
          <input 
            type="text" name='name' 
            placeholder='Service name'
            value={formData.name} 
            className="form__input" 
            onChange={handleChange} 
          />
          {isError && !formData.name && <p className='form__error '>Field must be filled</p>}
        </div>

        <div className="form__field">
          <input 
            type="text" name='price' 
            placeholder='Price'
            value={formData.price} 
            className="form__input" 
            onChange={handleChange} 
          />
          {isError && !formData.price && <p className='form__error '>Field must be filled</p>}
        </div>

        <button className="btn">Save</button>
      </div>
    </form>
  )
}
