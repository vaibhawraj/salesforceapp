/*

	ForceTk Extension JS file add feature in existing forcetk to use SOAP 
	communication and hence can access metadata and other information using SOAP
	API

*/


if (forcetk.Client !== undefined) {
		console.log("Processing");
		forcetk.Client.prototype.SOAP = {
			sessionId : this.sessionId,
			show : function(){
				console.log(this);
			}
		};

	}