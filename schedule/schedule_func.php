<?php

	class DayTimes
	{
		private $ranges = array();
		public function __construct($times) //times should be an array of strings where each string is in the form HH:MM AM/PM-HH:MM AM/PM
		{
			foreach ($times as $time)
			{
				$temp = explode("-",$time)
				array_push($ranges, new TimeRange($temp[0],$temp[1]));
			}
		}

		public function getRanges()
		{
			return $this->$ranges;
		}


	}

	class TimeRange
	{
		//startTime and endTime will be in minutes
		private	$startTime;
		private $endTime;
		//time1 and time2 are in format of HH:MM AM/PM
		public function __construct($time1,$time2) 
		{
			$temp1 = explode(" ",$startTime);
			$temp2 = explode(" ",$endTime);
			
			$timearray1 = explode(":",$temp1);
			$timearray2 = explode(":",$temp2);
			
			if ($temp1[1] === 'PM')
			{
				$timearray1[0] 	= ((int) $timearray1[0]) + 12;
			}
			
			if ($temp2[1] === 'PM')
			{
				$timearray2[0] 	= ((int) $timearray2[0]) + 12;
			}
			
			$this->$startTime = $timearray1[0]*60+$timearray1[1];
			$this->$endTime = $timearray2[0]*60+$timearray2[1];
		}
		
		public function getStart()
		{
			return $this->$startTime;
		}
		
		public function getEnd()
		{
			return $this->$endTime;
		}
		
		public function getLength()
		{
			return ((int)$this->$endTime) - ((int)$this->startTime);//endtime minus starttime
		}

		public static function convertMinutesToHHMMArray($min) //returns an array where 0 is the number of hours and 1 is the number of minutes when min is converted to HH:MM form
		{
			$hours = ((int) $min)/((int) 60);
			$minutes = $min%60;
			return array($hours,$minutes);
		}

		public static function findOverlap($timeR1,$timeR2)
		{
			$timeR1 = (TimeRange) $timeR1;
			$timeR2 = (TimeRange) $timeR2;

			$timeR1Start = $timeR1.getStart();
			$timeR1End = $timeR1.getEnd();

			$timeR2Start = $timeR2.getStart();
			$timeR2End = $timeR2.getEnd();

			
		}
	}
?>