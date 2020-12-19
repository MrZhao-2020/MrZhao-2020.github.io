
function get_c1_data(){
	$.ajax({
		url: "/c1",										//请求页面
    	success: function(data){						//成功之后开始操作
   	     	ec_center_option.series[0].data=data.data
   	     	ec_center.setOption(ec_center_option)
		},
		error:function(xhr,type,errorThrown){

    	}
	})
}


function get_l1_data(){
	$.ajax({
		url: "/l1",										//请求页面
    	success: function(data){						//成功之后开始操作
   	     	ec_left1_Option.xAxis[0].data=data.day
			ec_left1_Option.series[0].data=data.confirm
			ec_left1_Option.series[1].data=data.suspect
			ec_left1_Option.series[2].data=data.heal
			ec_left1_Option.series[3].data=data.dead
   	     	ec_left1.setOption(ec_left1_Option)
		},
		error:function(xhr,type,errorThrown){

    	}
	})
}


function get_l2_data(){
	$.ajax({
		url: "/l2",										//请求页面
    	success: function(data){						//成功之后开始操作
   	     	ec_left2_Option.xAxis[0].data = data.city
			ec_left2_Option.series[0].data = data.confirm
			ec_left2.setOption(ec_left2_Option)
		},
		error:function(xhr,type,errorThrown){

    	}
	})
}



get_c1_data()
get_l1_data()
get_l2_data()
//setInterval(get_c1_data,1000)
// setInterval(gettime,1000)
