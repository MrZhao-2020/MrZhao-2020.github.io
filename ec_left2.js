
var ec_left2 = echarts.init(document.getElementById("l2"),"dark");


var ec_left2_Option = {
	title:{
		text: "非湖北地区城市确诊Top5",
		textStyle: {
			color: 'white',
		},
		left: 'left'
	},
    color: ['#2555e0'],
       tooltip: {
           trigger: 'axis',
           axisPointer: {            // 坐标轴指示器，坐标轴触发有效
               type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
           },
           transitionDuration: 0  //
       },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            type: 'bar',
            barWidth: '20%',
            data: [10, 52, 200, 334, 390]
        }
    ]
};

ec_left2.setOption(ec_left2_Option)
