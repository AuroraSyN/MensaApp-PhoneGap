<!-- function for parsing the date -->
var parseDate = function(res){
	var year = res[0].substring(0,4);
	var month = res[0].substring(4,6);
	var day = res[0].substring(6,8);
	var hour = res[0].substring(8,10);
	var minute = res[0].substring(10,12);
	var second = res[0].substring(12,14);
	var date = day+"."+month+"."+year+" "+hour+":"+minute;
	return date;
};

<!-- function for parsing the airpressure -->
var parseAirpressure = function(res){
	switch(res[1]){
		case "baro_fr":
			return "Der Luftdruck fällt stark";
			break;
		case "baro_fs":
			return "Der Luftdruck fällt langsam";
			break;
		case "baro_s":
			return "Der Luftdruck ist stabil";
			break;
		case "baro_rs":
			return "Der Luftdruck steigt langsam";
			break;
		case "baro_rr":
			return "Der Luftdruck steigt stark";
			break;
		case "baro_none":
			return "Keine Informationen zum Luftdruck verfügbar!";
			break;
	}
}

var create_tableview = function(res){
	<!-- Erstellen eines Objekts mit den Wetterdaten -->
	var object = {
		date : parseDate(res),
		airpressure :  parseAirpressure(res),
		airpessure_hpa : res[2],
		temperature_outside : res[3],
		wind_speed : res[4],
		wind_average_speed : res[5],
		wind_direction : res[6],
		humid : res[7],
		rain_rate : res[8],
		current_rain : res[9],
		uv_level : res[10],
		solar_radiation : res[11],
		rain_today : res[12],
		rain_month : res[13],
		rain_year : res[14],
		evatranspiration_today : res[15],
		evatranspiration_month : res[16]
	}
	
	<!-- Erstellen der HTML Tabelle formatiert mit den Wetterdaten -->
	var table = '<table class="table">'
	
	for (var property in object){
		if(object.hasOwnProperty(property)){
			table = table +"<tr><td>"+property+"</td><td>"+object[property]+"</td><tr>\n";
		}
	}
	table = table+"</table>";
	
	return table;
}