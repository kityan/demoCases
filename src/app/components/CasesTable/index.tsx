import * as React from 'react'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress } from '@material-ui/core'
import { TableFooter, TablePagination } from '@material-ui/core'
import * as classes from './styles.scss'
import * as moment from 'moment'
import TablePaginationActions from 'app/components/TablePaginationActions'
import Props from './declarations/Props'
import State from './declarations/State'
import { Link } from 'react-router-dom'

class CasesTable extends React.Component<Props, State> {

  state = {
    page: 0,
    rowsPerPage: 5,
  }

  private formatPaginationLabel(data: { from: number, to: number, count: number, page: number }) {
    return `${data.from}-${data.to} из ${data.count}`
  }

  handleChangePage = (event, page) => {
    this.setState(() => ({ page }))
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  render() {

    const { rowsPerPage, page } = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.props.cases.length - page * rowsPerPage)

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>reference</TableCell>
              <TableCell>caseUid</TableCell>
              <TableCell>creationDate</TableCell>
              <TableCell>publicId</TableCell>
              <TableCell>status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.cases.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
              return (
                <TableRow key={n.caseUid} hover={true}>
                  <TableCell title={n.reference}><Link to={`case/${n.caseUid}`}>{n.reference}</Link></TableCell>
                  <TableCell title={n.caseUid}>{n.caseUid}</TableCell>
                  <TableCell>{moment(n.creationDate).format('YYYY-MM-DD hh:mm:ss')}</TableCell>
                  <TableCell title={n.publicId}>{n.publicId}</TableCell>
                  <TableCell title={n.status}>{n.status}</TableCell>
                </TableRow>
              )
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                labelDisplayedRows={this.formatPaginationLabel}
                labelRowsPerPage="Выводить по:"
                colSpan={10}
                count={this.props.cases.length}
                rowsPerPage={this.state.rowsPerPage}
                page={this.state.page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    )
  }
}

export default CasesTable
