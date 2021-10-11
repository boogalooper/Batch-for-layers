///////////////////////////////////////////////////////////////////////////////
// Advanced batch - revision 1.2.1
// profile-tver@ya.ru
///////////////////////////////////////////////////////////////////////////////

<javascriptresource>
<category>jazzy</category>
<enableinfo>true</enableinfo>
</javascriptresource>

#target photoshop
///////////////////////////////////////////////////////////////////////////////
// публичные переменные и константы
///////////////////////////////////////////////////////////////////////////////
gClassActionSet = charIDToTypeID( 'ASet' );
gClassAction = charIDToTypeID( 'Actn' );
gKeyName = charIDToTypeID( 'Nm  ' );
gKeyNumberOfChildren = charIDToTypeID( 'NmbC' );

GroupCaption = "Advanced batch ©"
snapCaption = "Возвращаться к исходному состоянию"
saveCaption = "Сохранять после обработки"
msgBreak="Обработка остановена! Не найдено действие "
msgStop = "Обработка остановлена пользователем!"
msgSave = "Не найден путь для сохранения результатов обработки! Сохраните документ и откройте его повторно."
settingsTitle="advanced batch settings"
msgSucsess="Обработка завершена!"
msgProgressInit = "Поиск и обновление управляющих слоев..."
msgBatchInit = "Обработка слоев..."
var atnSettings = new Array
var atnExclude = new Array

///////////////////////////////////////////////////////////////////////////////
// загрузка настроек из файла
// запуск основной функции программы
///////////////////////////////////////////////////////////////////////////////

var atnParams = new collectParams()
atnParams.LoadParamsFromDisk()
actCaption=atnParams.params.DefaultActionName

main ()

atnParams.SaveParamsToDisk()

///////////////////////////////////////////////////////////////////////////////
// основная функция
///////////////////////////////////////////////////////////////////////////////
function main ()
{
if (app.documents.length > 0)
{
    var newDocument = true
    var lrSet = app.activeDocument.layerSets
    var lrSetCounter = lrSet.length
    var lrSetName = String

    if (lrSetCounter > 0) {
         for (var i = 0; i<lrSetCounter; i++)
        {
            lrSetName = lrSet[i].name
            if (lrSetName.indexOf (GroupCaption, 0) >=0)
            {selectLayerById(lrSet[i].id)
            enumControlLayerSets (lrSet[i])
            newDocument=false }
        }
      }

     if (newDocument==true)
     {  var newlrSet = lrSet.add()
         selectLayerById(newlrSet.id)
         newlrSet.name = GroupCaption
         putLayerColourByID (newlrSet.id, atnParams.params.Color)
         newlrSet.visible = atnParams.params.ControlSetVisible
         enumControlLayerSets (newlrSet)
         lrSetCounter++}

var atnLayersToDo = new collectLayers (atnSettings, atnExclude)
 if (newDocument==false) {Batch (atnSettings, atnLayersToDo)}
}
}


