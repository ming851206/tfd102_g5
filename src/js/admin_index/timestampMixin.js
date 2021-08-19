
    var timestampMixin = {
        data(){
            return {
               timestamp:'' 
            }
        },
        methods: {
            timestampToTime(timestamp) {

                var date = new Date(timestamp * 1);//時間戳為10位需*1000，時間戳為13位的話不需乘1000
                Y = date.getFullYear() + '/';
                M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
                D = date.getDate() + ' ';
                h = date.getHours() + ':';
                m = date.getMinutes() ;
                s = date.getSeconds();
                return this.timestamp = Y + M + D + h + m;

            }
            
        }
    }
