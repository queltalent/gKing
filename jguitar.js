<!DOCTYPE html>
<html>
<body>

<p>This example calls a function which performs a guitar, and returns the result:</p>

<p id="demo"></p>

<script>
var arrBaseNoteSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
var arrBaseNoteFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

var arrNumMaj = [1, 3, 5, 6, 8, 10, 12];

function getArrayNumMaj(targetNum){
    var beginNum = 1;
    var arr = new Array(1,1,1,1,1,1);
    var offset =  targetNum - beginNum;
    
    for (i = 0; i < 6; i++) { 
        arr[i] = (arrNumMaj[i] + offset) % 12;
    }

    return arr;
}

function getArrayNotes(arrayNum, isSharp) {
        var arr = ["", "", ""，"", "", ""];
        for (i = 0; i < 6; i++) { 
            if (arrayNum[i] == 0 ){
                arr [i] = "B"
            }
            else{
                if(isSharp == 1)
                    arr [0] = arrBaseNoteSharp[arrayNum[i] - 1]
                else
                    arr [i] = arrBaseNoteFlat[arrayNum[i] - 1]
            }
        }
       return arr ;
}

<!this is a demo function which show how to use this two functions,and have fun!>
function myFunction() {
   var arr = getArrayNumMaj(3);
   return getArrayNotes(arr,0);
}
document.getElementById("demo").innerHTML = myFunction();
</script>

</body>
</html>
