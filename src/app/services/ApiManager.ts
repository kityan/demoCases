import axios from 'axios'
import { CaseModel } from 'app/models'

class ApiManager {
  constructor(private url: string) { }

  getCases(): Promise<CaseModel[]> {
    return new Promise((resolve, reject) => {
      axios.get<CaseModel[]>(`${this.url}/cases`)
        .then(response => {
          return resolve(
            response.data.map(item => {
              item.creationDate = new Date(item.creationDate)
              return item
            }))
        })
        .catch(error => reject(error))
    })
  }

  getCaseById(id: string): Promise<CaseModel> {
    return new Promise((resolve, reject) => {
      axios.get<CaseModel>(`${this.url}/case/${id}`)
        .then(response => {
          const c = response.data
          c.creationDate = new Date(c.creationDate)
          return resolve(c)
        })
        .catch(error => reject(error))
    })
  }

}

export default ApiManager
