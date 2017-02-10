var q,w,r,e,t;
var UMask = "um_";
var ConnMask="conm_";
function login() {
	e="";
	t="";
	q = document.getElementById("login").value;
	w = document.getElementById("pasword").value;

for(i=0;i<1;i++){
  var m = localStorage.getItem(UMask + i);
	for(u=0;u<m.length;u++){
	if(m[u]!=" "){
	e = e + m[u];

	
	} else {
		r = u+1;
		u=m.length;
	}
	}
	
	for(u=r;u<m.length;u++){
	if(m[u]!=" "){
	t = t + m[u];

	
	} else {
		u=m.length;
	}
	}
	alert("pass"+t);
	alert("log "+e);
	if((q==e)&(w==t)){
	alert("connected to "+ q);
	document.getElementById('log' ).style.display = 'none';
	document.getElementById('lggg').innerHTML="User: "+q;
	
	localStorage.setItem(ConnMask + "0", q +" "+ w);
	var button = document.createElement("button");
	button.className = "butlogout";
	button.setAttribute('onClick', 'out()');
	document.getElementById('lggg').appendChild(button);
	location.reload();
	
	}
	
  }
  
 

}
function load() {

	e="";
	t="";


	for(i=0;i<1;i++){
  var m = localStorage.getItem(ConnMask + i);
	for(u=0;u<m.length;u++){
	if(m[u]!=" "){
	e = e + m[u];

	
	} else {
		r = u+1;
		u=m.length;
	}
	}
	
	
	
	//alert("log "+e);
	if(e!=""){
	
	document.getElementById('log' ).style.display = 'none';
	document.getElementById('lggg').innerHTML="User: "+e;
	
	var button = document.createElement("button");
	button.className = "butlogout";
	button.setAttribute('onClick', 'out()');
	document.getElementById('lggg').appendChild(button);
	
	
	
	}
	
  }

}
	function out() {
		
		localStorage.removeItem("conm_0");
		document.location.href='index.html';
	
	}
load()


function pass() {

	var pass = document.getElementById("pasword");
	if (pass.type == 'password') {
	pass.type = 'text';
	pass.value = pass.value;
	
	var inp = document.createElement("input");

	inp.id = "pasword";
	inp.type = "text";
	inp.setAttribute('class', 'footerp');
	inp.setAttribute('maxlength', '6');
	inp.setAttribute('placeholder', 'Password...');
	inp.maxlength="2";
	inp.value = pass.value;
	pass.parentNode.replaceChild(inp, pass);

	}
	
	else {
	
	pass.type = 'password';
	pass.class = 'footerp';
	pass.value = pass.value;
	
	var inp = document.createElement("input");
	
	inp.id = id;
	
	inp.type = "password";
	inp.class="footerp";
	inp.value = pass.value;
	inp.setAttribute('class', 'footerp');
	inp.setAttribute('maxlength', '6');
	inp.setAttribute('placeholder', 'Password...');
	pass.parentNode.replaceChild(inp, pass);
	
	}

	 //pass.maxlength="2";  id="pasword" placeholder="Password..."	
		
			
					
	} 

	