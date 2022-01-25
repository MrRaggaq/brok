
var wax;
var userAccount;


if (userAccount != null)  {
	document.getElementById('waxlogin').innerHTML = userAccount;
	document.getElementById('waxlogin').onclick = null;
}

console.log("stage_2");

async function WaxLogin(){
  try {

	if (wax == null)
		wax = new waxjs.WaxJS({
		  rpcEndpoint: 'http://api.wax.alohaeos.com',
		  tryAutoLogin: false
		});
	
	userAccount = await wax.login();
	document.getElementById('waxlogin').innerHTML = userAccount;
	document.getElementById('waxlogin').onclick = null;
  } catch(e) {		
	console.log(e.message);	
  }
}

