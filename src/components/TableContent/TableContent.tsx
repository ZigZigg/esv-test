import { useFetchData } from '../../hooks/useFetchData'
import classes from './TableContent.module.css'
import CommonTable from '../../commons/Table/Table'
import CommonInput from '../../commons/Input/Input'
import HorizontalFilter from '../HorizontalFilter/HorizontalFilter'
import PopupFilter from '../PopupFilter/PopupFilter'
const TableContent = () => {
  const { data } = useFetchData()
  const columns = [
    {
      label: 'Serial Number',
      key: 'serialNumber'
    },
    {
      label: 'Host Name',
      key: 'hostName'
    },
    {
      label: 'Name',
      key: 'name'
    },
    {
      label: 'Type',
      key: 'type'
    },
    {
      label: 'Os',
      key: 'os'
    },
    {
      label: 'Current Holder',
      key: 'currentHolder'
    },
  ]

  return (
    <div className={classes.container}>
      <div className={classes.filterContainer}>
        <div className={classes.leftContent}>
          <CommonInput placeholder='Search by device name, OS, ID or owner' />
          <HorizontalFilter />
          <PopupFilter />
        </div>
        <button className={classes.export}>Export</button>
      </div>
      <CommonTable columns={columns} data={data} />
    </div>
  )
}

export default TableContent