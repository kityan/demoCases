import * as React from 'react'
import { inject, observer } from 'mobx-react'
import storeNames from 'app/stores/storeNames'
import Header from 'app/components/Header'
import * as classes from './styles.scss'
import { Button } from '@material-ui/core'
import { CasesStore } from 'app/stores/CasesStore'
import CaseTable from 'app/components/CaseTable'
import { RouteComponentProps } from 'react-router'

@inject(storeNames.CASES_STORE)
@observer
class CasesPage extends React.Component<RouteComponentProps<{ id: string }>> {

  componentDidMount() {
    const casesStore: CasesStore = this.props[storeNames.CASES_STORE] // typecheck?
    casesStore.getOne(this.props.match.params.id).catch(err => console.log(err))
  }

  render() {
    return (
      <div >
        <Header />
        <div className={classes.container}>
          <CaseTable selectedCase={this.props[storeNames.CASES_STORE].selectedCase} />
          <div className={classes.buttonsContainer}>
            <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/') }}>
              Обратно к таблице
            </Button>
          </div>
        </div>
      </div>
    )
  }

}

export default CasesPage
