import { useDispatch } from 'react-redux'
import { changeSearchField } from '../../../redux/actionsFuncs';

export const ServiceSearch = () => {
  const dispatch = useDispatch();

  function handleChangeSearch(e) {
    const { value } = e.target;
    dispatch(changeSearchField(value));
  }

  return (
    <div className='search'>
      <h2>Search</h2>
      <input 
        type="search" 
        className='search__input' 
        placeholder='Search' 
        onInput={handleChangeSearch} 
      />
    </div>
  )
}
