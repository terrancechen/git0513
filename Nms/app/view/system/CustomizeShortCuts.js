Ext.define('Nms.view.system.CustomizeShortCuts', {
	extend : 'Ext.panel.Panel',
	xtype : 'customizeshortcuts',
	title : '定义快捷菜单',
	layout : 'fit',
	autoShow : true,
	width : 400,
	controller : 'customizeShortCutsController',

	initComponent : function() {
		this.items = [{
			xtype : 'panel',
		    frame: true,
		    layout: 'form',
		    items: [{
		        xtype: 'tagfield',
		        fieldLabel: '选择快捷方式',
		        reference: 'shortcuts',
		        itemId : 'shortcuts',
		        filterPickList: true,
		        queryMode: 'local',
		        publishes: 'value'
		    }],
		    buttons: [{
		        text: '确定',
		        handler : 'saveShortCuts'
		    }]
		}];
		
		this.callParent(arguments);
	}
});


