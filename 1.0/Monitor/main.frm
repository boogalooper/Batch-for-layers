VERSION 5.00
Begin VB.Form Form1 
   BorderStyle     =   3  'Fixed Dialog
   Caption         =   "ASM Monitor"
   ClientHeight    =   7530
   ClientLeft      =   45
   ClientTop       =   375
   ClientWidth     =   4350
   LinkTopic       =   "Form1"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   ScaleHeight     =   7530
   ScaleWidth      =   4350
   StartUpPosition =   3  'Windows Default
   Visible         =   0   'False
   Begin VB.CommandButton Command2 
      Caption         =   "Command2"
      Height          =   375
      Left            =   2160
      TabIndex        =   8
      Top             =   6960
      Width           =   1215
   End
   Begin VB.CommandButton Command1 
      Caption         =   "Command1"
      Height          =   375
      Left            =   360
      TabIndex        =   7
      Top             =   6960
      Width           =   1215
   End
   Begin VB.CheckBox Check2 
      Caption         =   "Check2"
      Height          =   495
      Left            =   120
      TabIndex        =   6
      Top             =   4680
      Width           =   3975
   End
   Begin VB.CheckBox Check1 
      Caption         =   "Check1"
      Height          =   255
      Left            =   120
      TabIndex        =   2
      Top             =   5280
      Width           =   4095
   End
   Begin VB.ListBox List1 
      Height          =   3375
      Left            =   120
      MultiSelect     =   1  'Просто
      TabIndex        =   1
      Top             =   1200
      Width           =   4095
   End
   Begin VB.Label Label4 
      Height          =   375
      Left            =   120
      TabIndex        =   5
      Top             =   6360
      Width           =   4095
   End
   Begin VB.Label Label3 
      Height          =   255
      Left            =   120
      TabIndex        =   4
      Top             =   5880
      Width           =   3975
   End
   Begin VB.Label Label2 
      Height          =   375
      Left            =   120
      TabIndex        =   3
      Top             =   480
      Width           =   4095
   End
   Begin VB.Label Label1 
      Height          =   255
      Left            =   120
      TabIndex        =   0
      Top             =   120
      Width           =   3975
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Public sd As String
Private Sub Command1_Click()
sd = "0"
Call sss
End Sub

Private Sub Command2_Click()
sd = "1"
Call sss
End Sub

Private Sub Form_Load()
'объявляем переменные
SaveSetting "ASM", "Monitor", "Current", -1
SaveSetting "ASM", "Monitor", "stop", 0

    Dim App As Photoshop.Application
    Dim Doc As Photoshop.Document
    Dim Doc1 As Photoshop.Document
    Dim Lr As Photoshop.ArtLayer
    Dim a As Integer
    Dim b As Integer
    Dim s As String
    Dim jpgSaveOptions
    Dim saveOptionsRef
    
    If Command = "0" Then
    
    If GetSetting("ASM", "Monitor", "stop", 0) = -5 Then GoTo stp
    Set App = Photoshop.Application
    
    If GetSetting("ASM", "Monitor", "stop", 0) = -5 Then GoTo stp
'получаем список документов
    a = App.Documents.Count
    ReDim DocArr(a + 1)
    DocArr(0) = a
    If a > 0 Then
    For i = 1 To a
        If GetSetting("ASM", "Monitor", "stop", 0) = -5 Then GoTo stp
        Set Doc = App.Documents(i)
        s = Doc.Name
        DocArr(i) = s
    Next i
    Set Doc = App.ActiveDocument
    s = Doc.Name
    DocArr(a + 1) = s
    End If
    'конец списка документов
    
    'переписываем массивы
    ReDim LrArr(a, 0)
    LrArr(0, 0) = 0
    
    'получаем список слоёв
    If a > 0 Then
        For i = 1 To a
            Set Doc = App.Documents(i)
            b = Doc.ArtLayers.Count
            If b > Val(LrArr(0, 0)) Then
                ReDim Preserve LrArr(a, b + 1)
                LrArr(0, 0) = b
            End If
            LrArr(i, 0) = b
            For j = 1 To b
                If GetSetting("ASM", "Monitor", "stop", 0) = -5 Then GoTo stp
                Set Lr = Doc.ArtLayers(j)
                s = Lr.Name
                LrArr(i, j) = s
            Next j
               ' On Error Resume Next
                Set Lr = Doc.ActiveLayer
                LrArr(i, b + 1) = Lr.Name
        Next i
    End If
    'конец списка слоёв
    'выход
    
   
    ' запись массива в файл
    On Error Resume Next
    Kill PTH
    
    ' нулевой элемент: количество элементов в массиве
    ' 1,2... n: элементы
    ' n+1: активный элемент на момент сканирования
    
    Open PTH For Random As 1
    
        Dim k As Integer
        s = "1"
        Put 1, 1, CStr(s)
        
        k = 2
        For i = 0 To Val(DocArr(0)) + 1
            Put 1, k, CStr(DocArr(i))
            k = k + 1
        Next i

        For i = 1 To Val(DocArr(0))
            For j = 0 To Val(LrArr(i, 0)) + 1
                Put 1, k, CStr(LrArr(i, j))
                k = k + 1
            Next j
        Next i
    Close 1
    End
