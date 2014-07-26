$(document).ready(function() {
	//All of the button listeners are the same, except with different element names/ids
	$('input[name = "mon_submit"]').click(function(){
		
		var starttime = $('[name = "mon_start"]').val();//grab time from first field
		
		var startampm = "AM"; 
		var endtime = $('[name = "mon_end"]').val();//grab time from second field
		var endampm = "AM";
		//create button for removing the time from the list
		var button = $('<button/>',
		{
			class: 'delete_time', //this applies css formatting
			click: function () { $(this).closest('li').remove(); } //this listener removes the li which the button is located in
		});
		
		if (starttime && endtime) //check if fields are initialized
		{
			
			starttime = starttime.split(":"); //split the time into the hours and minutes
			endtime = endtime.split(":");
			
			if (Number(starttime[0]*60+starttime[1]) >=Number( endtime[0]*60 +endtime[1])) //check if start time is earlier than end time
			{
				alert("Your start time must be earlier than your end time"); 
			}
			else
			{
				if (starttime[0] > 12) //convert times into am/pm rather than 24 hour
				{
					starttime[0] = starttime[0] - 12;	
					startampm = "PM";
				}
				if (endtime[0] > 12)
				{
					endtime[0] = endtime[0] - 12;	
					endampm = "PM";
				}
				var li = $('<li/>').append(starttime[0] + ":" + starttime[1] + " " + startampm+ "-" + endtime[0] + ":" + endtime[1] + " " + endampm); //create li element with times: HH:MM AM/PM - HH:MM AM/PM
				$('ul#mon_times').append(li.append(button)); //append button to li before adding it to the ul
			}
		}
	});
	
	$('input[name = "tues_submit"]').click(function(){
		
		var starttime = $('[name = "tues_start"]').val();
		
		var startampm = "AM";
		var endtime = $('[name = "tues_end"]').val();
		var endampm = "AM";
		var button = $('<button/>',
		{
			class: 'delete_time',
			click: function () { $(this).closest('li').remove(); }
		});
		
		if (starttime && endtime)
		{
			
			starttime = starttime.split(":");
			endtime = endtime.split(":");
			
			if (Number(starttime[0]*60+starttime[1]) >=Number( endtime[0]*60 +endtime[1]))
			{
				alert("Your start time must be earlier than your end time");
			}
			else
			{
				if (starttime[0] > 12)
				{
					starttime[0] = starttime[0] - 12;	
					startampm = "PM";
				}
				if (endtime[0] > 12)
				{
					endtime[0] = endtime[0] - 12;	
					endampm = "PM";
				}
				var li = $('<li/>').append(starttime[0] + ":" + starttime[1] + " " + startampm+ "-" + endtime[0] + ":" + endtime[1] + " " + endampm);
				$('ul#tues_times').append(li.append(button));
			}
		}
	});
	$('input[name = "wed_submit"]').click(function(){
		
		var starttime = $('[name = "wed_start"]').val();
	
		var startampm = "AM";
		var endtime = $('[name = "wed_end"]').val();
		var endampm = "AM";
		var button = $('<button/>',
		{
			class: 'delete_time',
			click: function () { $(this).closest('li').remove(); }
		});
		
		if (starttime && endtime)
		{
			
			starttime = starttime.split(":");
			endtime = endtime.split(":");
			
			if (Number(starttime[0]*60+starttime[1]) >=Number( endtime[0]*60 +endtime[1]))
			{
				alert("Your start time must be earlier than your end time");
			}
			else
			{
				if (starttime[0] > 12)
				{
					starttime[0] = starttime[0] - 12;	
					startampm = "PM";
				}
				if (endtime[0] > 12)
				{
					endtime[0] = endtime[0] - 12;	
					endampm = "PM";
				}
				var li = $('<li/>').append(starttime[0] + ":" + starttime[1] + " " + startampm+ "-" + endtime[0] + ":" + endtime[1] + " " + endampm);
				$('ul#wed_times').append(li.append(button));
			}
		}
	});
	$('input[name = "thurs_submit"]').click(function(){
		
		var starttime = $('[name = "thurs_start"]').val();
		
		var startampm = "AM";
		var endtime = $('[name = "thurs_end"]').val();
		var endampm = "AM";
		var button = $('<button/>',
		{
			class: 'delete_time',
			click: function () { $(this).closest('li').remove(); }
		});
		
		if (starttime && endtime)
		{
			
			starttime = starttime.split(":");
			endtime = endtime.split(":");
			
			if (Number(starttime[0]*60+starttime[1]) >=Number( endtime[0]*60 +endtime[1]))
			{
				alert("Your start time must be earlier than your end time");
			}
			else
			{
				if (starttime[0] > 12)
				{
					starttime[0] = starttime[0] - 12;	
					startampm = "PM";
				}
				if (endtime[0] > 12)
				{
					endtime[0] = endtime[0] - 12;	
					endampm = "PM";
				}
				var li = $('<li/>').append(starttime[0] + ":" + starttime[1] + " " + startampm+ "-" + endtime[0] + ":" + endtime[1] + " " + endampm);
				$('ul#thurs_times').append(li.append(button));
			}
		}
	});
	$('input[name = "fri_submit"]').click(function(){
		
		var starttime = $('[name = "fri_start"]').val();
		
		var startampm = "AM";
		var endtime = $('[name = "fri_end"]').val();
		var endampm = "AM";
		var button = $('<button/>',
		{
			class: 'delete_time',
			click: function () { $(this).closest('li').remove(); }
		});
		
		if (starttime && endtime)
		{
			
			starttime = starttime.split(":");
			endtime = endtime.split(":");
			
			if (Number(starttime[0]*60+starttime[1]) >=Number( endtime[0]*60 +endtime[1]))
			{
				alert("Your start time must be earlier than your end time");
			}
			else
			{
				if (starttime[0] > 12)
				{
					starttime[0] = starttime[0] - 12;	
					startampm = "PM";
				}
				if (endtime[0] > 12)
				{
					endtime[0] = endtime[0] - 12;	
					endampm = "PM";
				}
				var li = $('<li/>').append(starttime[0] + ":" + starttime[1] + " " + startampm+ "-" + endtime[0] + ":" + endtime[1] + " " + endampm);
				$('ul#fri_times').append(li.append(button));
			}
		}
	});
	$('input[name = "sat_submit"]').click(function(){
		
		var starttime = $('[name = "sat_start"]').val();
		
		var startampm = "AM";
		var endtime = $('[name = "sat_end"]').val();
		var endampm = "AM";
		var button = $('<button/>',
		{
			class: 'delete_time',
			click: function () { $(this).closest('li').remove(); }
		});
		
		if (starttime && endtime)
		{
			
			starttime = starttime.split(":");
			endtime = endtime.split(":");
			
			if (Number(starttime[0]*60+starttime[1]) >=Number( endtime[0]*60 +endtime[1]))
			{
				alert("Your start time must be earlier than your end time");
			}
			else
			{
				if (starttime[0] > 12)
				{
					starttime[0] = starttime[0] - 12;	
					startampm = "PM";
				}
				if (endtime[0] > 12)
				{
					endtime[0] = endtime[0] - 12;	
					endampm = "PM";
				}
				var li = $('<li/>').append(starttime[0] + ":" + starttime[1] + " " + startampm+ "-" + endtime[0] + ":" + endtime[1] + " " + endampm);
				$('ul#sat_times').append(li.append(button));
			}
		}
	});
	$('input[name = "sun_submit"]').click(function(){
		
		var starttime = $('[name = "sun_start"]').val();
		
		var startampm = "AM";
		var endtime = $('[name = "sun_end"]').val();
		var endampm = "AM";
		var button = $('<button/>',
		{
			class: 'delete_time',
			click: function () { $(this).closest('li').remove(); }
		});
		
		if (starttime && endtime)
		{
			
			starttime = starttime.split(":");
			endtime = endtime.split(":");
			
			if (Number(starttime[0]*60+starttime[1]) >=Number( endtime[0]*60 +endtime[1]))
			{
				alert("Your start time must be earlier than your end time");
			}
			else
			{
				if (starttime[0] > 12)
				{
					starttime[0] = starttime[0] - 12;	
					startampm = "PM";
				}
				if (endtime[0] > 12)
				{
					endtime[0] = endtime[0] - 12;	
					endampm = "PM";
				}
				var li = $('<li/>').append(starttime[0] + ":" + starttime[1] + " " + startampm+ "-" + endtime[0] + ":" + endtime[1] + " " + endampm);
				$('ul#sun_times').append(li.append(button));
			}
		}
	});
	
	$('[name = "page_submit"]').click(function() {
		var monTimes = []; //Arrays for all the times in the lists
		var tuesTimes = [];
		var wedTimes = [];
		var thursTimes = [];
		var friTimes = [];
		var satTimes = [];
		var sunTimes = [];
		
		$('ul#mon_times li').each(function() {monTimes.push($(this).text());}); //push all the times into the lists
		$('ul#tues_times li').each(function() {tuesTimes.push($(this).text());});
		$('ul#wed_times li').each(function() {wedTimes.push($(this).text());});
		$('ul#thurs_times li').each(function() {thursTimes.push($(this).text());});
		$('ul#fri_times li').each(function() {friTimes.push($(this).text());});
		$('ul#sat_times li').each(function() {satTimes.push($(this).text());});
		$('ul#sun_times li').each(function() {sunTimes.push($(this).text());});		
		

	});
});// JavaScript Document