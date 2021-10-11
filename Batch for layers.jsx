#target photoshop

var w = buildWindow(),
    result = w.show()

function buildWindow() {
    {
        // DIALOG
        // ======
        var dialog = new Window("dialog");
        dialog.text = "Batch for layers";
        dialog.orientation = "column";
        dialog.alignChildren = ["center", "top"];
        dialog.spacing = 10;
        dialog.margins = 16;

        // PNSOURCE
        // ========
        var pnSource = dialog.add("panel", undefined, undefined, { name: "pnSource" });
        pnSource.text = "Source layers";
        pnSource.orientation = "column";
        pnSource.alignChildren = ["left", "top"];
        pnSource.spacing = 10;
        pnSource.margins = 10;

        // GTYPE
        // =====
        var gType = pnSource.add("group", undefined, { name: "gType" });
        gType.orientation = "row";
        gType.alignChildren = ["left", "center"];
        gType.spacing = 10;
        gType.margins = 0;

        var stLayerType = gType.add("statictext", undefined, undefined, { name: "stLayerType" });
        stLayerType.text = "Type:";
        stLayerType.preferredSize.width = 80;
        stLayerType.justify = "right";

        var layerType_array = ["Item 1", "-", "Item 2"];
        var layerType = gType.add("dropdownlist", undefined, undefined, { name: "layerType", items: layerType_array });
        layerType.selection = 0;
        layerType.preferredSize.width = 220;
        layerType.varValue = "layerType"

        // GLAYERLABELS
        // ============
        var gLayerLabels = pnSource.add("group", undefined, { name: "gLayerLabels" });
        gLayerLabels.orientation = "row";
        gLayerLabels.alignChildren = ["left", "center"];
        gLayerLabels.spacing = 0;
        gLayerLabels.margins = 0;

        // GLABELS
        // =======
        var gLabels = gLayerLabels.add("group", undefined, { name: "gLabels" });
        gLabels.orientation = "row";
        gLabels.alignChildren = ["left", "center"];
        gLabels.spacing = 10;
        gLabels.margins = 0;

        var stLayerLabels = gLabels.add("statictext", undefined, undefined, { name: "stLayerLabels" });
        stLayerLabels.text = "Labels:";
        stLayerLabels.preferredSize.width = 80;
        stLayerLabels.justify = "right";

        var layerLabels_array = ["Item 1", "-", "Item 2"];
        var layerLabels = gLabels.add("dropdownlist", undefined, undefined, { name: "layerLabels", items: layerLabels_array });
        layerLabels.selection = 0;
        layerLabels.preferredSize.width = 220;
        layerLabels.varValue = "layerLabels"

        // PNSOURCE
        // ========
        var allSourceLayers = pnSource.add("checkbox", undefined, undefined, { name: "allSourceLayers" });
        allSourceLayers.text = "all layers of the specifed type";
        allSourceLayers.varValue = 'allSourceLayers'

        var noBackground = pnSource.add("checkbox", undefined, undefined, { name: "noBackground" });
        noBackground.text = "do not process background layer";
        noBackground.varValue = 'noBackground'
        noBackground.value = true

        var groupsAsLayers = pnSource.add("checkbox", undefined, undefined, { name: "groupsAsLayers" });
        groupsAsLayers.text = "process groups as layers";
        groupsAsLayers.varValue = 'groupsAsLayers'

        // PNACTIONS
        // =========
        var pnActions = dialog.add("panel", undefined, undefined, { name: "pnActions" });
        pnActions.text = "Play actions";
        pnActions.orientation = "column";
        pnActions.alignChildren = ["left", "top"];
        pnActions.spacing = 10;
        pnActions.margins = 10;

        // GACTIONS
        // ========
        var gActions = pnActions.add("group", undefined, { name: "gActions" });
        gActions.orientation = "column";
        gActions.alignChildren = ["left", "center"];
        gActions.spacing = 10;
        gActions.margins = 0;


        // GSET
        // ====
        var gSet = gActions.add("group", undefined, { name: "gSet" });
        gSet.orientation = "row";
        gSet.alignChildren = ["left", "center"];
        gSet.spacing = 10;
        gSet.margins = 0;


        var stSet = gSet.add("statictext", undefined, undefined, { name: "stSet" });
        stSet.text = "Set:";
        stSet.preferredSize.width = 80;
        stSet.justify = "right";

        var set_array = ["Item 1", "-", "Item 2"];
        var set = gSet.add("dropdownlist", undefined, undefined, { name: "set", items: set_array });
        set.selection = 0;
        set.preferredSize.width = 220;
        set.varText = 'set'

        // GATN
        // ====
        var gAtn = gActions.add("group", undefined, { name: "gAtn" });
        gAtn.orientation = "row";
        gAtn.alignChildren = ["left", "center"];
        gAtn.spacing = 10;
        gAtn.margins = 0;

        var stAtn = gAtn.add("statictext", undefined, undefined, { name: "stAtn" });
        stAtn.text = "Action:";
        stAtn.preferredSize.width = 80;
        stAtn.justify = "right";

        var atn_array = ["Item 1", "-", "Item 2"];
        var atn = gAtn.add("dropdownlist", undefined, undefined, { name: "atn", items: atn_array });
        atn.selection = 0;
        atn.preferredSize.width = 220;
        atn.varText = 'atn'

        // PNSAVE
        // ======
        var pnSave = dialog.add("panel", undefined, undefined, { name: "pnSave" });
        pnSave.text = "Save ";
        pnSave.orientation = "column";
        pnSave.alignChildren = ["left", "top"];
        pnSave.spacing = 10;
        pnSave.margins = 10;

        // GSAVEAS
        // =======
        var gSaveAs = pnSave.add("group", undefined, { name: "gSaveAs" });
        gSaveAs.orientation = "row";
        gSaveAs.alignChildren = ["left", "center"];
        gSaveAs.spacing = 10;
        gSaveAs.margins = 0;

        var saveAs = gSaveAs.add("checkbox", undefined, undefined, { name: "saveAs" });
        saveAs.text = "save as...";
        saveAs.preferredSize.width = 180;
        saveAs.varValue = 'saveAs'
        saveAs.value = true

        var fileType_array = ["jpg", "tif", "psd", "png"];
        var fileType = gSaveAs.add("dropdownlist", undefined, undefined, { name: "fileType", items: fileType_array });
        fileType.selection = 0;
        fileType.preferredSize.width = 120;
        fileType.varValue = 'fileType'

        // GSAVEOPTIONS
        // ============
        var gSaveOptions = pnSave.add("group", undefined, { name: "gSaveOptions" });
        gSaveOptions.orientation = "column";
        gSaveOptions.alignChildren = ["left", "center"];
        gSaveOptions.spacing = 10;
        gSaveOptions.margins = 0;

        // GJPG
        // ====
        var gJpg = gSaveOptions.add("group", undefined, { name: "gJpg" });
        gJpg.orientation = "row";
        gJpg.alignChildren = ["left", "center"];
        gJpg.spacing = 10;
        gJpg.margins = 0;

        var stQuality = gJpg.add("statictext", undefined, undefined, { name: "stQuality" });
        stQuality.text = "quality of jpg";
        stQuality.preferredSize.width = 120;

        var stQualityValue = gJpg.add("statictext", undefined, undefined, { name: "stQualityValue" });
        stQualityValue.text = "12";
        stQualityValue.preferredSize.width = 25;

        var quality = gJpg.add("slider", undefined, undefined, undefined, undefined, { name: "quality" });
        quality.minvalue = 1;
        quality.maxvalue = 12;
        quality.value = 12;
        quality.preferredSize.width = 145;
        quality.varValue = 'quality'

        // GFLATTEN
        // ========
        var gFlatten = gSaveOptions.add("group", undefined, { name: "gFlatten" });
        gFlatten.orientation = "row";
        gFlatten.alignChildren = ["left", "center"];
        gFlatten.spacing = 10;
        gFlatten.margins = 0;

        var flatten = gFlatten.add("checkbox", undefined, undefined, { name: "flatten" });
        flatten.text = "flatten layers before save";
        flatten.varValue = 'flatten'

        // GOPTIONS
        // ========
        var gOptions = gSaveOptions.add("group", undefined, { name: "gOptions" });
        gOptions.orientation = "column";
        gOptions.alignChildren = ["left", "center"];
        gOptions.spacing = 10;
        gOptions.margins = 0;

        var eraseMetadata = gOptions.add("checkbox", undefined, undefined, { name: "eraseMetadata" });
        eraseMetadata.text = "erase metadata";
        eraseMetadata.varValue = 'eraseMetadata'

        var replaceFiles = gOptions.add("checkbox", undefined, undefined, { name: "replaceFiles" });
        replaceFiles.text = "replace files when saving";
        replaceFiles.varValue = 'replaceFiles'
        replaceFiles.value = true

        // PNSNAPSHOTS
        // ===========
        var pnSnapshots = dialog.add("panel", undefined, undefined, { name: "pnSnapshots" });
        pnSnapshots.text = "Snapshots";
        pnSnapshots.orientation = "column";
        pnSnapshots.alignChildren = ["left", "top"];
        pnSnapshots.spacing = 10;
        pnSnapshots.margins = 10;

        var backToInitialState = pnSnapshots.add("checkbox", undefined, undefined, { name: "backToInitialState" });
        backToInitialState.text = "back to initial state:";
        backToInitialState.preferredSize.width = 310;
        backToInitialState.varValue = 'backToInitialState'
        backToInitialState.value = true

        var snapshotMode_array = ["Item 1", "-", "Item 2"];
        var snapshotMode = pnSnapshots.add("dropdownlist", undefined, undefined, { name: "snapshotMode", items: snapshotMode_array });
        snapshotMode.selection = 0;
        snapshotMode.preferredSize.width = 310;
        snapshotMode.varValue = 'snapshotMode'

        // PNPREPROCESS
        // ============
        var pnPreprocess = dialog.add("panel", undefined, undefined, { name: "pnPreprocess" });
        pnPreprocess.text = "Preprocess options";
        pnPreprocess.orientation = "column";
        pnPreprocess.alignChildren = ["left", "top"];
        pnPreprocess.spacing = 10;
        pnPreprocess.margins = 10;

        // GVISIBLITY
        // ==========
        var gVisiblity = pnPreprocess.add("group", undefined, { name: "gVisiblity" });
        gVisiblity.orientation = "row";
        gVisiblity.alignChildren = ["left", "center"];
        gVisiblity.spacing = 10;
        gVisiblity.margins = 0;

        var stVisiblity = gVisiblity.add("statictext", undefined, undefined, { name: "stVisiblity" });
        stVisiblity.text = "set visiblity of source layers";
        stVisiblity.preferredSize.width = 180;

        var visiblityMode_array = ["Item 1", "-", "Item 2"];
        var visiblityMode = gVisiblity.add("dropdownlist", undefined, undefined, { name: "visiblityMode", items: visiblityMode_array });
        visiblityMode.selection = 0;
        visiblityMode.preferredSize.width = 120;
        visiblityMode.varValue = 'visiblityMode'

        // PNPREPROCESS
        // ============
        var unlockLayers = pnPreprocess.add("checkbox", undefined, undefined, { name: "unlockLayers" });
        unlockLayers.text = "unlock layers";
        unlockLayers.varValue = 'unlockLayers'
        unlockLayers.value = true

        // GBUTTONS
        // ========
        var gButtons = dialog.add("group", undefined, { name: "gButtons" });
        gButtons.orientation = "row";
        gButtons.alignChildren = ["left", "center"];
        gButtons.spacing = 10;
        gButtons.margins = 0;

        var ok = gButtons.add("button", undefined, undefined, { name: "ok" });
        ok.text = "Process";

        var cancel = gButtons.add("button", undefined, undefined, { name: "cancel" });
        cancel.text = "Cancel";

    }

    dialog.onShow = function () {
        var a = new AM()
        $.writeln(a.getCurrentAction())
    }

    return dialog;
}

