import * as React from 'react'
import autobind from 'autobind-decorator'
import { inject, observer } from 'mobx-react'
import CasesTable from 'app/components/CasesTable'
import storeNames from 'app/stores/storeNames'
import Header from 'app/components/Header'
import * as classes from './styles.scss'
import { CasesStore } from 'app/stores/CasesStore'

@inject(storeNames.CASES_STORE)
@observer
class CasesPage extends React.Component {

  componentDidMount() {
    const casesStore: CasesStore = this.props[storeNames.CASES_STORE] // typecheck?
    casesStore.getAll().catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        <div className={classes.container}>
          <CasesTable cases={this.props[storeNames.CASES_STORE].cases} />
        </div>
      </div>
    )
  }

}

export default CasesPage
