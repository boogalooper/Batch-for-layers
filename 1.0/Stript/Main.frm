VERSION 5.00
Begin VB.Form Form1 
   BorderStyle     =   3  'Fixed Dialog
   Caption         =   "Advanced Batch for Adobe Photoshop"
   ClientHeight    =   6585
   ClientLeft      =   45
   ClientTop       =   375
   ClientWidth     =   4350
   Icon            =   "Main.frx":0000
   LinkTopic       =   "Form1"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   ScaleHeight     =   6585
   ScaleWidth      =   4350
   StartUpPosition =   3  'Windows Default
   Begin VB.Timer Timer3 
      Enabled         =   0   'False
      Interval        =   150
      Left            =   600
      Top             =   6120
   End
   Begin VB.CheckBox Check2 
      Appearance      =   0  'Плоска
      Caption         =   "Возвращаться к исходному состоянию"
      ForeColor       =   &H80000008&
      Height          =   255
      Left            =   120
      TabIndex        =   5
      Top             =   5040
      Width           =   4095
   End
   Begin VB.CheckBox Check1 
      Appearance      =   0  'Плоска
      Caption         =   "Сохранять документ после выполнения действий"
      ForeColor       =   &H80000008&
      Height          =   255
      Left            =   120
      TabIndex        =   6
      Top             =   5400
      Width           =   4095
   End
   Begin VB.Timer Timer2 
      Enabled         =   0   'False
      Interval        =   250
      Left            =   3480
      Top             =   6120
   End
   Begin VB.Timer Timer1 
      Enabled         =   0   'False
      Interval        =   150
      Left            =   3000
      Top             =   6120
   End
   Begin VB.ComboBox Combo3 
      Height          =   315
      Left            =   1560
      TabIndex        =   4
      Top             =   4560
      Width           =   2655
   End
   Begin VB.CommandButton Command2 
      Caption         =   "Выполнить"
      Enabled         =   0   'False
      Height          =   375
      Left            =   1560
      TabIndex        =   7
      Top             =   6120
      Width           =   1215
   End
   Begin VB.ComboBox Combo2 
      Height          =   315
      Left            =   1560
      TabIndex        =   3
      Top             =   4200
      Width           =   2655
   End
   Begin VB.ComboBox Combo1 
      Enabled         =   0   'False
      Height          =   315
      Left            =   120
      Style           =   2  'Dropdown List
      TabIndex        =   1
      Top             =   600
      Width           =   4095
   End
   Begin VB.ListBox List1 
      Enabled         =   0   'False
      Height          =   2985
      Left            =   120
      MultiSelect     =   2  'Расширенно
      TabIndex        =   2
      Top             =   1080
      Width           =   4095
   End
   Begin VB.CommandButton Command1 
      Caption         =   "Синхронизация с Adobe Photoshop"
      Height          =   375
      Left            =   120
      TabIndex        =   0
      Top             =   120
      Width           =   4095
   End
   Begin VB.Label BarBase 
      Alignment       =   2  'Центровка
      Appearance      =   0  'Плоска
      BackColor       =   &H80000005&
      BackStyle       =   0  'Прозрачно
      BorderStyle     =   1  'Фиксировано один
      ForeColor       =   &H80000008&
      Height          =   255
      Left            =   120
      TabIndex        =   10
      Top             =   5760
      Visible         =   0   'False
      Width           =   4095
   End
   Begin VB.Label Label2 
      Caption         =   "Действие:"
      Height          =   255
      Left            =   120
      TabIndex        =   9
      Top             =   4605
      Width           =   1455
   End
   Begin VB.Label Label1 
      Caption         =   "Группа действий:"
      Height          =   255
      Left            =   120
      TabIndex        =   8
      Top             =   4245
      Width           =   1455
   End
   Begin VB.Label BarLine 
      Appearance      =   0  'Плоска
      BackColor       =   &H00C0C0C0&
      ForeColor       =   &H80000008&
      Height          =   255
      Left            =   120
      TabIndex        =   11
      Top             =   5760
      Visible         =   0   'False
      Width           =   15
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
'Private Declare Function FindWindow Lib "user32" Alias "FindWindowA" (ByVal lpClassName As String, ByVal lpWindowName As String) As Long
'FindWindow(vbNullString, "ASM Monitor")

