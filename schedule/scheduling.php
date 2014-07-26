<!DOCTYPE html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link rel="stylesheet" type="text/css" href="schedule.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="schedule.js"></script>
</head>
<div id = "schedule_body">
	<h1 id = "scheduling_title"><span>Scheduling</span></h1>
   	<p>Please enter the times when you are available.</p>
   	<div class = "time_submit" style = "width:570px">
    	<div id = "mon_title">
	    	<h2><span>Mon.</span></h2>
        </div>
        
        <div class = "times">
        	<ul id = "mon_times">
            </ul>
        </div>
        
        <div class = "input_times">
        	<input type = "time"  name = "mon_start"/>
        	<h2 style = "position:relative;left:43px;">-</h2>
        	<input type = "time"  name = "mon_end"/>
            <input type = "submit" class = "time_submit" name = "mon_submit"/>
        </div>
        
    </div>
    <h3 class = "time_div"><span>divide</span></h3>
    <div class = "time_submit" style = "width:574px">
    	<div id = "tues_title">
	    	<h2><span>Tues.</span></h2>
        </div>
        
        <div class = "times">
        	<ul id = "tues_times">
            </ul>
        </div>
        
        <div class = "input_times">
        	<input type = "time"  name = "tues_start"/>
        	<h2 style = "position:relative;left:43px;">-</h2>
        	<input type = "time"  name = "tues_end"/>
            <input type = "submit" class = "time_submit" name = "tues_submit"/>
        </div>
        
    </div>
    <h3 class = "time_div"><span>divide</span></h3>
    <div class = "time_submit" style = "width:574px">
    	<div id = "wed_title">
	    	<h2><span>Wed.</span></h2>
        </div>
        
        <div class = "times">
        	<ul id = "wed_times">
            </ul>
        </div>
        
        <div class = "input_times">
        	<input type = "time"  name = "wed_start"/>
        	<h2 style = "position:relative;left:43px;">-</h2>
        	<input type = "time"  name = "wed_end"/>
            <input type = "submit" class = "time_submit" name = "wed_submit"/>
        </div>
        
    </div>
    <h3 class = "time_div"><span>divide</span></h3>
    <div class = "time_submit" style = "width:592px">
    	<div id = "thurs_title">
	    	<h2><span>Thurs.</span></h2>
        </div>
        
        <div class = "times">
        	<ul id = "thurs_times">
            </ul>
        </div>
        
        <div class = "input_times">
        	<input type = "time"  name = "thurs_start"/>
        	<h2 style = "position:relative;left:43px;">-</h2>
        	<input type = "time"  name = "thurs_end"/>
            <input type = "submit" class = "time_submit" name = "thurs_submit"/>
        </div>
        
    </div>
    <h3 class = "time_div"><span>divide</span></h3>
    <div class = "time_submit" style = "width:536px">
    	<div id = "fri_title">
	    	<h2><span>Fri</span></h2>
        </div>
        
        <div class = "times">
        	<ul id = "fri_times">
            </ul>
        </div>
        
        <div class = "input_times">
        	<input type = "time"  name = "fri_start"/>
        	<h2 style = "position:relative;left:43px;">-</h2>
        	<input type = "time"  name = "fri_end"/>
            <input type = "submit" class = "time_submit" name = "fri_submit"/>
        </div>
        
    </div>
    <h3 class = "time_div"><span>divide</span></h3>
    <div class = "time_submit" style = "width:549px">
    	<div id = "sat_title">
	    	<h2><span>Sat.</span></h2>
        </div>
        
        <div class = "times">
        	<ul id = "sat_times">
            </ul>
        </div>
        
        <div class = "input_times">
        	<input type = "time"  name = "sat_start"/>
        	<h2 style = "position:relative;left:43px;">-</h2>
        	<input type = "time"  name = "sat_end"/>
            <input type = "submit" class = "time_submit" name = "sat_submit"/>
        </div>
        
    </div>
    <h3 class = "time_div"><span>divide</span></h3>
    <div class = "time_submit" style = "width:559px">
    	<div id = "sun_title">
	    	<h2><span>Sun.</span></h2>
        </div>
        
        <div class = "times">
        	<ul id = "sun_times">
            </ul>
        </div>
        
        <div class = "input_times">
        	<input type = "time"  name = "sun_start"/>
        	<h2 style = "position:relative;left:43px;">-</h2>
        	<input type = "time"  name = "sun_end"/>
            <input type = "submit" class = "time_submit" name = "sun_submit"/>
        </div>
        
    </div>
    
   	<input type = "submit" class = "page_submit" name = "page_submit"/>
    
    <span id = "time_format_error"><p></p></span>
    
   	<h2 id = "time_work"><span>Times that work</span></h2>
    
   	<ul id = "times_that_work">
		<li id = "mon_work"><p>Mon.:</p><div id = "mon_times_work" class = "times_work"></div></li>
		<li id = "tues_work"><p>Tues.:</p><div id = "tues_times_work" class = "times_work"></div></li>
		<li id = "wed_work"><p>Wed.:</p><div id = "wed_times_work" class = "times_work"></div></li>
		<li id = "thurs_work"><p>Thurs.:</p>  <div id = "thurs_times_work" class = "times_work"></div></li>
		<li id = "fri_work"><p>Fri.:</p>  <div id = "fri_times_work" class = "times_work"></div></li>
		<li id = "sat_work"><p>Sat.:</p>  <div id = "sat_times_work" class = "times_work"></div></li>
		<li id = "sun_work"><p>Sun.:</p>  <div id = "sun_times_work" class = "times_work"></div></li>
	</ul>
    
    <span id = "partner_error"><p></p></span>
   
</div>
<body>
</body>
</html>
