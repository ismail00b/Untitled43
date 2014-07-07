
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var getValues_on_arr1 = {};	// @button
	var getValues_on_person = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	getValues_on_arr1.click = function getValues_on_arr1_click (event)// @startlock
	{// @endlock
		// Add your code here
			sources.arr1.getValues("ID,name,age","ID <= 5",
		    		{
		    			orderBy : "age",
		    			onSuccess:function(evt){ console.log(evt.result);},
		    			onError:function(err){ console.log("Error !");}
		    		});
	};// @lock

	getValues_on_person.click = function getValues_on_person_click (event)// @startlock
	{// @endlock
		// Add your code here
		sources.person.getValues("ID,name,age","ID <= 5",
		    		{
		    			orderBy : "age",
		    			onSuccess:function(evt){ console.log(evt.result);},
		    			onError:function(err){ console.log("Error !");}
		    		});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
		for (var i = 0; i < 20; i++) {
			//	(new ds.Person({name : "name "+i, age :  Math.floor((Math.random() * 100) + 1)})).save();
			arr1.push({ID: i+1, name : "name "+i, age :  Math.floor((Math.random() * 100) + 1)});

			};
			source.arr1.sync();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("getValues_on_arr1", "click", getValues_on_arr1.click, "WAF");
	WAF.addListener("getValues_on_person", "click", getValues_on_person.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
