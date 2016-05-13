Ext.define('Nms.store.system.QuickStartMenuStore', {
    extend: 'Ext.data.Store',
    
    model: 'Nms.model.system.MenuModel',

    proxy: {
	    type: 'ajax',
	    api: {
	        read: 'system/menu/getMenusOfLeaf.action'
	    },
	    reader: {
	        type: 'json'
	    }
	}
});