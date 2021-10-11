///////////////////////////////////////////////////////////////////////////////
// Advanced batch - revision 2.0.3
// profile-tver@ya.ru
///////////////////////////////////////////////////////////////////////////////

<javascriptresource>
<category>jazzy</category>
<enableinfo>true</enableinfo>
</javascriptresource>

#target photoshop

XMLSettingsName="Advanded batch"
var atnXML = new Params()
atnXML.LoadParamsFromDisk()

gClassActionSet = charIDToTypeID( 'ASet' );
gClassAction = charIDToTypeID( 'Actn' );
gKeyName = charIDToTypeID( 'Nm  ' );
gKeyNumberOfChildren = charIDToTypeID( 'NmbC' );

paramsPanel = ["Пакетная обработка", "Batch"]; paramsPanel=paramsPanel[atnXML.settings.langId]
savePanel = ["Сохранять как...", "Save as..."]; savePanel =savePanel[atnXML.settings.langId]
atnPanel=["Операции", "Actions"]; atnPanel=atnPanel[atnXML.settings.langId]
cptColorPanel = ["Цветные метки", "Color labels"]; cptColorPanel =cptColorPanel[atnXML.settings.langId]
cptAutoSearch = ["Все отмеченные цветом слои", "All layers with color labels"]; cptAutoSearch = cptAutoSearch[atnXML.settings.langId]
cptUseSnapshots = ["Возвращаться к исходному состоянию", "Back to snapshot after each iteration"]; cptUseSnapshots =cptUseSnapshots[atnXML.settings.langId]
cptSaveAfter=["Сохранять после обработки как", "Save as"]; cptSaveAfter=cptSaveAfter[atnXML.settings.langId]
cptUseAtn=["Выполнять операции с каждым слоем", "Do actions with each layer"];cptUseAtn=cptUseAtn[atnXML.settings.langId]
cptSet=["Группа:", "Action set"];cptSet=cptSet[atnXML.settings.langId]
cptAtn=["Операция:", "Action name"];cptAtn=cptAtn[atnXML.settings.langId]
cptRed = ["красный", "red"];cptRed = cptRed[atnXML.settings.langId]
cptOrange = ["оранжевый", "orange"];cptOrange =cptOrange[atnXML.settings.langId]
cptYellow = ["желтый", "yellow"];cptYellow =cptYellow[atnXML.settings.langId]
cptGreen = ["зеленый", "green"];cptGreen =cptGreen[atnXML.settings.langId]
cptBlue = ["cиний", "blue"];cptBlue =cptBlue[atnXML.settings.langId]
cptViolet = ["фиолетовый", "violet"];cptViolet =cptViolet[atnXML.settings.langId]
cptGray = ["серый", "gray"];cptGray =cptGray[atnXML.settings.langId]
cptNone = ["без отметки", "no label"];cptNone =cptNone[atnXML.settings.langId]
cptAll = ["всего отмечено", "total marked"];cptAll =cptAll[atnXML.settings.langId]
cptOk = ["Обработка", "Batch"];cptOk =cptOk[atnXML.settings.langId]
cptCancel=["Отмена", "Cancel"];cptCancel=cptCancel[atnXML.settings.langId]
cptTab1 = ["Основные", "Main"];cptTab1 =cptTab1[atnXML.settings.langId]
cptTab2 = ["Дополнительные", "Advanced"];cptTab2 =cptTab2[atnXML.settings.langId]
cptNotBackground = ["Не обрабатывать фоновый слой", "Do not process background layer"];cptNotBackground =cptNotBackground[atnXML.settings.langId]
cptAllDocs = ["Возвращать к исходному все документы", "Back to snapshots all opened documents"];cptAllDocs =cptAllDocs[atnXML.settings.langId]
cptJpg= ["Качество jpg:", "Quality of jpg"];cptJpg=cptJpg[atnXML.settings.langId]
cptFlatten = ["Объединять слои (psd, tif)", "Flatten layers (psd, tif)"];cptFlatten =cptFlatten[atnXML.settings.langId]
cptLang =[ "Язык интерфейса", "Interface language"];cptLang =cptLang[atnXML.settings.langId]
numOneLayer=["слой", "layer"];numOneLayer=numOneLayer[atnXML.settings.langId]
numTwoLayers=["слоя", "layers"];numTwoLayers=numTwoLayers[atnXML.settings.langId]
numManyLayers=["слоев", "layers"];numManyLayers=numManyLayers[atnXML.settings.langId]
alertLang=["Изменения вступят в силу при следующем запуске!", "Changes will take effect the next time you start Advanced Batch"]; alertLang=alertLang[atnXML.settings.langId]
msgInit=["подсчет и сортировка слоев...", "counting and sorting layers..."];msgInit=msgInit[atnXML.settings.langId]
msgBatch=["инициализация...", "preprocessing layers..."];msgBatch=msgBatch[atnXML.settings.langId]
msgNoLayer1=["Скрипт не может сделать активным слой [","Script cannot set active layer ["];msgNoLayer1=msgNoLayer1[atnXML.settings.langId]
msgNoLayer2=["].\rВозможно он был удален в процессе обработки.","].\rMaybe it's been deleteted during play Actions."];msgNoLayer2=msgNoLayer2[atnXML.settings.langId]
msgNoDoc1=["Скрипт не может сделать активным документ [","Script cannot set active document ["];msgNoDoc1=msgNoDoc1[atnXML.settings.langId]
msgNoDoc2=["].\rВозможно он был закрыт в процессе обработки.","].\rMaybe it's been closed during play Actions."];msgNoDoc2=msgNoDoc2[atnXML.settings.langId]
msgEsc = ["Операция была остановлена в процессе выполнения!", "Operation was stopped during execution!"]; msgEsc=msgEsc[atnXML.settings.langId]
msgSave=["Не найден путь для сохранения результатов обработки! Сохраните документ и откройте его повторно", "No path was found to save processing results! Save the document and reopen it."]; msgSave=msgSave[atnXML.settings.langId]
errSave =["Ошибка при сохранении файла!\r","Error saving file!"];errSave=errSave[atnXML.settings.langId]
cptEng = "Eng"
cptRus= "Rus"


