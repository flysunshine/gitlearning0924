var stack = [],
	stack2 = [],
    btns = document.getElementsByTagName("button"),
    breadthfirst_btn = btns[0],
    depthfirst_btn = btns[1],
    search_btn = btns[2],
    del_btn = btns[3],
    add_btn = btns[4],
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

    del_btn.onclick = function(){
        deleteele();
        console.log(stack2.length);
        console.log(stack2);
    }

    add_btn.onclick = function(){
        addele();
    }
    selectele();
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
        // select(item);
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
        // select(node[i]);
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
// 重置
function reset(){
	j = -1;
	search_input = null;
	searchtxt = null;
    clearInterval(timer);
    for(var i=0;i<stack2.length;i++){
        stack2[i].style.backgroundColor = '#fff';
        stack2[i].className = stack2[i].className.replace(/selected/gi,"");
    }
    stack2 = [];   
};
// 点击节点添加类，增加背景颜色
function select(se){
    if(se.addEventListener){
        se.addEventListener("click",function(e){
            var reg = /selected/gi;
            var oldclass = reg.test(this.className);
            if(!oldclass){
                this.className += " selected";
                e.stopPropagation();
            }else{
                this.className = this.className.replace(reg,"");
                e.stopPropagation();
            }
        })
    }
    else{
        se.attachEvent("onclick",function(e){
            var reg = /selected/gi;
            var oldclass = reg.test(this.className);
            if(!oldclass){
                this.className += " selected";
                e = window.event;
                e.cancleBubble = true;
            }else{
                this.className = this.className.replace(reg,"");
                e = window.event;
                e.cancleBubble = true;
            }
        })
    }
}
function selectele(){
    var divlist = document.getElementsByTagName("div");
    for(var i=0;i<divlist.length;i++){
        select(divlist[i]);
        console.log(i);
    }
}
// 删除选中节点
function deleteele(){
    var dels = document.getElementsByClassName("selected");
    for(var i=0;i<dels.length;i++){
        console.log(i);
        dels[i].parentNode.removeChild(dels[i]);
        i--;
    }
}
// 增加新节点
function addele(){
	var newdiv = document.createElement("div"),
		newdivtext = document.getElementById("add").value;
	newdiv.innerHTML = newdivtext;
	var pardiv = document.getElementsByClassName("selected");
    select(newdiv);
    console.log(pardiv);
    for(var i=0;i<pardiv.length;i++){
        console.log(i);
        pardiv[i].appendChild(newdiv);
    }
}
handle();