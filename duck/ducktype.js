// 鸭子类型，只要是两条腿，会嘎嘎嘎叫的都是鸭子，国王只要听到嘎嘎叫就可以。
	var duck={
		duckSinging:function () {
			console.log('嘎嘎嘎');
		}
	}
	var chicken={
		chickSining:function(){
			console.log('咯咯咯');
		},
		duckSinging:function () {
			console.log('嘎嘎嘎');
		}  //只要具有duckSinging 这个函数就认为是鸭子 
	}
	// var a=chicken.duckSining;
	// console.log(typeof a);
	var chior=[]; //合唱团数组
	// h函数表达式
	var joinChior=function(animal){
		if(animal&& typeof animal.duckSinging==="function"){
		//检测鸭 但是没有类型检测  typeof 运算符 可以检测属性 不存在即为undefined
		//函数 方法 接口   具有相同接口的，在js就认为是同一类对象
			chior.push(animal); //入数组 push
			console.log('恭喜加入皇家合唱团');
			console.log('合唱团已有成员数量为'+chior.length);
		}
		else{
			console.log('这里不属于你');

		}
	}
	joinChior(duck);
	joinChior(chicken);