import * as React from 'react'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress } from '@material-ui/core'
import * as classes from './styles.scss'
import * as moment from 'moment'
import Props from './declarations/Props'
import { Link } from 'react-router-dom'

class CasesTable extends React.Component<Props> {

  render() {
    const fields = this.props.selectedCase ? Object.entries(this.props.selectedCase) : []
    return (
      <Paper className={classes.root}>
        {
          this.props.selectedCase &&
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>{this.props.selectedCase.reference}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                fields.map((field, index) => (
                  <TableRow key={index}>
                    <TableCell>{field[0]}</TableCell>
                    <TableCell>{
                      field[0] === 'creationDate'
                        ? moment(field[1]).format('YYYY-MM-DD hh:mm:ss')
                        : field[1]
                    }</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        }
      </Paper>
    )
  }
}

export default CasesTable
