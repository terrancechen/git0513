Ext.define('Nms.model.system.MenuModel', {
    extend: 'Ext.data.Model',
	  fields : [ 'id', 'text', 'cntType', 'icon', 'root', 'smallIcon', 'pid',
			'pName', 'shortCut', 'quickStart', 'size', 'sort', 'mode' ]
});