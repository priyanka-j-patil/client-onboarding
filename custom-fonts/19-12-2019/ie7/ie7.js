/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'genericadmin\'">' + entity + '</span>' + html;
	}
	var icons = {
		'genericadmin-iconfinder_editor-attachment-paper-clip_763388': '&#xe928;',
		'genericadmin-Feed': '&#xe926;',
		'genericadmin-All': '&#xe927;',
		'genericadmin-Coverage': '&#xe91d;',
		'genericadmin-Package01': '&#xe91e;',
		'genericadmin-New_Package': '&#xe91f;',
		'genericadmin-Folder': '&#xe920;',
		'genericadmin-html': '&#xe921;',
		'genericadmin-Json': '&#xe922;',
		'genericadmin-Live': '&#xe923;',
		'genericadmin-txt-04': '&#xe924;',
		'genericadmin-xml': '&#xe925;',
		'genericadmin-Trash': '&#xe91c;',
		'genericadmin-Sort02-06': '&#xe90b;',
		'genericadmin-Sort01-05': '&#xe90c;',
		'genericadmin-SelectO1': '&#xe902;',
		'genericadmin-SelectO2': '&#xe91b;',
		'genericadmin-uparrow': '&#xe905;',
		'genericadmin-downArrow': '&#xe91a;',
		'genericadmin-Refresh': '&#xe904;',
		'genericadmin-delete': '&#xe903;',
		'genericadmin-Product': '&#xe917;',
		'genericadmin-Client': '&#xe918;',
		'genericadmin-Package': '&#xe919;',
		'genericadmin-Add': '&#xe912;',
		'genericadmin-Edit': '&#xe916;',
		'genericadmin-view': '&#xe911;',
		'genericadmin-logout': '&#xe909;',
		'genericadmin-plus': '&#xe900;',
		'genericadmin-edit': '&#xe901;',
		'genericadmin-date': '&#xe90a;',
		'genericadmin-slash': '&#xe90f;',
		'genericadmin-arrowDown': '&#xe906;',
		'genericadmin-search': '&#xe907;',
		'genericadmin-logo': '&#xe908;',
		'genericadmin-success': '&#xe90d;',
		'genericadmin-unavailable': '&#xe90e;',
		'genericadmin-cancel': '&#xe910;',
		'genericadmin-arrowRight': '&#xe913;',
		'genericadmin-key': '&#xe914;',
		'genericadmin-user': '&#xe915;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/genericadmin-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
