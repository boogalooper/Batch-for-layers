///////////////////////////////////////////////////////////////////////////////
// Advanced batch - revision 2.2
// jazz-y@ya.ru
///////////////////////////////////////////////////////////////////////////////
/*
<javascriptresource>
<category>jazzy</category>
<enableinfo>true</enableinfo>
</javascriptresource>
*/

#target photoshop

XMLSettingsName="Advanded batch"
paramsPanel={ru: "Пакетная обработка", en: "Batch"}
savePanel={ru: "Сохранять как...", en: "Save as..."}
atnPanel={ru: "Пакетная обработка", en: "Batch processing"}
cptColorPanelLrs={ru: "Выбор слоев для обработки", en: "Select layers for batch processing"}
cptColorPanelGroups={ru: "Выбор групп для обработки", en: "Select groups for batch processing"}
cptAutoSearchLrs={ru: "все отмеченные цветом слои", en: "all layers with color labels"}
cptAutoSearchGroups={ru: "все отмеченные цветом группы", en: "all groups with color labels"}
cptUseSnapshots={ru: "возвращаться к исходному состоянию", en: "back to snapshot after each iteration"}
cptSaveAfter={ru: "cохранять как...", en: "save as..."}
cptUseAtn={ru: "запуск операции для каждого слоя:", en: "play action for each layer:"}
cptSet={ru: "Группа:", en: "Action set:"}
cptAtn={ru: "Операция:", en: "Action:"}
cptRed={ru: "красный", en: "red"}
cptOrange={ru: "оранжевый", en: "orange"}
cptYellow={ru: "желтый", en: "yellow"}
cptGreen={ru: "зеленый", en: "green"}
cptBlue={ru: "cиний", en: "blue"}
cptViolet={ru: "фиолетовый", en: "violet"}
cptGray={ru: "серый", en: "gray"}
cptNone={ru: "без отметки", en: "no label"}
cptAll={ru: "всего отмечено", en: "total marked"}
cptOk={ru: "Обработка", en: "Processing"}
cptCancel={ru: "Отмена", en: "Cancel"}
cptTab1={ru: "Основные", en: "Main"}
cptTab2={ru: "Дополнительные", en: "Advanced"}
cptNotBackground={ru: "не обрабатывать фоновый слой", en: "do not process background layer"}
cptAllDocs={ru: "возвращать к исходному все документы", en: "back to initial state all opened documents"}
cptJpg={ru: "Качество jpg:", en: "Quality of jpg"}
cptFlatten={ru: "объединять слои (psd, tif)", en: "flatten layers (psd, tif)"}
cptLang={ru:"Интерфейс", en: "Interface"}
numOneLayer={ru: "слой", en: "layer"}
numTwoLayers={ru: "слоя", en: "layers"}
numManyLayers={ru: "слоев", en: "layers"}
numOneGroup={ru: "группа", en: "group"}
numTwoGroups={ru: "группы", en: "groups"}
numManyGroups={ru: "групп", en: "groups"}
alertLang={ru: "Изменения вступят в силу при следующем запуске!", en: "Changes will take effect the next time you start Advanced Batch"}
msgInit={ru: "подсчет и сортировка слоев...", en: "counting and sorting layers..."}
msgBatch={ru: "инициализация...", en: "preprocessing layers..."}
msgNoLayer1={ru: "Скрипт не может сделать активным слой [", en: "Script cannot set active layer ["}
msgNoLayer2={ru: "}.\rВозможно он был удален в процессе обработки.", en: "}.\rMaybe it's been deleteted during play Actions."}
msgNoDoc1={ru: "Скрипт не может сделать активным документ [", en: "Script cannot set active document ["}
msgNoDoc2={ru: "}.\rВозможно он был закрыт в процессе обработки.", en: "}.\rMaybe it's been closed during play Actions."}
msgEsc={ru: "Операция была остановлена в процессе выполнения!", en: "Operation was stopped during execution!"}
msgSave={ru: "Не найден путь для сохранения результатов обработки! Сохраните документ и откройте его повторно", en: "No path was found to save processing results! Save the document and reopen it."}
errSave={ru: "Ошибка при сохранении файла!\r", en: "Error saving file!"}
cptType={ru: "Обработка слоев следующих типов:", en:"Process following types of layers:"}
cptGraph={ru: "графические слои", en: "graphic layers"}
cptText={ru: "текстовые слои", en: "text layers"}
cptGroup={ru: "группы", en: "groups"}
cptOther={ru: "корректирующие слои", en: "adjustment layers"}
cptSel={ru: "выбранные слои", en: "selected layers"}
cptEng={ru: "Английский", en: "Eng"}
cptRus={ru: "Русский", en: "Rus"}
cptProgress={ru: "прогресс-бар во время обработки", en: "show progress bar during processing"}

