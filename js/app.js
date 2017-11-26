$(function() {

//Define the variables needed:
    //App mode
    var mode = 0;   //The mode is off

    //time counter - find out how many milliseconds have elapsed and then conver that into milliseconds, seconds and minutes
    var timeCounter = 0;

    //lap counter
    var lapCounter = 0;
    //variable for setInterval
    var action;
    //Number of laps
    var lapNum = 0;
    //minutes, seconds, milliseconds for time
    var timeMinutes, timeSeconds, timeCentiSeconds, lapMinutes, lapSeconds, lapCentiSeconds;

    //FUNCTIONS

    //Function for showing the start and lap buttons when the page is first loaded:
    function hideShowBtns(x, y) {
        $(".btn-control").hide();
        $(x).show();
        $(y).show();

    }

    //Function for starting the counter:
    function startCounter() {
        //Every 10 milliseconds we're going to increase the timeCounter and lapCounter by 1:
        action = setInterval(function() {
            //Increase timeCounter by 1:
            timeCounter++;

            //Increase the lapCounter by 1:
            lapCounter++;

            //Update time in UI:
            updateTime();
        }, 10);  
    }

    //updateTime function - converts timeCounter and lapCounter to min, sec and centiseconds:
    function updateTime() {
        //Calculate the timeCounter:
        //There are 60 seconds in 1 minute and 100 centiseconds in one second - 1minute = 60sec * 100centisec = 6000 centiseconds.
        //To get the number of minutes we need to divide the number of centiseconds by 6000:
        timeMinutes = Math.floor(timeCounter / 6000);

        //1sec = 100centiseconds:
        timeSeconds = Math.floor((timeCounter % 6000) / 100);

        timeCentiSeconds = (timeCounter%6000)%100;

        //Update the UI for the time counter:
        $("#time__minute").text(format(timeMinutes));
        $("#time__second").text(format(timeSeconds));
        $("#time__centiSecond").text(format(timeCentiSeconds));

        //Calculate the lapCounter:

        lapMinutes = Math.floor(lapCounter / 6000);

        lapSeconds = Math.floor((lapCounter % 6000) / 100);
        
        lapCentiSeconds = (lapCounter%6000)%100;

        //Update the UI for the lap counter:
        $("#lap__minute").text(format(lapMinutes));
        $("#lap__second").text(format(lapSeconds));
        $("#lap__centiSecond").text(format(lapCentiSeconds));
    }


    //Create a function that will format the view of the numbers in the UI:
    function format(number) {
        //Check if the number is less than 10:
        if(number < 10) {
            return "0" + number;
        } else {
            return number;
        }
    }


    //When the app is loaded only show the start and lap buttons
    hideShowBtns("#start-btn", "#lap-btn");

    //When the start button is clicked on:
        $("#start-btn").on("click", function() {
            //change the app mode to on
            mode = 1;
            //show the stop and lap buttons
            hideShowBtns("#stop-btn", "#lap-btn");
            //start the counter
            startCounter();
        });
        





    //When the stop button is clicked on:
        //Show the resume and reset buttons
        //stop the counter



    //When the resume button is clicked on:
        //show the stop and lap buttons
        //start action



    //When the reset button is clicked on:
        //reload the page


    //When the lap button is clicked on:
        //if mode is ON:
            //stop the action
            //resetlap and print lap details
            //start action



    

});