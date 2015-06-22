'*****************************************
'************ Reference ******************
'*****************************************

Module mod_Func

    Private arrBaseNoteSharp() As String = {"C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"}
    Private arrBaseNoteFlat() As String = {"C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"}

    Private arrNumMaj() As Integer = {1, 3, 5, 6, 8, 10, 12}
    Private arrNumMin() As Integer = {1, 3, 4, 6, 8, 9, 11}

    Private arrNumChordMaj() As Integer = {1, 5, 8, 12}
    Private arrNumChordMin() As Integer = {1, 4, 8, 12}
    Private arrNumChordDim() As Integer = {1, 4, 7, 10}
    Private arrNumChordDom() As Integer = {1, 5, 8, 11}
    'Public arrAugChordNum() As Integer = {1, 5, 9, 11}

#Region "Function of SCALES and PROGRESSION"

    Dim beginNum As Integer = 1
    Dim offset As Integer

    Public Function getArrayNumMaj(ByVal targetNum As Integer, ByRef Arr() As Integer) As Integer

        offset = targetNum - beginNum
        For index = 0 To 6
            Arr(index) = (arrNumMaj(index) + offset) Mod 12
        Next
        Return 0
    End Function

    Public Function getArrayNumMin(ByVal targetNum As Integer, ByRef Arr() As Integer) As Integer

        offset = targetNum - beginNum
        For index = 0 To 6
            Arr(index) = (arrNumMin(index) + offset) Mod 12
        Next
        Return 0
    End Function

    Public Function getArrayNotes(ByVal arrayNum() As Integer, ByRef Arr() As String, ByVal isSharp As Boolean) As Integer

        For index = 0 To 6
            If arrayNum(index) = 0 Then
                Arr(index) = "B"
            Else
                If isSharp = True Then
                    Arr(index) = arrBaseNoteSharp(arrayNum(index) - 1)
                Else
                    Arr(index) = arrBaseNoteFlat(arrayNum(index) - 1)
                End If
            End If

        Next
        Return 0
    End Function
#End Region

#Region "Function of CHORD"
    'Function of Major Chord, get a set of numbers from array
    Public Function getArrNumChordMaj(ByVal targetNum As Integer, ByRef Arr() As Integer) As Integer

        offset = targetNum - beginNum
        For index = 0 To 3
            Arr(index) = (arrNumChordMaj(index) + offset) Mod 12
        Next
        Return 0
    End Function

    'Function of Minor Chord, get a set of numbers from array
    Public Function getArrNumChordMin(ByVal targetNum As Integer, ByRef Arr() As Integer) As Integer

        offset = targetNum - beginNum
        For index = 0 To 3
            Arr(index) = (arrNumChordMin(index) + offset) Mod 12
        Next
        Return 0
    End Function

    'Function of Dim Chord, get a set of numbers from array
    Public Function getArrNumChordDim(ByVal targetNum As Integer, ByRef Arr() As Integer) As Integer

        offset = targetNum - beginNum
        For index = 0 To 3
            Arr(index) = (arrNumChordDim(index) + offset) Mod 12
        Next
        Return 0
    End Function

    'Function of Dominant 7 Chord, get a set of numbers from array
    Public Function getArrNumChordDom(ByVal targetNum As Integer, ByRef Arr() As Integer) As Integer

        offset = targetNum - beginNum
        For index = 0 To 3
            Arr(index) = (arrNumChordDom(index) + offset) Mod 12
        Next
        Return 0
    End Function

    'get a set of result (String) which is the set of number matched . 
    Public Function getArrNoteChord(ByVal arrayNum() As Integer, ByRef Arr() As String, ByVal isSharp As Boolean) As Integer

        For index = 0 To 3
            If arrayNum(index) = 0 Then
                Arr(index) = "B"
            Else
                If isSharp = True Then

                    Arr(index) = arrBaseNoteSharp(arrayNum(index) - 1)
                Else
                    Arr(index) = arrBaseNoteFlat(arrayNum(index) - 1)
                End If

            End If
        Next

        Return 0
    End Function

#End Region

End Module

'*****************************************
'************ Reference End **************
'*****************************************

