<template>
    <div class="container">
        <h2>라인차트</h2>
        <line-chart
            v-if="lineLoaded"
            :chartdata="lineData"
            :options="options"/>
        <h2>바차트</h2>
        <bar-chart
            v-if="barLoaded"
            :chartdata="barData"
            :options="options"/>
        <h2>버블차트</h2>
        <bubble-chart
            v-if="bubbleLoaded"
            :chartdata="bubbleData"
            :options="options"
            />
        <h2>파이/도넛 차트</h2>
        <pie-chart
            v-if="pieLoaded"
            :chartdata="pieData"
            :options="options"/>
            
        <doughnut-chart
            v-if="doughnutLoaded"
            :chartdata="doughnutData"
            :options="options"/>
    </div>
</template>
<script>
import BarChart from '@/components/chart/chartjs/BarChart'
import BubbleChart from '@/components/chart/chartjs/BubbleChart'
import DoughnutChart from '@/components/chart/chartjs/DoughnutChart'
import LineChart from '@/components/chart/chartjs/LineChart'
import PieChart from '@/components/chart/chartjs/PieChart'
import Chart from '@/api/modules/chart'
export default {
    name: 'ChartJSPage',
    components: {
        BarChart,
        BubbleChart,
        PieChart,
        DoughnutChart,
        LineChart,
        
    },
    data: () => ({
        barLoaded: false,
        bubbleLoaded: false,
        pieLoaded: false,
        doughnutLoaded: false,
        lineLoaded: false,

        barData:null,
        bubbleData:null,
        pieData:null,
        doughnutData:null,
        lineData:null,
        options:{responsive: true, maintainAspectRatio: false}
    }),
    async mounted(){
        this.barLoaded = false
        this.doughnutLoaded = false
        this.bubbleLoaded = false
        this.pieLoaded = false
        this.lineLoaded = false

        try{
            const {data} = await Chart.getLineChart();
            this.lineData = data
            this.lineLoaded = true
        }catch(e){
            console.error(e)
        }
        
        try{
            const { data } = await Chart.getBarChart();
            this.barData = data
            this.barLoaded = true
        }catch(e){
            console.error(e)
        }
        try{
            const {data} = await Chart.getBubbleChart();
            this.bubbleData = data
            this.bubbleLoaded = true
        }catch(e){
            console.error(e)
        }

        try{
            const {data} = await Chart.getDoughnutChart();
            this.doughnutData = data
            this.doughnutLoaded = true
        }catch(e){
            console.error(e)
        }

        try{
            const {data} = await Chart.getPieChart();
            this.pieData = data
            this.pieLoaded = true
        }catch(e){
            console.error(e)
        }
    }
}
</script>