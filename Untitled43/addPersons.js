for (var i = 0; i < 20; i++) {
	(new ds.Person({name : "name "+i, age :  Math.floor((Math.random() * 100) + 1)})).save();
};

