import { observable, computed, action, runInAction } from 'mobx'
import { CaseModel } from 'app/models'
import ApiManager from 'app/services/ApiManager'

export class CasesStore {
  @observable cases: CaseModel[] = []
  @observable selectedCase: CaseModel

  constructor(private apiManager: ApiManager) { }

  @action.bound
  async getAll() {
    const cases = await this.apiManager.getCases()
    runInAction(() => this.cases = cases)
  }

  @action.bound
  async getOne(id: string) {
    const c = await this.apiManager.getCaseById(id)
    runInAction(() => this.selectedCase = c)
  }

}

export default CasesStore
