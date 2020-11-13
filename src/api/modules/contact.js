import bnkApi from '../index';

export default {
    getSubSidiary: (param) => {
        return bnkApi.post(param)
    },
    getDeptList:(param)=> {
        return bnkApi.post(param)
    },
    getEmployeeList: (param) => {
        return bnkApi.post(param)
    },
    getEmployeeDetail: (param) => {
        return bnkApi.post(param)
    }
}