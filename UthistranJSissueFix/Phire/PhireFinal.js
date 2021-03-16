(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.PhireFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(575,475.1,0.556,0.576,0,0,0,79,126);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(335.9,446.1,0.526,0.445,0,0,0,79,126.1);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(491.6,437.6,1,1,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(485.3,449,1,1,0,0,0,249.5,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(469));

	// Eyea
	this.instance_3 = new lib.EyeAnimPhire();
	this.instance_3.setTransform(461.8,189.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},468).wait(1));

	// power
	this.instance_4 = new lib.TExt2("synched",0);
	this.instance_4.setTransform(501,882.9,1,1,0,0,0,369.5,71);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).wait(99).to({startPosition:0,_off:false},0).to({alpha:1},14).wait(212).to({startPosition:0},0).to({alpha:0},10).to({_off:true},133).wait(1));

	// Hi
	this.instance_5 = new lib.HI("synched",0);
	this.instance_5.setTransform(772,329.6,1,1,0,0,0,149,113);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).wait(12).to({startPosition:0,_off:false},0).to({alpha:1},12).wait(60).to({startPosition:0},0).to({alpha:0},11).to({_off:true},373).wait(1));

	// HandFire
	this.instance_6 = new lib.handFire("synched",0);
	this.instance_6.setTransform(306,374.6,0.158,0.116,0,-1.1,0);
	this.instance_6.alpha = 0.219;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0,_off:false},0).to({_off:true},15).wait(84).to({scaleX:0.16,scaleY:0.12,x:297.5,y:378.6,alpha:1,_off:false},0).wait(66).to({scaleX:0.17,scaleY:0.13,x:294.5,y:371.6},0).wait(3).to({scaleX:0.18,scaleY:0.13,y:367.6},0).to({scaleX:0.21,scaleY:0.16,x:286.5,y:349.6,alpha:0},12).wait(2).to({alpha:0.219},0).to({scaleX:0.17,scaleY:0.12,x:294.5,y:377.6,alpha:1},15).to({_off:true},1).wait(271));

	// Text
	this.instance_7 = new lib.Text1("synched",0);
	this.instance_7.setTransform(470.2,633.1,1,1,0,0,0,342.7,101.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).wait(231).to({startPosition:0,_off:false},0).to({scaleX:1.22,scaleY:1.22,alpha:1},16).wait(78).to({scaleX:1,scaleY:1},0).to({alpha:0},10).to({_off:true},133).wait(1));

	// Layer 44
	this.instance_8 = new lib.PixieSwirlBody_1("synched",0);
	this.instance_8.setTransform(496,423.4,3.71,3.71,-19.9,0,0,117.6,57.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0,_off:false},0).to({_off:true},468).wait(1));

	// PhireBody
	this.instance_9 = new lib.PhireHirez("synched",0);
	this.instance_9.setTransform(475.1,534.8,0.576,0.576,0,0,0,309.4,691.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0,_off:false},0).to({_off:true},468).wait(1));

	// Wings
	this.instance_10 = new lib.WingAnim();
	this.instance_10.setTransform(273.2,125);
	this.instance_10.alpha = 0.699;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({_off:true},468).wait(1));

	// glow
	this.instance_11 = new lib.phireglow("synched",0);
	this.instance_11.setTransform(474.7,532.4,0.604,0.59,0,0,0,373.5,750.1);
	this.instance_11.alpha = 0.648;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).wait(99).to({startPosition:0,_off:false},0).to({_off:true},98).wait(272));

	// code
	this.instance_12 = new lib.Code("synched",0);
	this.instance_12.setTransform(472,460,1,1,0,0,0,359,359.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).wait(99).to({startPosition:0,_off:false},0).to({alpha:1},20).wait(68).to({startPosition:0},0).to({alpha:0},10).wait(1).to({startPosition:0},0).to({_off:true},270).wait(1));

	// Pixie Stage
	this.instance_13 = new lib.PixieDust_1("synched",0);
	this.instance_13.setTransform(369,794.5,3.585,3.585,0,0,0,117.7,117.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).wait(114).to({startPosition:0,_off:false},0).to({_off:true},215).wait(110).to({startPosition:0,_off:false},0).to({_off:true},29).wait(1));

	// Footer
	this.instance_14 = new lib.StageNew2();
	this.instance_14.setTransform(-19.9,773.9,0.855,0.994);

	this.instance_15 = new lib.Footer("synched",0);
	this.instance_15.setTransform(3,801.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[]},468).wait(1));

	// Bkgrnd
	this.instance_16 = new lib.Bkgrnd("synched",0);
	this.instance_16.setTransform(489.8,468.3,1.094,1.094,0,0,0,489.9,490.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({startPosition:0,_off:false},0).to({_off:true},468).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(235.8,261.5,493.2,446.1);


// symbols:
(lib.Bkgrnd_Small = function() {
	this.initialize(img.Bkgrnd_Small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.FireCode = function() {
	this.initialize(img.FireCode);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,718,719);


(lib.FireHand = function() {
	this.initialize(img.FireHand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,436,1200);


(lib.Hi = function() {
	this.initialize(img.Hi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,226);


(lib.LogoIcon101 = function() {
	this.initialize(img.LogoIcon101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,425);


(lib.LowerBar101 = function() {
	this.initialize(img.LowerBar101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,167);


(lib.Phire_HiRez = function() {
	this.initialize(img.Phire_HiRez);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,619,1383);


(lib.Phire_Wing = function() {
	this.initialize(img.Phire_Wing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,789,1029);


(lib.PhireBlink101 = function() {
	this.initialize(img.PhireBlink101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,51);


(lib.PhireBlink202 = function() {
	this.initialize(img.PhireBlink202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,51);


(lib.PhireBlink303 = function() {
	this.initialize(img.PhireBlink303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,51);


(lib.PhireGlow = function() {
	this.initialize(img.PhireGlow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,747,1500);


(lib.PixieDust = function() {
	this.initialize(img.PixieDust);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.PixieSwirlBody = function() {
	this.initialize(img.PixieSwirlBody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,480);


(lib.StageNew2 = function() {
	this.initialize(img.StageNew2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,287);


(lib.TExt101 = function() {
	this.initialize(img.TExt101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,783,231);


(lib.TExt202 = function() {
	this.initialize(img.TExt202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,739,142);


(lib.TwinkleStar111 = function() {
	this.initialize(img.TwinkleStar111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.Wing = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Phire_Wing();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,789,1029);


(lib.TwnkleStar123 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TwinkleStar111();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.TExt2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TExt202();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,739,142);


(lib.Text1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TExt101();
	this.instance.setTransform(0,0,0.875,0.875);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,685.4,202.2);


(lib.PixieSwirlBody_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.PixieSwirlBody();
	this.instance.setTransform(0,0,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235.2,115.2);


(lib.PixieDust_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.PixieDust();
	this.instance.setTransform(0,0,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235.2,235.2);


(lib.PhireHirez = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Phire_HiRez();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,619,1383);


(lib.phireglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.PhireGlow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,747,1500);


(lib.PhireEye = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.PhireBlink101();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,117,51);


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


(lib.HI = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Hi();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,298,226);


(lib.handFire = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FireHand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,436,1200);


(lib.Footer = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.LowerBar101).s().p("EhMjACfIAAk9MCZHAAAIAAE9g");
	this.shape.setTransform(490,81.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.LowerBar101).s().p("EhMjAHMIAAuXMCZHAAAIAAOXg");
	this.shape_1.setTransform(490,32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.LowerBar101).s().p("EhMjAF2IAArrMCZHAAAIAALrg");
	this.shape_2.setTransform(490,129.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-13.5,980,180.6);


(lib.Code = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FireCode();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,718,719);


(lib.Bkgrnd = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bkgrnd_Small();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.WingAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Wing("synched",0);
	this.instance.setTransform(192.2,250.7,0.487,0.487,0,0,0,394.5,514.5);
	this.instance.alpha = 0.82;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.39},10).to({scaleX:0.49},8).wait(2).to({startPosition:0},0).to({scaleX:0.39},9).to({scaleX:0.49},10).wait(57).to({startPosition:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,384.4,501.4);


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


(lib.EyeAnimPhire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PhireEye("synched",0);
	this.instance.setTransform(34.1,14.6,0.581,0.573,0,0,0,58.6,25.5);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.PhireBlink202();
	this.instance_1.setTransform(0,0.1,0.581,0.571);

	this.instance_2 = new lib.PhireBlink303();
	this.instance_2.setTransform(0,0,0.582,0.571);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,29.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;