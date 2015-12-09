

for (var i = 60; i <= 100; i++) {
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

  console.log('For ' + i + ', you got a ' + gradeAssigner(i));
}