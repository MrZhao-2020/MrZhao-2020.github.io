var ec_left1 = echarts.init(document.getElementById('l1'),"dark");

var ec_left1_Option = {
	//标题样式
    title: {
        text: "全国累计趋势",
        textStyle: {
        	//color: white
        },
        letf: "left",
    },
    tooltip: {
        trigger: 'axis',
        //指示器
        axisPointer:{
        	type: "line",
        	lineStyle: {
        		color: "#7171C6"
        	}
        },
        transitionDuration:0
    },
    legend: {
        data: ['累计确诊', '现有疑似', '累计治愈', '累计死亡'],
        left:"right",
    },
    
    //图形位置
    grid: {
        left: '4%',
        right: '6%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
  //X轴坐标点开始与结束点位置不在最边缘
  //    boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value',
       	//y轴字体设置
        axisLabel:{
        	show: 'true',
        	color:'white',
        	fontSize: 12,
        	formatter: function(value){
        		if(value>=1000){
        			value = value/1000+'k'
        		}
        		return value;
        	}
        },
        //y轴线设置显示
        axisLine: {
        	show: 'true'
        },
        //与X轴平行的线样式
        splitLine:{
        	show: 'true',
        	lineStyle: {
        		color: '#17273B',
        		width: 1,
        		type: 'solid',
        	}
        }
    }],
    series: [
        {
            name: '累计确诊',
            type: 'line',
            smooth: 'true',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '现有疑似',
            type: 'line',
            smooth: 'true',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '累计治愈',
            type: 'line',
            smooth: 'true',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '累计死亡',
            type: 'line',
            smooth: 'true',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        
    ]
};
ec_left1.setOption(ec_left1_Option)
