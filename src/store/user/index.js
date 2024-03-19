import * as actions from './account.actions'
import * as mutations from './user.mutations'
import * as getters from './user.getters'
import state from './user.state'

const namespaced = true

 const user = {
    namespaced,
    actions,
    mutations,
    getters,
    state
 }

 export default user