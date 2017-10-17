var input_name = document.getElementById("username"),
	pwd = document.getElementById("pwd"),
	repwd = document.getElementById("repwd"),
	email = document.getElementById("email"),
	phone = document.getElementById("phone"),
	nameinfo = document.createElement("p"),
	pwdinfo = document.createElement("p"),
	repwdinfo = document.createElement("p"),
	emailinfo = document.createElement("p"),
	phoneinfo = document.createElement("p"),
	testreg = /\s/g,
	btn = document.getElementById("btn");
function nameFocus(){
	var oldinfo = document.getElementById("nameinfo");
	if(!oldinfo){
		nameinfo.innerHTML = "必填，长度为4~16个字符";
		nameinfo.style.color = "#ccc";
		nameinfo.setAttribute("id","nameinfo");
		input_name.parentNode.appendChild(nameinfo);
	}
}
function getlength(str){
	var length_count = 0;
	for(var i=0;i<str.length;i++){
		var code_num = str.charCodeAt(i);
		if(code_num>=0 && code_num<=128){
			length_count +=1;
		}
		else{
			length_count +=2;
		}
	}
	return length_count;
}
function nameBlur(){
	var oldinfo = document.getElementById("nameinfo");
	if(!oldinfo){
		nameinfo.setAttribute("id","nameinfo");
		input_name.parentNode.appendChild(nameinfo);
	}
	if(input_name.value =="" || testreg.test(input_name.value)){
		input_name.style.border = "1px solid red";
		nameinfo.innerHTML = "姓名不能为空且不能含有空格";
		nameinfo.style.color = "red";
		return false;
	}
	else if(getlength(input_name.value)>=4 && getlength(input_name.value)<=16){
		input_name.style.border = "1px solid green";
		nameinfo.innerHTML = "名称格式正确";
		nameinfo.style.color = "green";
		return true;
	}
	else{
		input_name.style.border = "1px solid red";
		nameinfo.innerHTML = "名称格式不正确，输入长度为4~16个字符";
		nameinfo.style.color = "red";
		return false;
	}
}

