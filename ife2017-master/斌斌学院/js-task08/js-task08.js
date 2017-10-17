var stack = [],
	stack2 = [],
    btns = document.getElementsByTagName("button"),
    breadthfirst_btn = btns[0],
    depthfirst_btn = btns[1],
    search_btn = btns[2],
    timer = null,
    search_input,
	searchtxt,
    j,
    Root = document.getElementById("root");
function handle(){
    breadthfirst_btn.onclick = function(){
        reset();
        breadth_first(Root);
        animation();
    }
    depthfirst_btn.onclick = function(){
        reset();
        depth_first(Root);
        animation();
    }
    search_btn.onclick = function(){
    	reset();
        breadth_first(Root);
		search_input = document.getElementById("search");
		searchtxt = search_input.value.toLowerCase();
        if(searchtxt == ""){
        	alert("请输入查询内容！");
        }
        else{
        	animation();
        }
    }
};
// 遍历方法：
// 1广度优先
function breadth_first(node){
    if(!node) return;
    if(!node.length){
    	node = [node];
    }
    for(var i = 0; i<node.length;i++){
        stack.push(node[i]);
    }
    var item ;
    while(stack.length){
    	item = stack.shift();
	    stack2.push(item);
	    var ch = item.children;
	    if(ch && ch.length){
	    	for(x in ch){
	    		if(ch[x].nodeType == 1){
	    			stack.push(ch[x]);
	    		}
	    	}
    	}
    }
};
//2深度优先
function depth_first(node){
	if(!node) return;
    if(!node.length){
    	node = [node];
    }
    for(var i = 0; i<node.length; i++){
        stack2.push(node[i]);
        var childs = node[i].children;
        if(childs && childs.length>0){
            depth_first(childs);
        }
    }
};
// 动画方法
function animation(){
    var i = 0,
        speed = document.getElementById("speed");
        stack2[i].style.backgroundColor = "#FF0000";
        timer = setInterval(function(){
            if(i < stack2.length){
            	if(stack2[i+1]){
            		stack2[i+1].style.backgroundColor = "#FF0000";
            	}
		        stack2[i].style.backgroundColor = "#FFF";
            	var txt = stack2[i].childNodes[0];
            	txt = txt.nodeValue.replace(/\s/g,"").toLowerCase();
            	if(!searchtxt == ""){
            		if(txt.indexOf(searchtxt) >= 0){
            			j = i;
	               		stack2[j].style.backgroundColor = "#22ba4c";
            		}
            	}
	         	i++;
            }
            else{
                clearInterval(timer);
                if(searchtxt){
                	if(j == -1){
		    			alert("未找到  "+document.getElementById("search").value);
		    		}
                }
            }
        },speed.value)
};
function reset(){
	j = -1;
	search_input = null;
	searchtxt = null;
    clearInterval(timer);
    for(x in stack2){
        stack2[x].style.backgroundColor = '#fff';
    }
    stack2 = [];   
};
handle();