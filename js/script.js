/**
 * Created by px on 2017/6/14.
 */



// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var myCake = echarts.init(document.getElementById('cake'));
var myRose = echarts.init(document.getElementById('rose'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    //悬浮提示框
    tooltip: {},
    //图注
    legend: {
        data:['销量', "产量"]
    },
    //x轴
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    //y轴
    yAxis: {},
    //系列
    series: [
        {
            name: '销量',
            // type: 'line',
            type: 'bar',
            data: [210, 20, 36, 10, 10, 20]
        },
        {
            name: '产量',
            type: 'line',
            // type: 'bar',
            data: [50, 90, 136, 60, 40, 80]
        }
    ]
}
var cake = {
    title: {
        text: 'ECharts 入门示例'
    },
    //悬浮提示框
    tooltip: {},
    //图注
    legend: {
        data:['访问来源']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
    ]
};
var rose = {
    backgroundColor: '#2c343c',
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ],
            roseType: 'angle',
            //引线
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                },
                //悬停状态
                emphasis: {
                    textStyle: {
                        color: "#990099"
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myCake.setOption(cake);
myRose.setOption(rose);