///////////////////////////////////////////////////////////////////////////////
//  создание/обновление/перечисление
// управляющих групп слоев
///////////////////////////////////////////////////////////////////////////////
function enumControlLayerSets (controlLayerSet)
{
var lrSetColor = getLayerColourByID (controlLayerSet.id)

var progressWindow = createProgressWindow(msgProgressInit, undefined, 0, 8,undefined,false);
progressWindow.show();
progressWindow.stProgress.text = ( "управляющая группа ''" + controlLayerSet.name + "'' - " + lrSetColor);
progressWindow.isDone = false;

createControlLayer (controlLayerSet, snapCaption, atnParams.params.MakeSnapshotVisible)
var subControlLayerSet = createControlLayerSet (controlLayerSet, saveCaption, atnParams.params.SaveAfterVisible)

if (subControlLayerSet.artLayers.length>3) {subControlLayerSet.artLayers.removeAll()}
if (subControlLayerSet.layerSets.length>0)
{
    var counter = subControlLayerSet.layerSets.length
    for (var i=0; i<counter; i++) {subControlLayerSet.layerSets[0].remove()}
}

createControlLayer (subControlLayerSet, "jpg", atnParams.params.JPG)
createControlLayer (subControlLayerSet, "psd", atnParams.params.PSD)
createControlLayer (subControlLayerSet, "tif", atnParams.params.TIF)

if (controlLayerSet.layerSets.length >1)
{
    var counter = controlLayerSet.layerSets.length
    delIndex = 0
    for (var i =0; i < counter; i++)
    { if (controlLayerSet.layerSets[delIndex] != subControlLayerSet) controlLayerSet.layerSets[delIndex].remove() else {delIndex=1}}
}

progressWindow.updateProgress();

if (controlLayerSet.artLayers.length >2)
{ counter = controlLayerSet.artLayers.length-2
    for (var i =0; i < counter; i++)
    { controlLayerSet.artLayers[0].remove() }
       controlLayerSet.artLayers[0].move (subControlLayerSet, ElementPlacement.PLACEBEFORE)
}
  else
    {
      if (controlLayerSet.artLayers.length ==1) createControlLayer (controlLayerSet, actCaption, atnParams.params.DefaultActionNameVisible).move (subControlLayerSet, ElementPlacement.PLACEBEFORE)
      else {controlLayerSet.artLayers[0].move (subControlLayerSet, ElementPlacement.PLACEBEFORE)}
    }

var tmp=new atnParams.InitParams ()
if (IsControlGroupYetInArray (atnSettings, lrSetColor) < 0 && lrSetColor != "none")
    {
     tmp.ControlSetVisible = controlLayerSet.visible
     tmp.DefaultActionName=controlLayerSet.artLayers[0].name
     tmp.DefaultActionNameVisible=controlLayerSet.artLayers[0].visible
     tmp.SaveAfterVisible= subControlLayerSet.visible
     tmp.MakeSnapshotVisible=controlLayerSet.artLayers[1].visible
     tmp.JPG= subControlLayerSet.artLayers[0].visible
     tmp.TIF=subControlLayerSet.artLayers[2].visible
     tmp.PSD=subControlLayerSet.artLayers[1].visible
     tmp.Color = lrSetColor
     atnSettings.push (tmp)
     atnParams.params=tmp
} else {lrSetColor = "none"}

     for (var i=0; i<=1; i++) {
     atnExclude.push (controlLayerSet.artLayers[i].id)
     atnExclude.push (subControlLayerSet.artLayers[i].id)}
     atnExclude.push (subControlLayerSet.artLayers[2].id)
     
progressWindow.updateProgress();
putLayerColourByID (controlLayerSet.id, lrSetColor)

progressWindow.isDone=true
atnParams.params.ProgressBarX=progressWindow.bounds.x
atnParams.params.ProgressBarY=progressWindow.bounds.y
progressWindow.close ()

function createControlLayerSet (parent, caption, lrSetVisible)
{
   progressWindow.updateProgress();

   var lrSet = parent.layerSets
   var lrSetName = String
   var founded = -1
   var counter = lrSet.length

   for (var i=0; i<counter; i++)
   {
       lrSetName = lrSet[i].name
       if (lrSetName.indexOf (caption, 0)>=0)
       {founded=i
          break}
    }
   if (founded >=0) {var newlrSet=lrSet[founded]}
   else {
    var newlrSet = parent.layerSets.add()
    newlrSet.name = caption
    newlrSet.visible = lrSetVisible
}
return newlrSet
}

function createControlLayer (parent, caption, lrVisible)
{
     progressWindow.updateProgress();

     var lr = parent.artLayers
     var lrSetName = String
     var founded = -1
     var counter = lr.length

     for (var i=0; i<counter; i++)
    {
       lrSetName = lr[i].name
       if (lrSetName.indexOf (caption, 0)>=0)
       {founded=i
          break}
    }

 if (founded >=0)
    {
     var newLr=lr[founded]
     newLr.moveToEnd (parent)}
 else {
       newLr = parent.artLayers.add()
       newLr.name=caption
       newLr.visible =lrVisible
       newLr.moveToEnd (parent)
   }
    return newLr
}

function IsControlGroupYetInArray (AtnSettings, Color)
{
      findControlGroupInArray = -1
      for (var i=0; i<AtnSettings.length; i++)
      {
          if (AtnSettings[i].Color == Color) {
              findControlGroupInArray = i
              break}
       }
    return findControlGroupInArray
}
}

