var uSniffAPI;

(function(view){
	var
		document = view.document,
		session = view.sessionStorage,
		get_uagent = function(){return view.uagent;},
		uagent = navigator.userAgent.toLowerCase();

	uSniffAPI = uagent;
}(self));

// key words to look up
// android | apple | windows | mac | tablet | phone | console

function searchUsrAgent(pUsrAgentString,pKeyword){
	var usrAgentString = pUsrAgentString;
	var keyword = pKeyword;
	var mobileTestArray = ["iphone","ipad","ipad2","ipod","iemobile","blackberry","blackberry95","blackberry97","blackberry 99","blackberry96","blackberry89","blackberry 938","blackberry 98","bb10","playbook","silk-accelerated","palm","webos","hpwos","windows phone os 7","windows phone 8","windows ce"];
	var safariTestArray = ["macintosh","webkit"];
	var androidTestArray = ["android"];
	var gameTestArray = ["playstation","wii","nintendo","xbox","nitro"];

	switch(keyword){
		case "mobile":

		break;
		case "safari":

		break;
		default:

		return false;
	}

	for(var i=0; i<keyword.length-1; i++){
		if(usrAgentString.search(mobileTestArray[i]) > -1){
			isFound = true;

			break;
		}else{
			isFound = false;
		}
	}

	return isFound;
}

var uaM = searchUsrAgent(uSniffAPI,"mobile");
var uaS = searchUsrAgent(uSniffAPI,"safari");
var uaA = searchUsrAgent(uSniffAPI,"android");
var uaG = searchUsrAgent(uSniffAPI,"games");

console.log(uaM);
console.log(uaS);
console.log(uaA);
console.log(uaG);

document.getElementById("alertText").innerHTML = "<span><strong>raw signature:</strong> " + uSniffAPI + "</span><br><span><strong>mobile device =</strong> " + uaM + "</span><br><span><strong>safari device =</strong> " + uaS + "</span><br><span><strong>android =</strong> " + uaA + "</span><br><span><strong>game consoles =</strong> " + uaG;