Dim DocArr() As String
Dim LrArr() As String
Dim Counter As Integer

Private Type ASM_Settings
    x As Integer
    y As Integer
    check As Integer
    Check2 As Integer
End Type

Dim ST As ASM_Settings

Private Sub Combo1_Click()
    Fill_List Combo1.ListIndex
End Sub

Private Sub Command1_Click()
Command1.Enabled = False

    Open PTH For Random As 1
    Dim s As String
    s = "-1"
    Put 1, 1, CStr(s)
    Close 1

On Error GoTo 1
Shell "monitor.exe 0", vbMinimizedNoFocus
Counter = 0
Timer1.Enabled = True
Command2.Enabled = True
Command2.caption = "Стоп"
Exit Sub
1:
MsgBox "Необходимый файл monitor.exe не найден в директории " + App.Path
End Sub

Sub GetFillData()

        Open PTH For Random As 1
        
        Dim k As Integer
        k = 2
        Dim n As String
        Dim z As String
        Get 1, k, n
        
        ReDim DocArr(Val(n) + 1)
        
        For i = 0 To Val(n) + 1
            Get 1, k, DocArr(i)
            k = k + 1
        Next i
        
            ReDim LrArr(Val(n), 0)
            LrArr(0, 0) = 0
        
        For i = 1 To Val(n)
                   
            Get 1, k, z
            
            If Val(z) > Val(LrArr(0, 0)) Then
                ReDim Preserve LrArr(Val(n), Val(z) + 1)
                LrArr(0, 0) = z
            End If
            
            For j = 0 To Val(z) + 1
                Get 1, k, LrArr(i, j)
                k = k + 1
            Next j
        Next i
    Close 1
    
End Sub

Private Sub Fill_Combo()

    Combo1.Clear
    List1.Clear
    Dim z As Integer
    
    If Val(DocArr(0)) <> 0 Then
        For i = 1 To Val(DocArr(0))
            Combo1.AddItem DocArr(i)
        Next i
           Combo1.Text = DocArr(Val(DocArr(0) + 1))
    End If
    
    If Combo1.ListCount > 0 Then
        Combo1.Enabled = True
        Command2.Enabled = True
        Command2.caption = "Выполнить"
        List1.Enabled = True
        Fill_List ""
    Else
        Combo1.Enabled = False
        List1.Enabled = False
        Command2.Enabled = False
        Command2.caption = "Выполнить"
    End If
End Sub

Private Sub Fill_List(arg As String)

If arg <> "" Then
For i = 0 To Combo1.ListCount
    If Combo1.List(i) = Combo1.Text Then
        z = i
        Exit For
Else
    z = Val(arg) + 1
End If

Next i
    List1.Clear
    For i = 1 To Val(LrArr(z + 1, 0))
        List1.AddItem LrArr(z + 1, i)
    Next i
    
    If List1.ListCount > 0 Then
    For i = 0 To List1.ListCount
        If List1.List(i) = LrArr(z + 1, Val(LrArr(z + 1, 0)) + 1) Then List1.Selected(i) = True
    Next i
    End If
End If
End Sub

Private Sub Command2_Click()
    If Command2.caption = "Выполнить" Then
    SaveCombos
    FillCombos
    
    Dim n As Integer
    Dim s As String
    
    On Error Resume Next
    Kill PTH2
    
    Open PTH2 For Random As 1
        For i = 0 To Combo1.ListCount
        If Combo1.List(i) = Combo1.Text Then
            n = i + 1
            Exit For
        End If
        Next i
        Put 1, 1, n
        n = Check1.Value
        Put 1, 2, n
        n = Check2.Value
        Put 1, 3, n
        s = Combo2.Text
        Put 1, 4, s
        s = Combo3.Text
        Put 1, 5, s
        
        Dim k As Integer
        k = 7
        For i = 0 To List1.ListCount - 1
            If List1.Selected(i) = True Then
            Put 1, k, CInt(i)
            k = k + 1
            End If
        Next i
        k = k - 7
        Put 1, 6, k
    Close 1
    Shell "monitor.exe 1", vbMinimizedNoFocus
    Command2.caption = "Стоп"
    Counter = 0
    Timer3.Enabled = True
    Else
    If Timer1.Enabled = True Then
        SaveSetting "ASM", "Monitor", "stop", -5
        Bar 1, 1, "действие отменено"
        Timer1.Enabled = False
        Command2.caption = "Выполнить"
        Command1.Enabled = True
        If Combo1.ListCount = 0 Then Command2.Enabled = False
        End If
    If Timer3.Enabled = True Then
        SaveSetting "ASM", "Monitor", "stop", -5
    End If
    End If