icoRed = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00;IDAT\x18\u0095c\u00FCci\u00F3\u009F\u0081\b\u00C0\x02R\u00C2((\u0084W\u00E5\u00FF\u00F7\u00EF \n\u00C1\u0080\u0087\x17\u00BB\u00AA/\u009F\u00C1\x14\x131\u00D6\x0E\x15\u0085\b_C}\u0087W!(\u009C\u00F0\x02\x06\x06\x06\x00\x18\u00EF\fO\u0083\b\u00CC\u00FD\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoOrange = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c\u00FC\u00D2\u00A1\u00FA\u009F\u0081\b\u00C0\x02R\u00C2$\u00C8\u008DW\u00E5\u00BF\u00F7_!\nA\u0080\u0091\u0097\x03\u00AB\u00A2\u00FF\u009F\x7F\u0080i&b\u00AC\x1D*\n\u00E1\u00BE\u0086\u00F9\x0E\u00AFBP8\u00E1\x05\f\f\f\x00\u00D6!\x0E\u0088\x06d\u00F3\x07\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoYellow = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00;IDAT\x18\u0095c\u00FCp@\u00ED?\x03\x11\u0080\x05\u00A4\u0084\u0089\u0093\x1B\u00AF\u00CA\x7F\u00DF\u00BFB\x14\u0082\x15\u00B3s`W\u00F4\u00F3\x07D\u009E\x18k\u0087\u008AB\u00B8\u00AFa\u00BE\u00C3\u00AB\x10\x14Nx\x01\x03\x03\x03\x00+\u00AA\x0E\u00CA*\u0090\u00C3\u00A2\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoGreen = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c\u00F4\u00DEo\u00F8\u009F\u0081\b\u00C0\x02R\"\u00C6\u00C9\u008FW\u00E5\u00AB\u00EF\x1F!\nA@\u0090\u009D\x1B\u00AB\u00A2\u00F7?\u00BF\u0082i&b\u00AC\x1D*\n\u00E1\u00BE\u0086\u00F9\x0E\u00AFBP8\u00E1\x05\f\f\f\x000\x1F\x0E\x05z4V\u0094\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoBlue = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c4\u0099\u00F7\u00E1?\x03\x11\u0080\x05\u00A4D\u0080\u009F\t\u00AF\u00CA\x0F\x1F\u00FFA\x14\u0082\x007\x17v\u00C5_\u00BF\u00FD\x03\u00D3\u00F8\u008DB\x02CA!\u00DC\u00D70\u00DF\u00E1U\b\n'\u00BC\u0080\u0081\u0081\x01\x00\b\u00DD\x0E\u00A5\x7F\u00E7e\u008B\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoViolet = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c\u00DC\x1Fv\u00FD?\x03\x11\u0080\x05\u00A4\u0084S\u0092\r\u00AF\u00CA\u00EF\u00CF\x7FA\x14\u0082\x00\u00BB\x10\x0BVE?\u00DF\u00FD\x01\u00D3L\u00C4X;T\x14\u00C2\u00BD\n\u00F3\x1D^\u0085\u00A0p\u00C2\x0B\x18\x18\x18\x00KM\x0E\u00C2\u00AA\x19\u00A8d\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoGray = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095clk\u00EB\u00FC\u00CF@\x04`\x01)\x11\x12\x12\u00C4\u00AB\u00F2\u00DD\u00BB\u00F7\x10\u0085 \u00C0\u00CB\u00CB\u008BU\u00D1\u00E7\u00CF\u009F\u00C14\x131\u00D6\x0E\x15\u0085p_\u00C3|\u0087W!(\u009C\u00F0\x02\x06\x06\x06\x00\u00BE\u00A9\x0ET.#\u00D2&\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoNone = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00\u00CEIDAT\x18\u0095\u008D\u0090A\x0BE@\x14\u0085\u00CFLS\u00A2,D6~\u0083R\u00CAF\u00E4WS\u0094\u0094\u00C8N\u00F9\x19R\u00D6\x12^s\u00DF3\u00CF\u00EA\u00F5NM3\u00E7\u00CE\u0099\u00B9_\u0097\x15Eq\u00E1\x0F\t\x19\t\u0082\x00\u00D7uA\bA\u00FBS\u00D2\u008F\u00E3\b\u008E\u008F\x19\u0086\x01\u0086a\u00C0u]Z\u009A\u00A6\u00A1\u00EB:\u00F5\u0090\u0082\u009CsDQ\u0084\u00B2,\u00B1m\x1B\u00D6uE]\u00D7H\u0092\x04\u008C1\nRk)\u00CF\u00F3\u00E0\u00FB>\u00F2<'\x1F\u00C71\x1C\u00C7\u00C1<\u00CF\u00DF\x1Fo\u0099\u00A6\u00A9\u00CE\x12\u00E3)\u00C5\u00B8,\x0B\u00FA\u00BEG\u009A\u00A6\b\u00C3\x10UU\x11\u00C2-j-9\u00DA\u00B6E\u0096e\u00B0,\x0B\u00B6mC\u00D7u4MC\b\u00F2\u009E\u0082\u00C7qPa\u00DFw\u00C5ts\u009E\u00E7\u00F9\x1E\u009D,L\u00D3\u00F4{\u00E2\x00^\u00D6\u0089Tf\u00E31\u0087\u00CC\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoAll="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00\u00B5IDAT\x18\u0095\u008D\u0090K\n\u00840\x10D+C\u00FC\u00E5\x06\u00D9\u00B8\u00F7\n\"nt\u00E3\u0089\u00C5\u0095\u00E0!\u00B2\u00CC-\x14\u00F1\u0097\u00A1{\u00B0a\x10\u0086)(:\u00A4_WB\u00AB\u00BE\u00EF\x03\u00FE\u0090&\u00A4\u00AEk!\u0097e\u0081R\nY\u0096\u00C9\u00DD4M\x1F\u0090\u0094\u00A6)\u009Cs\u00F0\u00DE#I\x12\u00E4y\u008E\u00A2(x\x10w\"i]W\u0086\u00BA\u00AE\u00C3\u00BE\u00EF\x18\u00C7\x11\u00D6Z\u00C4q\u00CC\u00FD\u00D7\r\x1E\u00C7\u00C15\u008A\"N$x\u009Egy^\x12\u00E9_\u00D7ua\x18\x06i\u009E\u00E7)gI\f!0\u00DC\u00B6-\u009A\u00A6\u0091\u00E1G\u00A2\u00D6\u009A\u00BDm\x1B\x03dc\u00CC\x13\u00A4\u00C4\u00B2,\u00B9\u0092\u00AB\u00AA\u00E2M|\u0081\u00B4\u00A7\u009F\x02\u00F0\x06\x05\"C\u00AEZ\f\u00AC\x18\x00\x00\x00\x00IEND\u00AEB`\u0082"


var lr = sortLayers (new collectLayers ())
var atn = GetActionSetInfo ()

w = buildWindow ()
w.show()

function buildWindow ()
{
var w = new Window ("dialog", XMLSettingsName)
var tpanel = w.add ("tabbedpanel")
var general = tpanel.add ("tab", undefined, cptTab1)
tpanel.margins = [0,0,0,0]

var p1 = general.add ("panel", undefined, cptColorPanel)
p1.alignChildren = "left"
p1.preferredSize.width= 270
p1.add ("group")

var cColorDrop = p1.add ("dropdownlist",undefined)
cColorDrop.preferredSize.width= 240
var cColorCheck = p1.add ("checkbox",undefined, cptAutoSearch)

var p2 = general.add ("panel", undefined, paramsPanel)
p2.alignChildren = "left"
p2.add ("group")
var sUseSnapshot = p2.add ("checkbox",undefined, cptUseSnapshots)

var g1 = p2.add ("group")
g1.orientation = "row"
var sSaveAfter = g1.add ("checkbox",undefined, cptSaveAfter)
sSaveAfter.preferredSize.width=180
var sFormats = g1.add ("dropdownlist",undefined, ["jpg", "psd","tif"])
sFormats.preferredSize.width=50

var p3 = general.add ("panel", undefined, atnPanel)
p3.alignChildren = "left"
var aDoAtn = p3.add ("checkbox",undefined, cptUseAtn)
aDoAtn.preferredSize.width= 240

var g2 = p3.add ("group")
g2.orientation = "row"

var g3 = g2.add ("group")
g3.orientation = "column"
g3.alignChildren = "right"
g3.add ("statictext",undefined, cptSet)
g3.add ("statictext",undefined, cptAtn)

var g4 = g2.add ("group")
g4.orientation = "column"
var aGrpName = g4.add ("dropdownlist",undefined)
var aAtnName = g4.add ("dropdownlist",undefined)

aAtnName.preferredSize.width= aGrpName.preferredSize.width= 170 

var g5 = w.add ("group")
var btnDo = g5.add ("button", undefined, cptOk, {name: "ok"});
var btnCancel = g5.add ("button", undefined, cptCancel, {name: "cancel"});

var addition = tpanel.add ("tab", undefined, cptTab2)

addition.alignChildren = "left"
addition.add ("group")
var p4 = addition.add ("panel", undefined, cptLang)
var g6= p4.add ("group")
g6.margins = [0,5,0,0]
p4.preferredSize.width= 270
p4.alignChildren = "center"

var addEng = g6.add ("radiobutton",undefined, cptEng)
var addRus= g6.add ("radiobutton",undefined, cptRus)

var p5 = addition.add ("panel", undefined, paramsPanel)
p5.alignChildren = "left"
p5.preferredSize.width= 270
p5.add ("group")
var addBackground = p5.add ("checkbox",undefined, cptNotBackground)
var addAllDocs = p5.add ("checkbox",undefined, cptAllDocs)

var p6 = addition.add ("panel", undefined, savePanel)
p6.alignChildren = "left"
p6.add ("group")
var addJpgGrp = p6.add ("group")
addJpgGrp.add("statictext",undefined, cptJpg)
var addJpg = addJpgGrp.add ("statictext", undefined,"12")
var addSliderJpg = addJpgGrp.add ("slider", undefined, 12, 0, 12)
addSliderJpg.preferredSize.width =120
var addFlatten = p6.add ("checkbox",undefined, cptFlatten)

cColorCheck.onClick = function ()
{
    if (this.value) {
        cColorDrop.add ("item", cptColorDropbox(undefined, sumMarkedLayers (), false))
        cColorDrop.items[cColorDrop.items.length-1].image =cptColorDropbox(undefined,undefined, true)
        cColorDrop.selection=cColorDrop.items.length-1
        cColorDrop.enabled=false
        atnXML.settings.doAllLayers = true
        } else {
            cColorDrop.enabled=true
            if (cColorDrop.items.length != lr.length) {cColorDrop.remove (cColorDrop.items.length-1)}
            for (var i =0; i<lr.length; i++) {if (lr[i].name==atnXML.settings.selectedColor) {cColorDrop.selection = i; break}} 
            atnXML.settings.doAllLayers = false
            }
}

cColorDrop.onChange = function (){if (this.items.length==lr.length) {atnXML.settings.selectedColor=lr[this.selection.index].name}}

sUseSnapshot.onClick = function (){atnXML.settings.useSnapshot=this.value}


sSaveAfter.onClick = function ()
{
    if (this.value) {sFormats.enabled=true} else {sFormats.enabled=false}
    if (atnXML.settings.doAtn == false && general.enabled == true ) {btnDo.enabled = this.value}
    atnXML.settings.saveAfter=this.value
}

sFormats.onChange = function (){atnXML.settings.saveAs=this.selection.index}

aDoAtn.onClick = function ()
{
    if (this.value) {aGrpName.enabled=true; aAtnName.enabled=true} else {aGrpName.enabled=false; aAtnName.enabled=false}
    if (atnXML.settings.saveAfter == false && general.enabled == true ) {btnDo.enabled = this.value}
    atnXML.settings.doAtn=this.value
}

aGrpName.onChange = function (){atnXML.settings.setName=this.selection.text}

aAtnName.onChange = function (){atnXML.settings.atnName=this.selection.text}

btnDo.onClick = function ()
{
    atnXML.SaveParamsToDisk ()
    w.close ()
    Batch ()
 }

btnCancel.onClick = function ()
{
    w.close ()
 }

tpanel.onChange = function () {if(tpanel.label == 1) {w.onShow(true);tpanel.label =0}}

addBackground.onClick = function (){atnXML.settings.doBackground= this.value;tpanel.label=1}
addAllDocs.onClick = function (){atnXML.settings.globalSnapshot= this.value}
addFlatten.onClick = function (){atnXML.settings.flatten=this.value}

addEng.onClick = function (doAlert)
{
    if (doAlert!=false && addRus.label == 1) alert (alertLang,XMLSettingsName)
    addRus.value=false
    this.value = true
    this.label=1
    addRus.label=0
    atnXML.settings.langId=1
    atnXML.SaveParamsToDisk ()
 }

addRus.onClick = function (doAlert)
{
     if (doAlert!=false && addEng.label == 1) alert (alertLang,XMLSettingsName)
     addEng.value=false
     this.value = true
     this.label=1
     addEng.label=0
     atnXML.settings.langId=0
     atnXML.SaveParamsToDisk ()
 }

addSliderJpg.onChange = function () {atnXML.settings.Jpg=this.value}
addSliderJpg.onChanging = function () {this.value = Math.round( Number (this.value)); addJpg.text = this.value }

w.onShow = function (renewLayers)
{   
      tpanel.selection = 0
      if (renewLayers == true) {lr = sortLayers (new collectLayers ()); cColorDrop.removeAll()}
      for (var i =0; i<lr.length; i++)
      {cColorDrop.add ("item", cptColorDropbox(lr[i].name, lr[i].layers.length, false))
       cColorDrop.items[i].image =cptColorDropbox(lr[i].name,undefined, true)
       }
       for (var i =0; i<lr.length; i++) {if (lr[i].name==atnXML.settings.selectedColor) {break}}   
       if (i==lr.length) {i=0}
       cColorDrop.selection = i
       
       if (lr.length == 1 && lr[0].name == "none")
       {
           cColorCheck.value = false
           cColorCheck.enabled = false 
           cColorCheck.onClick ()
           general.enabled = true
           btnDo.enabled=true
       }
       else { if (lr.length==0) {
               cColorCheck.value = true
               cColorCheck.enabled = false 
               btnDo.enabled=false
               cColorCheck.onClick ()
               
               addition.enabled = false
               general.enabled = false
               addition.enabled = true
}
           else {       
               cColorCheck.value = atnXML.settings.doAllLayers
               cColorCheck.onClick ()
               }
        }
    
       if (renewLayers == true) {return}
        
       sUseSnapshot.value= atnXML.settings.useSnapshot
       sSaveAfter.value= atnXML.settings.saveAfter
       sSaveAfter.onClick ()
       sFormats.selection = atnXML.settings.saveAs
       aDoAtn.value=atnXML.settings.doAtn 
       
       if (atn.length>0) {
       for (var i = 0; i < atn.length; i++)
       { aGrpName.add ("item", atn[i].name); for (var x = 0; x < atn[i].children.length; x++) {aAtnName.add ("item", atn[i].children[x].name)}}
       
       var tmp =aGrpName.find(atnXML.settings.setName)
          if (tmp) {aGrpName.selection = tmp} else {aGrpName.selection =0}
              tmp =aAtnName.find(atnXML.settings.atnName)
          if (tmp) {aAtnName.selection = tmp} else {aAtnName.selection = 0}       
       } else 
        {aDoAtn.enabled = false
          aDoAtn.value = false }
          aDoAtn.onClick ()
         
         switch (Number(atnXML.settings.langId))   
        {
            case 0: addRus.onClick(false) break;
            case 1: addEng.onClick(false) break;
        }
         
        addBackground.value = atnXML.settings.doBackground
        addAllDocs.value=atnXML.settings.globalSnapshot
        addSliderJpg.value = Number(atnXML.settings.Jpg); addSliderJpg.onChanging ()
        addFlatten.value=atnXML.settings.flatten
}

function cptColorDropbox (cpt, count, icon)
{
    if (icon !=true)
    {
        switch (cpt)   
        {
            case "red": cpt = cptRed break;
            case "orange": cpt = cptOrange break;
            case "yellowColor": cpt = cptYellow break;
            case "grain": cpt = cptGreen break;
            case "blue": cpt = cptBlue break;
            case "violet": cpt = cptViolet break;
            case "gray": cpt = cptGray break;
            case "none": cpt = cptNone break;
            default: cpt = cptAll break;
           }
       cpt = " " + cpt + " - " + count + " " + numLayers(count)
    } else
    { switch (cpt)   
        {
            case "red": cpt = icoRed break;
            case "orange": cpt = icoOrange break;
            case "yellowColor": cpt = icoYellow break;
            case "grain": cpt = icoGreen break;
            case "blue": cpt = icoBlue break;
            case "violet": cpt = icoViolet break;
            case "gray": cpt = icoGray break;
            case "none": cpt = icoNone break;
            default: cpt = icoAll break;
         }
    }
   return cpt
   
function numLayers (count)
{
    var tmp = String
    tmp = String (count)
    if (tmp.length>=2) {tmp = tmp.substr (tmp.length-2, 2)} else {tmp = tmp.substr (tmp.length-1, 1)}
    if (Number(tmp) >=11 && Number(tmp)<= 14 ) {tmp = "15"} 
    if (tmp.length==2) {tmp = tmp.substr (tmp.length-1, 1)}
    count=Number(tmp)
    
     switch (count)   
        {
            case 0: tmp = numManyLayers break;
            case 1: tmp = numOneLayer break;
            case 2: tmp = numTwoLayers break;
            case 3: tmp = numTwoLayers break;
            case 4: tmp = numTwoLayers break;
            default:tmp = numManyLayers break;
            case "yellowColor": cpt = cptYellow break;
        }
    return tmp
}
}

function sumMarkedLayers () 
{
    var tmp = 0
    for (var i=0; i<lr.length; i++)
    {if (lr[i].name!="none") {tmp=tmp+lr[i].layers.length}}
    return tmp
}

return w
}

// =================================================
// =================================================

function collectLayers ()
{
 if (app.documents.length > 0 )
 {
    var doc = app.activeDocument
    var lr = doc.artLayers
    this.counter = lr.length
    var lrSet = doc.layerSets
    var enumLayers = new Array
  
    var lrLength = fastCollectLayers ()
    
    var progressWindow = createProgressWindow (XMLSettingsName, msgInit, 1, lrLength*2)
    progressWindow.show();
    progressWindow.isDone = false;
   
    for (var i = 0; i<this.counter; i++)
    {  progressWindow.updateProgress()
        LayersByColor (lr[i], enumLayers)}     
      
if (lrSet.length >0)
    {
        this.counter=lrSet.length
        for (var i = 0; i<this.counter; i++)
        {collectLayersInGroups (lrSet[i])}
    }
 
function collectLayersInGroups (parentSet)
{
    if (parentSet.artLayers.length >0)
        {  lr = parentSet.artLayers
            this.counter = lr.length
            for (var i = 0; i<this.counter; i++)
            {  progressWindow.updateProgress()
                LayersByColor (lr[i], enumLayers)}
       }
    if (parentSet.layerSets.length>0)
    {
         for (var i=0; i<parentSet.layerSets.length; i++)
         {collectLayersInGroups (parentSet.layerSets[i])}
     }
}
progressWindow.isDone = true
progressWindow.close()
}

function fastCollectLayers ()
{
 if (app.documents.length > 0)
 {
    var doc = app.activeDocument
    var lr = doc.artLayers
    var counter = lr.length
    var lrSet = doc.layerSets

if (lrSet.length >0)
    {
        for (var i = 0; i<lrSet.length; i++)
        {collectLayersInGroups (lrSet[i])}
    }

function collectLayersInGroups (parentSet)
{
    if (parentSet.artLayers.length >0)
        {counter = counter +parentSet.artLayers.length}
        
    if (parentSet.layerSets.length>0)
    {
         for (var i=0; i<parentSet.layerSets.length; i++)
         {collectLayersInGroups (parentSet.layerSets[i])}
     }
    }
}
return counter
}


function descLayer (lrObject)
{
    this.lr = lrObject
    if (lrObject.parent.id != app.activeDocument.id) {this.parent = lrObject.parent.id} else {this.parent = 0}
    this.name = lrObject.name
    this.visible = lrObject.visible
    this.locked = lrObject.allLocked
    this.background = lrObject.isBackgroundLayer
    this.parentVisible = lrObject.parent.visible
    this.parentLocked= lrObject.parent.allLocked
    return
 }

function LayersByColor (objDescLayer, layersArray)
{
    progressWindow.updateProgress()
    var isBackground = objDescLayer.isBackgroundLayer
    var Color = "none"
    
    if (isBackground==false) {Color =getLayerColourByID (objDescLayer.id)} else {if (atnXML.settings.doBackground == true) {return layersArray}}
    
    var yetInArray = false
  
     for (var i=0; i<layersArray.length; i++)
       { 
           if (layersArray[i].name==Color)
            {
                layersArray[i].layers.push (new descLayer(objDescLayer))
                yetInArray = true
            }  
        }
  
      if  (yetInArray ==false)
      {
        var colorGroup = new Object ()
        colorGroup.name = Color
        colorGroup.layers= new Array
        colorGroup.layers.push (new descLayer(objDescLayer))
        layersArray.push (colorGroup)
       } 
   
   return layersArray
}

function getLayerColourByID( ID ) 
{
    var ref = new ActionReference()
    ref.putIdentifier(charIDToTypeID('Lyr '), ID)
    return typeIDToStringID(executeActionGet(ref).getEnumerationValue(stringIDToTypeID('color')))
}

return enumLayers
}

function sortLayers (layersArray)
{
    var tmp = new Array
    
    for (var i=0; i<layersArray.length;i++) { if (layersArray[i].name=="red") {tmp.push (layersArray[i])}}
    for (var i=0; i<layersArray.length;i++) { if (layersArray[i].name=="orange") {tmp.push (layersArray[i])}}
    for (var i=0; i<layersArray.length;i++) { if (layersArray[i].name=="yellowColor") {tmp.push (layersArray[i])}}
    for (var i=0; i<layersArray.length;i++) { if (layersArray[i].name=="grain") {tmp.push (layersArray[i])}}
    for (var i=0; i<layersArray.length;i++) { if (layersArray[i].name=="blue") {tmp.push (layersArray[i])}}
    for (var i=0; i<layersArray.length;i++) { if (layersArray[i].name=="violet") {tmp.push (layersArray[i])}}
    for (var i=0; i<layersArray.length;i++) { if (layersArray[i].name=="gray") {tmp.push (layersArray[i])}}
    for (var i=0; i<layersArray.length;i++) { if (layersArray[i].name=="none") {tmp.push (layersArray[i])}}
    
    return tmp
}


function Batch ()
{
  var batch = layersToDo (lr)
  var doc = app.activeDocument
  var docName = doc.name
  var folderPath = File
  var fileName
  var tmp
  
  var progressWindow = createProgressWindow (XMLSettingsName, msgBatch, 1, batch.length*3 + 2, true)
  progressWindow.show();
  progressWindow.isDone = false;
    
  if (atnXML.settings.globalSnapshot == true)
  {
      for (var i=0; i < app.documents.length; i++)
      {
          app.activeDocument = app.documents[i]
          if (app.activeDocument.activeHistoryState.name != XMLSettingsName) {removeNamedSnapshot(XMLSettingsName)
          createNamedSnapshot(XMLSettingsName)}
       }
           app.activeDocument = doc
   } else 
        {
         if (app.activeDocument.activeHistoryState.name != XMLSettingsName) {removeNamedSnapshot(XMLSettingsName)
         createNamedSnapshot(XMLSettingsName)}
         }
     
   progressWindow.updateProgress()
   
      for (var i =0; i<batch.length; i++)
      {
          if (batch[i].parent != 0 && batch[i].parentLocked == true ) {batch[i].lr.parent.allLocked = false }
          if (batch[i].parent != 0 && batch[i].parentVisible == true ) {batch[i].lr.parent.visible = false }
          if (batch[i].locked == true && batch[i].background == false) {batch[i].lr.allLocked = false}
          if (batch[i].visible == true  && batch[i].background == false) {batch[i].lr.visible = false}
      }
    progressWindow.updateProgress()
    
    var tmpSet = doc.layerSets.add()
    tmpSet.remove()

     if (atnXML.settings.useSnapshot==true) {removeNamedSnapshot("BatchTmp"); createNamedSnapshot("BatchTmp")}         

    for (var i=(batch.length-1); i>=0; i--)
        {
            fileName = batch[i].name
            try {app.activeDocument=doc} catch (e) {alert (msgNoDoc1 + docName +msgNoDoc2, XMLSettingsName, true); break} 
            
            progressWindow.stProgress.text = ((batch.length-i )+ "/"+batch.length + " - " + fileName);
            progressWindow.updateProgress()
            
            try
            {if (batch[i].parent != 0) {batch[i].lr.parent.visible=true}
              batch[i].lr.visible= true
              doc.activeLayer=batch[i].lr
            } catch (e) {alert (msgNoLayer1 + batch[i].name +msgNoLayer2, XMLSettingsName, true)}
            
               if (atnXML.settings.doAtn==true)
               {try {app.doAction (atnXML.settings.atnName, atnXML.settings.setName)} catch (e) { alert(msgEsc, XMLSettingsName);break}}
               
                progressWindow.updateProgress()
              if (atnXML.settings.saveAfter == true)
              { try{folderPath = doc.path} catch (e) {alert (msgSave, XMLSettingsName,true); break}

                try {
                switch (atnXML.settings.saveAs)
                {
                case 0:
                    tmp=app.activeDocument.activeHistoryState
                    app.activeDocument.flatten()
                    app.activeDocument.bitsPerChannel=BitsPerChannelType.EIGHT
                    SaveAsJPEG (CreateUniqueFileName (folderPath, fileName, ".jpg"), atnXML.settings.Jpg)
                    app.activeDocument.activeHistoryState=tmp
                    break;
                case 1:
                    if (atnXML.settings.flatten == true)
                    {
                        tmp = app.activeDocument.activeHistoryState
                        app.activeDocument.flatten()
                        SaveAsPSD (CreateUniqueFileName (folderPath, fileName, ".psd"))
                        app.activeDocument.activeHistoryState = tmp
                    } else {SaveAsPSD (CreateUniqueFileName (folderPath, fileName, ".psd"))}
                     break;
                 case 2:
                 if (atnXML.settings.flatten == true)
                    {
                    tmp = app.activeDocument.activeHistoryState
                    app.activeDocument.flatten()
                    SaveAsTIFF (CreateUniqueFileName (folderPath, fileName, ".tif"))
                    app.activeDocument.activeHistoryState = tmp
                    } else {SaveAsTIFF (CreateUniqueFileName (folderPath, fileName, ".tif"))}
                    break;
                }
               } catch (e) {alert (errSave + e, XMLSettingsName, true); break}
            }
                progressWindow.updateProgress()
                
                if (atnXML.settings.useSnapshot==true)
                {
                     if (atnXML.settings.globalSnapshot==true)
                     {
                         for (var x=0;x<app.documents.length; x++)
                         {
                                app.activeDocument = app.documents[x]
                                if (app.activeDocument!=doc) 
                                {try {revertNamedSnapshot (XMLSettingsName)} catch (e) {app.activeDocument.activeHistoryState =app.activeDocument.historyStates[0]}}
                                else
                                {app.activeDocument  = doc
                                revertNamedSnapshot("BatchTmp")
                                }
                        } 
                    } else { app.activeDocument  = doc
                              revertNamedSnapshot("BatchTmp")
                              }
                } else  {app.activeDocument  = doc
                        try {doc.activeLayer=batch[i].lr} catch (e) {}} 
 }            
 if (atnXML.settings.useSnapshot==true) {removeNamedSnapshot("BatchTmp"); revertNamedSnapshot (XMLSettingsName)}         

progressWindow.isDone = true
progressWindow.close()


function createNamedSnapshot(name) {
    var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putClass( charIDToTypeID('SnpS') );
    desc.putReference( charIDToTypeID('null'), ref );
        var ref1 = new ActionReference();
        ref1.putProperty( charIDToTypeID('HstS'), charIDToTypeID('CrnH') );
    desc.putReference( charIDToTypeID('From'), ref1 );
    desc.putString( charIDToTypeID('Nm  '), name );
    desc.putEnumerated( charIDToTypeID('Usng'), charIDToTypeID('HstS'), charIDToTypeID('FllD') );
    executeAction( charIDToTypeID('Mk  '), desc, DialogModes.NO );
}

function removeNamedSnapshot(name) {
    var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putName( charIDToTypeID('SnpS'), name );
    desc.putReference( charIDToTypeID('null'), ref );
  try {  executeAction( charIDToTypeID('Dlt '), desc, DialogModes.NO )} catch (e) {}
}

function revertNamedSnapshot(name) {
    var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putName( charIDToTypeID('SnpS'), name );
    desc.putReference( charIDToTypeID('null'), ref );
    executeAction( charIDToTypeID('slct'), desc, DialogModes.NO );
}

function selectLayerById (ID)
{
   var ref = new ActionReference();
   ref.putIdentifier(charIDToTypeID('Lyr '), ID);
   var desc = new ActionDescriptor();
   desc.putReference(charIDToTypeID('null'), ref);
   desc.putBoolean(charIDToTypeID('MkVs'), true);
   executeAction(charIDToTypeID('slct'), desc, DialogModes.NO);
}

function deselectLayers ()
{
var idselectNoLayers = stringIDToTypeID( "selectNoLayers" );
    var desc8 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref2 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref2.putEnumerated( idLyr, idOrdn, idTrgt );
    desc8.putReference( idnull, ref2 );
executeAction( idselectNoLayers, desc8, DialogModes.NO );
}


function layersToDo (layersArray)
{
    lrToDo = new Array
    
    if (atnXML.settings.doAllLayers == false)
    {
        for (var i=0; i<layersArray.length; i++)
        {
            if (layersArray[i].name == atnXML.settings.selectedColor)
            {
                for (var x=0; x<layersArray[i].layers.length; x++) {lrToDo.push (layersArray[i].layers[x])}
                break
             }
         }
     } else
        {   for (var i=0; i<layersArray.length; i++)
        {   for (var x=0; x<layersArray[i].layers.length; x++) {if (layersArray[i].name != "none") {lrToDo.push (layersArray[i].layers[x])}}}
         } 
    return lrToDo
}

function SaveAsJPEG( inFileName, inQuality) {
	var jpegOptions = new JPEGSaveOptions();
	jpegOptions.quality = inQuality;
	app.activeDocument.saveAs( File( inFileName ), jpegOptions );
}

function SaveAsPSD( inFileName) {
	var psdSaveOptions = new PhotoshopSaveOptions();
	app.activeDocument.saveAs( File( inFileName ), psdSaveOptions );
}

function SaveAsTIFF( inFileName) {
	var tiffSaveOptions = new TiffSaveOptions();
    tiffSaveOptions.imageCompression = TIFFEncoding.NONE;
	app.activeDocument.saveAs( File( inFileName ), tiffSaveOptions );
}

function CreateUniqueFileName( inFolder, inFileName, inExtension ) {
	inFileName = inFileName.replace(/[:\/\\*\?\"\<\>\|]/g, "_");  // '/\:*?"<>|' -> '_'
	var uniqueFileName = inFolder  +  "/" + inFileName + inExtension;
	var fileNumber = 1;
	while ( File( uniqueFileName ).exists ) {
		uniqueFileName = inFolder +  "/" + inFileName + "_" + fileNumber + inExtension;
		fileNumber++;
	}
	return uniqueFileName;
}
}

function Params() {

this.LoadParamsFromDisk = function() {
    loadFile = GetDefaultParamsFile ()
		if ( loadFile.exists ) {
			loadFile.open( "r" );
			var projectSpace = ReadHeader( loadFile );
			if ( projectSpace == GetScriptNameForXML() ) {
				while ( ! loadFile.eof ) {
					var starter = ReadHeader( loadFile );
					var data = ReadData( loadFile );
					var ender = ReadHeader( loadFile );
					if ( ( "/" + starter ) == ender ) {
						this.settings[starter] = data;
					}
					if ( data == "true" || data == "false" ) {
						this.settings[starter] = data == "true";
					}
				}
			}
			loadFile.close();
		}
	}

	this.SaveParamsToDisk = function() {
         saveFile = GetDefaultParamsFile ()
		saveFile.encoding = "UTF8";
		saveFile.open( "w", "TEXT", "????" );
		saveFile.write("\uFEFF");
		var scriptNameForXML = GetScriptNameForXML();
		saveFile.writeln( "<" + scriptNameForXML + ">" );
		for ( var p in this.settings ) {
			saveFile.writeln( "\t<" + p + ">" + this.settings[p] + "</" + p + ">" );
		}
		saveFile.writeln( "</" + scriptNameForXML + ">" );
		saveFile.close();
	}

	this.InitParams = function() {
		var params = new Object();
         params.selectedColor = "red"
		params.doAllLayers = false
         params.useSnapshot = true
         params.saveAfter = true
         params.saveAs = 0 // 0 - jpg 1 - psd 2 - tif
         params.doAtn = true  
         params.setName = ""
         params.atnName = ""
         params.langId=0 //0 - rus 1 - eng
         params.doBackground=true
         params.globalSnapshot = true
         params.Jpg=12
         params.flatten=false
         params.progressX=0
         params.progressY=0
		return params;
	}

    this.settings = this.InitParams();

    function ReadHeader (inFile) {
	var returnValue = "";
	if ( ! inFile.eof ) {
		var c = "";
		while ( c != "<" && ! inFile.eof ) {
			c = inFile.read( 1 );
		}
		while ( c != ">" && ! inFile.eof ) {
			c = inFile.read( 1 );
			if ( c != ">" ) {
				returnValue += c;
			}
		}
	} else {
		returnValue = "end of file";
	}
	return returnValue;
}

    function ReadData (inFile) {
	var returnValue = "";
	if ( ! inFile.eof ) {
		var c = "";
		while ( c != "<" && ! inFile.eof ) {
			c = inFile.read( 1 );
			if ( c != "<" ) {
				returnValue += c;
			}
		}
		inFile.seek( -1, 1 );
	}
	return returnValue;
}

    function GetScriptNameForXML () {
	var scriptNameForXML = new String( XMLSettingsName );
	var charsToStrip = Array( " ", "'", "." );
	for (var a = 0; a < charsToStrip.length; a++ )  {
		var nameArray = scriptNameForXML.split( charsToStrip[a] );
		scriptNameForXML = "";
		for ( var b = 0; b < nameArray.length; b++ ) {
			scriptNameForXML += nameArray[b];
		}
	}
	return scriptNameForXML;
}

function GetDefaultParamsFile () {
	return ( new File( app.preferencesFolder + "/" + XMLSettingsName + ".xml" ) );
}
}

function GetActionSetInfo() {
	var actionSetInfo = new Array();
	var setCounter = 1;
  	while ( true ) {
		var ref = new ActionReference();
		ref.putIndex( gClassActionSet, setCounter );
		var desc = undefined;
		try { desc = executeActionGet( ref ); }
		catch( e ) { break; }
		var actionData = new ActionData();
		if ( desc.hasKey( gKeyName ) ) {
			actionData.name = desc.getString( gKeyName );
		}
		var numberChildren = 0;
		if ( desc.hasKey( gKeyNumberOfChildren ) ) {
			numberChildren = desc.getInteger( gKeyNumberOfChildren );
		}
		if ( numberChildren ) {
			actionData.children = GetActionInfo( setCounter, numberChildren );
			actionSetInfo.push( actionData );
		}
		setCounter++;
	}
	return actionSetInfo;
}

function ActionData() {
	this.name = "";
	this.children = undefined;
	this.toString = function () {
		var strTemp = this.name;
		if ( undefined != this.children ) {
			for ( var i = 0; i < this.children.length; i++ ) {
				strTemp += " " + this.children[i].toString();
			}
		}
		return strTemp;
	}
}

function GetActionInfo( setIndex, numChildren ) {
	var actionInfo = new Array();
	for ( var i = 1; i <= numChildren; i++ ) {
		var ref = new ActionReference();
		ref.putIndex( gClassAction, i );
		ref.putIndex( gClassActionSet, setIndex );
		var desc = undefined;
		desc = executeActionGet( ref );
		var actionData = new ActionData();
		if ( desc.hasKey( gKeyName ) ) {
			actionData.name = desc.getString( gKeyName );
		}
		var numberChildren = 0;
		if ( desc.hasKey( gKeyNumberOfChildren ) ) {
			numberChildren = desc.getInteger( gKeyNumberOfChildren );
		}
		actionInfo.push( actionData );
	}
	return actionInfo;
}


function createProgressWindow(title, message, min, max, firstRun) {
  
   var win = new Window('palette', title);
   win.bar = win.add('progressbar', undefined, min, max);
   win.bar.preferredSize=[340,20]
   win.stProgress = win.add('statictext',undefined,message);
   win.stProgress.preferredSize=[340,20]
   win.stProgress.alignment = "left"

   win.updateProgress = function(val) {
      var win = this;
      if (val != undefined) {
         win.bar.value = val;
      }else {
         win.bar.value++;
      }
      if (win.recenter) {
         win.center(win.parentWin);
      }
      win.update();
   }

win.onShow = function ()
    {
       if (firstRun == true) {
       win.location.x = atnXML.settings.progressX
       win.location.y = atnXML.settings.progressY
       if (win.location.x == 0 ||win.location.y==0) {win.center()}
       }
     }
    return win;
};