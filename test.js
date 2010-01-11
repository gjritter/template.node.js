(function() {
	var sys = require('sys'),
		test = require('mjsunit'),
		template = require('./template');

	var myobj = {obj : {num: 5, person:'Jack'}};
	var myobj2 = {obj : {num: 10, person:'Jill'}};

	var template_value = template.tmpl('./tmpls/t1.template', myobj);
	test.assertEquals('5 apples for Jack ', template_value);

	var name = 'chad';
	template_value = template.tmpl('./tmpls/t2.template', {name:name});
	test.assertEquals('chad', template_value);

	template_value = template.tmpl('./tmpls/t2.template', {name:'Bob'});
	test.assertEquals('Bob', template_value);

	var f = template.tmpl('./tmpls/t2.template');
	test.assertEquals('alice', f({name:'alice'}));

	var data = {users: [{name:'Chad', age:25}, {name:'Bob', age:40}]};
	test.assertEquals('Chad is 25 years old.\nBob is 40 years old.\n', template.tmpl('./tmpls/t3.template', data));
}());
