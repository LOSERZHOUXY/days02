/*
数组求和，参数是一个数组
*/
function sum(arr) {
	var num = 0;
	for (var i = 0; i < arr.length; i++) {
		num += arr[i];
	}
	return num;
}
/*
元素获取
第一个参数：字符串，css选择器
第二个参数：可选，字符串，css选择器
*/
function $(name,parent) {
	parent = parent || document;
	var obj = parent.querySelectorAll(name);
	return obj;
}
/*
添加事件
第一个参数：需要添加事件的对象
第二个参数：需要添加的事件，是一个字符串
第三个参数：该事件需要执行的代码
*/
function bind(obj,event,fn){
		obj['on'+event]=fn;
}
/*
封装一个for循环，循环一个数组
*/
function forEach(obj,fn){
	for(var i =0;i<obj.length;i++){
		fn(obj[i],i);
	}
}