$.localize = true
//$.locale = "ru"

icoRed = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00;IDAT\x18\u0095c\u00FCci\u00F3\u009F\u0081\b\u00C0\x02R\u00C2((\u0084W\u00E5\u00FF\u00F7\u00EF \n\u00C1\u0080\u0087\x17\u00BB\u00AA/\u009F\u00C1\x14\x131\u00D6\x0E\x15\u0085\b_C}\u0087W!(\u009C\u00F0\x02\x06\x06\x06\x00\x18\u00EF\fO\u0083\b\u00CC\u00FD\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoOrange = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c\u00FC\u00D2\u00A1\u00FA\u009F\u0081\b\u00C0\x02R\u00C2$\u00C8\u008DW\u00E5\u00BF\u00F7_!\nA\u0080\u0091\u0097\x03\u00AB\u00A2\u00FF\u009F\x7F\u0080i&b\u00AC\x1D*\n\u00E1\u00BE\u0086\u00F9\x0E\u00AFBP8\u00E1\x05\f\f\f\x00\u00D6!\x0E\u0088\x06d\u00F3\x07\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoYellow = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00;IDAT\x18\u0095c\u00FCp@\u00ED?\x03\x11\u0080\x05\u00A4\u0084\u0089\u0093\x1B\u00AF\u00CA\x7F\u00DF\u00BFB\x14\u0082\x15\u00B3s`W\u00F4\u00F3\x07D\u009E\x18k\u0087\u008AB\u00B8\u00AFa\u00BE\u00C3\u00AB\x10\x14Nx\x01\x03\x03\x03\x00+\u00AA\x0E\u00CA*\u0090\u00C3\u00A2\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoGreen = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c\u00F4\u00DEo\u00F8\u009F\u0081\b\u00C0\x02R\"\u00C6\u00C9\u008FW\u00E5\u00AB\u00EF\x1F!\nA@\u0090\u009D\x1B\u00AB\u00A2\u00F7?\u00BF\u0082i&b\u00AC\x1D*\n\u00E1\u00BE\u0086\u00F9\x0E\u00AFBP8\u00E1\x05\f\f\f\x000\x1F\x0E\x05z4V\u0094\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoBlue = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c4\u0099\u00F7\u00E1?\x03\x11\u0080\x05\u00A4D\u0080\u009F\t\u00AF\u00CA\x0F\x1F\u00FFA\x14\u0082\x007\x17v\u00C5_\u00BF\u00FD\x03\u00D3\u00F8\u008DB\x02CA!\u00DC\u00D70\u00DF\u00E1U\b\n'\u00BC\u0080\u0081\u0081\x01\x00\b\u00DD\x0E\u00A5\x7F\u00E7e\u008B\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoViolet = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c\u00DC\x1Fv\u00FD?\x03\x11\u0080\x05\u00A4\u0084S\u0092\r\u00AF\u00CA\u00EF\u00CF\x7FA\x14\u0082\x00\u00BB\x10\x0BVE?\u00DF\u00FD\x01\u00D3L\u00C4X;T\x14\u00C2\u00BD\n\u00F3\x1D^\u0085\u00A0p\u00C2\x0B\x18\x18\x18\x00KM\x0E\u00C2\u00AA\x19\u00A8d\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoGray = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095clk\u00EB\u00FC\u00CF@\x04`\x01)\x11\x12\x12\u00C4\u00AB\u00F2\u00DD\u00BB\u00F7\x10\u0085 \u00C0\u00CB\u00CB\u008BU\u00D1\u00E7\u00CF\u009F\u00C14\x131\u00D6\x0E\x15\u0085p_\u00C3|\u0087W!(\u009C\u00F0\x02\x06\x06\x06\x00\u00BE\u00A9\x0ET.#\u00D2&\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoNone = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00\u00CEIDAT\x18\u0095\u008D\u0090A\x0BE@\x14\u0085\u00CFLS\u00A2,D6~\u0083R\u00CAF\u00E4WS\u0094\u0094\u00C8N\u00F9\x19R\u00D6\x12^s\u00DF3\u00CF\u00EA\u00F5NM3\u00E7\u00CE\u0099\u00B9_\u0097\x15Eq\u00E1\x0F\t\x19\t\u0082\x00\u00D7uA\bA\u00FBS\u00D2\u008F\u00E3\b\u008E\u008F\x19\u0086\x01\u0086a\u00C0u]Z\u009A\u00A6\u00A1\u00EB:\u00F5\u0090\u0082\u009CsDQ\u0084\u00B2,\u00B1m\x1B\u00D6uE]\u00D7H\u0092\x04\u008C1\nRk)\u00CF\u00F3\u00E0\u00FB>\u00F2<'\x1F\u00C71\x1C\u00C7\u00C1<\u00CF\u00DF\x1Fo\u0099\u00A6\u00A9\u00CE\x12\u00E3)\u00C5\u00B8,\x0B\u00FA\u00BEG\u009A\u00A6\b\u00C3\x10UU\x11\u00C2-j-9\u00DA\u00B6E\u0096e\u00B0,\x0B\u00B6mC\u00D7u4MC\b\u00F2\u009E\u0082\u00C7qPa\u00DFw\u00C5ts\u009E\u00E7\u00F9\x1E\u009D,L\u00D3\u00F4{\u00E2\x00^\u00D6\u0089Tf\u00E31\u0087\u00CC\x00\x00\x00\x00IEND\u00AEB`\u0082"
icoAll="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00\u00B5IDAT\x18\u0095\u008D\u0090K\n\u00840\x10D+C\u00FC\u00E5\x06\u00D9\u00B8\u00F7\n\"nt\u00E3\u0089\u00C5\u0095\u00E0!\u00B2\u00CC-\x14\u00F1\u0097\u00A1{\u00B0a\x10\u0086)(:\u00A4_WB\u00AB\u00BE\u00EF\x03\u00FE\u0090&\u00A4\u00AEk!\u0097e\u0081R\nY\u0096\u00C9\u00DD4M\x1F\u0090\u0094\u00A6)\u009Cs\u00F0\u00DE#I\x12\u00E4y\u008E\u00A2(x\x10w\"i]W\u0086\u00BA\u00AE\u00C3\u00BE\u00EF\x18\u00C7\x11\u00D6Z\u00C4q\u00CC\u00FD\u00D7\r\x1E\u00C7\u00C15\u008A\"N$x\u009Egy^\x12\u00E9_\u00D7ua\x18\x06i\u009E\u00E7)gI\f!0\u00DC\u00B6-\u009A\u00A6\u0091\u00E1G\u00A2\u00D6\u009A\u00BDm\x1B\x03dc\u00CC\x13\u00A4\u00C4\u00B2,\u00B9\u0092\u00AB\u00AA\u00E2M|\u0081\u00B4\u00A7\u009F\x02\u00F0\x06\x05\"C\u00AEZ\f\u00AC\x18\x00\x00\x00\x00IEND\u00AEB`\u0082"

gClassActionSet = charIDToTypeID( 'ASet' );
gClassAction = charIDToTypeID( 'Actn' );
gKeyName = charIDToTypeID( 'Nm  ' );
gKeyNumberOfChildren = charIDToTypeID( 'NmbC' );

var atnXML = new Params()
atnXML.LoadParamsFromDisk()

var atn = GetActionSetInfo ()
var allLayers = new collectLayers ()
var doBatch = false

w = buildWindow ()
w.show()

function buildWindow ()
{
    var interfaceHeight = 1.2 
    var w = new Window ("dialog", XMLSettingsName)
    var tpanel = w.add ("tabbedpanel")
    var tab1 = tpanel.add ("tab", undefined, cptTab1)
    tpanel.margins = [0,0,0,0]

    var p1 = tab1.add ("panel") 
    p1.alignChildren = "fill"
    p1.preferredSize.width= 270
    p1.add ("group")

    var dropboxColor = p1.add ("dropdownlist")
    var checkboxColor = p1.add ("checkbox")
    dropboxColor.preferredSize.height= dropboxColor.preferredSize.height*interfaceHeight
    
    var p2 = tab1.add ("panel", undefined, atnPanel)
    p2.alignChildren = "fill"
    p2.add ("group")
    var checkboxDoAtn = p2.add ("checkbox",undefined, cptUseAtn)

    var g1 = p2.add ("group")
    g1.orientation = "row"
    var g2 = g1.add ("group")
    g2.orientation = "column"
    g2.alignChildren = "right"
    g2.preferredSize.width=70
    var txtSet = g2.add ("statictext",undefined, cptSet)
    var txtAtn = g2.add ("statictext",undefined, cptAtn)
    txtSet.preferredSize.height = txtAtn.preferredSize.height =  txtAtn.preferredSize.height*interfaceHeight*1.5

    var g3 = g1.add ("group")
    g3.orientation = "column"
    g3.alignChildren = "right"

    var dropboxGrpName = g3.add ("dropdownlist")
    var dropboxAtnName = g3.add ("dropdownlist")
    dropboxAtnName.preferredSize.width= dropboxGrpName.preferredSize.width= 160 
    dropboxAtnName.preferredSize.height= dropboxGrpName.preferredSize.height= dropboxGrpName.preferredSize.height*interfaceHeight
   
    var g4 = p2.add ("group")
    var checkboxSaveAfter = g4.add ("checkbox",undefined, cptSaveAfter)
    checkboxSaveAfter.preferredSize.width=150
    var dropboxFormats = g4.add ("dropdownlist",undefined, ["jpg", "psd","tif"])
    dropboxFormats.preferredSize.width=80
    dropboxFormats.preferredSize.height= dropboxFormats.preferredSize.height= dropboxFormats.preferredSize.height*interfaceHeight
    
    var checkboxUseSnapshot =  p2.add ("checkbox",undefined, cptUseSnapshots)

    var g5 = w.add ("group")
    var btnDo = g5.add ("button", undefined, cptOk, {name: "ok"});
    var btnCancel = g5.add ("button", undefined, cptCancel, {name: "cancel"});

    var tab2 = tpanel.add ("tab", undefined, cptTab2)

    tab2.alignChildren = "fill"

    var p3 = tab2.add ("panel", undefined, cptLang)
    var g6= p3.add ("group")
    g6.alignChildren = "center"
    
    var checkboxProgress= p3.add ("checkbox",undefined, cptProgress)
    
    var p4 = tab2.add ("panel", undefined, atnPanel)
    p4.alignChildren = "fill"
    p4.preferredSize.width= 270
    p4.add ("group")

    p4.add ("statictext", undefined, cptType)
    var dropboxType = p4.add ("dropdownlist",undefined, [cptGraph, cptText, cptGroup, cptOther, cptSel])
    dropboxType.preferredSize.height= dropboxType.preferredSize.height= dropboxType.preferredSize.height*interfaceHeight
    var checkboxBackground = p4.add ("checkbox",undefined, cptNotBackground)
    var checkboxAllDocs = p4.add ("checkbox",undefined, cptAllDocs)

    p4.add ("group")
    var g7 = p4.add ("group")
    g7.add("statictext",undefined, cptJpg)
    var statictextJpg = g7.add ("statictext", undefined,"12")
    var sliderJpg = g7.add ("slider", undefined, 12, 0, 12)
    sliderJpg.preferredSize.width =120
    var checkboxFlatten = p4.add ("checkbox",undefined, cptFlatten)

dropboxColor.onChange = function (){if (this.items.length==lr.length) {atnXML.settings.selectedColor=lr[this.selection.index].name}}
checkboxUseSnapshot.onClick = function (){atnXML.settings.useSnapshot=this.value; checkboxAllDocs.enabled=this.value}
dropboxFormats.onChange = function (){atnXML.settings.saveAs=this.selection.index}
dropboxGrpName.onChange = function (){atnXML.settings.setName=this.selection.text}
dropboxAtnName.onChange = function (){atnXML.settings.atnName=this.selection.text}
checkboxProgress.onClick = function (){atnXML.settings.progress= this.value; if (this.value == false) { atnXML.settings.progressX=0;  atnXML.settings.progressY=0}}
checkboxBackground.onClick = function (){atnXML.settings.doBackground= this.value; w.onShow(true)}
checkboxAllDocs.onClick = function (){atnXML.settings.globalSnapshot= this.value}
checkboxFlatten.onClick = function (){atnXML.settings.flatten=this.value}
sliderJpg.onChange = function () {atnXML.settings.Jpg=this.value}
sliderJpg.onChanging = function () {this.value = Math.round( Number (this.value)); statictextJpg.text = this.value }

checkboxColor.onClick = function ()
{
    if (this.value) {
        dropboxColor.add ("item", cptColorDropbox(undefined, sumMarkedLayers (), false))
        dropboxColor.items[dropboxColor.items.length-1].image =cptColorDropbox(undefined,undefined, true)
        dropboxColor.selection=dropboxColor.items.length-1
        dropboxColor.enabled=false
        atnXML.settings.doAllLayers = true
        } else {
            dropboxColor.enabled=true
            if (dropboxColor.items.length != lr.length) {dropboxColor.remove (dropboxColor.items.length-1)}
            for (var i =0; i<lr.length; i++) {if (lr[i].name==atnXML.settings.selectedColor) {dropboxColor.selection = i; break}} 
            atnXML.settings.doAllLayers = false
        }
}
checkboxSaveAfter.onClick = function ()
{
    if (this.value) {dropboxFormats.enabled=true} else {dropboxFormats.enabled=false}
    if (atnXML.settings.doAtn == false) {btnDo.enabled = this.value; checkboxUseSnapshot.enabled = this.value, checkboxAllDocs.enabled = this.value}
    atnXML.settings.saveAfter=this.value
}

checkboxDoAtn.onClick = function ()
{
    if (this.value) {dropboxGrpName.enabled=true; dropboxAtnName.enabled=true} else {dropboxGrpName.enabled=false; dropboxAtnName.enabled=false}
    if (atnXML.settings.saveAfter == false) {btnDo.enabled = this.value; btnDo.enabled = this.value; checkboxUseSnapshot.enabled = this.value, checkboxAllDocs.enabled = this.value}
    atnXML.settings.doAtn=this.value
}

btnDo.onClick = function ()
{
    atnXML.SaveParamsToDisk ()
    w.close ()
    doBatch = true
 }

btnCancel.onClick = function ()
{
    w.close ()
    doBatch = false
 }

dropboxType.onChange = function ()
{   if (this.selection !=0 && this.selection !=4 ) {checkboxBackground.enabled = false} else {checkboxBackground.enabled = true}
    switch (this.selection.index)
    {
        case 0: this.helpTip = "ArtLayers - type Normal, Smartobject"; break;
        case 1: this.helpTip = "ArtLayers - type Text"; break;
        case 2: this.helpTip = "Layer sets, Artboards, Frames"; break;
        case 3: this.helpTip = "ArtLayers - type SolidColor, GradientFill, PatternFill\nBrightnessContrast, Levels, Curves, Exposure\nVibrance, HueSaturation,BackAndWhite, PhotoFilter, ChannelMixer, ColorLookup\nInvert,Posterize, Threshold, GradientMap, SelectiveColor"; break;
        case 4: this.helpTip = "Selected layers - all types"
    }
    atnXML.settings.kind=this.selection.index
    
    w.onShow(true)
    }

w.onShow = function (renewLayers)
{   
     
      dropboxColor.removeAll()
      lr = sortLayers(layersByColor(layersByKind (allLayers)))
      
      for (var i =0; i<lr.length; i++)
      {dropboxColor.add ("item", cptColorDropbox(lr[i].name, lr[i].layers.length, false))
       dropboxColor.items[i].image =cptColorDropbox(lr[i].name,undefined, true)}
   
       for (var i =0; i<lr.length; i++) {if (lr[i].name==atnXML.settings.selectedColor) {break}}  
       
       if (i==lr.length) {i=0}
       dropboxColor.selection = i
       
       if (lr.length == 1 && lr[0].name == "none")
       {
           checkboxColor.value = false
           checkboxColor.enabled = false 
           checkboxColor.onClick ()
            btnDo.enabled=true
            checkboxDoAtn.enabled = true
            dropboxGrpName.enabled =true
            dropboxAtnName.enabled =true
            checkboxUseSnapshot.enabled=true
             checkboxAllDocs.enabled = checkboxUseSnapshot.value
             checkboxSaveAfter.enabled =true
       }
       else { if (lr.length==0) {
               checkboxColor.value = true
               checkboxColor.enabled = false 
               btnDo.enabled=false
               checkboxDoAtn.enabled = false
               dropboxGrpName.enabled =false
               dropboxAtnName.enabled =false
               checkboxUseSnapshot.enabled=false
               checkboxAllDocs.enabled = false
               checkboxSaveAfter.enabled =false
               checkboxColor.onClick ()
}
           else {       
               checkboxColor.value = atnXML.settings.doAllLayers
               checkboxColor.onClick ()
               }
        }
    
       if (atnXML.settings.kind != 2) {checkboxColor.text  =cptAutoSearchLrs; p1.text  =cptColorPanelLrs} else {checkboxColor.text  =cptAutoSearchGroups; p1.text  =cptColorPanelGroups}
     
       if (renewLayers == true) {return}
       
       tpanel.selection = 0
       checkboxUseSnapshot.value= atnXML.settings.useSnapshot
       checkboxSaveAfter.value= atnXML.settings.saveAfter; checkboxSaveAfter.onClick ()
       dropboxFormats.selection = atnXML.settings.saveAs
       checkboxDoAtn.value=atnXML.settings.doAtn 
                  
       if (atn.length>0) {
       for (var i = 0; i < atn.length; i++)
       { dropboxGrpName.add ("item", atn[i].name); for (var x = 0; x < atn[i].children.length; x++) {dropboxAtnName.add ("item", atn[i].children[x].name)}}
       
       var tmp =dropboxGrpName.find(atnXML.settings.setName)
       if (!tmp) {var ref = new ActionReference();  
               ref.putEnumerated( charIDToTypeID("Actn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
               var desc = executeActionGet(ref);  
               tmp = dropboxGrpName.find(desc.getString( charIDToTypeID("PrNm"))) }   
          if (tmp) {dropboxGrpName.selection = tmp} else {dropboxGrpName.selection =0}
         
              tmp =dropboxAtnName.find(atnXML.settings.atnName)
       if (!tmp) {var ref = new ActionReference();  
               ref.putEnumerated( charIDToTypeID("Actn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
               var desc = executeActionGet(ref);  
               tmp = dropboxAtnName.find(desc.getString( charIDToTypeID("Nm  "))) }   
          if (tmp) {dropboxAtnName.selection = tmp} else {dropboxAtnName.selection = 0}       
       } else 
        {checkboxDoAtn.enabled = false
          checkboxDoAtn.value = false }
          checkboxDoAtn.onClick ()

       checkboxProgress.value = atnXML.settings.progress
       dropboxType.selection =  Number (atnXML.settings.kind)
       checkboxBackground.value = atnXML.settings.doBackground
       checkboxAllDocs.value=atnXML.settings.globalSnapshot
       sliderJpg.value = Number(atnXML.settings.Jpg); sliderJpg.onChanging ()
       checkboxFlatten.value=atnXML.settings.flatten
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
            case 0: if (atnXML.settings.kind != 2) {tmp =numManyLayers} else {tmp =numManyGroups} break;
            case 1: if (atnXML.settings.kind != 2) {tmp =numOneLayer} else {tmp =numOneGroup} break;
            case 2: if (atnXML.settings.kind != 2) {tmp =numTwoLayers} else {tmp =numTwoGroups} break;
            case 3: if (atnXML.settings.kind != 2) {tmp =numTwoLayers} else {tmp =numTwoGroups} break;
            case 4: if (atnXML.settings.kind != 2) {tmp =numTwoLayers} else {tmp =numTwoGroups} break;
            default: if (atnXML.settings.kind != 2) {tmp =numManyLayers} else {tmp =numManyGroups} break;
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

if (doBatch) {Batch ()}

function collectLayers ()
{
 if (app.documents.length > 0 )
 {
    var doc = app.activeDocument
    var lr = doc.layers
    this.counter = lr.length
    var lrSet = doc.layerSets
    var enumLayers = new Array
    var selectedLayers = new Array
    
   selectedLayers = get_selected_layers()  
   var lrLength = fastCollectLayers ()
    
  var progressWindow = createProgressWindow (XMLSettingsName, msgInit, 1, lrLength)
  progressWindow.show();
  progressWindow.isDone = false;
   
    for (var i = 0; i<this.counter; i++)
    {progressWindow.updateProgress()
         enumLayers.push (new descLayer(lr[i], selectedLayers))}     
      
if (lrSet.length >0)
    {
        this.counter=lrSet.length
        for (var i = 0; i<this.counter; i++)
        {collectLayersInGroups (lrSet[i])}
    }
 
function collectLayersInGroups (parentSet)
{
    if (parentSet.layers.length >0)
        {  lr = parentSet.layers
            this.counter = lr.length
            for (var i = 0; i<this.counter; i++)
            {progressWindow.updateProgress()
                enumLayers.push (new descLayer(lr[i], selectedLayers))}
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
    var lr = doc.layers
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
        {counter = counter +parentSet.layers.length}
        
    if (parentSet.layerSets.length>0)
    {
         for (var i=0; i<parentSet.layerSets.length; i++)
         {collectLayersInGroups (parentSet.layerSets[i])}
     }
    }
}

return counter
}

function descLayer (lrObject, selArray)
{
    this.lr = lrObject
    if (lrObject.parent.id != app.activeDocument.id) {this.parent = lrObject.parent.id} else {this.parent = 0}
    this.name = lrObject.name
    this.visible = lrObject.visible
    this.locked = lrObject.allLocked
    this.background = lrObject.isBackgroundLayer
    this.parentVisible = lrObject.parent.visible
    this.parentLocked= lrObject.parent.allLocked
    this.selected = false
    for (var i =0; i<selArray.length; i++) {if (lrObject.id == selArray[i]) {this.selected = true; break}}
    if (lrObject.typename == "LayerSet") {this.kind = "LayerSet"} else {this.kind = String (lrObject.kind) }
    return
 }

function get_selected_layers()      
    {      
    try {  
        var idx_shift = 0;    
        try { activeDocument.backgroundLayer } catch (e) { idx_shift = 1; }   
        
        var r = new ActionReference();          
        r.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("targetLayers"));         
        r.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));      
      
        var list = executeActionGet(r).getList(stringIDToTypeID("targetLayers"));      
        var len = list.count;      
        var selected_layers = new Array();      
          
        for (var i = 0; i < len; i++)      
            {      
            try       
                {      
                var idx = list.getReference(i).getIndex() + idx_shift;         
                var r = new ActionReference();      
                r.putIndex( charIDToTypeID( "Lyr " ), idx);      
                var ret = executeActionGet(r);   
                selected_layers.push(ret.getString(stringIDToTypeID("layerID")));      
                }     
            catch (e) { alert(e); return null; }      
            }      
          
        return selected_layers;      
        }      
      
    catch (e) { return null; }      
}      

return enumLayers
}

function layersByKind (layersArray)
{
    var tmp = new Array
    
    for (var i=0; i<layersArray.length;i++)
    {
        switch (Number (atnXML.settings.kind))
        {
            case 0:
            if (layersArray[i].kind == "LayerKind.NORMAL" || layersArray[i].kind == "LayerKind.SMARTOBJECT") {tmp.push (layersArray[i])}
            break;
            case 1:
            if (layersArray[i].kind == "LayerKind.TEXT") {tmp.push (layersArray[i])}
            break;
            case 2:
            if (layersArray[i].kind == "LayerSet") {tmp.push (layersArray[i])}
            break;
            case 3:
            if (layersArray[i].kind != "LayerSet" && layersArray[i].kind != "LayerKind.TEXT" && layersArray[i].kind != "LayerKind.NORMAL" && layersArray[i].kind != "LayerKind.SMARTOBJECT" && layersArray[i].kind != "LayerKind.LAYER3D" && layersArray[i].kind != "LayerKind.VIDEO") {tmp.push (layersArray[i])}
            case 4:
            if (layersArray[i].selected == true) {tmp.push (layersArray[i])}
            break;
        }
     }
    return tmp
 }

function layersByColor (layersArray)
{
    var tmp = new Array
  
     for (var i=0; i<layersArray.length;i++)
    {
        var isBackground = layersArray[i].lr.isBackgroundLayer
        var Color = "none"
        
        if (isBackground==true) {if (atnXML.settings.doBackground == true) {continue;}} else {Color =getLayerColourByID (layersArray[i].lr.id)}
        
        var yetInArray = false
      
         for (var x=0; x<tmp.length; x++)
           { 
               if (tmp[x].name==Color)
                {
                    tmp[x].layers.push (layersArray[i])
                    yetInArray = true
                }  
            }
      
          if  (yetInArray ==false)
          {
            var colorGroup = new Object ()
            colorGroup.name = Color
            colorGroup.layers= new Array
            colorGroup.layers.push (layersArray[i])
            tmp.push (colorGroup)
       } 
   }
   
   return tmp
   
function getLayerColourByID( ID ) 
{
    var ref = new ActionReference()
    ref.putIdentifier(charIDToTypeID('Lyr '), ID)
    return typeIDToStringID(executeActionGet(ref).getEnumerationValue(stringIDToTypeID('color')))
}   
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
  
  if (atnXML.settings.progress) {
  var progressWindow = createProgressWindow (XMLSettingsName, msgBatch, 1, batch.length*3 + 2, true)
  progressWindow.show();
  progressWindow.isDone = false;}
    
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
     
      if (atnXML.settings.progress) {progressWindow.updateProgress()}
   
      for (var i =0; i<batch.length; i++)
      {
          if (batch[i].parent != 0 && batch[i].parentLocked == true ) {batch[i].lr.parent.allLocked = false }
          if (batch[i].parent != 0 && batch[i].parentVisible == true ) {batch[i].lr.parent.visible = false }
          if (batch[i].locked == true && batch[i].background == false) {batch[i].lr.allLocked = false}
          if (batch[i].visible == true  && batch[i].background == false) {batch[i].lr.visible = false}
      }
    if (atnXML.settings.progress) {progressWindow.updateProgress()}
    
    var tmpSet = doc.layerSets.add()
    tmpSet.remove()
    
        if (atnXML.settings.useSnapshot==true) {removeNamedSnapshot("BatchTmp"); createNamedSnapshot("BatchTmp")}         
        
        for (var i=(batch.length-1); i>=0; i--)
        {
            fileName = batch[i].name
            try {app.activeDocument=doc} catch (e) {alert (msgNoDoc1 + docName +msgNoDoc2, XMLSettingsName, true); break} 
            
            if (atnXML.settings.progress) {
            progressWindow.stProgress.text = ((batch.length-i )+ "/"+batch.length + " - " + fileName);
            progressWindow.updateProgress()}
            
            if (batch[i].background!=true)
            {
            try
            {if (batch[i].parent != 0) {batch[i].lr.parent.visible=true}
              batch[i].lr.visible= true
              doc.activeLayer=batch[i].lr
            } catch (e) {alert (msgNoLayer1 + batch[i].name +msgNoLayer2, XMLSettingsName, true)}
            } else try {doc.activeLayer=batch[i].lr} catch (e) {}

               if (atnXML.settings.doAtn==true)
               {try {app.doAction (atnXML.settings.atnName, atnXML.settings.setName)} catch (e) { alert(msgEsc, XMLSettingsName);break}}
               
              if (atnXML.settings.progress) {progressWindow.updateProgress()}
              
              if (atnXML.settings.saveAfter == true)
              { try{folderPath = doc.path} catch (e) {alert (msgSave, XMLSettingsName,true); break}

                try {
                switch (atnXML.settings.saveAs)
                {
                case 0:
                    tmp=app.activeDocument.activeHistoryState
                    app.activeDocument.flatten()
                    app.activeDocument.bitsPerChannel=BitsPerChannelType.EIGHT
                    app.activeDocument.channels.removeAll()
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
               if (atnXML.settings.progress) { progressWindow.updateProgress()}
                
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
                                {revertNamedSnapshot("BatchTmp")}
                        } 
                            app.activeDocument  = doc  
                    } else { app.activeDocument  = doc
                              revertNamedSnapshot("BatchTmp")}
                } else  {app.activeDocument  = doc}     
 }            
 if (atnXML.settings.useSnapshot==true) {removeNamedSnapshot("BatchTmp"); revertNamedSnapshot (XMLSettingsName)}         

if (atnXML.settings.progress) {
progressWindow.isDone = true
progressWindow.close()}


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
/*
function selectLayerByID(index,add){
    add = undefined ? add = false:add
    var ref = new ActionReference();
        ref.putIdentifier(charIDToTypeID("Lyr "), index);
        var desc = new ActionDescriptor();
        desc.putReference(charIDToTypeID("null"), ref );
           if(add) desc.putEnumerated( stringIDToTypeID( "selectionModifier" ), stringIDToTypeID( "selectionModifierType" ), stringIDToTypeID( "addToSelection" ) );
          desc.putBoolean( charIDToTypeID( "MkVs" ), false );
       try{
        executeAction(charIDToTypeID("slct"), desc, DialogModes.NO );
    }catch(e){
    alert(e.message);
*/
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
         params.doBackground=true
         params.globalSnapshot = true
         params.Jpg=12
         params.flatten=false
         params.kind = 0  // 0 - графические, 1 - текстовые, 2 - группы, 3 - корректирующие слои, 4 - выбранные слои
         params.progressX=0
         params.progressY=0
         params.progress = true
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


function createProgressWindow(title, message, min, max, batchMode) {
  
   var win = new Window('palette', title)
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
       if (batchMode == true) {
       win.location.x = atnXML.settings.progressX
       win.location.y = atnXML.settings.progressY
       if (win.location.x==0 || win.location.y==0) {win.center ()}
     }
 }

win.onClose = function ()
{
      if (batchMode == true) {
      atnXML.settings.progressX =  win.location.x
      atnXML.settings.progressY =  win.location.y
      atnXML.SaveParamsToDisk ()
     }
 }
    return win;
};