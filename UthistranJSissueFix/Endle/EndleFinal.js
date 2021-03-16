(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.EndleFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		playSound("_12sound3");
	}
	this.frame_69 = function() {
		playSound("_12sound3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(54).call(this.frame_69).wait(538));

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(540,457.1,0.485,0.485,0,0,0,79,126.1);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(363.8,463.2,0.545,0.545,0,0,0,79,126.1);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(491.6,451.6,1,1,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(482.3,449,1,1,0,0,0,249.5,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(607));

	// I Do
	this.instance_3 = new lib.Symbol4("synched",0);
	this.instance_3.setTransform(500,825.4);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.setTransform(500,825.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{alpha:0}}]},201).to({state:[{t:this.instance_3,p:{alpha:1}}]},24).to({state:[{t:this.instance_4,p:{alpha:1}}]},64).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[]},254).to({state:[]},39).wait(3));

	// Layer 24
	this.instance_5 = new lib.Created("synched",0);
	this.instance_5.setTransform(477,827,1,1,0,0,0,313.5,64);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(187).to({startPosition:0,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(408));

	// I Was
	this.instance_6 = new lib.Created("synched",0);
	this.instance_6.setTransform(477,827,1,1,0,0,0,313.5,64);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).wait(99).to({startPosition:0,_off:false},0).to({startPosition:0},27).to({alpha:1},11).to({_off:true},49).wait(13).to({alpha:0,_off:false},0).to({_off:true},126).wait(25).to({startPosition:0,_off:false},0).to({_off:true},215).wait(42));

	// Hi
	this.instance_7 = new lib.hi("synched",0);
	this.instance_7.setTransform(794.5,274.9,1.077,1.077,0,0,0,171.5,89.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0,_off:false},0).wait(18).to({alpha:0.961},0).wait(56).to({alpha:1},0).to({scaleX:1.22,scaleY:1.22,y:275,alpha:0},24).to({_off:true},467).wait(42));

	// EndleHirezBody
	this.instance_8 = new lib.EndleEyeAnim();
	this.instance_8.setTransform(478.4,496.9,1,1,0,0,0,179.8,370);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(607));

	// EndleCharacter
	this.instance_9 = new lib.EndleHiRez101("synched",0);
	this.instance_9.setTransform(478.2,495.4,0.613,0.613,0,0,0,291.3,600.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0,_off:false},0).wait(604).to({startPosition:0},0).wait(3));

	// Footer
	this.instance_10 = new lib.StageNew2();
	this.instance_10.setTransform(-22.3,727.5,0.859,0.979);

	this.instance_11 = new lib.Footer("synched",0);
	this.instance_11.setTransform(490,825.4,1,1,0,0,0,490,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},604).wait(3));

	// Bkgrnd
	this.instance_12 = new lib.Abysson();
	this.instance_12.setTransform(-39.3,54.6,1.107,1.107);

	this.instance_13 = new lib.Bkgrnd("synched",0);
	this.instance_13.setTransform(490.1,490.2,1.508,1.508,0,0,0,325.1,325.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},604).wait(3));

	// Layer 26
	this.instance_14 = new lib.BlueGlow();
	this.instance_14.setTransform(65.2,-137.9,1.858,2.433);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},1).wait(607));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(232.8,261.5,493.2,460.1);


