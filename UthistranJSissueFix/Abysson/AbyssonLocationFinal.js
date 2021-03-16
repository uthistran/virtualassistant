(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.AbyssonLocationFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(540,457.1,0.485,0.485,0,0,0,79,126.1);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(363.8,463.2,0.545,0.545,0,0,0,79,126.1);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(491.6,437.6,1,1,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(485.3,440,1,1,0,0,0,249.5,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).to({state:[]},594).wait(66));

	// Abysson
	this.instance_3 = new lib.Abysson_1("synched",0);
	this.instance_3.setTransform(477.9,899,3.875,3.875,0,0,0,117.7,45.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0,_off:false},0).wait(594).to({regX:117.6,x:477.5},0).wait(65).to({regX:117.5,x:477.2},0).wait(1));

	// He Will
	this.instance_4 = new lib.Symbol10("synched",0);
	this.instance_4.setTransform(486.3,503.4);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.HeWillpngcopy();
	this.instance_5.setTransform(-3.6,313.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4,p:{alpha:0}}]},575).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:0}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4,p:{alpha:1}}]},35).to({state:[{t:this.instance_4,p:{alpha:1}}]},28).wait(1));

	// Ens Goal
	this.instance_6 = new lib.Symbol9("synched",0);
	this.instance_6.setTransform(491.3,500.4);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Symbol7("synched",0);
	this.instance_7.setTransform(491.3,500.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6,p:{alpha:0}}]},493).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:0}}]},1).to({state:[{t:this.instance_6,p:{alpha:1}}]},1).to({state:[{t:this.instance_6,p:{alpha:1}}]},39).to({state:[{t:this.instance_7}]},28).to({state:[]},1).wait(86));

	// Evilla & Ruda
	this.instance_8 = new lib.Symbol6("synched",0);
	this.instance_8.setTransform(498.3,499.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(398).to({startPosition:0,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(66).to({startPosition:0},0).to({_off:true},1).wait(168));

	// Named After
	this.instance_9 = new lib.Symbol5("synched",0);
	this.instance_9.setTransform(497.3,507.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(295).to({startPosition:0,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(12).to({startPosition:0},0).wait(30).to({startPosition:0},0).wait(37).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({_off:true},13).wait(263));

	// With His Army
	this.instance_10 = new lib.Symbol4("synched",0);
	this.instance_10.setTransform(488.8,486.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(195).to({startPosition:0,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(40).to({startPosition:0},0).wait(24).to({startPosition:0},0).to({_off:true},8).wait(374));

	// Where Evil En
	this.instance_11 = new lib.Symbol3("synched",0);
	this.instance_11.setTransform(484.3,539.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(90).to({startPosition:0,_off:false},0).wait(25).to({alpha:0.98},0).to({_off:true},80).wait(466));

	// The Dark & Terrible
	this.instance_12 = new lib.Symbol2("synched",0);
	this.instance_12.setTransform(486.3,540.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).to({_off:true},67).wait(560));

	// Footer
	this.instance_13 = new lib.StageNew2();
	this.instance_13.setTransform(-20.4,753.5,0.852,0.861);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},594).to({state:[{t:this.instance_13}]},65).wait(1));

	// BrassRing
	this.instance_14 = new lib.BrassRing_1();
	this.instance_14.setTransform(482.4,452.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).to({alpha:1},148).wait(512));

	// Bkgrnd
	this.instance_15 = new lib.Abyssonpngcopy();
	this.instance_15.setTransform(-42,83.5,1.167,1.167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},593).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_15}]},64).wait(1));

	// Layer 28
	this.instance_16 = new lib.BlueGlow();
	this.instance_16.setTransform(86.1,182.1,1.989,1.803,0,0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},1).wait(660));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(235.8,252.5,493.2,455.1);


// symbols:
(lib.Abysson = function() {
	this.initialize(img.Abysson);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.Abyssonpngcopy = function() {
	this.initialize(img.Abyssonpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,664);


(lib.Bkgrnd_Small = function() {
	this.initialize(img.Bkgrnd_Small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.BlueGlow = function() {
	this.initialize(img.BlueGlow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,480);


(lib.BrassRing = function() {
	this.initialize(img.BrassRing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1017,767);


(lib.Ensonlygoal = function() {
	this.initialize(img.Ensonlygoal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.Ensonlygoalpngcopy = function() {
	this.initialize(img.Ensonlygoalpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.EvillaRuda = function() {
	this.initialize(img.EvillaRuda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.EvillaRudapngcopy = function() {
	this.initialize(img.EvillaRudapngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.EvillaRudapngcopy2 = function() {
	this.initialize(img.EvillaRudapngcopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.GoldRing101 = function() {
	this.initialize(img.GoldRing101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,79);


(lib.GoldRing102 = function() {
	this.initialize(img.GoldRing102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,154);


(lib.GoldRing103 = function() {
	this.initialize(img.GoldRing103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,412);


(lib.GoldRing104 = function() {
	this.initialize(img.GoldRing104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,382,188);


(lib.HeWill = function() {
	this.initialize(img.HeWill);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.HeWillpngcopy = function() {
	this.initialize(img.HeWillpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


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


(lib.Namedafterhimself = function() {
	this.initialize(img.Namedafterhimself);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.Namedafterhimselfpngcopy = function() {
	this.initialize(img.Namedafterhimselfpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.RudaCode = function() {
	this.initialize(img.RudaCode);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,264);


(lib.StageNew2 = function() {
	this.initialize(img.StageNew2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,287);


(lib.TheDarkTerrible = function() {
	this.initialize(img.TheDarkTerrible);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.TheDarkTerriblepngcopy = function() {
	this.initialize(img.TheDarkTerriblepngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.TwinkleStar111 = function() {
	this.initialize(img.TwinkleStar111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.WhereEvilEn = function() {
	this.initialize(img.WhereEvilEn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.WhereEvilEnpngcopy = function() {
	this.initialize(img.WhereEvilEnpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.WithHisArmy = function() {
	this.initialize(img.WithHisArmy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.WithHisArmypngcopy = function() {
	this.initialize(img.WithHisArmypngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.TwnkleStar123 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TwinkleStar111();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.HeWillpngcopy();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Ensonlygoalpngcopy();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.EvillaRudapngcopy2();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Namedafterhimselfpngcopy();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.WithHisArmypngcopy();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.WhereEvilEnpngcopy();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TheDarkTerriblepngcopy();
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
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AvnBjIAAjGIfOAAIAADGg");
	this.shape_1.setTransform(100,10);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,20);


(lib.BrassRing_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.BrassRing();
	this.instance.setTransform(-508.4,-383.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-508.4,-383.4,1017,767);


(lib.Abysson_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Abysson();
	this.instance.setTransform(0,0,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235.2,91.2);


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


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol8("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol7("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


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

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;