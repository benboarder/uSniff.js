var uSniffAPI;

(function(view){
	var
		document = view.document,
		session = view.sessionStorage,
		get_uagent = function(){return view.uagent;},
		uagent = navigator.userAgent.toLowerCase();

	uSniffAPI = uagent;
}(self));

	function searchUsrAgent(pUsrAgentString,pKeyword){
		var usrAgentString = pUsrAgentString;
		var keyword = pKeyword;
		var mobileIMPORT;
		// var safariTestArray =

		switch(keyword){
			case "mobile":
				for(var i=0; i<mobileTestArray.length-1; i++){
					if(usrAgentString.search(mobileTestArray[i]) > -1){
						isFound = true;

						break;
					}else{
						isFound = false;
					}
				}
			break;
			case "safari":
				for(var i=0; i<safariTestArray.length-1; i++){
					if(usrAgentString.search(safariTestArray[i]) > -1){
						isFound = true;

						break;
					}else{
						isFound = false;
					}
				}
			break;
			default:

			return false;
		}

		return isFound;
	}

	var uaM = searchUsrAgent(uSniffAPI,"mobile");
	var uaS = searchUsrAgent(uSniffAPI,"safari");
	var uaW = searchUsrAgent(uSniffAPI,"windows");

	var thing={localStorage:true,print:true,pdf:true,xml:true,rtf:true,doc:true,txt:true};

	removeFeatures(thing);

	function removeFeatures(pAgent){
		if(!pAgent.print){
			document.getElementById("print").style.visibility="hidden";
		}
		if(!pAgent.pdf){
			document.getElementById("pdf").style.visibility="hidden";
		}
		if(!pAgent.xml){
			document.getElementById("xml").style.visibility="hidden";
		}
		if(!pAgent.doc){
			document.getElementById("doc").style.visibility="hidden";
		}
	}