function Settings() {
    function getDialogOptions(parent, options) {
        options = options ? options : {};

        for (var i = 0; i < parent.children.length; i++) {
            if (parent.children[i].children) getDialogOptions(parent.children[i], options)

            if (parent.children[i].varValue) {
                switch (parent.children[i].type) {
                    case 'dropdownlist':
                        options[parent.children[i].varValue] = parent.children[i].items.length ? parent.children[i].selection.index : 0;
                        break;
                    default: options[parent.children[i].varValue] = parent.children[i].value

                }
            } else if (parent.children[i].varText) {
                options[parent.children[i].varText] = parent.children[i].items.length ? parent.children[i].selection.text : '';
            }
        }
        return options;
    }

    function setDialogOptions(parent, options) {
        for (var i = 0; i < parent.children.length; i++) {
            if (parent.children[i].children) setDialogOptions(parent.children[i], options)

            if (parent.children[i].varValue) {
                switch (parent.children[i].type) {
                    case 'dropdownlist':
                        parent.children[i].selection.index = options[parent.children[i].varValue] < parent.children[i].items.length ? options[parent.children[i].varValue] : 0;
                        break;
                    default: parent.children[i].value = options[parent.children[i].varValue]

                }
            } else if (parent.children[i].varText) {
                parent.children[i].selection = parent.children[i].find(options[parent.children[i].varText]) ? parent.children[i].find(options[parent.children[i].varText]) : 0;
            }
        }
        return options;
    }
}

