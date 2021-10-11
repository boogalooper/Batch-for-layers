 ///////////////////////////////////////////////////////////////////////////////
// Batch for layers
// jazz-y@ya.ru
///////////////////////////////////////////////////////////////////////////////
/*
<javascriptresource>
<category>jazzy</category>
<enableinfo>true</enableinfo>
</javascriptresource>
*/

#target photoshop

$.localize = true
//$.locale = "ru"

//bin here
XMLSettingsName="Batch for layers"
alertLang={ru: "Изменения вступят в силу при следующем запуске!", en: "Changes will take effect the next time you start Advanced Batch"}
atnPanel={ru: "Выполнить", en: "Play"}
cptActiveDoc={ru: "активный документ", en: "active document"}
cptAll={ru: "всего", en: "total"}
cptAllDocs={ru: "все документы", en: "all opened documents"}
cptAtn={ru: "Операция:", en: "Action:"}
cptAutoSearchGroups={ru: "все группы", en: "all groups"}
cptAutoSearchLrs={ru: "все слои указанного типа", en: "all layers of the specified type"}
cptBlue={ru: "cиний", en: "blue"}
cptCancel={ru: "Отмена", en: "Cancel"}
cptColorPanelLrs={ru: "Источник", en: "Source"}
cptEng={ru: "Английский", en: "Eng"}
cptGraph={ru: "графические слои", en: "graphic layers"}
cptGray={ru: "серый", en: "gray"}
cptGreen={ru: "зеленый", en: "green"}
cptGroup={ru: "группы", en: "groups"}
cptIndex={ru: "заменить файлы при сохранении", en: "replace files when saving"}
cptFlatten={ru: "Объединять слои перед сохранением", en: "Flatten layers before save"}
cptJpg={ru: "Качество jpg:", en: "Quality of jpg"}
cptLang={ru:"Параметры предварительной обработки", en: "Preprocess options"}
cptMarkedLrs={ru: "Метки:", en: "Labels:"}
cptNone={ru: "без отметки", en: "no label"}
cptNotBackground={ru: "не обрабатывать фоновый слой", en: "do not process background layer"}
cptOk={ru: "Обработка", en: "Processing"}
cptOrange={ru: "оранжевый", en: "orange"}
cptOther={ru: "корректирующие слои", en: "adjustment layers"}
cptRed={ru: "красный", en: "red"}
cptRus={ru: "Русский", en: "Rus"}
cptSaveAfter={ru: "cохранить как...", en: "save as..."}
cptSel={ru: "выделенные слои", en: "selected layers"}
cptSet={ru: "Набор:", en: "Set:"}
cptSnapshots={ru: "Снимки состояния", en: "Snapshots"}
cptText={ru: "текстовые слои", en: "text layers"}
cptTypeLrs={ru: "Тип:", en: "Type:"}
cptUseAtn={ru: "запуск операции:", en: "play action:"}
cptUseSnapshots={ru: "возвращать к исходному состоянию:", en: "back to initital state:"}
cptViolet={ru: "фиолетовый", en: "violet"}
cptYellow={ru: "желтый", en: "yellow"}
errSave={ru: "Ошибка при сохранении файла!\r", en: "Error saving file!"}
cptVis = {ru: "видимость источника:", en: "set visiblity of source layers:"}
cptVis0 = {ru: "не изменять", en: "do not change"}
cptVis1 = {ru: "сделать видимым", en: "make visible"}
cptVis2 = {ru: "сделать невидимым", en: "make invisible"}
msgBatch={ru: "инициализация...", en: "preprocessing layers..."}
msgEsc={ru: "Операция была остановлена в процессе выполнения!", en: "Operation was stopped during execution!"}
msgInit={ru: "подсчет и сортировка слоев...", en: "counting and sorting layers..."}
msgNoDoc1={ru: "Скрипт не может сделать активным документ [", en: "Script cannot set active document ["}
msgNoDoc2={ru: "}.\rВозможно он был закрыт в процессе обработки.", en: "}.\rMaybe it's been closed during play Actions."}
msgNoLayer1={ru: "Скрипт не может сделать активным слой [", en: "Script cannot set active layer ["}
msgNoLayer2={ru: "}.\rВозможно он был удален в процессе обработки.", en: "}.\rMaybe it's been deleteted during play Actions."}
msgSave={ru: "Не найден путь для сохранения результатов обработки! Сохраните документ и откройте его повторно", en: "No path was found to save processing results! Save the document and reopen it."}
numManyGroups={ru: "групп", en: "groups"}
numManyLayers={ru: "слоев", en: "layers"}
numOneGroup={ru: "группа", en: "group"}
numOneLayer={ru: "слой", en: "layer"}
numTwoGroups={ru: "группы", en: "groups"}
numTwoLayers={ru: "слоя", en: "layers"}
paramsPanel={ru: "Пакетная обработка", en: "Batch"}
savePanel={ru: "Сохранить", en: "Save"}

var GUID = "4e3192a1-e533-4b4f-81ea-32a088e9b7fa",
appVersion =Number(app.version.split(".")[0]),
isCancelled = false,
ver = "3.32";

if (appVersion>=14 && app.documents.length>0)
{
    var atnXML = new Object() 
    initExportInfo(atnXML) 

    try {var d = app.getCustomOptions(GUID)
    if (d!=undefined) descriptorToObject(atnXML, d, XMLSettingsName)} catch (e) {}

   // atnXML.progress = true
    
    var atn = GetActionSetInfo ()
    var allLayers = collectLayers ()
    var doBatch = false
    var lr 
    
    var w = buildWindow ()
    var result = w.show()
    
    if (doBatch) {Batch ()}
}

!doBatch ? 'cancel' : undefined;

