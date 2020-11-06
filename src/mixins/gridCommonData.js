import { Grid } from '@toast-ui/vue-grid';

export const gridCommonData = {
    data:() => ({
        theme: 'clean',
        options: {
            pageOptions:{
                perPage:10
            }
        }
    }),
    components:{
        Grid
    },
    created() {
        this.gridProps = {
            data: {
                api: {
                    readData: {
                        url:this.url,
                        method:'GET'
                    }
                }
            },
            options:this.options,
            columns:this.columns,
            theme:this.theme,
        }
    }
}