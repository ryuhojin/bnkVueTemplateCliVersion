import bnkApi from '../index'

export default {
    getInitData: (path) => {
        return bnkApi.post(path)
    }
}