function buildWindow ()
{
    var icoRed = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00;IDAT\x18\u0095c\u00FCci\u00F3\u009F\u0081\b\u00C0\x02R\u00C2((\u0084W\u00E5\u00FF\u00F7\u00EF \n\u00C1\u0080\u0087\x17\u00BB\u00AA/\u009F\u00C1\x14\x131\u00D6\x0E\x15\u0085\b_C}\u0087W!(\u009C\u00F0\x02\x06\x06\x06\x00\x18\u00EF\fO\u0083\b\u00CC\u00FD\x00\x00\x00\x00IEND\u00AEB`\u0082"
    var icoOrange = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c\u00FC\u00D2\u00A1\u00FA\u009F\u0081\b\u00C0\x02R\u00C2$\u00C8\u008DW\u00E5\u00BF\u00F7_!\nA\u0080\u0091\u0097\x03\u00AB\u00A2\u00FF\u009F\x7F\u0080i&b\u00AC\x1D*\n\u00E1\u00BE\u0086\u00F9\x0E\u00AFBP8\u00E1\x05\f\f\f\x00\u00D6!\x0E\u0088\x06d\u00F3\x07\x00\x00\x00\x00IEND\u00AEB`\u0082"
    var icoYellow = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00;IDAT\x18\u0095c\u00FCp@\u00ED?\x03\x11\u0080\x05\u00A4\u0084\u0089\u0093\x1B\u00AF\u00CA\x7F\u00DF\u00BFB\x14\u0082\x15\u00B3s`W\u00F4\u00F3\x07D\u009E\x18k\u0087\u008AB\u00B8\u00AFa\u00BE\u00C3\u00AB\x10\x14Nx\x01\x03\x03\x03\x00+\u00AA\x0E\u00CA*\u0090\u00C3\u00A2\x00\x00\x00\x00IEND\u00AEB`\u0082"
    var icoGreen = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c\u00F4\u00DEo\u00F8\u009F\u0081\b\u00C0\x02R\"\u00C6\u00C9\u008FW\u00E5\u00AB\u00EF\x1F!\nA@\u0090\u009D\x1B\u00AB\u00A2\u00F7?\u00BF\u0082i&b\u00AC\x1D*\n\u00E1\u00BE\u0086\u00F9\x0E\u00AFBP8\u00E1\x05\f\f\f\x000\x1F\x0E\x05z4V\u0094\x00\x00\x00\x00IEND\u00AEB`\u0082"
    var icoBlue = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c4\u0099\u00F7\u00E1?\x03\x11\u0080\x05\u00A4D\u0080\u009F\t\u00AF\u00CA\x0F\x1F\u00FFA\x14\u0082\x007\x17v\u00C5_\u00BF\u00FD\x03\u00D3\u00F8\u008DB\x02CA!\u00DC\u00D70\u00DF\u00E1U\b\n'\u00BC\u0080\u0081\u0081\x01\x00\b\u00DD\x0E\u00A5\x7F\u00E7e\u008B\x00\x00\x00\x00IEND\u00AEB`\u0082"
    var icoViolet = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095c\u00DC\x1Fv\u00FD?\x03\x11\u0080\x05\u00A4\u0084S\u0092\r\u00AF\u00CA\u00EF\u00CF\x7FA\x14\u0082\x00\u00BB\x10\x0BVE?\u00DF\u00FD\x01\u00D3L\u00C4X;T\x14\u00C2\u00BD\n\u00F3\x1D^\u0085\u00A0p\u00C2\x0B\x18\x18\x18\x00KM\x0E\u00C2\u00AA\x19\u00A8d\x00\x00\x00\x00IEND\u00AEB`\u0082"
    var icoGray = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00=IDAT\x18\u0095clk\u00EB\u00FC\u00CF@\x04`\x01)\x11\x12\x12\u00C4\u00AB\u00F2\u00DD\u00BB\u00F7\x10\u0085 \u00C0\u00CB\u00CB\u008BU\u00D1\u00E7\u00CF\u009F\u00C14\x131\u00D6\x0E\x15\u0085p_\u00C3|\u0087W!(\u009C\u00F0\x02\x06\x06\x06\x00\u00BE\u00A9\x0ET.#\u00D2&\x00\x00\x00\x00IEND\u00AEB`\u0082"
    var icoNone = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00\u00CEIDAT\x18\u0095\u008D\u0090A\x0BE@\x14\u0085\u00CFLS\u00A2,D6~\u0083R\u00CAF\u00E4WS\u0094\u0094\u00C8N\u00F9\x19R\u00D6\x12^s\u00DF3\u00CF\u00EA\u00F5NM3\u00E7\u00CE\u0099\u00B9_\u0097\x15Eq\u00E1\x0F\t\x19\t\u0082\x00\u00D7uA\bA\u00FBS\u00D2\u008F\u00E3\b\u008E\u008F\x19\u0086\x01\u0086a\u00C0u]Z\u009A\u00A6\u00A1\u00EB:\u00F5\u0090\u0082\u009CsDQ\u0084\u00B2,\u00B1m\x1B\u00D6uE]\u00D7H\u0092\x04\u008C1\nRk)\u00CF\u00F3\u00E0\u00FB>\u00F2<'\x1F\u00C71\x1C\u00C7\u00C1<\u00CF\u00DF\x1Fo\u0099\u00A6\u00A9\u00CE\x12\u00E3)\u00C5\u00B8,\x0B\u00FA\u00BEG\u009A\u00A6\b\u00C3\x10UU\x11\u00C2-j-9\u00DA\u00B6E\u0096e\u00B0,\x0B\u00B6mC\u00D7u4MC\b\u00F2\u009E\u0082\u00C7qPa\u00DFw\u00C5ts\u009E\u00E7\u00F9\x1E\u009D,L\u00D3\u00F4{\u00E2\x00^\u00D6\u0089Tf\u00E31\u0087\u00CC\x00\x00\x00\x00IEND\u00AEB`\u0082"
    var icoAll="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00\u00B5IDAT\x18\u0095\u008D\u0090K\n\u00840\x10D+C\u00FC\u00E5\x06\u00D9\u00B8\u00F7\n\"nt\u00E3\u0089\u00C5\u0095\u00E0!\u00B2\u00CC-\x14\u00F1\u0097\u00A1{\u00B0a\x10\u0086)(:\u00A4_WB\u00AB\u00BE\u00EF\x03\u00FE\u0090&\u00A4\u00AEk!\u0097e\u0081R\nY\u0096\u00C9\u00DD4M\x1F\u0090\u0094\u00A6)\u009Cs\u00F0\u00DE#I\x12\u00E4y\u008E\u00A2(x\x10w\"i]W\u0086\u00BA\u00AE\u00C3\u00BE\u00EF\x18\u00C7\x11\u00D6Z\u00C4q\u00CC\u00FD\u00D7\r\x1E\u00C7\u00C15\u008A\"N$x\u009Egy^\x12\u00E9_\u00D7ua\x18\x06i\u009E\u00E7)gI\f!0\u00DC\u00B6-\u009A\u00A6\u0091\u00E1G\u00A2\u00D6\u009A\u00BDm\x1B\x03dc\u00CC\x13\u00A4\u00C4\u00B2,\u00B9\u0092\u00AB\u00AA\u00E2M|\u0081\u00B4\u00A7\u009F\x02\u00F0\x06\x05\"C\u00AEZ\f\u00AC\x18\x00\x00\x00\x00IEND\u00AEB`\u0082"

    var interfaceHeight = 1.2 
    var w = new Window ("dialog", XMLSettingsName + " " + ver)
    w.orientation = "row"
    w.alignChildren = "top"
    
    var g0 = w.add ("group")  // правая панель
    g0.orientation = "column" 
    g0.alignChildren = "fill"
    
    var p2 = g0.add ("panel", undefined, atnPanel) // панель операций
    p2.preferredSize.width= 300
    p2.alignChildren = "fill"
    
    p2.add ("group") //пустая группа-разделитель
    
    var checkboxDoAtn = p2.add ("checkbox",undefined, cptUseAtn)

    var g1 = p2.add ("group") // контейнер для дроп-боксов
    g1.orientation = "column"
    g1.alignChildren = "right"
    
    var g2 = g1.add ("group") // контейнер для имени группы
    g2.alignChildren = "right"
    var txtSet = g2.add ("statictext",undefined, cptSet)
    var dropboxGrpName = g2.add ("dropdownlist")
    
    var g3 = g1.add ("group") // контейнер для имени операции
    g3.add ("statictext",undefined, cptAtn)
    var dropboxAtnName = g3.add ("dropdownlist")
    
    dropboxAtnName.preferredSize.width= dropboxGrpName.preferredSize.width=190
    dropboxAtnName.preferredSize.height= dropboxGrpName.preferredSize.height= dropboxGrpName.preferredSize.height*interfaceHeight
    
    var p1 =  g0.add ("panel",undefined, cptColorPanelLrs) // панель слоев
    p1.alignChildren = "fill"
    p1.preferredSize.width= 300
    
    p1.add ("group") //пустая группа-разделитель
    
    var g8 = p1.add ("group") // контейнер для дроп-боксов
    g8.orientation = "column"
    g8.alignChildren = "right"
    
    var g9 = g8.add ("group") // контейнер для типа слоя
    g9.alignChildren = "right"
    g9.add ("statictext",undefined, cptTypeLrs)
    var dropboxType = g9.add ("dropdownlist",undefined, [cptGraph, cptText, cptGroup, cptOther, cptSel])
    
    var g11 = g8.add ("group") // контейнер для цветовых меток
    g11.alignChildren = "right"
    g11.add ("statictext",undefined, cptMarkedLrs)
    var dropboxColor = g11.add ("dropdownlist")
    
    var checkboxColor = p1.add ("checkbox")
    dropboxColor.preferredSize.height= dropboxType.preferredSize.height= dropboxType.preferredSize.height*interfaceHeight
    dropboxColor.preferredSize.width= dropboxType.preferredSize.width=190
    
    var checkboxBackground = p1.add ("checkbox",undefined, cptNotBackground)

    var g10 = w.add ("group") 
    g10.orientation = "column"
    g10.alignChildren = "fill"
    var p4 =g10.add ("panel", undefined, savePanel)
    p4.alignChildren = "fill"
    p4.preferredSize.width= 290
    p4.add ("group")

    var g4 = p4.add ("group")
    var checkboxSaveAfter = g4.add ("checkbox",undefined, cptSaveAfter)
    checkboxSaveAfter.preferredSize.width=160
    var dropboxFormats = g4.add ("dropdownlist",undefined, ["jpg", "psd","tif"])
    dropboxFormats.preferredSize.width=100
    dropboxFormats.preferredSize.height= dropboxFormats.preferredSize.height= dropboxFormats.preferredSize.height*interfaceHeight
    
    var g7 = p4.add ("group") 

    var checkboxIndex = p4.add ("checkbox", undefined, cptIndex)
    
    var p5 = g10.add ("panel", undefined, cptSnapshots)
    p5.alignChildren = "fill"
    p5.add ("group") 
    var checkboxSnapshot = p5.add ("checkbox",undefined, cptUseSnapshots)
    var dropboxSnapshot = p5.add ("dropdownlist",undefined, [cptActiveDoc, cptAllDocs])
    dropboxSnapshot.preferredSize.height= dropboxSnapshot.preferredSize.height*interfaceHeight
    
    var p3 = g10.add ("panel", undefined, cptLang)
    var g6= p3.add ("group")

    var g12 = p3.add ("group")
    g12.orientation = "row"
    g12.alignChildren = "left"
   // var checkboxProgress= p3.add ("checkbox",undefined, cptProgress)
    var stVisSource = g12.add("statictext");
    stVisSource.text = cptVis;

    var dropboxVisibleOfSource_array = [cptVis0, cptVis1, cptVis2];
    var dropboxVisibleOfSource = g12.add("dropdownlist", undefined, undefined, { items: dropboxVisibleOfSource_array });

    var g5 = w.add ("group")
    g5.orientation = "column"
    var btnDo = g5.add ("button", undefined, cptOk, {name: "ok"});
    var btnCancel = g5.add ("button", undefined, cptCancel, {name: "cancel"});
    
    dropboxGrpName.onChange = function ()
    {
        atnXML.setName=this.selection.text
        dropboxAtnName.removeAll()
        for (var x = 0; x < atn[this.selection.index].children.length; x++) {
            dropboxAtnName.add("item", atn[this.selection.index].children[x].name)
        }
        dropboxAtnName.selection = 0
    }
    dropboxAtnName.onChange = function (){atnXML.atnName=this.selection.text}
    checkboxIndex.onClick = function (){atnXML.useIndex=this.value}
    checkboxBackground.onClick = function (){atnXML.doBackground= !this.value; renew ()}
    
    //checkboxProgress.onClick = function (){atnXML.progress= this.value; if (this.value == false) { atnXML.progressX=0;  atnXML.progressY=0}}
    checkboxSnapshot.onClick = function (){atnXML.useSnapshot = dropboxSnapshot.enabled = this.value}
    dropboxSnapshot.onChange = function (){if (this.selection.index==1) {atnXML.globalSnapshot = true} else {atnXML.globalSnapshot = false}}
    checkboxColor.onClick = function (){atnXML.doAllLayers = this.value;renew ()}  
    dropboxColor.onChange = function (){if (this.items.length==lr.length-1) {atnXML.selectedColor=lr[this.selection.index].color; $.writeln (lr[this.selection.index].color)}}   
    dropboxVisibleOfSource.onChange = function () {atnXML.visibleMode = this.selection.index}
    checkboxDoAtn.onClick = function ()
    {
        dropboxGrpName.enabled= dropboxAtnName.enabled=this.value
        if (atnXML.saveAfter == false) {btnDo.enabled = btnDo.enabled = p5.enabled = this.value}
       // if (atnXML.useSnapshot == true) dropboxSnapshot.enabled = this.value
        atnXML.doAtn=this.value
    }

    checkboxSaveAfter.onClick = function ()
    {
        dropboxFormats.enabled= g7.enabled = checkboxIndex.enabled =this.value
        dropboxFormats.enabled= checkboxIndex.enabled =this.value
        if (atnXML.doAtn == false) {btnDo.enabled = p5.enabled = this.value}
        //if (atnXML.useSnapshot == true) dropboxSnapshot.enabled = this.value
        atnXML.saveAfter=this.value
    }

    dropboxFormats.onChange = function ()
    {
        atnXML.saveAs=this.selection.index

        if (g7.children.length >0) g7.remove (g7.children[0])
           switch (this.selection.index)
           {
            case 0: 
                addJpgOpt(g7); 
            break;
            default: addPsdOpt(g7); 
            break;
           }
    }

    dropboxType.onChange = function ()
    { 
        switch (this.selection.index)
        {
            case 0: this.helpTip = "ArtLayers - type Normal, Smartobject, 3D"; break;
            case 1: this.helpTip = "ArtLayers - type Text"; break;
            case 2: this.helpTip = "Layer sets, Artboards, Frames"; break;
            case 3: this.helpTip = "ArtLayers - type SolidColor, GradientFill, PatternFill\nBrightnessContrast, Levels, Curves, Exposure\nVibrance, HueSaturation,BackAndWhite, PhotoFilter, ChannelMixer, ColorLookup\nInvert,Posterize, Threshold, GradientMap, SelectiveColor"; break;
            case 4: this.helpTip = "Selected layers - all types"
        }
        atnXML.kind=this.selection.index
        renew ()    
        }

    btnDo.onClick = function ()
    {
        var d = objectToDescriptor(atnXML, XMLSettingsName)
        app.putCustomOptions(GUID, d)
        w.close ()
        doBatch = true
     }

    btnCancel.onClick = function ()
    {
        w.close ()
        doBatch = false
     }

    w.onShow = function ()
    {
            // выбираем операцию
            if (atn.length>0) {
                for (var i = 0; i < atn.length; i++) { dropboxGrpName.add ("item", atn[i].name)}
                var sel = getSelectedAtn (atn)
              
               dropboxGrpName.selection = dropboxGrpName.find (sel.set)
               dropboxAtnName.selection = dropboxAtnName.find (sel.atn)
            } else {checkboxDoAtn.enabled = checkboxDoAtn.value = false; checkboxDoAtn.onClick ()}
        
            if (atnXML.globalSnapshot) {dropboxSnapshot.selection = 1} else {{dropboxSnapshot.selection = 0}}
            checkboxSnapshot.value = atnXML.useSnapshot; checkboxSnapshot.onClick ()
           // checkboxProgress.value = atnXML.progress
            dropboxVisibleOfSource.selection = atnXML.visibleMode
            checkboxBackground.value = !atnXML.doBackground
            checkboxIndex.value = atnXML.useIndex
            checkboxSaveAfter.value= atnXML.saveAfter; checkboxSaveAfter.onClick ()
            dropboxFormats.selection = atnXML.saveAs; dropboxFormats.onChange ()
            checkboxColor.value = atnXML.doAllLayers
            checkboxDoAtn.value=atnXML.doAtn 
            dropboxType.selection =  atnXML.kind
            if (atnXML.kind != 2) {checkboxColor.text  =cptAutoSearchLrs} else {checkboxColor.text  =cptAutoSearchGroups}
            renew ()
   }

     if (getSelectedLayers (true) > 1) atnXML.kind = 4 // если выбрано больше 1 слоя
        
    renew = function ()
    {
         
          lr = layersByColor(layersByKind (allLayers))
          dropboxColor.removeAll()
          var len = lr.length
          
          if (!atnXML.doAllLayers ) //добавить выбор значения
         
          { 
              if (len > 0) 
              {
                  var sel = 0
                  for (var i =0; i<len-1; i++)
                  {
                  
                  dropboxColor.add ("item", cptColorDropbox(lr[i].color, lr[i].layers.length, false))
                  if (appVersion != 16) {dropboxColor.items[i].image =cptColorDropbox(lr[i].color,undefined, true)}
                  if (lr[i].color == atnXML.selectedColor) {sel = i}}
                  dropboxColor.selection = sel
                  dropboxColor.enabled = true
                  enableControls (true)
              } else {
                  dropboxColor.add ("item", cptColorDropbox("none", 0, false))
                  if (appVersion != 16) {dropboxColor.items[0].image =cptColorDropbox("none",undefined, true)}
                  dropboxColor.selection = 0
                  dropboxColor.enabled = false
                  enableControls (false)
                  }
           } else 
           {
               if (len >0)
               {
                   dropboxColor.add ("item", cptColorDropbox(lr[len-1].color, lr[len-1].layers.length, false))    
                   if (appVersion != 16) {dropboxColor.items[0].image =cptColorDropbox(lr[len-1].color,undefined, true)}
                   dropboxColor.selection = 0
                   dropboxColor.enabled = false
                   enableControls (true)
                } else {
                    dropboxColor.add ("item", cptColorDropbox("allLAyers", 0, false))
                    if (appVersion != 16) {dropboxColor.items[0].image =cptColorDropbox("allLAyers",undefined, true)}
                    dropboxColor.selection = 0
                    dropboxColor.enabled = false
                    enableControls (false)
                    }
           }
 
           for (var i =0; i<len; i++) {if (lr[i].color==atnXML.selectedColor) {break;}}  
           
           if (i==lr.length) {i=0}
           dropboxColor.selection = i     
      }
    
    function enableControls (val)
    {
         checkboxDoAtn.enabled = checkboxSaveAfter.enabled = val
         if (atn.length == 0) checkboxDoAtn.enabled  = false
         if (atnXML.saveAfter == true || atnXML.doAtn == true) btnDo.enabled = p5.enabled = val
         if (atnXML.saveAfter == true) dropboxFormats.enabled= checkboxIndex.enabled = val
         if (atnXML.saveAfter == true) dropboxFormats.enabled= g7.enabled = checkboxIndex.enabled = val
         if (atnXML.doAtn == true)   dropboxGrpName.enabled= dropboxAtnName.enabled = val
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
}


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
            case 0: if (atnXML.kind != 2) {tmp =numManyLayers} else {tmp =numManyGroups} break;
            case 1: if (atnXML.kind != 2) {tmp =numOneLayer} else {tmp =numOneGroup} break;
            case 2: if (atnXML.kind != 2) {tmp =numTwoLayers} else {tmp =numTwoGroups} break;
            case 3: if (atnXML.kind != 2) {tmp =numTwoLayers} else {tmp =numTwoGroups} break;
            case 4: if (atnXML.kind != 2) {tmp =numTwoLayers} else {tmp =numTwoGroups} break;
            default: if (atnXML.kind != 2) {tmp =numManyLayers} else {tmp =numManyGroups} break;
          }
    return tmp
}


