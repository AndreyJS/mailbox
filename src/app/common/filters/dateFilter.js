export function	dateFilter() {
	return (date) => {
		date = (new Function('', `return ${date}`))();
		moment.locale('ru');
		if((new Date()).getFullYear() > date.getFullYear())
			return moment(date).format('L');
		else if((new Date() - date) / (1000*3600*24*30) > 1) 
			return moment(date).format('Do MMM');				
		return moment(date).fromNow();
	}
}