(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.MistyFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(532,470.1,0.697,0.697,0,0,0,79,126);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(327.8,428,0.707,0.707,0,0,0,79,126);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(491.6,437.6,1,1,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(489.3,437,1,1,0,0,0,249.5,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).to({state:[]},2).wait(473));

	// Water
	this.instance_3 = new lib.Water_1("synched",0);
	this.instance_3.setTransform(483.5,340.1,1,1,0,0,0,182,99);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).wait(154).to({startPosition:0,_off:false},0).to({startPosition:0},9).wait(97).to({startPosition:0},0).to({alpha:0},14).to({_off:true},200).wait(1));

	// Hair Move
	this.instance_4 = new lib.HairMOve("synched",0);
	this.instance_4.setTransform(475,353,1,1,0,0,0,82.8,96.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).wait(148).to({startPosition:0,_off:false},0).to({alpha:1},6).wait(36).to({startPosition:0},0).to({alpha:0},5).to({_off:true},278).wait(1));

	// BlinkAnim
	this.instance_5 = new lib.MistyFinal_1();
	this.instance_5.setTransform(434.1,331.7,1.014,0.975);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({_off:true},474).wait(1));

	// Text3
	this.instance_6 = new lib.Text3("synched",0);
	this.instance_6.setTransform(488.1,620.2,1,1,0,0,0,263,146.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(281).wait(1).to({startPosition:0,_off:false},0).to({alpha:1},10).wait(158).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({alpha:0},12).to({_off:true},3).wait(1));

	// power
	this.instance_7 = new lib.Power("synched",0);
	this.instance_7.setTransform(489.2,881.2,1,1,0,0,0,394,69.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(92).wait(3).to({startPosition:0,_off:false},0).to({alpha:1},14).wait(341).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({alpha:0},12).to({_off:true},3).wait(1));

	// Hi
	this.instance_8 = new lib.Hi("synched",0);
	this.instance_8.setTransform(791.2,311.1,1,1,0,0,0,158.5,113);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0,_off:false},0).to({alpha:1},13).wait(60).to({startPosition:0},0).to({alpha:0},11).to({_off:true},379).wait(12));

	// Pixie Body
	this.instance_9 = new lib.PixieSwirlBody_1("synched",0);
	this.instance_9.setTransform(458.5,533.6,2.634,2.634,0,0,0,117.6,57.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0,_off:false},0).to({_off:true},474).wait(1));

	// MistyCharacter
	this.instance_10 = new lib.Misty101("synched",0);
	this.instance_10.setTransform(488.2,559.8,0.407,0.407,0,0,0,436,750);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({startPosition:0,_off:false},0).to({_off:true},474).wait(1));

	// Wings
	this.instance_11 = new lib.WingAnim();
	this.instance_11.setTransform(295.7,329.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({_off:true},474).wait(1));

	// Glow
	this.instance_12 = new lib.Glow("synched",0);
	this.instance_12.setTransform(268.9,251.3,0.819,0.813);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).wait(146).to({startPosition:0,_off:false},0).to({alpha:0.77},8).wait(106).to({startPosition:0},0).to({alpha:0},14).to({_off:true},200).wait(1));

	// Code
	this.instance_13 = new lib.WaterCode_1("synched",0);
	this.instance_13.setTransform(488,436,1,1,0,0,0,268,269);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(152).wait(3).to({startPosition:0,_off:false},0).to({alpha:1},9).wait(97).to({startPosition:0},0).to({alpha:0},14).to({_off:true},200).wait(1));

	// Pixie Stage
	this.instance_14 = new lib.PixieDust_1("synched",0);
	this.instance_14.setTransform(433.9,836.5,3.585,3.585,0,0,0,117.7,117.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).wait(98).to({startPosition:0,_off:false},0).to({alpha:1},12).wait(348).to({startPosition:0},0).to({alpha:0},7).to({_off:true},9).wait(1));

	// Footer
	this.instance_15 = new lib.StageNew2();
	this.instance_15.setTransform(-22.9,774.9,0.855,0.994);

	this.instance_16 = new lib.Footer("synched",0);
	this.instance_16.setTransform(0,802.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16},{t:this.instance_15}]},1).to({state:[]},474).wait(1));

	// Bkgrnd
	this.instance_17 = new lib.Bkgrnd("synched",0);
	this.instance_17.setTransform(489.9,490.3,1.051,1.051,0,0,0,489.9,490.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({startPosition:0,_off:false},0).to({_off:true},474).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(239.8,249.5,493.2,458.1);


// symbols:
(lib.Bkgrnd_Small = function() {
	this.initialize(img.Bkgrnd_Small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.HairMove = function() {
	this.initialize(img.HairMove);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1200);


(lib.HairMove_1 = function() {
	this.initialize(img.HairMove_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,228);


(lib.HairMove2 = function() {
	this.initialize(img.HairMove2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,838,976);


(lib.HiImMisty = function() {
	this.initialize(img.HiImMisty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,226);


(lib.Icanmake = function() {
	this.initialize(img.Icanmake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,526,293);


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


(lib.MistyBlink101 = function() {
	this.initialize(img.MistyBlink101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,98);


(lib.MistyBlink202 = function() {
	this.initialize(img.MistyBlink202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,98);


(lib.MistyBlink303 = function() {
	this.initialize(img.MistyBlink303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,98);


(lib.MistyHiRez101 = function() {
	this.initialize(img.MistyHiRez101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,872,1500);


(lib.MistyWing = function() {
	this.initialize(img.MistyWing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,288);


(lib.MistyWithGlow = function() {
	this.initialize(img.MistyWithGlow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,800);


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


(lib.ThePower = function() {
	this.initialize(img.ThePower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,788,139);


(lib.TwinkleStar111 = function() {
	this.initialize(img.TwinkleStar111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.WaterCode = function() {
	this.initialize(img.WaterCode);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,536,538);


(lib.Water = function() {
	this.initialize(img.Water);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,364,198);


(lib.Wings = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MistyWing();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,288);


(lib.WaterCode_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.WaterCode();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,536,538);


(lib.Water_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Water();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,364,198);


(lib.TwnkleStar123 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TwinkleStar111();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.Text3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Icanmake();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,526,293);


(lib.Power = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ThePower();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,788,139);


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


(lib.MistyFinal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.MistyBlink101();
	this.instance.setTransform(-0.2,1.5,0.398,0.398);

	this.instance_1 = new lib.MistyBlink202();
	this.instance_1.setTransform(-0.2,1.5,0.398,0.398);

	this.instance_2 = new lib.MistyBlink101();
	this.instance_2.setTransform(-0.2,1.5,0.398,0.398);

	this.instance_3 = new lib.MistyBlink303();
	this.instance_3.setTransform(-0.2,1.6,0.398,0.398);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:1.5}},{t:this.instance,p:{y:1.5}}]}).to({state:[{t:this.instance,p:{y:1.5}},{t:this.instance_1,p:{y:1.5}}]},1).to({state:[{t:this.instance,p:{y:1.6}},{t:this.instance_1,p:{y:1.6}},{t:this.instance_3}]},1).to({state:[{t:this.instance,p:{y:1.5}},{t:this.instance_1,p:{y:1.5}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:1.5}},{t:this.instance,p:{y:1.5}}]},1).wait(182));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,1.5,90.8,39);


(lib.Misty101 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MistyHiRez101();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,872,1500);


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
	this.instance = new lib.HiImMisty();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,317,226);


(lib.HairMOve = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.HairMove2();
	this.instance.setTransform(0,0,0.198,0.198);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165.6,192.9);


(lib.Glow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.MistyWithGlow).s().p("EgpyA+gMAAAh8/MBTkAAAMAAAB4rIirl+QjDhnjiguQjpgtjugOQjtgRjugHQgngDgmABIgDgHQlygqmQgHQqhgMqaA/IhGAIQilgfiqgPQj3gTjWBuQjcBygZDvIgDAqQibC/AkECg");
	this.shape.setTransform(267.5,400);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,535,800);


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
	this.instance = new lib.Wings("synched",0);
	this.instance.setTransform(183.4,105.7,0.733,0.733,0,0,0,250.1,144.1);
	this.instance.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.63},9).to({scaleX:0.73},10).wait(1).to({startPosition:0},0).to({scaleX:0.63},6).to({scaleX:0.73},9).wait(76).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,366.6,211.2);


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