function sumMarkedLayers () 
{
    var tmp = 0
    for (var i=0; i<lr.length; i++)
    {tmp=tmp+lr[i].layers.length}
    return tmp
}

////////////////////////////////////////////////////////////////////////////////////
// настройки jpg
///////////////////////////////////////////////////////////////////////////////////

function addJpgOpt (parent)
{
    // GR6
    // ===
    var gr6 = parent.add("group"); 
        gr6.orientation = "row"; 
        gr6.alignChildren = ["left","fill"]; 
        gr6.spacing = 10; 
        gr6.margins = 0; 
    // GR7
    // ===
    var gr7 = gr6.add("group"); 
        gr7.orientation = "row"; 
        gr7.alignChildren = ["left","top"]; 
        gr7.spacing = 10; 
        gr7.margins = 0; 

    var st2 = gr7.add("statictext"); 
        st2.text =cptJpg

    var st3 = gr7.add("statictext"); 
        st3.text = "12"; 
        st3.preferredSize.width = 30; 
       
        st3.justify = "center"; 

    // GR8
    // ===
    var gr8 = gr6.add("group"); 
        gr8.orientation = "row"; 
        gr8.alignChildren = ["right","top"]; 
        gr8.spacing = 10; 
        gr8.margins = 0; 

    var sl1 = gr8.add("slider"); 
        sl1.minvalue = 1; 
        sl1.maxvalue = 12; 
        sl1.preferredSize.width = parent.preferredSize.width - st3.preferredSize.width - st2.preferredSize.width-20 ; 
        sl1.value = 12; 

        sl1.onChanging = function () {atnXML.Jpg = st3.text = Math.round (this.value)}

        sl1.addEventListener ('keyup', commonHandler)
        sl1.addEventListener ('mouseup', commonHandler)
        sl1.addEventListener ('mouseout', commonHandler)

        function commonHandler(evt) {atnXML.Jpg = sl1.value = st3.text = Math.round (sl1.value)}
        
        sl1.value = atnXML.Jpg; sl1.onChanging ()

        w.layout.layout (true)
 }