function pwdFocus(){
	var oldinfo = document.getElementById("pwdinfo");
	if(!oldinfo){
		pwdinfo.innerHTML = "请输入密码";
		pwdinfo.style.color = "#ccc";
		pwdinfo.setAttribute("id","pwdinfo");
		pwd.parentNode.appendChild(pwdinfo);
	}
}
function pwdBlur(){
	var oldinfo = document.getElementById("pwdinfo");
	if(!oldinfo){
		pwdinfo.setAttribute("id","pwdinfo");
		pwd.parentNode.appendChild(pwdinfo);
	}
	if(pwd.value =="" || testreg.test(pwd.value)){
		pwd.style.border = "1px solid red";
		pwdinfo.innerHTML = "密码不能为空,不能用空格作为密码";
		pwdinfo.style.color = "red";
		return false;
	}
	else {
		pwd.style.border = "1px solid green";
		pwdinfo.innerHTML = "密码可用";
		pwdinfo.style.color = "green";
		return true;
	}
}
function repwdFocus(){
	var oldinfo = document.getElementById("repwdinfo");
	if(!oldinfo){
		repwdinfo.innerHTML = "再次输入相同密码";
		repwdinfo.style.color = "#ccc";
		repwdinfo.setAttribute("id","rewdinfo");
		repwd.parentNode.appendChild(repwdinfo);
	}	
}
function repwdBlur(){
	var oldinfo = document.getElementById("repwdinfo");
	if(!oldinfo){
		repwdinfo.setAttribute("id","rewdinfo");
		repwd.parentNode.appendChild(repwdinfo);
	}
	if(repwd.value =="" || testreg.test(repwd.value)){
		repwd.style.border = "1px solid red";
		repwdinfo.innerHTML = "密码不能为空,不能用空格作为密码";
		repwdinfo.style.color = "red";
		return false;
	}
	else if(repwd.value == pwd.value){
		repwd.style.border = "1px solid green";
		repwdinfo.innerHTML = "密码输入一致";
		repwdinfo.style.color = "green";
		return true;	
	}
	else {
		repwd.style.border = "1px solid red";
		repwdinfo.innerHTML = "两次输入不一致，请重新输入密码";
		repwdinfo.style.color = "red";
		return false;
	}
}
function emailFocus(){
	var oldinfo = document.getElementById("emailinfo");
	if(!oldinfo){
		emailinfo.innerHTML = "请输入邮箱";
		emailinfo.style.color = "#ccc";
		emailinfo.setAttribute("id","emailinfo");
		email.parentNode.appendChild(emailinfo);
	}	
}
function emailBlur(){
	var oldinfo = document.getElementById("emailinfo");
	if(!oldinfo){
		emailinfo.setAttribute("id","emailinfo");
		email.parentNode.appendChild(emailinfo);
	}
	var eReg =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	if(email.value =="" || testreg.test(email.value)){
		email.style.border = "1px solid red";
		emailinfo.innerHTML = "邮箱不能为空，邮箱格式错误";
		emailinfo.style.color = "red";
		return false;	
	}
	else if(eReg.test(email.value)){
		email.style.border = "1px solid green";
		emailinfo.innerHTML = "邮箱格式正确";
		emailinfo.style.color = "green";
		return true;	
	}
	else {
		email.style.border = "1px solid red";
		emailinfo.innerHTML = "邮箱格式错误";
		emailinfo.style.color = "red";
		return false;	
	}
}
function phoneFocus(){
	var oldinfo = document.getElementById("phoneinfo");
	if(!oldinfo){
		phoneinfo.innerHTML = "请输入邮箱";
		phoneinfo.style.color = "#ccc";
		phoneinfo.setAttribute("id","phoneinfo");
		phone.parentNode.appendChild(phoneinfo);
	}
}
function phoneBlur(){
	var oldinfo = document.getElementById("phoneinfo");
	if(!oldinfo){
		phoneinfo.setAttribute("id","phoneinfo");
		phone.parentNode.appendChild(phoneinfo);
	}
	var phoneReg = /\D/g;
	if(phone.value =="" || testreg.test(phone.value)){
		phone.style.border = "1px solid red";
		phoneinfo.innerHTML = "号码格式错误，请输入正确的11位号码";
		phoneinfo.style.color = "red";
		return false;	
	}
	else if(!phoneReg.test(phone.value) && phone.value.length == 11){
		phone.style.border = "1px solid green";
		phoneinfo.innerHTML = "格式正确，如果保号码正确，你将收到来自长者的祝福短信！";
		phoneinfo.style.color = "green";
		return true;	
	}
	else {
		phone.style.border = "1px solid red";
		phoneinfo.innerHTML = "号码格式错误，请输入正确的11位号码";
		phoneinfo.style.color = "red";
		return false;	
	}
}

function checkAll(){
	var nameFlag = nameBlur(),
		pwdFlag = pwdBlur(),
		repwdFlag = repwdBlur(),
		emailFlag = emailBlur(),
		phoneFlag = phoneBlur();
	if(nameFlag && pwdFlag && repwdFlag && emailFlag && phoneFlag){
		alert("提交成功");
	}
	else{
		alert("提交失败");
	}
}

function init(){
	input_name.addEventListener("focus",nameFocus);
	input_name.addEventListener("blur",nameBlur);
	pwd.addEventListener("focus",pwdFocus);
	pwd.addEventListener("blur",pwdBlur);
	repwd.addEventListener("focus",repwdFocus);
	repwd.addEventListener("blur",repwdBlur);
	email.addEventListener("focus",emailFocus);
	email.addEventListener("blur",emailBlur);
	phone.addEventListener("focus",phoneFocus);
	phone.addEventListener("blur",phoneBlur);
	btn.addEventListener("click",checkAll);
}
init();