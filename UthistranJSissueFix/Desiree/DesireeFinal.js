(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.DesireeFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(536.5,402.5,0.588,0.588,0,0,0,79,126);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(424.8,404.2,0.664,0.664,0,0,0,79,126);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(516.6,377.1,0.939,0.939,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(499.2,377.6,0.939,0.939,0,0,0,249.6,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(472));

	// BlinkAnim
	this.instance_3 = new lib.eyeBlink101aaa();
	this.instance_3.setTransform(411.9,197.1,0.994,1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(472));

	// Layer 18
	this.instance_4 = new lib.text3("synched",0);
	this.instance_4.setTransform(442.1,644.1,1,1,0,0,0,274.5,148);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).wait(231).to({startPosition:0,_off:false},0).to({alpha:1},16).wait(78).to({startPosition:0},0).to({y:644.2,alpha:0},14).wait(133));

	// power
	this.instance_5 = new lib.Power("synched",0);
	this.instance_5.setTransform(498.1,878.2,1,1,0,0,0,396.5,69.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).wait(99).to({startPosition:0,_off:false},0).to({alpha:1},14).wait(212).to({startPosition:0},0).to({alpha:0},14).wait(133));

	// Hi
	this.instance_6 = new lib.Hi("synched",0);
	this.instance_6.setTransform(786,310.1,1,1,0,0,0,187,113);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).wait(12).to({startPosition:0,_off:false},0).to({alpha:1},12).wait(60).to({startPosition:0},0).to({alpha:0},11).wait(377));

	// Pixie Body
	this.instance_7 = new lib.PixieSwirlBody_1("synched",0);
	this.instance_7.setTransform(413.5,441.6,2.634,2.634,0,0,0,117.6,57.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0,_off:false},0).wait(11).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(459).to({startPosition:0},0).wait(1));

	// Desiree
	this.instance_8 = new lib.DesireeHiRez101a();
	this.instance_8.setTransform(258.2,125,0.534,0.534);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1).wait(472));

	// Wings
	this.instance_9 = new lib.Winganim();
	this.instance_9.setTransform(286.8,149);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(472));

	// Glow
	this.instance_10 = new lib.glow("synched",0);
	this.instance_10.setTransform(464.5,525.4,0.72,0.722,0,0,0,327.1,600.1);
	this.instance_10.alpha = 0.648;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).wait(112).to({startPosition:0,_off:false},0).wait(75).to({startPosition:0},0).to({alpha:0},10).wait(275));

	// Code
	this.instance_11 = new lib.code("synched",0);
	this.instance_11.setTransform(488.1,454.1,1,1,0,0,0,356.5,354.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).wait(99).to({startPosition:0,_off:false},0).to({alpha:1},20).wait(68).to({startPosition:0},0).to({alpha:0},10).wait(275));

	// Pixie Stage
	this.instance_12 = new lib.TwnkleStarAnim123();
	this.instance_12.setTransform(449,864,0.586,0.586,0,0,0,79,126.1);

	this.instance_13 = new lib.PixieDust_1("synched",0);
	this.instance_13.setTransform(385.8,832.7,3.585,3.585,0,0,0,117.7,117.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},248).to({state:[{t:this.instance_13}]},67).to({state:[]},22).wait(135));

	// Footer
	this.instance_14 = new lib.StageNew2();
	this.instance_14.setTransform(-21.2,776.4,0.855,0.994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},1).wait(472));

	// Bkgrnd
	this.instance_15 = new lib.Bkgrnd("synched",0);
	this.instance_15.setTransform(489.9,471.4,1.2,1.273,0,0,0,489.9,490.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({startPosition:0,_off:false},0).wait(472));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(264.8,201.5,463.2,429.1);


// symbols:
(lib.Bkgrnd_Small = function() {
	this.initialize(img.Bkgrnd_Small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.DesireCode = function() {
	this.initialize(img.DesireCode);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,713,709);


(lib.DesireeBlink101 = function() {
	this.initialize(img.DesireeBlink101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,60);


(lib.DesireeBlink101pngcopy = function() {
	this.initialize(img.DesireeBlink101pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,60);


(lib.DesireeBlink202 = function() {
	this.initialize(img.DesireeBlink202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,60);


(lib.DesireeBlink202pngcopy = function() {
	this.initialize(img.DesireeBlink202pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,60);


(lib.DesireeBlink303 = function() {
	this.initialize(img.DesireeBlink303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,60);


(lib.DesireeBlink303pngcopy = function() {
	this.initialize(img.DesireeBlink303pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,60);


(lib.DesireeGlow = function() {
	this.initialize(img.DesireeGlow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,1200);


(lib.DesireeHair1 = function() {
	this.initialize(img.DesireeHair1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,210);


(lib.DesireeHiRez101a = function() {
	this.initialize(img.DesireeHiRez101a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,776,1500);


(lib.DesireeTemp101 = function() {
	this.initialize(img.DesireeTemp101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.DesireeWings = function() {
	this.initialize(img.DesireeWings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,680,511);


(lib.HairMove = function() {
	this.initialize(img.HairMove);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,160);


(lib.HiDesiree = function() {
	this.initialize(img.HiDesiree);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,374,226);


(lib.Icanmake = function() {
	this.initialize(img.Icanmake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,296);


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


(lib.PixieSwirl = function() {
	this.initialize(img.PixieSwirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,480);


(lib.PixieSwirlBody = function() {
	this.initialize(img.PixieSwirlBody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,480);


(lib.StageNew2 = function() {
	this.initialize(img.StageNew2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,287);


(lib.ThePower = function() {
	this.initialize(img.ThePower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,793,139);


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


(lib.text3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Icanmake();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,549,296);


(lib.Power = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ThePower();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,793,139);


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


(lib.Hi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.HiDesiree();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,374,226);


(lib.glow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.DesireeGlow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,654,1200);


(lib.EyeBlnk101 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.DesireeBlink101).s().p("AspEsIAApXIZTAAIAAJXg");
	this.shape.setTransform(81,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,162,60);


(lib.DesireeWings_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.DesireeWings();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,680,511);


(lib.code = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.DesireCode();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,713,709);


(lib.Bkgrnd = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bkgrnd_Small();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.Winganim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DesireeWings_1("synched",0);
	this.instance.setTransform(168.3,126.5,0.495,0.495,0,0,0,340,255.5);
	this.instance.alpha = 0.73;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.42},5).to({scaleX:0.5},6).wait(1).to({startPosition:0},0).to({scaleX:0.42},5).to({scaleX:0.5},6).wait(52).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336.6,253);


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


(lib.eyeBlink101aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	//this.instance = new lib.EyeBlnk101("synched",0);
	//this.instance.setTransform(0,0,0.542,0.515);

	this.instance_1 = new lib.DesireeBlink202();
	this.instance_1.setTransform(0,0,0.543,0.522);

	this.instance_2 = new lib.DesireeBlink303();
	this.instance_2.setTransform(0,0,0.541,0.514);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},92).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.9,30.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;