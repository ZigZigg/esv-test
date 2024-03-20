import classes from './HorizontalFilter.module.css'
import CommonFilter from '../../commons/Filter/Filter'
import { listFilters } from '../../constants'

const HorizontalFilter = () => {
  return (
    <div className={classes.container}>
      {
        listFilters.map(value => {
          return <CommonFilter key={`filter_${value.key}`} filterKey={value.key} placeholder={value.placeholder} options={value.options} />
        })
      }
    </div>
  )
}

export default HorizontalFilter