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
	function traLef(){
		var left = parseInt(item.style.left) - 40;
			if(left>=0){
				item.style.left = left + "px";
			}
	}
	function traTop(){
		var top = parseInt(item.style.top) - 40;
			if(top>=-400){
				item.style.top = top + "px";
			}
	}
	function traRig(){
		var left = parseInt(item.style.left) + 40;
			if(left<400){
				item.style.left = left + "px";
			}
	}
	function traBot(){
		var top = parseInt(item.style.top) + 40;
			if(top<0){
				item.style.top = top + "px";
			}
	}
	function go(){
		if(itemHeadTop < itemBodyTop){
			traTop();
		}
		else if(itemHeadTop > itemBodyTop){
			traBot();
		}
		else if(itemHeadLeft > itemBodyLeft){
			traRig();
		}
		else{
			traLef();
		}
	}
	function tunLef(){
		if(itemHeadTop < itemBodyTop){
			current -= 90;
		}
		else if(itemHeadTop > itemBodyTop){
			current += 90;
		}
		else if(itemHeadLeft > itemBodyLeft){
			current -= 180;
		}
		else{
			current += 0;
		}
		item.style.transform = 'rotate('+current+'deg)';
	}
	function tunRig(){
		if(itemHeadTop < itemBodyTop){
			current += 90;
		}
		else if(itemHeadTop > itemBodyTop){
			current -= 90;
		}
		else if(itemHeadLeft > itemBodyLeft){
			current -= 0;
		}
		else{
			current += 180;
		}
		item.style.transform = 'rotate('+current+'deg)';
	}
	function tunTop(){
		if(itemHeadTop < itemBodyTop){
			current -= 0;
		}
		else if(itemHeadTop > itemBodyTop){
			current += 180;
		}
		else if(itemHeadLeft > itemBodyLeft){
			current -= 90;
		}
		else{
			current += 90;
		}
		item.style.transform = 'rotate('+current+'deg)';
	}
	function tunBot(){
		if(itemHeadTop < itemBodyTop){
			current -= 180;
		}
		else if(itemHeadTop > itemBodyTop){
			current += 0;
		}
		else if(itemHeadLeft > itemBodyLeft){
			current += 90;
		}
		else{
			current -= 90;
		}
		item.style.transform = 'rotate('+current+'deg)';
	}
	if(order == "GO"){
		go();
	}
	if (order == "TUN LEF"){
		current += -90;
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
	if(order == "TRA LEF"){
		traLef();
	}
	if(order == "TRA TOP"){
		traTop();
	}
	if(order == "TRA RIG"){
		traRig();
	}
	if(order == "TRA BOT"){
		traBot();
	}
	if(order == "MOV LEF"){
		traLef();
		tunLef();
	}
	if(order == "MOV TOP"){
		traTop();
		tunTop();
	}
	if(order == "MOV RIG"){
		traRig();
		tunRig();
	}
	if(order == "MOV BOT"){
		traBot();
		tunBot();
	}
	item.style.transition = "all 1s";
	item.style.WebkitTransition = "all 1s";
}
function init(){
	document.getElementById("btn").onclick = execution;
}
init();