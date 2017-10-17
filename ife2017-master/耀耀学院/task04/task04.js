var current = 0;
function execution(){
	var item = document.getElementById("item"),
		itemHead = document.getElementById("itemHead"),
		itemBody = document.getElementById("itemBody"),
		top = document.documentElement.clientTop,
		left = document.documentElement.clientLeft,
		itemHeadTop = itemHead.getBoundingClientRect().top - top,
		itemHeadLeft = itemHead.getBoundingClientRect().left - left,
		itemBodyTop = itemBody.getBoundingClientRect().top - top,
		itemBodyLeft = itemBody.getBoundingClientRect().left - left;
	var order = document.getElementById("zl").value;

	if(order == "GO"){
		if(itemHeadTop < itemBodyTop){
			var top = parseInt(item.style.top) - 40;

			if(top>=-400){
				item.style.top = top + "px";
			}
		}
		else if(itemHeadTop > itemBodyTop){

			var top = parseInt(item.style.top) + 40;
			if(top<0){
				item.style.top = top + "px";
			}
		}
		else if(itemHeadLeft > itemBodyLeft){
			var left = parseInt(item.style.left) + 40;
			if(left<400){
				item.style.left = left + "px";
			}
		}
		else{
			var left = parseInt(item.style.left) - 40;
			if(left>=0){
				item.style.left = left + "px";
			}
		}
	}
	if (order == "TUN LEF"){
		current += 270;
		item.style.transform = 'rotate('+current+'deg)';
	}
	if(order == "TUN RIG"){
		current += 90;
		item.style.transform = 'rotate('+current+'deg)';
	}
	if(order == "TUN BAC"){
		current += 180;
		item.style.transform = 'rotate('+current+'deg)';
	}
}
function init(){
	document.getElementById("btn").onclick = execution;
}
init();