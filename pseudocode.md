GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


1. use bootstrap to format rows and columns of calendar
2. use moment.js to display current day
3. Past/present/furture time blocks' color changes when compared to moment.js
4. clicking on timeblocks opens up a form for entry
5. event is saved in local storage and displays on the appropriate time block
6. on refresh the events persists