import { ServiceItem } from './ServiceItem/ServiceItem'
import { useSelector } from 'react-redux'

export const ServicesList = () => {
  let services = useSelector(state => state.services);
  const searchService = useSelector(state => state.searchService);
  
  if (searchService) {
    services = services.filter(el => el.name.toLowerCase().includes(searchService.trim()))
  }

  return (
    <ul className='service-list'>
      {services.map(service => <ServiceItem key={service.id} {...service} />)}
    </ul>
  )
}
