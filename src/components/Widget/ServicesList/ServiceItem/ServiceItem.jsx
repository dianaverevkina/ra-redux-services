import { useDispatch } from "react-redux"
import { clearServiceFields, deleteService, fillServiceFields } from "../../../../redux/actionsFuncs";

export const ServiceItem = ({name, price, id}) => {
  const dispatch = useDispatch();
  
  function handleEditService() {
    dispatch(fillServiceFields({name, price, id}));
  }

  function handleDeleteService() {
    dispatch(deleteService(id));
    dispatch(clearServiceFields());
  }

  return (
    <li className='service-list__item item'>
      <p className="item__name">{name}</p>
      <span className="item__price">{price}</span>
      <div className="item__controls">
        <button className="item__btn" onClick={handleEditService}>Редактировать</button>
        <button className="item__btn" onClick={handleDeleteService}>Удалить</button>
      </div>
    </li>
  )
}
