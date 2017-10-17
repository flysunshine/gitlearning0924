// 用dom结构模拟二叉树，遍历二叉树，并按照遍历顺序得到顺序数据结构，然后使用setInterval方法改变背景色
var stack = [],
    btns = document.getElementsByTagName("button"),
    preOrderbtn = btns[0],
    inOrderbtn = btns[1],
    postOrderbtn = btns[2],
    timer = null,
    Root = document.getElementById("root");
function handle(){
    preOrderbtn.onclick = function(){
        reset();
        preOrder(Root);
        animation();
    }
    inOrderbtn.onclick = function(){
        reset();
        inOrder(Root);
        animation();
    }
    postOrderbtn.onclick = function(){
        reset();
        postOrder(Root);
        animation();
    }
};
// 遍历方法：中序遍历
function  inOrder(node){
    if(node.children[0]){
        // 如果有子元素，将第一个（左边的）子元素作为参数回调inOrder方法
        inOrder(node.children[0]);
    }
    stack.push(node);/*将当前节点添加到stack*/
    if (node.children[node.children.length-1]) {
        // 如果有子元素，将第二个（右边的）子元素作为参数回调inOrder方法
        inOrder(node.children[node.children.length-1])
    }
};
// 前序遍历
function preOrder(node){
    stack.push(node);
    if(node.firstElementChild){
        preOrder(node.firstElementChild);
    }
    if (node.lastElementChild) {
        preOrder(node.lastElementChild);
    }
};
// 后序遍历
function postOrder(node){
    if(node.children[0]){
        postOrder(node.children[0]);
    }
    if(node.children[node.children.length-1]){
        postOrder(node.children[node.children.length-1]);
    }
    stack.push(node);
};
// 动画方法
function animation(){
    var i = 0,
        speed = document.getElementById("speed");
        stack[i].style.backgroundColor = "#FF0000";
        timer = setInterval(function(){
            if(i < stack.length-1){
                i++;
                stack[i].style.backgroundColor = "#FF0000";
                stack[i-1].style.backgroundColor = "#FFF";
            }else{
                clearInterval(timer);
                stack[i].style.backgroundColor = "#FFF";
            }
        },speed.value)
};
function reset(){
    clearInterval(timer);
    for(x in stack){
        stack[x].style.backgroundColor = '#fff';
    }
    stack = [];   
}
handle();