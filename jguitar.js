var arrBaseNoteSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var arrBaseNoteFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
var arrNumMaj = [1, 3, 5, 6, 8, 10, 12];

function getArrayNumMaj(targetNum,isSharp){
    var arrayNum = new Array(1,1,1,1,1,1,1);/*ini Array*/
    var arrResult = ["", "", "","", "", ""];/*ini Array*/
    var offset =  targetNum - 1;
    /*calculat the arrayNum by offset and put the result in array*/
    for (i = 0; i < 7; i++) { 
        arrayNum[i] = (arrNumMaj[i] + offset) % 12;
		if (arrayNum[i] == 0 ){
            arrResult [i] = "B";
        }
        else{
            if(isSharp == 1)
                arrResult [0] = arrBaseNoteSharp[arrayNum[i] - 1];
            else
                arrResult [i] = arrBaseNoteFlat[arrayNum[i] - 1];
        }
    }
    return arrResult ;
}

