(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.EvillaFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(484.9,416.6,0.337,0.337,0,0,0,-9.2,48.1);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(402.9,430.3,0.352,0.352,0,0,0,78.9,126);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(516.1,438.8,0.918,0.918,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(498.9,448.7,0.918,0.918,0,0,0,249.5,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(480));

	// ISayWho
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.setTransform(493,565);
	this.instance_3.alpha = 0.27;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(322).to({startPosition:0,_off:false},0).wait(7).to({alpha:0.578},0).wait(9).to({alpha:0.852},0).wait(10).to({alpha:1},0).to({_off:true},132).wait(1));

	// IDoWhat
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.setTransform(521.9,573.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).wait(231).to({startPosition:0,_off:false},0).to({alpha:1},16).wait(69).to({startPosition:0},0).to({_off:true},5).wait(159));

	// Power
	this.instance_5 = new lib.Power("synched",0);
	this.instance_5.setTransform(487,845,1,1,0,0,0,490,63);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).wait(99).to({startPosition:0,_off:false},0).to({alpha:1},14).wait(212).to({startPosition:0},0).to({alpha:0},9).to({_off:true},145).wait(1));

	// Hi
	this.instance_6 = new lib.Hi("synched",0);
	this.instance_6.setTransform(761,389,1,1,0,0,0,159.5,111);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).wait(12).to({startPosition:0,_off:false},0).to({alpha:1},12).wait(60).to({startPosition:0},0).to({alpha:0},11).to({_off:true},384).wait(1));

	// EyeAnim
	this.instance_7 = new lib.blink101();
	this.instance_7.setTransform(515.4,208.8,1,1,0,0,0,37.3,17.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({_off:true},479).wait(1));

	// EvillaHirez
	this.instance_8 = new lib.Evilla101("synched",0);
	this.instance_8.setTransform(452.7,510.2,0.576,0.576,0,0,0,404.6,657.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0,_off:false},0).to({_off:true},479).wait(1));

	// Footer
	this.instance_9 = new lib.StageNew2();
	this.instance_9.setTransform(-21.2,761.5,0.857,0.86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},1).to({state:[]},479).wait(1));

	// GoldRinger
	this.instance_10 = new lib.Ring101("synched",0);
	this.instance_10.setTransform(734.4,437.6,1.003,1,0,0,180,244.5,374.8);

	this.instance_11 = new lib.Ring101("synched",0);
	this.instance_11.setTransform(245,437.7,1,1,0,0,0,244.5,374.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},1).to({state:[]},479).wait(1));

	// Bkgrnd
	this.instance_12 = new lib.Abyssonpngcopy();
	this.instance_12.setTransform(-51.4,49.6,1.114,1.114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},1).to({state:[]},479).wait(1));

	// Blue Glow
	this.instance_13 = new lib.BlueGlow();
	this.instance_13.setTransform(-6.7,-49.9,2.154,2.155,0,-1.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},1).wait(480));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(269.8,276.5,452.9,410.1);


// symbols:
(lib.Abysson = function() {
	this.initialize(img.Abysson);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,664);


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


(lib.Evilla_Hirez101 = function() {
	this.initialize(img.Evilla_Hirez101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,809,1315);


(lib.EvillaEyeBlink101 = function() {
	this.initialize(img.EvillaEyeBlink101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,61);


(lib.EvillaEyeBlink202 = function() {
	this.initialize(img.EvillaEyeBlink202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,61);


(lib.EvillaEyeBlink303 = function() {
	this.initialize(img.EvillaEyeBlink303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,61);


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


(lib.HiImEvilla = function() {
	this.initialize(img.HiImEvilla);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,222);


(lib.IUsedtoBeHope = function() {
	this.initialize(img.IUsedtoBeHope);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,126);


(lib.IDoWantEn = function() {
	this.initialize(img.IDoWantEn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.ISayWho = function() {
	this.initialize(img.ISayWho);
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


(lib.StageNew2 = function() {
	this.initialize(img.StageNew2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,287);


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


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ISayWho();
	this.instance.setTransform(-567,-219.8,1.157,1.157);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-567,-219.8,1134.1,439.8);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.IDoWantEn();
	this.instance.setTransform(-599.9,-232.6,1.225,1.225);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-599.9,-232.6,1200.1,465.4);


(lib.Ring101 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GoldRing104();
	this.instance.setTransform(106.9,561.6);

	this.instance_1 = new lib.GoldRing103();
	this.instance_1.setTransform(0,195.7);

	this.instance_2 = new lib.GoldRing102();
	this.instance_2.setTransform(59.7,41.7);

	this.instance_3 = new lib.GoldRing101();
	this.instance_3.setTransform(269.7,0);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,488.9,749.6);


(lib.Power = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.IUsedtoBeHope();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,980,126);


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


(lib.Hi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.HiImEvilla();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,319,222);


(lib.Evilla101 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Evilla_Hirez101();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,809,1315);


(lib.blink101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EvillaEyeBlink101();
	this.instance.setTransform(0,0,0.575,0.574);

	this.instance_1 = new lib.EvillaEyeBlink202();
	this.instance_1.setTransform(0,0.1,0.575,0.571);

	this.instance_2 = new lib.EvillaEyeBlink303();
	this.instance_2.setTransform(0.2,0.1,0.572,0.566);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},125).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.8,35);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:true},1).wait(7));

	// LoadBar
	this.loadBar = new lib.LoadBar();
	this.loadBar.setTransform(-6.4,270.1,1,1,0,0,0,0.5,7);

	this.timeline.addTween(cjs.Tween.get(this.loadBar).wait(12).to({_off:true},1).wait(12));

	// background
	this.instance_1 = new lib.LoadBackground();
	this.instance_1.setTransform(90,270,1,1,0,0,0,100,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,239.5,200,40.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;