Else


If Command = "1" Then

SaveSetting "ASM", "Monitor", "stop", 0
SaveSetting "ASM", "Monitor", "Current", -1
    Dim n As Integer
    
    Open PTH2 For Random As 1
    Get 1, 1, n
    Label1.Caption = n
    Get 1, 2, n
    Check1.Value = n
    Get 1, 3, n
    Check2.Value = n
    
    Set App = Photoshop.Application
    Set Doc = App.Documents(Val(Label1.Caption))
    App.ActiveDocument = Doc
    For i = 1 To Doc.ArtLayers.Count
    List1.AddItem Doc.ArtLayers(i).Name
    Next i
    
    Dim o As Integer
    Get 1, 6, o
    
    Dim u As Integer
    
'состояние может измениться

On Error GoTo err1
    For u = 7 To (6 + o)
        Get 1, u, n
        List1.Selected(n) = True
    Next u
    
    
On Error GoTo err2
    Label2.Caption = Doc.Path
    Get 1, 4, s
    Label3.Caption = s
    Get 1, 5, s
    Label4.Caption = s
    Close 1
    
    Label3.Caption = Replace(Label3.Caption, ".atn", "")
    Label3.Caption = Label3.Caption & ".atn"
    
    
    k = 1
    SaveSetting "ASM", "Monitor", "SelCount", List1.SelCount
    
    For i = 1 To List1.ListCount
    If GetSetting("ASM", "Monitor", "stop", 0) = -5 Then GoTo stp
    If List1.Selected(i - 1) = True Then
    
    App.ActiveDocument = Doc
    
    If Check2.Value <> 0 Then Doc.ActiveHistoryState = Doc.HistoryStates(1)
    Set Lr = Doc.ArtLayers(i)
    Doc.ActiveLayer = Lr
    s = Lr.Name
    
    SaveSetting "ASM", "Monitor", "Current", k
    SaveSetting "ASM", "Monitor", "CerName", Lr.Name
    k = k + 1
    On Error GoTo err3
    App.DoAction Label4.Caption, Label3.Caption
    
    s = Label2.Caption & "\" & s & ".jpg"
    s = Replace(s, "\\", "\")
    
    If GetSetting("ASM", "Monitor", "stop", 0) = -5 Then GoTo stp
    
    Set jpgSaveOptions = New Photoshop.JPEGSaveOptions
    jpgSaveOptions.EmbedColorProfile = True
    jpgSaveOptions.FormatOptions = 1
    jpgSaveOptions.Matte = 1
    jpgSaveOptions.Quality = 12
    
    If GetSetting("ASM", "Monitor", "stop", 0) = -5 Then GoTo stp
    
    Set Doc1 = App.ActiveDocument
    
    If Check1.Value <> 0 Then
    Doc1.SaveAs s, jpgSaveOptions, True
    End If
    
    If Check2.Value <> 0 Then
   ' Set Doc1 = App.ActiveDocument
    Doc1.ActiveHistoryState = Doc1.HistoryStates(1)
    End If
    
    saveOptionsRef = psSaveChanges
    End If
    
    Next i
    App.ActiveDocument = Doc
    If GetSetting("ASM", "Monitor", "stop", 0) = -5 Then GoTo stp
    If Check2.Value <> 0 Then Doc.ActiveHistoryState = Doc.HistoryStates(1)
stp:
    SaveSetting "ASM", "Monitor", "Current", -5
    SaveSetting "ASM", "Monitor", "stop", 0
    Close 1
    End
    Exit Sub
'errors
err1:
    SaveSetting "ASM", "Monitor", "Current", -2
    Close 1
    End
    Exit Sub
err2:
    SaveSetting "ASM", "Monitor", "Current", -3
    Close 1
    End
    Exit Sub
err3:
    SaveSetting "ASM", "Monitor", "Current", -4
    Close 1
    End
    Exit Sub
Exit Sub
End If
End
End If


End Sub


Function PTH()
PTH = App.Path
'PTH = "c:\"
PTH = PTH & "\sync.dat"
PTH = Replace(PTH, "\\", "\")
End Function

Function PTH2()
PTH2 = App.Path
PTH2 = PTH2 & "\output.dat"
PTH2 = Replace(PTH2, "\\", "\")
End Function

Sub sss()
End Sub
