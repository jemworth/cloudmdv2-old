/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'basicstyles,dialogui,dialog,clipboard,button,toolbar,enterkey,entities,floatingspace,wysiwygarea,indent,indentlist,list,undo,save,panel,floatpanel,listblock,richcombo,font,inlinecancel,justify,menu,contextmenu,liststyle,fakeobjects,pagebreak,print,preview,popup,lineutils,widgetselection,widget,filetools,notification,notificationaggregator,uploadwidget,horizontalrule,format_buttons,sharedspace';
	config.skin = 'minimalist';

	// %REMOVE_END%

	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for a single toolbar row.
	config.toolbar = [
		{ name: 'styles', items: [ 'FontSize' ] },
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline'] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
		{ name: 'insert', items: [ 'HorizontalRule', 'PageBreak' ] },
		{ name: 'basicstyles', items: ['h1', 'h2', 'h3', 'h4', 'h5' ] },
		{ name: 'clipboard', items: [ 'Undo', 'Redo' ] },
		{ name: 'document', items: [ 'Preview', 'Print' ] }
	];

	config.toolbarGroups = [
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Cut,Copy,Save,Cancel,Paste,Anchor,Strike,Subscript,Superscript,Font,h6,Outdent,Indent';

	// Dialog windows are also simplified.
	config.removeDialogTabs = 'link:advanced';
    config.sharedSpaces = {
	    top: 'cktoolbox'
	}
};


