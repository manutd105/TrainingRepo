function gradeAssigner(score) {
    if (score > 95) {
        return 'A';
    } 
      else 
         if (score > 80) {
          return 'B';
    } 
            else 
               if (score > 70) {
                  return 'C';
    } 
                    else 
                      if (score > 60) {
                          return 'D';
    } 
                             else {
                                  return 'F';
    }

}

    console.log("You have got a " + gradeAssigner(50) + " Grade.");
    console.log("You have got a " + gradeAssigner(70) + " Grade.");
    console.log("You have got a " + gradeAssigner(80) + " Grade.");
    console.log("You have got a " + gradeAssigner(99) + " Grade.");

