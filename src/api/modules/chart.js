import bnkApi from '../index'

export default {
    getBarChart: () => {
        return bnkApi.post('/getBarChart')
    },
    getBubbleChart: () => {
        return bnkApi.post('/getBubbleChart')
    },
    getLineChart: () => {
        return bnkApi.post('/getLineChart')
    },
    getDoughnutChart: () => {
        return bnkApi.post('/getDoughnutChart')
    },
    getPieChart: () => {
        return bnkApi.post('/getPieChart')
    }
}