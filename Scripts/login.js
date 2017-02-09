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
		location.reload();
	
	}
load()