///////////////////////////////////////////////////////////////////////////////
//  создание списка слоев
//  помеченных для обработки
///////////////////////////////////////////////////////////////////////////////
function collectLayers (AtnSettings, AtnExclude)
{
    var doc = app.activeDocument
    var lr = doc.artLayers
    this.counter = lr.length-1
    var st = doc.layerSets
    var enumLayers = new Array
    var lrSetColor ="none"

    for (var i = 0; i<=this.counter; i++)
    {
        lrSetColor=getLayerColourByID(lr[i].id)
        if (findLayersToDo (lr[i].id, lrSetColor, AtnSettings, AtnExclude)>=0)
        {
            enumLayers.push (new descLayers (lr[i], lrSetColor, 0))
        }
    }

    if (st.length >0)
    {
        this.counter=st.length -1
        for (var i = 0; i<=this.counter; i++)
        {
           collectLayersInGroups (st[i], enumLayers, AtnSettings, AtnExclude)
        }
    }

function collectLayersInGroups (stParent, enumLayers, AtnSettings, AtnExclude)
{
    if (stParent.artLayers.length >0)
        {
            lr = stParent.artLayers
            this.counter = lr.length-1
            lrSetColor  ="none"
            for (var i = 0; i<=this.counter; i++)
            {
              lrSetColor = getLayerColourByID(lr[i].id)
              if (findLayersToDo (lr[i].id, lrSetColor, AtnSettings, AtnExclude) >=0)
              {
                enumLayers.push (new descLayers (lr[i], lrSetColor, lr[i].parent.id))
              }
             }
        }
    if (stParent.layerSets.length>0)
    {
         for (var i=0; i<=stParent.layerSets.length-1; i++)
         {
             collectLayersInGroups (stParent.layerSets[i],enumLayers, AtnSettings, AtnExclude)
         }
       }
}

function descLayers (lrObject, lrColor, lrParent)
{
    this.lr = lrObject
    this.color = lrColor
    this.parent = lrParent
    this.name = lrObject.name
    return
 }

function findLayersToDo (LayerId, Color, AtnSettings, AtnExclude )
{
    var exclude = false
    for (var i = 0; i < AtnSettings.length; i++)
    {
         if (Color == AtnSettings[i].Color)
            {
             for (var x=0; x<AtnExclude.length; x++)
                   {
                        if (LayerId==AtnExclude[x]) {exclude = true}
                    }
               if (exclude == false) {return i}
             }
    }
return -1
}

return enumLayers
}


