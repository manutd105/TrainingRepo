var choiceArr = ["Red","Blue","Green","Black","White","Pink","Yellow","Purple","Orange"];
for (var i = 0; i < choiceArr.length; i++) {
    console.log("My #" + (i + 1) + " choice is " + choiceArr[i]);
}

for (var i = 0; i < choiceArr.length; i++) { 

    var choice = i + 1; 
    var choiceSuf; 
  
    if (choice == 1) {
        choiceSuf = "st";
    } 
      else 
         if (choice == 2) {
          choiceSuf = "nd";
    } 
            else 
               if (choice == 3) {
                  choiceSuf = "rd";
    } 
                  else {
     
                   choiceSuf = "th";
    }
  
    console.log("My " + choice + choiceSuf + " choice is " + choiceArr[i]);
}