function AM(target) {
    var s2t = stringIDToTypeID,
        t2s = typeIDToStringID;

    target = target ? s2t(target) : null;

    this.getProperty = function (property, id, idxMode) {
        property = s2t(property);
        (r = new ActionReference()).putProperty(s2t('property'), property);
        id != undefined ? (idxMode ? r.putIndex(target, id) : r.putIdentifier(target, id)) :
            r.putEnumerated(target, s2t('ordinal'), order ? s2t(order) : s2t('targetEnum'));
        return getDescValue(executeActionGet(r), property)
    }

    this.hasProperty = function (property, id, idxMode) {
        property = s2t(property);
        (r = new ActionReference()).putProperty(s2t('property'), property);
        id ? (idxMode ? r.putIndex(target, id) : r.putIdentifier(target, id))
            : r.putEnumerated(target, s2t('ordinal'), order ? s2t(order) : s2t('targetEnum'));
        return executeActionGet(r).hasKey(property)
    }

    this.descToObject = function (d) {
        var o = {}
        for (var i = 0; i < d.count; i++) {
            var k = d.getKey(i)
            o[t2s(k)] = getDescValue(d, k)
        }
        return o
    }

    this.objectToDesc = function (o) {
        var d = new ActionDescriptor();
        for (var k in o) {
            var v = o[k];
            switch (typeof (v)) {
                case 'boolean': d.putBoolean(s2t(k), v); break;
                case 'string': d.putString(s2t(k), v); break;
                case 'number': d.putInteger(s2t(k), v); break;
            }
        }
        return d;
    }

    function getDescValue(d, p) {
        switch (d.getType(p)) {
            case DescValueType.OBJECTTYPE: return { type: t2s(d.getObjectType(p)), value: d.getObjectValue(p) };
            case DescValueType.LISTTYPE: return d.getList(p);
            case DescValueType.REFERENCETYPE: return d.getReference(p);
            case DescValueType.BOOLEANTYPE: return d.getBoolean(p);
            case DescValueType.STRINGTYPE: return d.getString(p);
            case DescValueType.INTEGERTYPE: return d.getInteger(p);
            case DescValueType.LARGEINTEGERTYPE: return d.getLargeInteger(p);
            case DescValueType.DOUBLETYPE: return d.getDouble(p);
            case DescValueType.ALIASTYPE: return d.getPath(p);
            case DescValueType.CLASSTYPE: return d.getClass(p);
            case DescValueType.UNITDOUBLE: return (d.getUnitDoubleValue(p));
            case DescValueType.ENUMERATEDTYPE: return { type: t2s(d.getEnumerationType(p)), value: t2s(d.getEnumerationValue(p)) };
            default: break;
        };
    }

    this.getActionsList = function () {
        var output = [],
            set = 1;
        while (true) {
            (r = new ActionReference()).putIndex(s2t('actionSet'), set);
            try { desc = executeActionGet(r) } catch (e) { break; }
            var numberOfChildren = desc.hasKey(p = s2t('numberOfChildren')) ? desc.getInteger(p) : 0
            if (numberOfChildren > 0) {
                output.push([desc.getString(s2t('name')), []])
                output[output.length - 1][1] = getActionList(set, numberOfChildren)
            }
            set++
        }

        function getActionList(setIndex, numberOfChildren) {
            var cur = [];
            for (var i = 1; i <= numberOfChildren; i++) {
                (r = new ActionReference()).putIndex(s2t('action'), i);
                r.putIndex(s2t('actionSet'), setIndex)
                cur.push(executeActionGet(r).getString(s2t('name')))
            }
            return cur
        }
        return output
    }


    this.getCurrentAction = function () {
        var atn, set;
        try {
            (r = new ActionReference()).putEnumerated(s2t('action'), s2t('ordinal'), s2t('targetEnum'));
            atn = executeActionGet(r).getString(s2t('parentName'));

            try {
                (r = new ActionReference()).putName(s2t('actionSet'), atn);
                set = executeActionGet(r).getString(s2t('name'));

                (r = new ActionReference()).putEnumerated(s2t('action'), s2t('ordinal'), s2t('targetEnum'));
                atn = executeActionGet(r).getString(s2t('name'));
            } catch (e) {
                (r = new ActionReference()).putName(s2t('action'), atn);
                set = executeActionGet(r).getString(s2t('parentName'));
            }
        }
        catch (e) { return [0, 0] }

        try {
            (r = new ActionReference()).putName(s2t('actionSet'), set);
            set = executeActionGet(r).getInteger(s2t('itemIndex'));
        } catch (e) { set = 1 }

        try {
            (r = new ActionReference()).putName(s2t('action'), atn);
            atn = executeActionGet(r).getInteger(s2t('itemIndex'))
        } catch (e) { atn = 1 }

        return [set - 1, atn - 1]
    }
}

