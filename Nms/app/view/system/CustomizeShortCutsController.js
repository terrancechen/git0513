Ext.define('Nms.view.system.CustomizeShortCutsController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.customizeShortCutsController',
    
    control : {
	      'tagfield': {
			        render : 'setupStore'
		    }   
	  }, 
	   
	  /*init : function() {
	  	  var me = this, refs = me.getReferences(), 
	  	      shortcuts  = refs.shortcuts;
	  	      
     	  shortcuts.on('render', me.setupStore);
	  }, */
	  
	  setupStore : function(view) {
			  var store = Ext.getStore('system.QuickStartMenuStore');
			  var me = this;
			   
			  store.load({
				    scope: me,
				    callback: function(records, operation, success) {
				        view.store = store;				        
				    }
				});				
		},

    saveShortCuts : function(view) {
		    var win = this.getView();
		    
		    Ext.Ajax.request({
		        url: 'system/menu/saveShortCuts.action',
				    scope : this,
				    params: {
						    shortCuts : win.down('tagfield').getValue() 
				    },
				    success : function(response){
				     	Ext.toast("保存成功！");
				    	win.close();
				    },
				    failure : function(response){
				       Ext.toast("保存失败！");
				    }
				});		
		}
});