// symbols:
(lib.Abysson = function() {
	this.initialize(img.Abysson);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,664);


(lib.Bkgrnd_Small = function() {
	this.initialize(img.Bkgrnd_Small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,650);


(lib.BlueGlow = function() {
	this.initialize(img.BlueGlow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,480);


(lib.e1001 = function() {
	this.initialize(img.e1001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1002 = function() {
	this.initialize(img.e1002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1003 = function() {
	this.initialize(img.e1003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1004 = function() {
	this.initialize(img.e1004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1005 = function() {
	this.initialize(img.e1005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1006 = function() {
	this.initialize(img.e1006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1007 = function() {
	this.initialize(img.e1007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1008 = function() {
	this.initialize(img.e1008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1009 = function() {
	this.initialize(img.e1009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1010 = function() {
	this.initialize(img.e1010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1011 = function() {
	this.initialize(img.e1011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1012 = function() {
	this.initialize(img.e1012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1013 = function() {
	this.initialize(img.e1013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1014 = function() {
	this.initialize(img.e1014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1015 = function() {
	this.initialize(img.e1015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1016 = function() {
	this.initialize(img.e1016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1018 = function() {
	this.initialize(img.e1018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1019 = function() {
	this.initialize(img.e1019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1020 = function() {
	this.initialize(img.e1020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1021 = function() {
	this.initialize(img.e1021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1023 = function() {
	this.initialize(img.e1023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1024 = function() {
	this.initialize(img.e1024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1026 = function() {
	this.initialize(img.e1026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1027 = function() {
	this.initialize(img.e1027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1029 = function() {
	this.initialize(img.e1029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1030 = function() {
	this.initialize(img.e1030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1032 = function() {
	this.initialize(img.e1032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1033 = function() {
	this.initialize(img.e1033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1035 = function() {
	this.initialize(img.e1035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1036 = function() {
	this.initialize(img.e1036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1038 = function() {
	this.initialize(img.e1038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1039 = function() {
	this.initialize(img.e1039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1041 = function() {
	this.initialize(img.e1041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1042 = function() {
	this.initialize(img.e1042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1044 = function() {
	this.initialize(img.e1044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1045 = function() {
	this.initialize(img.e1045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1047 = function() {
	this.initialize(img.e1047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1048 = function() {
	this.initialize(img.e1048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1050 = function() {
	this.initialize(img.e1050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1051 = function() {
	this.initialize(img.e1051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1053 = function() {
	this.initialize(img.e1053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1054 = function() {
	this.initialize(img.e1054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1056 = function() {
	this.initialize(img.e1056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1057 = function() {
	this.initialize(img.e1057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1059 = function() {
	this.initialize(img.e1059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1060 = function() {
	this.initialize(img.e1060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1062 = function() {
	this.initialize(img.e1062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1063 = function() {
	this.initialize(img.e1063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1065 = function() {
	this.initialize(img.e1065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1066 = function() {
	this.initialize(img.e1066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1068 = function() {
	this.initialize(img.e1068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1069 = function() {
	this.initialize(img.e1069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1071 = function() {
	this.initialize(img.e1071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1072 = function() {
	this.initialize(img.e1072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1074 = function() {
	this.initialize(img.e1074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1075 = function() {
	this.initialize(img.e1075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1077 = function() {
	this.initialize(img.e1077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1078 = function() {
	this.initialize(img.e1078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1080 = function() {
	this.initialize(img.e1080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1081 = function() {
	this.initialize(img.e1081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1083 = function() {
	this.initialize(img.e1083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1084 = function() {
	this.initialize(img.e1084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1086 = function() {
	this.initialize(img.e1086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1087 = function() {
	this.initialize(img.e1087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1089 = function() {
	this.initialize(img.e1089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1090 = function() {
	this.initialize(img.e1090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1092 = function() {
	this.initialize(img.e1092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1093 = function() {
	this.initialize(img.e1093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1095 = function() {
	this.initialize(img.e1095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1096 = function() {
	this.initialize(img.e1096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1098 = function() {
	this.initialize(img.e1098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1099 = function() {
	this.initialize(img.e1099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1101 = function() {
	this.initialize(img.e1101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1102 = function() {
	this.initialize(img.e1102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1104 = function() {
	this.initialize(img.e1104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1105 = function() {
	this.initialize(img.e1105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1107 = function() {
	this.initialize(img.e1107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1108 = function() {
	this.initialize(img.e1108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1110 = function() {
	this.initialize(img.e1110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1111 = function() {
	this.initialize(img.e1111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1113 = function() {
	this.initialize(img.e1113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1114 = function() {
	this.initialize(img.e1114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1116 = function() {
	this.initialize(img.e1116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1117 = function() {
	this.initialize(img.e1117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1119 = function() {
	this.initialize(img.e1119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1120 = function() {
	this.initialize(img.e1120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,147);


(lib.e1 = function() {
	this.initialize(img.e1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,145);


(lib.e2 = function() {
	this.initialize(img.e2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,92);


(lib.e3 = function() {
	this.initialize(img.e3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,48);


(lib.e4 = function() {
	this.initialize(img.e4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,196);


(lib.EndleEye101 = function() {
	this.initialize(img.EndleEye101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,51);


(lib.EndleEye102 = function() {
	this.initialize(img.EndleEye102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,51);


(lib.EndleEye103 = function() {
	this.initialize(img.EndleEye103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,51);


(lib.EndleHiRezFinal101 = function() {
	this.initialize(img.EndleHiRezFinal101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,583,1200);


(lib.Fire = function() {
	this.initialize(img.Fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,86);


(lib.flames01 = function() {
	this.initialize(img.flames01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames02 = function() {
	this.initialize(img.flames02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames03 = function() {
	this.initialize(img.flames03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames04 = function() {
	this.initialize(img.flames04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames05 = function() {
	this.initialize(img.flames05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames06 = function() {
	this.initialize(img.flames06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames07 = function() {
	this.initialize(img.flames07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames08 = function() {
	this.initialize(img.flames08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames09 = function() {
	this.initialize(img.flames09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames10 = function() {
	this.initialize(img.flames10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames11 = function() {
	this.initialize(img.flames11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames12 = function() {
	this.initialize(img.flames12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames13 = function() {
	this.initialize(img.flames13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames14 = function() {
	this.initialize(img.flames14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames15 = function() {
	this.initialize(img.flames15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames16 = function() {
	this.initialize(img.flames16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames17 = function() {
	this.initialize(img.flames17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames18 = function() {
	this.initialize(img.flames18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames19 = function() {
	this.initialize(img.flames19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames20 = function() {
	this.initialize(img.flames20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames21 = function() {
	this.initialize(img.flames21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames22 = function() {
	this.initialize(img.flames22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames23 = function() {
	this.initialize(img.flames23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames24 = function() {
	this.initialize(img.flames24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames25 = function() {
	this.initialize(img.flames25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames26 = function() {
	this.initialize(img.flames26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames27 = function() {
	this.initialize(img.flames27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames28 = function() {
	this.initialize(img.flames28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames29 = function() {
	this.initialize(img.flames29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames30 = function() {
	this.initialize(img.flames30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames31 = function() {
	this.initialize(img.flames31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames32 = function() {
	this.initialize(img.flames32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames33 = function() {
	this.initialize(img.flames33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames34 = function() {
	this.initialize(img.flames34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames35 = function() {
	this.initialize(img.flames35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames36 = function() {
	this.initialize(img.flames36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames37 = function() {
	this.initialize(img.flames37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames38 = function() {
	this.initialize(img.flames38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames39 = function() {
	this.initialize(img.flames39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames40 = function() {
	this.initialize(img.flames40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames41 = function() {
	this.initialize(img.flames41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames42 = function() {
	this.initialize(img.flames42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames43 = function() {
	this.initialize(img.flames43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames44 = function() {
	this.initialize(img.flames44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames45 = function() {
	this.initialize(img.flames45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames46 = function() {
	this.initialize(img.flames46);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames47 = function() {
	this.initialize(img.flames47);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames48 = function() {
	this.initialize(img.flames48);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames49 = function() {
	this.initialize(img.flames49);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames50 = function() {
	this.initialize(img.flames50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames51 = function() {
	this.initialize(img.flames51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames52 = function() {
	this.initialize(img.flames52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames53 = function() {
	this.initialize(img.flames53);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames54 = function() {
	this.initialize(img.flames54);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames55 = function() {
	this.initialize(img.flames55);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames56 = function() {
	this.initialize(img.flames56);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames57 = function() {
	this.initialize(img.flames57);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames58 = function() {
	this.initialize(img.flames58);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames59 = function() {
	this.initialize(img.flames59);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames60 = function() {
	this.initialize(img.flames60);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames61 = function() {
	this.initialize(img.flames61);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames62 = function() {
	this.initialize(img.flames62);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames63 = function() {
	this.initialize(img.flames63);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames64 = function() {
	this.initialize(img.flames64);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames65 = function() {
	this.initialize(img.flames65);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames66 = function() {
	this.initialize(img.flames66);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames67 = function() {
	this.initialize(img.flames67);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames68 = function() {
	this.initialize(img.flames68);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames69 = function() {
	this.initialize(img.flames69);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames70 = function() {
	this.initialize(img.flames70);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames71 = function() {
	this.initialize(img.flames71);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames72 = function() {
	this.initialize(img.flames72);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames73 = function() {
	this.initialize(img.flames73);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames74 = function() {
	this.initialize(img.flames74);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames75 = function() {
	this.initialize(img.flames75);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames76 = function() {
	this.initialize(img.flames76);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames77 = function() {
	this.initialize(img.flames77);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames78 = function() {
	this.initialize(img.flames78);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames79 = function() {
	this.initialize(img.flames79);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames80 = function() {
	this.initialize(img.flames80);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.flames81 = function() {
	this.initialize(img.flames81);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.gate = function() {
	this.initialize(img.gate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,349,397);


(lib.HiImAnEndlecopy = function() {
	this.initialize(img.HiImAnEndlecopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,431,226);


(lib.HiImAnEndle = function() {
	this.initialize(img.HiImAnEndle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,431,226);


(lib.HiImAnEndlepngcopy = function() {
	this.initialize(img.HiImAnEndlepngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,431,226);


(lib.IDoEnsBidding = function() {
	this.initialize(img.IDoEnsBidding);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.Idoevilenscopy = function() {
	this.initialize(img.Idoevilenscopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,676,127);


(lib.Idoevilens = function() {
	this.initialize(img.Idoevilens);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,676,127);


(lib.Idoevilenspngcopy = function() {
	this.initialize(img.Idoevilenspngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,676,127);


(lib.Iwascreatedbycopy = function() {
	this.initialize(img.Iwascreatedbycopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,627,128);


(lib.Iwascreatedby = function() {
	this.initialize(img.Iwascreatedby);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,627,128);


(lib.Iwascreatedbypngcopy = function() {
	this.initialize(img.Iwascreatedbypngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.LogoIcon101 = function() {
	this.initialize(img.LogoIcon101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,425);


(lib.LowerBar101 = function() {
	this.initialize(img.LowerBar101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,167);


(lib.MenuHeader101 = function() {
	this.initialize(img.MenuHeader101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,133);


(lib.StageNew2 = function() {
	this.initialize(img.StageNew2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,287);


(lib.TemplateEndle = function() {
	this.initialize(img.TemplateEndle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.TwinkleStar111 = function() {
	this.initialize(img.TwinkleStar111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.TwnkleStar123 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TwinkleStar111();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.Tween7_ = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.flames04();
	this.instance.setTransform(-60.9,-109.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.9,-109.4,122,219);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.IDoEnsBidding();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.IDoEnsBidding();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.LogoIcon101_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.LogoIcon101();
	this.instance.setTransform(0,0,0.969,0.969);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,493.3,411.9);


(lib.LoadingGraphic = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACvA+QgHgFAAgLIAUAAIABADIACADIADACIAEABQAGAAADgFQACgEAAgGIAAgLIAAAAQgDAFgFADQgEACgFAAQgIAAgGgEQgGgEgCgJQgDgJAAgNIABgOQABgIACgFQADgHAFgDQAFgEAIAAQAFAAAEACQAFADADAGIAAAAIAAgJIAUAAIAABLQAAAQgIAIQgIAIgSgBQgNABgHgGgADAgWQgDACgBAHIAAAPIAAAKQABAFACADQADADAEAAQAGAAADgGQACgGAAgLQAAgNgCgGQgCgGgHAAQgEAAgCADgAhHAqQgHAAgEgEQgEgDgCgFQgCgGAAgFQAAgHACgFQACgGAFgBQAEgDAHgCIAMgCQAFgBABgDQACgCAAgEQAAgEgCgDQgCgCgFAAQgFAAgCACQgDADAAAFIAAACIgTAAIAAgCQABgJADgGQAEgFAHgDQAGgCAIAAQAMAAAGADQAHADACAGQACAGAAAHIAAApQAAAFABAEIACAGIgUAAIgCgEIgBgFIAAAAQgEAHgEACQgEACgGAAIgDAAgAg2ACIgFABQgGACgDADQgCADAAAGQAAAEACAEQABADAFAAIAFgBQADgBACgEQACgCAAgEIAAgQIgEACgAiWAlQgHgEgCgKQgDgKAAgNQAAgMADgKQADgJAHgFQAHgFAMAAQAMAAAHAFQAHAEADAKQADAJAAANQAAANgDAKQgDAKgHAEQgHAFgMAAIgCAAQgLAAgHgFgAiCgaQgFgBgDAEQgCADgBAHIAAANIAAAOQABAGACAFQADADAFAAQAGAAACgHQADgGAAgPQAAgOgDgGQgCgHgFAAIgBABgAgLAgQgGgKAAgWQAAgVAGgKQAGgKAKAAQAGAAAEACQAFADADAFIAAAAIAAgiIAVAAIAABpIgUAAIAAgJIAAAAQgEAGgEACQgFADgGAAIgBAAQgKAAgFgKgAADgSQgCAGAAAMQAAANACAGQADAHAGAAQAHAAACgHQACgGAAgNQAAgMgCgGQgCgHgHAAQgGAAgDAHgACGAoIAAg2QAAgFgCgEQgCgCgFAAQgFAAgDADQgDADAAAHIAAA0IgUAAIAAhPIATAAIAAAJIABAAQADgFAFgDQAGgDAGAAQAKAAAFAGQAGAFAAAMIAAA6gAA6AoIAAhPIAVAAIAABPgAjkAoIAAhpIAVAAIAABXIAnAAIAAASgAA6gxIAAgSIAVAAIAAASg");
	this.shape.setTransform(98.7,12.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(75.8,5.6,46,13.6);


(lib.LoadBar = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","rgba(255,255,255,0.6)"],[0,0.824],0,-7.2,0,7.2).s().p("AgEBGIAAiLIAIAAIAACLg");
	this.shape.setTransform(0.5,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1,14);


(lib.LoadBackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("APoBkI/PAAIAAjHIfPAAg");
	this.shape.setTransform(100,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.302)").s().p("AvnBjIAAjGIfOAAIAADGg");
	this.shape_1.setTransform(100,10);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,20);


(lib.hi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.HiImAnEndle();
	this.instance.setTransform(0,0,0.796,0.796);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,343,179.9);


(lib.Footer = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.LowerBar101();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,980,167);


(lib.Eye101a = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.EndleEye101();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,128,51);


(lib.EndleHiRez101 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.EndleHiRezFinal101();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,583,1200);


(lib.EndleEyeAnim102a = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.EndleEye102();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,128,51);


(lib.Created = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Iwascreatedby();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,627,128);


(lib.Bkgrnd = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bkgrnd_Small();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,650,650);


(lib.TwnkleStarAnim123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.TwnkleStar123("synched",0);
	this.instance.setTransform(277.1,62.1,1,1,0,0,0,99,99);
	this.instance.alpha = 0.469;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.61,scaleY:1.61,x:277,y:62.5,alpha:0.828},9).to({scaleX:1,scaleY:1,x:277.1,y:62.6,alpha:0.469},10).to({x:277,y:62.5,alpha:0},30).wait(6));

	// Layer 4
	this.instance_1 = new lib.TwnkleStar123("synched",0);
	this.instance_1.setTransform(464,143.1,1,1,0,0,0,99,99);
	this.instance_1.alpha = 0.469;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({startPosition:0,_off:false},0).to({scaleX:1.61,scaleY:1.61,y:143,alpha:0.828},9).to({scaleX:1,scaleY:1,x:463,y:142.1,alpha:0.469},10).to({y:143,alpha:0},30).to({_off:true},16).wait(18));

	// Layer 3
	this.instance_2 = new lib.TwnkleStar123("synched",0);
	this.instance_2.setTransform(255,-17.8,1,1,0,0,0,99,99);
	this.instance_2.alpha = 0.469;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({startPosition:0,_off:false},0).to({scaleX:1.61,scaleY:1.61,y:-17.8,alpha:0.828},9).to({scaleX:1,scaleY:1,y:-17.7,alpha:0.469},10).to({x:256,y:-16.8,alpha:0},30).to({_off:true},24).wait(19));

	// Layer 2
	this.instance_3 = new lib.TwnkleStar123("synched",0);
	this.instance_3.setTransform(204,136.1,1,1,0,0,0,99,99);
	this.instance_3.alpha = 0.469;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({startPosition:0,_off:false},0).to({scaleX:1.61,scaleY:1.61,y:135,alpha:0.828},9).to({scaleX:1,scaleY:1,y:136.1,alpha:0.469},10).to({y:135,alpha:0},30).to({_off:true},1).wait(19));

	// Layer 1
	this.instance_4 = new lib.TwnkleStar123("synched",0);
	this.instance_4.setTransform(79,126,1,1,0,0,0,99,99);
	this.instance_4.alpha = 0.469;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.61,scaleY:1.61,y:127,alpha:0.828},9).to({scaleX:1,scaleY:1,y:126,alpha:0.398},10).to({alpha:0},30).to({_off:true},1).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,27,198,198);


(lib.Preloader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loading:0});

	// Loading Graphic
	this.instance = new lib.LoadingGraphic();
	this.instance.setTransform(37,242.7,1,1,0,0,0,49.5,8.8);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({x:47,y:-17.1},0).to({alpha:0},11).to({_off:true},1).wait(7));

	// LoadBar
	this.loadBar = new lib.LoadBar();
	this.loadBar.setTransform(-6.4,270.1,1,1,0,0,0,0.5,7);

	this.timeline.addTween(cjs.Tween.get(this.loadBar).wait(2).to({x:3.5,y:10.1},0).to({alpha:0},10).to({_off:true},1).wait(12));

	// background
	this.instance_1 = new lib.LoadBackground();
	this.instance_1.setTransform(90,270,1,1,0,0,0,100,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({x:100,y:10},0).to({alpha:0},10).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,239.5,200,40.6);


(lib.flames = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/* Layers with classic tweens must contain only a single symbol instance. */

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,219);


(lib.EndleEyeAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye01
	this.instance = new lib.Eye101a("synched",0);
	this.instance.setTransform(179.5,62.5,0.61,0.61,0,0,0,64,25.5);

	this.instance_1 = new lib.EndleEyeAnim102a("synched",0);
	this.instance_1.setTransform(179.4,62.6,0.609,0.609,0,0,0,64,25.6);

	this.instance_2 = new lib.EndleEye103();
	this.instance_2.setTransform(140.5,47.1,0.608,0.604);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},115).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140.4,47,78.1,31.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;