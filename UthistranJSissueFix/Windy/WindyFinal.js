(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.WindyFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(556,482.2,0.727,0.657,0,0,0,79,126.1);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(349.8,454,0.717,0.606,0,0,0,79,126);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(491.6,437.6,1,1,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(482.3,426,1,1,0,0,0,249.5,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(603));

	// eye blinks
	this.instance_3 = new lib.BlinkAnim101();
	this.instance_3.setTransform(442,243.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(597).to({_off:true},5).wait(1));

	// Layer 23
	this.instance_4 = new lib.ImWindy("synched",0);
	this.instance_4.setTransform(779,358.9,1,1,0,0,0,165,115);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).wait(12).to({startPosition:0,_off:false},0).to({alpha:1},18).wait(54).to({startPosition:0},0).to({alpha:0},14).wait(226).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(85).to({startPosition:0},0).wait(187).to({startPosition:0},0).to({_off:true},5).wait(1));

	// text1
	this.instance_5 = new lib.Text222("synched",0);
	this.instance_5.setTransform(491,878,1,1,0,0,0,350.5,71);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85).wait(12).to({startPosition:0,_off:false},0).to({alpha:1},17).wait(211).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({alpha:0},9).wait(76).to({startPosition:0},0).wait(187).to({startPosition:0},0).to({_off:true},5).wait(1));

	// Text2
	this.instance_6 = new lib.text1_1("synched",0);
	this.instance_6.setTransform(490.1,500.2,1,1,0,0,0,348,145);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(230).wait(2).to({startPosition:0,_off:false},0).to({alpha:1},16).wait(77).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({alpha:0},9).wait(76).to({startPosition:0},0).wait(187).to({startPosition:0},0).to({_off:true},5).wait(1));

	// Pixie Body
	this.instance_7 = new lib.PixieSwirlBody_1("synched",0);
	this.instance_7.setTransform(469.5,439.5,2.634,2.634,0,0,0,117.6,57.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0,_off:false},0).wait(597).to({startPosition:0},0).to({_off:true},5).wait(1));

	// WindyBody
	this.instance_8 = new lib.WindyBody101("synched",0);
	this.instance_8.setTransform(430.1,513.4,0.535,0.535,0,0,0,362,728.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0,_off:false},0).wait(259).to({startPosition:0},0).wait(65).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(85).to({startPosition:0},0).wait(187).to({startPosition:0},0).to({_off:true},5).wait(1));

	// Wings
	this.instance_9 = new lib.WingAnim303();
	this.instance_9.setTransform(275.7,253.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(597).to({_off:true},5).wait(1));

	// WindyGlow
	this.instance_10 = new lib.glow("synched",0);
	this.instance_10.setTransform(430,502.1,0.886,0.884,0,0,0,262.9,482.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).wait(99).to({startPosition:0,_off:false},0).to({alpha:0.801},14).wait(74).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(405));

	// Code
	this.instance_11 = new lib.AirCode3_1("synched",0);
	this.instance_11.setTransform(468.1,456.1,1,1,0,0,0,329.5,320);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(85).wait(15).to({startPosition:0,_off:false},0).to({alpha:1},20).wait(68).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(405));

	// Pixie Stage
	this.instance_12 = new lib.PixieDust_1("synched",0);
	this.instance_12.setTransform(406.8,833.5,3.585,3.585,0,0,0,117.7,117.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).wait(98).to({startPosition:0,_off:false},0).to({_off:true},229).wait(276));

	// Footer
	this.instance_13 = new lib.StageNew2();
	this.instance_13.setTransform(-20.8,766.9,0.855,0.994);

	this.instance_14 = new lib.Footer("synched",0);
	this.instance_14.setTransform(2.2,794.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13}]},1).to({state:[{t:this.instance_14},{t:this.instance_13}]},259).to({state:[{t:this.instance_14},{t:this.instance_13}]},65).to({state:[{t:this.instance_14},{t:this.instance_13}]},1).to({state:[{t:this.instance_14},{t:this.instance_13}]},85).to({state:[{t:this.instance_14},{t:this.instance_13}]},187).to({state:[]},5).wait(1));

	// Bkgrnd
	this.instance_15 = new lib.Bkgrnd("synched",0);
	this.instance_15.setTransform(489.8,490.3,1.084,1.084,0,0,0,489.9,490.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({startPosition:0,_off:false},0).wait(259).to({regY:490.3,y:490.4},0).wait(65).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(85).to({startPosition:0},0).wait(187).to({startPosition:0},0).to({_off:true},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(232.8,238.5,493.2,469.1);


// symbols:
(lib.AirCode3 = function() {
	this.initialize(img.AirCode3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,659,640);


(lib.Bkgrnd_Small = function() {
	this.initialize(img.Bkgrnd_Small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.HiImWindy = function() {
	this.initialize(img.HiImWindy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,230);


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


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,696,290);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,701,142);


(lib.TwinkleStar111 = function() {
	this.initialize(img.TwinkleStar111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.Windy_glow = function() {
	this.initialize(img.Windy_glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,526,965);


(lib.Windy_wings = function() {
	this.initialize(img.Windy_wings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,680,522);


(lib.WindyBlink101 = function() {
	this.initialize(img.WindyBlink101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,56);


(lib.WindyBlink202 = function() {
	this.initialize(img.WindyBlink202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,56);


(lib.WindyBlink303 = function() {
	this.initialize(img.WindyBlink303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,56);


(lib.WindyHiRez101 = function() {
	this.initialize(img.WindyHiRez101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,724,1458);


(lib.wings = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Windy_wings();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,680,522);


(lib.WindyBody101 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.WindyHiRez101();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,724,1458);


(lib.TwnkleStar123 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TwinkleStar111();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.text1232 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,696,290);


(lib.Text222 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,701,142);


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


(lib.ImWindy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.HiImWindy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,330,230);


(lib.glow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Windy_glow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,526,965);


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


(lib.blink101 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.WindyBlink101();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,56);


(lib.Bkgrnd = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bkgrnd_Small();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.AirCode3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.AirCode3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,659,640);


(lib.WingAnim303 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wings("synched",0);
	this.instance.setTransform(190.4,136.2,0.56,0.522,0,0,0,340,261);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:339.9,scaleX:0.45},6).to({regX:340,scaleX:0.56},8).wait(2).to({startPosition:0},0).to({regX:339.9,scaleX:0.45},6).to({regX:340,scaleX:0.56},8).wait(40).to({startPosition:0},0).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,380.8,272.3);


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


(lib.text1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text1232("synched",0);
	this.instance.setTransform(348,145,1,1,0,0,0,348,145);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,696,290);


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


(lib.BlinkAnim101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blink101("synched",0);
	this.instance.setTransform(39.4,15.4,0.532,0.55,0,0,0,73.9,27.9);

	this.instance_1 = new lib.WindyBlink202();
	this.instance_1.setTransform(0,0,0.532,0.547);

	this.instance_2 = new lib.WindyBlink303();
	this.instance_2.setTransform(0,0,0.532,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},90).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.8,30.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;