///////////////////////////////////////////////////////////////////////////////
//  последовательная обработка
//  слоев в соотстветсвии с настройками
///////////////////////////////////////////////////////////////////////////////
function Batch (atnSettings, atnLayersToDo)
{
var doc = app.activeDocument
var lrVisible = false
var lrSetVisible= false
var folderPath = File
var fileName
var tmp
var history
var errBreak

history = doc.activeHistoryState
removeNamedSnapshot(GroupCaption)
createNamedSnapshot(GroupCaption)

var progressWindow = createProgressWindow(msgBatchInit, undefined, 0, atnLayersToDo.length,undefined,false);
progressWindow.show();
progressWindow.isDone = false;

for (var i=atnSettings.length-1; i>=0; i--)
{
    errBreak = false
    for (var x=atnLayersToDo.length-1; x>=0; x--)
    {
        if (atnSettings[i].Color == atnLayersToDo[x].color && atnSettings[i].ControlSetVisible==true)
       {
        progressWindow.stProgress.text = (atnSettings[i].Color + ": " + (atnLayersToDo.length-x )+ "/"+atnLayersToDo.length + " - " + atnLayersToDo[x].name);
        progressWindow.updateProgress();
        
        try {app.activeDocument=doc} catch (e) {errBreak=true}
        try {fileName = atnLayersToDo[x].lr.name} catch (e) {errBreak=true}
        }

        if (atnSettings[i].Color == atnLayersToDo[x].color && atnSettings[i].ControlSetVisible==true && errBreak==false)
        {
            try
            {if (atnLayersToDo[x].parent != 0) {
                lrSetVisible = atnLayersToDo[x].lr.parent.visible
                atnLayersToDo[x].lr.parent.visible=true}
          
                lrVisible = atnLayersToDo[x].lr.visible
                doc.activeLayer=atnLayersToDo[x].lr
                atnLayersToDo[x].visible= true
            } catch (e) {alert (e)}

            if (atnSettings[i].DefaultActionNameVisible == true && errBreak==false )
            {
                var Atn = GetActionSetInfo()
                var RunAction = new FindAction (atnSettings[i].DefaultActionName, Atn)
                if (RunAction.IsFind==true)
                { try {app.doAction (RunAction.AtnNm, RunAction.SetNm)}
                    catch (e) { alert(msgEsc)  }
                 } else {alert (msgBreak + atnSettings[i].DefaultActionName)
                     errBreak = true}
             }

            if (atnSettings[i].SaveAfterVisible == true && errBreak==false)
            {
                try{folderPath = doc.path} catch (e) {
                    alert (msgSave)
                    errBreak = true
                    break
                    }

                if (atnSettings[i].JPG == true)
                {
                    tmp=app.activeDocument.activeHistoryState
                    app.activeDocument.flatten()
                    app.activeDocument.bitsPerChannel=BitsPerChannelType.EIGHT
                    SaveAsJPEG (CreateUniqueFileName (folderPath, fileName, ".jpg"), 12)
                    app.activeDocument.activeHistoryState=tmp
                    try {atnLayersToDo[x].lr.visible=true} catch (e) {}
                 }

                if (atnSettings[i].PSD == true)
                {
                    tmp = app.activeDocument.activeHistoryState
                    SaveAsPSD (CreateUniqueFileName (folderPath, fileName, ".psd"))
                    app.activeDocument.activeHistoryState = tmp
                 }

                if (atnSettings[i].TIF == true)
                {
                    tmp = app.activeDocument.activeHistoryState
                    SaveAsTIFF (CreateUniqueFileName (folderPath, fileName, ".tif"))
                    app.activeDocument.activeHistoryState = tmp
                }

            }

            if (atnSettings[i].MakeSnapshotVisible==true)
            {
                 if (app.activeDocument==doc) {
                     doc.activeHistoryState = history } else
                 {app.activeDocument.activeHistoryState =app.activeDocument.historyStates[0]
                   app.activeDocument  = doc
                   doc.activeHistoryState = history }

                try {doc.activeLayer=atnLayersToDo[x].lr
                doc.activeLayer.parent.visible =lrSetVisible
                doc.activeLayer.visible= lrVisible} catch (e) {}
            } else {app.activeDocument  = doc}
          
         }
    }
 }

progressWindow.isDone=true
atnParams.params.ProgressBarX=progressWindow.bounds.x
atnParams.params.ProgressBarY=progressWindow.bounds.y
progressWindow.close ()
}


///////////////////////////////////////////////////////////////////////////////
//  вспомогательные функции
///////////////////////////////////////////////////////////////////////////////
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
   desc.putBoolean(charIDToTypeID('MkVs'), false);
   executeAction(charIDToTypeID('slct'), desc, DialogModes.NO);
}

function getLayerColourByID( ID ) {
    var ref = new ActionReference()
    ref.putIdentifier(charIDToTypeID('Lyr '), ID)
    return typeIDToStringID(executeActionGet(ref).getEnumerationValue(stringIDToTypeID('color')))
}

