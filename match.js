var f = function determinecharacters(values, classes) {
	let primary = "",
		secondary = "",
		primaryVal = 0,
		secondaryVal = 0, 
		list = [];

	// find two highest attributes
	for (key in values) {
		value = values[key];
		if (value > parseInt(primaryVal)) {
			secondary = primary;
			secondaryVal = primaryVal;
			primary = key;
			primaryVal = value;
		}
		else if (value > parseInt(secondaryVal)) {
			secondary = key;
			secondaryVal = value;
		}
	}
	for (let i in classes) {
		dndclass = classes[i];
		if(dndclass.Primary === primary && list.length < 5) {
			list.push(dndclass);
		}
	}
	if(list.length < 5) {
		for (let i in classes) {
			dndclass = classes[i];
			if(dndclass.Secondary === primary && !list.includes(dndclass) && list.length < 5) {
				list.push(dndclass);
			}
		}
	}
	if(list.length < 5) {
		for (let i in classes) {
			dndclass = classes[i];
			if(dndclass.Primary === secondary && !list.includes(dndclass) && list.length < 5) {
				list.push(dndclass);
			}
		}
	}
	if(list.length < 5) {
		for (let i in classes) {
			dndclass = classes[i];
			if(dndclass.Secondary === secondary && !list.includes(dndclass) && list.length < 5) {
				list.push(dndclass);
			}
		}
	}
	return list;
}

module.exports = {determinecharacters: f};