End Sub

Private Sub Form_Load()
    Open PTH1 For Random As 1
    Get 1, 1, ST
    Close 1
    Form1.Left = ST.x
    Form1.Top = ST.y
    Check1.Value = ST.check
    Check2.Value = ST.Check2
    
    FillCombos
End Sub

Private Sub SaveCombos()
Dim s As String
Dim k As Integer
k = 2
On Error Resume Next
Kill PTH1

'combo2
    s = Combo2.Text
    If Combo2.ListCount > 0 Then
recom2:
i = 0
    For i = 0 To Combo2.ListCount - 1
        If s = Combo2.List(i) Or Trim(Combo2.List(i)) = "" Or i = 7 Then
        Combo2.RemoveItem (i)
        GoTo recom2
        End If
    Next i
End If

    Open PTH1 For Random As 1
        Put 1, k, CStr(Combo2.ListCount)
        k = k + 1
        Put 1, k, CStr(s)
            For i = 0 To Combo2.ListCount - 1
            k = k + 1
            Put 1, k, CStr(Combo2.List(i))
        Next i
     Close 1


'combo3
    s = Combo3.Text
    If Combo3.ListCount > 0 Then
recom3:
i = 0
    For i = 0 To Combo3.ListCount - 1
        If s = Combo3.List(i) Or Trim(Combo3.List(i)) = "" Or i = 7 Then
        Combo3.RemoveItem (i)
        GoTo recom3
        End If
    Next i
End If
    Open PTH1 For Random As 1
        k = k + 1
        Put 1, k, CStr(Combo3.ListCount)
        k = k + 1
        Put 1, k, CStr(s)
            For i = 0 To Combo3.ListCount - 1
            k = k + 1
            Put 1, k, CStr(Combo3.List(i))
        Next i
     Close 1

End Sub

Private Sub FillCombos()

Combo2.Clear
    Dim a As String
    Dim s As String
    Dim k As Integer
    k = 2
        
    Open PTH1 For Random As 1
    Get 1, k, a
    If Val(a) > 7 Then a = 7
    k = k + 1
    Get 1, k, s
    
    If Trim(s) <> "" Then
        Combo2.Text = s
        Combo2.AddItem s
    End If
    
    For i = 0 To Val(a) - 1
        k = k + 1
        Get 1, k, s
        If Trim(s) <> "" Then Combo2.AddItem s
    Next i
    Close 1
  
    
Combo3.Clear
    Open PTH1 For Random As 1
    k = k + 1
    Get 1, k, a
    If Val(a) > 7 Then a = 7
    k = k + 1
    Get 1, k, s
    If Trim(s) <> "" Then
        Combo3.Text = s
        Combo3.AddItem s
    End If
    For i = 0 To Val(a) - 1
        k = k + 1
        Get 1, k, s
        If Trim(s) <> "" Then Combo3.AddItem s
    Next i
    Close 1
End Sub