function putLayerColourByID(ID,Colour) {
// "none","red","orange","yellowColor","grain","blue","violet","gray"
    var desc = new ActionDescriptor()
        var ref = new ActionReference()
        ref.putIdentifier(charIDToTypeID('Lyr '), Number(ID))
    desc.putReference( charIDToTypeID('null'), ref )
        var desc2 = new ActionDescriptor()
        desc2.putEnumerated( charIDToTypeID('Clr '), charIDToTypeID('Clr '), stringIDToTypeID(Colour) )
    desc.putObject( charIDToTypeID('T   '), charIDToTypeID('Lyr '), desc2 )
    executeAction( charIDToTypeID('setd'), desc, DialogModes.NO )
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

 function FindAction (SearchSrting, Action)
 {
    this.SetNm= String
    this.AtnNm =String
    this.IsFind = false

    var SetId=0
    var AtnId=0

    if (Action[AtnId] != undefined)
    {
    do
    {
        do
        {
            var Id =-1
            this.AtnNm=Action[SetId].children[AtnId].name
            if (this.AtnNm.indexOf (SearchSrting, 0) >=0)
            {
                Id =AtnId
                break
                }
            AtnId++
        } while (Action[SetId].children[AtnId] != undefined)

    if (Id>=0) {break} else
    {
        AtnId=0
        SetId++
        }
} while (Action[SetId] != undefined)

           if (Id>=0) {
           this.SetNm=Action[SetId].name
           this.AtnNm=Action[SetId].children[Id].name
           this.IsFind=true
           } else
           {
           this.SetNm=""
           this.AtnNm=""
           this.IsFind=false
           }
    } else {alert(msgAtnErr)}
    return
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

///////////////////////////////////////////////////////////////////////////////
//  класс xml-based хранения настроек
///////////////////////////////////////////////////////////////////////////////
function collectParams() {

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
						this.params[starter] = data;
					}
					if ( data == "true" || data == "false" ) {
						this.params[starter] = data == "true";
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
		for ( var p in this.params ) {
			saveFile.writeln( "\t<" + p + ">" + this.params[p] + "</" + p + ">" );
		}
		saveFile.writeln( "</" + scriptNameForXML + ">" );
		saveFile.close();
	}

	this.InitParams = function() {
		var params = new Object();
		params["ControlSetVisible"] = true;
		params["DefaultActionName"] = "Имя этого слоя = название действия";
		params["DefaultActionNameVisible"] = true;
		params["SaveAfterVisible"] = true
		params["MakeSnapshotVisible"] = true;
		params["JPG"] = true;
		params["PSD"] = false;
		params["TIF"] = false;
		params["Color"] = "red";
         params["ProgressBarX"]=0
         params["ProgressBarY"]=0
		return params;
	}

    this.params = this.InitParams();

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
	var scriptNameForXML = new String( settingsTitle );
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
	return ( new File( app.preferencesFolder + "/" + settingsTitle + ".xml" ) );
}
}

///////////////////////////////////////////////////////////////////////////////
//  прогресс-бар
///////////////////////////////////////////////////////////////////////////////

function createProgressWindow(title, message, min, max, parent, useCancel) {
   var X= atnParams.params.ProgressBarX
   var Y = atnParams.params.ProgressBarY
   
   var win = new Window('palette', title, [X,Y,0,0]);
   win.bounds.height=70
   win.bounds.width=320
   win.bar = win.add('progressbar', [10,10, 300, 30], min, max);
   win.stProgress = win.add('statictext', [10,20, 300,70]);
   win.parent = undefined;
   
   	if(File.fs == "Windows")
				{
					backColor = [0.3, 0.3, 0.3, 1];
                       foreColor =[0.8, 0.8, 0.8, 1]
                       var g = win.graphics;
                       var b  = g.newBrush (g.BrushType.SOLID_COLOR, backColor, 1);
                       win.graphics.backgroundColor = b;
                       var f  = g.newPen (g.PenType.SOLID_COLOR, foreColor, 1);
                       win.graphics.foregroundColor = f;
				}         
   
   if (X==0 || Y == 0)  {win.center(win.parent)}


   if (parent) {
      if (parent instanceof Window) {
         win.parent = parent;
      } else if (useCancel == undefined) {
         useCancel = parent;
      }
   }

   if (useCancel) {
      win.cancel = win.add('button', undefined, 'Cancel');
      win.cancel.onClick = function() {
      try {
         if (win.onCancel) {
            var rc = win.onCancel();
            if (rc || rc == undefined) {
               win.close();
            }
         } else {
            win.close();
         }
         } catch (e) { alert(e); }
      }
   }

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
    return win;
};

function IsOSX() {

	if ( $.os.search(/macintosh/i) != -1 ) {

		return true;

	} else {

		return false;

	}
}