////////////////////////////////////////////////////////////////////////////////////
// настройки psd
///////////////////////////////////////////////////////////////////////////////////

function addPsdOpt (parent)
{
    // GR11
    // ====
    var gr11 = parent.add("group"); 
        gr11.orientation = "row"; 
        gr11.alignChildren = ["left","center"]; 
        gr11.spacing = 10; 
        gr11.margins = 0; 

    var ch1 = gr11.add("checkbox"); 
        ch1.text = cptFlatten
        
        ch1.onClick = function () {atnXML.flatten=Boolean (this.value)}
        ch1.value = Number (atnXML.flatten)
        
        w.layout.layout (true)
}


return w
}

////////////////////////////////////////////////////////////////////////////////////
// загрузка информации об операциях
///////////////////////////////////////////////////////////////////////////////////

function GetActionSetInfo() {
    
gClassActionSet = charIDToTypeID( 'ASet' );
gClassAction = charIDToTypeID( 'Actn' );
gKeyName = charIDToTypeID( 'Nm  ' );
gKeyNumberOfChildren = charIDToTypeID( 'NmbC' );

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

function ActionData() {
	this.name = "";
	this.children = undefined;
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

	return actionSetInfo;
}

function getSelectedAtn ()
{
    function getAtnChildName (atn)
    {
        try {var ref = new ActionReference();  
        ref.putEnumerated( charIDToTypeID("Actn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
        var desc = executeActionGet(ref);  
        return desc.getString( charIDToTypeID("Nm  "))} catch (e) {return ""}
    }

    function getAtnParentName ()
    {
        try {var ref = new ActionReference();  
        ref.putEnumerated( charIDToTypeID("Actn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
        var desc = executeActionGet(ref);  
        return desc.getString( charIDToTypeID("PrNm"))} catch (e) {return ""}
    }    
    
    var p = getAtnParentName ()
    var c = getAtnChildName ()
    var tmp = {set : "", atn : ""}
    
    if (p!="") {var len =atn.length; for (var i=0; i<len; i++) {if (atn[i].name == p) {tmp.set = p; break;}}}
    
    if (tmp.set=="") {
        var len =atn.length; 
        for (var i=0; i<len; i++) 
        {
            var atnLen =atn[i].children.length; 
            for (var x=0; x < atnLen; x++)
            {
                 if (atn[i].children[x].name == p) {tmp.atn =p; tmp.set = atn[i].name; break;}
            }
        }
    }

    if (tmp.atn=="" && tmp.set!="") {
        var len =atn.length; 
        for (var i=0; i<len; i++) 
        {
            var atnLen =atn[i].children.length; 
            for (var x=0; x < atnLen; x++)
            {
                 if (atn[i].children[x].name == c) {tmp.atn =c; tmp.set = atn[i].name; break;}
            }
        }
    }

    if (tmp.atn=="" && tmp.set=="")
    {
        var len =atn.length; 
        for (var i=0; i<len; i++) 
        {
            if (atn[i].name == atnXML.setName)
            {
                var atnLen =atn[i].children.length; 
                tmp.set = atnXML.setName
                for (var x=0; x < atnLen; x++)
                {
                     if (atn[i].children[x].name == atnXML.atnName) {tmp.atn = atnXML.atnName; break;}
                }
                break;
            }
        }
    }

    if (tmp.set=="" && tmp.atn=="") {tmp.set = atn[0].name; tmp.atn= atn[0].children[0].name}
    if (tmp.set!="" && tmp.atn =="") {tmp.atn= atn[0].children[0].name}
    
    return tmp

}

////////////////////////////////////////////////////////////////////////////////////
// загрузка информации о слоях
///////////////////////////////////////////////////////////////////////////////////

function collectLayers ()
{
    function s2t (s) { return app.stringIDToTypeID(s) }
    function t2s(t) { return typeIDToStringID(t) }
    
    var layerKindArray =
    [
        5, //const kAnySheet             = 0; 
        0, //const kPixelSheet           = 1;  
        3, //const kAdjustmentSheet      = 2;  
        1, //const kTextSheet            = 3;  
        0, //const kVectorSheet          = 4;  
        0, //const kSmartObjectSheet     = 5;  
        5, //const kVideoSheet           = 6;  
        2, //const kLayerGroupSheet      = 7;  
        0, //const k3DSheet              = 8;  
        0, //const kGradientSheet        = 9;  
        0, //const kPatternSheet         = 10;  
        0, //const kSolidColorSheet      = 11;  
        0, //const kBackgroundSheet      = 12;  
        5 //const kHiddenSectionBounder = 13;  
    ] ,
     
   r = new ActionReference();     
   r.putProperty( charIDToTypeID('Prpr') , charIDToTypeID('NmbL'));  
   r.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );     
   var layerCount = executeActionGet(r).getInteger(charIDToTypeID('NmbL')); 
   var layersInfo = [],
    
    i = 0;
    try {app.activeDocument.backgroundLayer;} catch(e) { i++; }

    // глюк с фоновым слоем 
    if (i==0 && appVersion == 15 && layerCount ==0) return layersInfo;
    
    for (i; i <= layerCount; i++) 
    {

        var r = new ActionReference();
        r.putIndex(s2t('layer'), i);
        var d = executeActionGet(r);

        if (t2s(d.getEnumerationValue(s2t('layerSection')))=="layerSectionEnd")  continue;

        var lrName = d.getString(s2t('name')),
        id = d.getInteger(s2t('layerID')),
        visible = d.getBoolean(s2t('visible')),
        background = d.getBoolean(s2t('background')),
        kind = appVersion <=15 ? 0 : layerKindArray[d.getInteger(s2t ('layerKind'))],
        color = (!background) ? t2s(d.getEnumerationValue(s2t('color'))) : "none";
        locked = d.getObjectValue(s2t('layerLocking')).getBoolean(s2t('protectAll'));

  //       alert (lrName)
        layersInfo.push
        ({
            name : lrName,
            id : id,
            visible : visible,
            background: background, 
            kind : kind,
            color : color,
            selected : false,
            locked : locked
        })
    }
        
       getSelectedLayers (layersInfo) // пометить выделенные слои
       return layersInfo   
}

function getSelectedLayers(layersInfo)      
    {      
    try {
        var idx_shift = 0;    
        try {activeDocument.backgroundLayer} catch (e) { idx_shift = 1; }   
        
        var r = new ActionReference();          
        r.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("targetLayers"));         
        r.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));      
      
        var list = executeActionGet(r).getList(stringIDToTypeID("targetLayers"));      
        var len = list.count; 
        
        if (! (layersInfo instanceof Array)) return len;
        
        var LrLen = layersInfo.length

        for (var i = 0; i < len; i++)      
            {      
            try       
                {      
                    var idx = list.getReference(i).getIndex() + idx_shift;         
                    var r = new ActionReference();      
                    r.putIndex( charIDToTypeID( "Lyr " ), idx); 
                    
                    var ret = executeActionGet(r);   
                    var sel = Number (ret.getString(stringIDToTypeID("layerID")));
                    for (var x=0; x < LrLen; x++) {if (layersInfo[x].id == sel) {layersInfo[x].selected = true;break}}
                }     
            catch (e) { alert(e); return null; }      
            }      
        }          
    catch (e) { return null; }      
}    

function layersByKind (layersArray)
{  
    var tmp = new Array
    var len = layersArray.length
    if (atnXML.kind != 4)  {for (var i=0; i<len; i++) {if (layersArray[i].kind == atnXML.kind ) tmp.push (layersArray[i])}} 
    else {{for (var i=0; i<len; i++) {if (layersArray[i].selected == true ) tmp.push (layersArray[i])}}}
    return tmp
 }

function layersByColor (layersArray)
{
    var tmp =
    [
        {color : "red", layers : []}, //0
        {color : "orange", layers : []}, //1
        {color : "yellowColor", layers : []}, //2
        {color : "grain", layers : []}, //3
        {color : "blue", layers : []}, //4
        {color : "violet", layers : []}, //5
        {color : "gray", layers : []}, //6
        {color : "none", layers : []}, //7
        {color : "allLabels", layers : []} //8
    ]
    
    var len = layersArray.length
    
     for (var i=0; i<len;i++)
    {
        if (layersArray[i].background == true && atnXML.doBackground == false) continue;
        switch (layersArray[i].color)
        {
            case "red" :  tmp[0].layers.push(layersArray[i]);  break;
            case "orange" :  tmp[1].layers.push(layersArray[i]);  break;
            case "yellowColor" :  tmp[2].layers.push(layersArray[i]);  break;
            case "grain" :  tmp[3].layers.push(layersArray[i]);  break;
            case "blue" :  tmp[4].layers.push(layersArray[i]);  break;
            case "violet" :  tmp[5].layers.push(layersArray[i]);  break;
            case "gray" :  tmp[6].layers.push(layersArray[i]);  break;
            case "none" :  tmp[7].layers.push(layersArray[i]);  break; 
        }
        tmp[8].layers.push(layersArray[i])
   }
   
   var sortedLayers = []
   for (var i=0; i<9; i++)
   {if (tmp[i].layers.length >0) sortedLayers.push (tmp[i])}
   
   return sortedLayers
}


////////////////////////////////////////////////////////////////////////////////////
// управление настройками программы
///////////////////////////////////////////////////////////////////////////////////

function initExportInfo (params) 
{
         params.selectedColor = "red"
         params.doAllLayers = false
         params.flatten = false
         params.useSnapshot = true
         params.saveAfter = true
         params.saveAs = 0 // 0 - jpg 1 - psd 2 - tif
         params.doAtn = true  
         params.setName = ""
         params.atnName = ""
         params.doBackground=true
         params.globalSnapshot = true
         params.Jpg=12
         params.kind = 0  // 0 - графические, 1 - текстовые, 2 - группы, 3 - корректирующие слои, 4 - выбранные слои
         params.progressX=0
         params.progressY=0
      //   params.progress = true
         params.useIndex = true
         params.visibleMode = 0 //0 - не изменять, 1 - сделать видимым, 2 - сделать не видимым
}

function objectToDescriptor (o, s) 
{
 //   $.writeln ("---")
	var d = new ActionDescriptor;
	var l = o.reflect.properties.length;
	d.putString( app.charIDToTypeID( 'Msge' ), s);
	for (var i = 0; i < l; i++ ) {
		var k = o.reflect.properties[i].toString();
		if (k == "__proto__" || k == "__count__" || k == "__class__" || k == "reflect") continue;
		var v = o[ k ];
		k = app.stringIDToTypeID(k);
		switch ( typeof(v) ) {
			case "boolean": d.putBoolean(k, v); break;
			case "string": d.putString(k, v); break;
			case "number": d.putInteger(k, v); break;
             default: $.writeln (typeof(v)); break;
		}
  //         $.writeln ('put ' + typeof(v) + ' "' + typeIDToStringID(k)  +'": ' + v)
	}
    return d;
}

function descriptorToObject (o, d, s) 
{
 //  $.writeln ("---")
	var l = d.count;
	if (l) {
	    var keyMessage = app.charIDToTypeID( 'Msge' );
        if ( d.hasKey(keyMessage) && ( s != d.getString(keyMessage) )) return;
	}
	for (var i = 0; i < l; i++ ) {
		var k = d.getKey(i); // i + 1 ?
		var t = d.getType(k);
		strk = app.typeIDToStringID(k);
		switch (t) {
			case DescValueType.BOOLEANTYPE:
				o[strk] = d.getBoolean(k);
				break;
			case DescValueType.STRINGTYPE:
				o[strk] = d.getString(k);
				break;
			case DescValueType.INTEGERTYPE:
				o[strk] = d.getDouble(k);
				break;
		}
 //       $.writeln ('get ' + typeof(o[strk]) + ' "' + strk  +'": ' + o[strk])
	}
}

////////////////////////////////////////////////////////////////////////////////////
// пакетная обработка
///////////////////////////////////////////////////////////////////////////////////

function Batch ()
{
  var batch = layersToDo (lr)
  var doc = app.activeDocument
  var docName = doc.name
  var folderPath = File
  var fileName
  var tmp
  var cur
  var parentId = doc.id
  var len
  var curParent=0
  
  len = batch.length
  var progress = appVersion>15 ? ( len*3 + len/4+ 2) : ( len*3 + 2)
  
  var progressWindow = createProgressWindow (XMLSettingsName, msgBatch, 1, len*3 + batch.length/4+ 2, true)
  progressWindow.show();
  progressWindow.isDone = false
    
  if (atnXML.globalSnapshot == true)
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
   
      
      var counter = 0
      if (appVersion>15) 
   {
      for (var i =0; i<batch.length; i++)
      {
          if (i==counter) {progressWindow.updateProgress(); counter = i+4}
          selectLayerById (batch[i].id, false)
          cur = app.activeDocument.activeLayer
          curParent = cur.parent.id

          if (curParent != parentId && cur.parent.allLocked == true ) {cur.parent.allLocked = false }
          if (atnXML.visibleMode !=0) {if (curParent != parentId && cur.parent.visible== true ) {cur.parent.visible = atnXML.visibleMode == 1? true : false}}
          if (batch[i].locked == true && batch[i].background == false) {cur.allLocked = false}
          if (atnXML.visibleMode !=0) {if (batch[i].visible == true  && batch[i].background == false) {cur.visible = atnXML.visibleMode == 1? true : false}}
        }
    }

        if (atnXML.useSnapshot==true) {removeNamedSnapshot("BatchTmp"); createNamedSnapshot("BatchTmp")}         
        
        for (var i=0; i<len; i++)
        {
            fileName = batch[i].name
            try {app.activeDocument=doc} catch (e) {alert (msgNoDoc1 + docName +msgNoDoc2, XMLSettingsName, true); break} 
            
            
            progressWindow.stProgress.text = ((i +1)+ "/"+batch.length + " - " + fileName);
            progressWindow.updateProgress()
            
            try
            {  selectLayerById (batch[i].id, true)
                cur = app.activeDocument.activeLayer
               if (appVersion >15) 
               {if (cur.parent.id != parentId) {cur.parent.visible=true};
                if (!cur.visible) cur.visible= true
                }
            } catch (e) {alert (msgNoLayer1 + batch[i].name +msgNoLayer2, XMLSettingsName, true)}

               if (atnXML.doAtn==true)
               {try {app.doAction (atnXML.atnName, atnXML.setName)} catch (e) {alert(msgEsc, XMLSettingsName); break}}
               
              progressWindow.updateProgress()
              
              if (atnXML.saveAfter == true)
              { try{folderPath = doc.path} catch (e) {alert (msgSave, XMLSettingsName,true); break}

                try {
                switch (atnXML.saveAs)
                {
                case 0:
                    tmp=app.activeDocument.activeHistoryState
                    app.activeDocument.flatten()
                    app.activeDocument.bitsPerChannel=BitsPerChannelType.EIGHT
                    app.activeDocument.channels.removeAll()
                    SaveAsJPEG (CreateUniqueFileName (folderPath, fileName, ".jpg"), atnXML.Jpg)
                    app.activeDocument.activeHistoryState=tmp
                    break;
                case 1:
                     if (atnXML.flatten) app.activeDocument.flatten()
                     SaveAsPSD (CreateUniqueFileName (folderPath, fileName, ".psd"))
                     break;
                 case 2:
                      if (atnXML.flatten) app.activeDocument.flatten()
                      SaveAsTIFF (CreateUniqueFileName (folderPath, fileName, ".tif"))
                    break;
                }
               } catch (e) {alert (errSave + e, XMLSettingsName, true); break}
            }
               progressWindow.updateProgress()
                
                if (atnXML.useSnapshot==true)
                {
                     if (atnXML.globalSnapshot==true)
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
 if (atnXML.useSnapshot==true) {removeNamedSnapshot("BatchTmp"); revertNamedSnapshot (XMLSettingsName)}         

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

function selectLayerById (ID, visible)
{
   var ref = new ActionReference();
   ref.putIdentifier(charIDToTypeID('Lyr '), ID);
   var desc = new ActionDescriptor();
   desc.putReference(charIDToTypeID('null'), ref);
   desc.putBoolean(charIDToTypeID('MkVs'), visible);
   executeAction(charIDToTypeID('slct'), desc, DialogModes.NO);
}

function layersToDo (layersArray)
{
    var lrToDo = new Array
    var len = layersArray.length
    
   if (atnXML.doAllLayers == false)
    {
        for (var i=0; i<len-1; i++)
        {
            if (layersArray[i].color == atnXML.selectedColor)
            {
                lrToDo = layersArray[i].layers; break;
             }
         }
   } else
        {   
            lrToDo = layersArray[len-1].layers
         }
     
    return lrToDo
}

function SaveAsJPEG( inFileName, inQuality) {
	var jpegOptions = new JPEGSaveOptions();
	jpegOptions.quality = inQuality;
	app.activeDocument.saveAs ( File( inFileName ), jpegOptions, true );
}

function SaveAsPSD( inFileName) {
	var psdSaveOptions = new PhotoshopSaveOptions();
	app.activeDocument.saveAs( File( inFileName ), psdSaveOptions, true);
}

function SaveAsTIFF( inFileName) {
	var tiffSaveOptions = new TiffSaveOptions();
    tiffSaveOptions.imageCompression = TIFFEncoding.NONE;
	app.activeDocument.saveAs( File( inFileName ), tiffSaveOptions,true);
}

function CreateUniqueFileName( inFolder, inFileName, inExtension ) {
	inFileName = inFileName.replace(/[:\/\\*\?\"\<\>\|]/g, "_");  // '/\:*?"<>|' -> '_'
	var uniqueFileName = inFolder  +  "/" + inFileName + inExtension;
    
    if (atnXML.useIndex == false)
    {
	var fileNumber = 1;
	while ( File( uniqueFileName ).exists ) {
		uniqueFileName = inFolder +  "/" + inFileName + "_" + fileNumber + inExtension;
		fileNumber++;
	}
}
	return uniqueFileName;
}
}
// bin

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
       win.location.x = atnXML.progressX
       win.location.y = atnXML.progressY
       if (win.location.x==0 || win.location.y==0) {win.center ()}
     }
 }

win.onClose = function ()
{
      if (batchMode == true) {
      atnXML.progressX =  win.location.x
      atnXML.progressY =  win.location.y
      var d = objectToDescriptor(atnXML, XMLSettingsName)
      app.putCustomOptions(GUID, d)
     }
 }
    return win;
};