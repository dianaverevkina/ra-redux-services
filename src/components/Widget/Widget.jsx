import { FormAddService } from './FomAddService/FormAddService'
import { ServicesList } from './ServicesList/ServicesList'
import { ServiceSearch } from './ServiceSearch/ServiceSearch'

export const Widget = () => {
  return (
    <div className='widget'>
      <FormAddService />
      <ServiceSearch />
      <ServicesList />
    </div>
  )
}
