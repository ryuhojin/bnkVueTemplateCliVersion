import bnkApi from '../index'

export default {
    getAuth: (params) => {
        return bnkApi.post('/testurl',params)
    }
}