import React, { memo } from 'react'
import classes from './Table.module.css'
interface IProps {
    data: any[];
    columns: {
        label: string;
        key: string
    }[]
}

const CommonTable = (props: IProps) => {
    const {data, columns} = props
  return (
    <div className={classes.container}>
        <table>
            <thead>
                <tr>
                    {
                        columns.map((value, index) => {
                            return <th className={classes.column} key={index}>{value.label}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
            {
                data.map((item) => {
                    return <tr className={classes.row} key={item.id}>
                            {
                                columns.map((col) => {
                                    return <td key={col.key}>{item[col.key]}</td>
                                })
                            }
                    </tr>
                })
            }
            </tbody>

        </table>
    </div>
  )
}

export default memo(CommonTable)