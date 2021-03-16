(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.SnowballFinalLoader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(556.9,470.1,0.384,0.384,0,0,0,79,126);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(377.8,467,0.392,0.392,0,0,0,79.1,125.9);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(491.6,470.6,1,1,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(478.3,461,1,1,0,0,0,249.5,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(603));

	// dust_b
	this.instance_3 = new lib.dust_b();
	this.instance_3.setTransform(498,507,1,1,0,0,0,7,16);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(603));

	// dust_a
	this.instance_4 = new lib.dust_a();
	this.instance_4.setTransform(614,440,1,1,0,0,0,15,25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(603));

	// Misty's
	this.instance_5 = new lib.ImMistysPet_1("synched",0);
	this.instance_5.setTransform(444.1,963,4.222,4.222,0,0,0,180,180);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0,_off:false},0).wait(599).to({startPosition:0},0).wait(4));

	// Hi
	this.instance_6 = new lib.HiSnowball_1("synched",0);
	this.instance_6.setTransform(721.9,561.3,3.111,3.111,0,0,0,180,180.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0,_off:false},0).wait(599).to({startPosition:0},0).wait(4));

	// eyes
	this.instance_7 = new lib.blinks_a();
	this.instance_7.setTransform(493.6,501,1,1,0,0,0,3.5,10.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(603));

	// Snowball
	this.instance_8 = new lib.NanciSnowball_1("synched",0);
	this.instance_8.setTransform(541.4,619.1,1,1,0,0,0,199.1,161.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0,_off:false},0).wait(599).to({startPosition:0},0).wait(4));

	// wings_a
	this.instance_9 = new lib.wings_c();
	this.instance_9.setTransform(513,523.1,1,1,0,0,0,23,35.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(603));

	// Footer
	this.instance_10 = new lib.StageNew2();
	this.instance_10.setTransform(-25.2,756.1,0.859,0.919);

	this.instance_11 = new lib.Footer("synched",0);
	this.instance_11.setTransform(489.3,858.3,1,1,0,0,0,490,76.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},599).wait(4));

	// Background
	this.instance_12 = new lib.Gazebo();
	this.instance_12.setTransform(-70,0,1.131,1.131);

	this.instance_13 = new lib.Background_1("synched",0);
	this.instance_13.setTransform(488,491,4.167,4.167,0,0,0,117.6,117.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},599).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280.2,334.5,393.6,406.1);


// symbols:
(lib.Background = function() {
	this.initialize(img.Background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.Cropped980MenuBareEnterYourChildWithGlowButtedToTop = function() {
	this.initialize(img.Cropped980MenuBareEnterYourChildWithGlowButtedToTop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,123);


(lib.Eyelids = function() {
	this.initialize(img.Eyelids);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1659,1344);


(lib.gazebobackground = function() {
	this.initialize(img.gazebobackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.Gazebo = function() {
	this.initialize(img.Gazebo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.HiSnowball = function() {
	this.initialize(img.HiSnowball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1500);


(lib.ImMistysPet = function() {
	this.initialize(img.ImMistysPet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1500);


(lib.LogoIcon101 = function() {
	this.initialize(img.LogoIcon101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,425);


(lib.NanciSnowball = function() {
	this.initialize(img.NanciSnowball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1659,1344);


(lib.PixieDust = function() {
	this.initialize(img.PixieDust);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.snowBall101 = function() {
	this.initialize(img.snowBall101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,159);


(lib.SnowBallBlink101 = function() {
	this.initialize(img.SnowBallBlink101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,36);


(lib.SnowBallBlink102 = function() {
	this.initialize(img.SnowBallBlink102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,36);


(lib.SnowBallWings = function() {
	this.initialize(img.SnowBallWings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,126);


(lib.StageBottomcopy = function() {
	this.initialize(img.StageBottomcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,169);


(lib.StageNew2 = function() {
	this.initialize(img.StageNew2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,287);


(lib.TwinkleStar111 = function() {
	this.initialize(img.TwinkleStar111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.Wings = function() {
	this.initialize(img.Wings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1659,1344);


(lib.Wings_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Wings();
	this.instance.setTransform(0,0,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,398.2,322.6);


(lib.TwnkleStar123 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TwinkleStar111();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.PixieDust_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.PixieDust();
	this.instance.setTransform(0,0,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235.2,235.2);


(lib.NanciSnowball_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.NanciSnowball();
	this.instance.setTransform(0,0,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,398.2,322.6);


(lib.MenuHeader = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.LogoIcon101_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.LogoIcon101();
	this.instance.setTransform(51.4,61,0.773,0.773);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(51.4,61,393.6,328.7);


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


(lib.ImMistysPet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ImMistysPet();
	this.instance.setTransform(0,0,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,360);


(lib.HiSnowball_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.HiSnowball();
	this.instance.setTransform(0,0,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,360);


(lib.Footer = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EhMjACfIAAk9MCZHAAAIAAE9g");
	this.shape.setTransform(490,81.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EhMjAHMIAAuXMCZHAAAIAAOXg");
	this.shape_1.setTransform(490,32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("EhMjAF2IAArrMCZHAAAIAALrg");
	this.shape_2.setTransform(490,129.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-13.5,980,180.6);


(lib.Eyelids_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Eyelids();
	this.instance.setTransform(0,0,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,398.2,322.6);


(lib.Background_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Background();
	this.instance.setTransform(0,0,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235.2,235.2);


(lib.wings_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Wings Move
	this.instance = new lib.Wings_1("synched",0);
	this.instance.setTransform(30.4,77.1,0.775,0.894,0,0,0,199.1,161.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({startPosition:0,_off:false},0).to({_off:true},10).wait(10).to({startPosition:0,_off:false},0).to({_off:true},11).wait(12).to({startPosition:0,_off:false},0).wait(12));

	// Wings
	this.instance_1 = new lib.Wings_1("synched",0);
	this.instance_1.setTransform(33.3,84.1,0.882,0.882,0,0,0,199.1,161.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},9).wait(10).to({startPosition:0,_off:false},0).to({_off:true},10).wait(11).to({startPosition:0,_off:false},0).wait(11).to({startPosition:0},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.3,-58.2,351.3,284.6);


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


(lib.dust_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PixieDust_1("synched",0);
	this.instance.setTransform(-59.9,327.9,2.76,2.76,0,0,0,117.6,117.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384.6,3.3,649.2,649.2);


(lib.dust_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pixie Hi
	this.instance = new lib.PixieDust_1("synched",0);
	this.instance.setTransform(185,-129.9,3.109,3.109,0,0,0,117.6,117.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},10).to({x:184.9,alpha:0.898},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.6,-495.5,731.2,731.2);


(lib.blinks_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Eyelids_1("synched",0);
	this.instance.setTransform(50.4,131.1,1,1,0,0,0,199.1,161.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).to({_off:true},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;