Function PTH()
PTH = App.Path
эPTH = "c:\"
PTH = PTH & "\sync.dat"
PTH = Replace(PTH, "\\", "\")
End Function

Function PTH1()
PTH1 = App.Path
PTH1 = PTH1 & "\settings.dat"
PTH1 = Replace(PTH1, "\\", "\")
End Function

Function PTH2()
PTH2 = App.Path
PTH2 = PTH2 & "\output.dat"
PTH2 = Replace(PTH2, "\\", "\")
End Function

Private Sub Form_Unload(Cancel As Integer)
WriteST
End Sub

Private Sub Timer1_Timer()
Dim s As String
Bar 120, Counter, "обмен данными с Adobe Photoshop..."

Open PTH For Random As 1
Get 1, 1, s

If Val(s) = 1 Then
Dim k As Integer
k = 1
s = "0"
Put 1, k, CStr(s)
Close 1
    Timer1.Enabled = False
    Bar 120, 120, "обмен данными с Adobe Photoshop..."
    GetFillData
    Fill_Combo
    Command1.Enabled = True
    Counter = 0
    If Combo1.ListCount = 0 Then
        Command2.Enabled = False
        Command2.caption = "Выполнить"
    End If
Else
If Val(s) = 0 Then
    Timer1.Enabled = False
    Bar 120, 120, "обмен данными с Adobe Photoshop..."
    Close 1
    Command1.Enabled = True
    If Combo1.ListCount = 0 Then
        Command2.Enabled = False
        Command2.caption = "Выполнить"
    End If
    Counter = 0
    Exit Sub
End If
End If

Close 1

If Counter >= 120 Then
    Timer2.Enabled = False
    Counter = 0
End If

Counter = Counter + 1
End Sub

Sub Bar(total As Integer, current As Integer, caption)
BarBase.Visible = True
BarLine.Visible = True
Dim alpha As Long
alpha = BarBase.Width / total
BarLine.Width = alpha * current

If current >= total Then
BarLine.Width = BarBase.Width
Timer2.Enabled = True
End If
BarBase.caption = caption
End Sub

Private Sub Timer2_Timer()
BarBase.Visible = False
BarLine.Visible = False
BarLine.Width = 0
Timer2.Enabled = False
End Sub

Private Sub WriteST()
ST.x = Form1.Left
ST.y = Form1.Top
ST.check = Check1.Value
ST.Check2 = Check2.Value
Open PTH1 For Random As 1
Put 1, 1, ST
Close 1
FillCombos
End Sub

Private Sub Timer3_Timer()
If GetSetting("ASM", "Monitor", "Current", -1) = -1 Then
    Bar 120, Counter, "инициализация..."
    Counter = Counter + 1
    If Counter > 120 Then
    Counter = 0
End If
Else

If GetSetting("ASM", "Monitor", "Current", -1) > 0 Then
    Bar GetSetting("ASM", "Monitor", "SelCount", 1), GetSetting("ASM", "Monitor", "Current", 1), GetSetting("ASM", "Monitor", "CerName", "")

If GetSetting("ASM", "Monitor", "Current", 1) = GetSetting("ASM", "Monitor", "SelCount", "") Then
    Bar 1, 1, GetSetting("ASM", "Monitor", "CerName", 1)
    SaveSetting "ASM", "Monitor", "Current", -1
    Timer3.Enabled = False
    Command2.caption = "Выполнить"
End If

Else
If GetSetting("ASM", "Monitor", "Current", -1) = -2 Then
    Bar 1, 1, "ошибка при синхронизации"
    SaveSetting "ASM", "Monitor", "Current", -1
    Timer3.Enabled = False
    Command2.caption = "Выполнить"
End If

If GetSetting("ASM", "Monitor", "Current", -1) = -3 Then
    Bar 1, 1, "файл не сохранен"
    SaveSetting "ASM", "Monitor", "Current", -1
    Timer3.Enabled = False
    Command2.caption = "Выполнить"
End If

If GetSetting("ASM", "Monitor", "Current", -1) = -4 Then
    Bar 1, 1, "ошибка в имени действия"
    SaveSetting "ASM", "Monitor", "Current", -1
    Timer3.Enabled = False
    Command2.caption = "Выполнить"
End If

If GetSetting("ASM", "Monitor", "Current", -1) = -5 Then
    Bar 1, 1, "действие отменено"
    SaveSetting "ASM", "Monitor", "Current", -1
    SaveSetting "ASM", "Monitor", "stop", 0
    Timer3.Enabled = False
    Command2.caption = "Выполнить"
End If
End If
End If

End Sub
