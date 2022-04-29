function superbowlWin(record){
   const win = record.find(record => record.result === "W")
    return win ? win.year : undefined
   //    if (win === "W"){
//        return record.year
//    }
}