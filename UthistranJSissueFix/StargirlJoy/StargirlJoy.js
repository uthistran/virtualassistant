(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.StargirlJoy = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(247));

	// dust_b
	this.instance_3 = new lib.dust_b();
	this.instance_3.setTransform(498,492.5,1,1,0,0,0,7,16);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(240));

	// dust_a
	this.instance_4 = new lib.dust_a();
	this.instance_4.setTransform(614,440,1,1,0,0,0,15,25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(247));

	// i can
	this.instance_5 = new lib.icanjoy();
	this.instance_5.setTransform(488.3,854.7,1,1,0,0,0,490,109.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(116).to({_off:false},0).to({x:490.3,alpha:1},17).wait(89).to({x:491.3},0).to({x:488.3,alpha:0},25).wait(1));

	// hi im joy
	this.instance_6 = new lib.hiimpeace2();
	this.instance_6.setTransform(490.4,942.8,1,1,0,0,0,490,190);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({alpha:1},15).wait(50).to({alpha:0},17).wait(156));

	// girl
	this.instance_7 = new lib.star_girl();
	this.instance_7.setTransform(570.1,419.5,0.224,0.224,0,0,0,1499.8,1049.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(247));

	// bird
	this.instance_8 = new lib.big_bue_bird();
	this.instance_8.setTransform(570.1,419.5,0.225,0.225,0,0,0,1499.9,1049.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(247));

	// menu bottom
	this.instance_9 = new lib.StageNew2();
	this.instance_9.setTransform(-19.9,757,0.853,1.014);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},1).wait(247));

	// bg
	this.instance_10 = new lib.Gazebo_main();
	this.instance_10.setTransform(0,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},1).wait(247));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(235.8,261.5,493.2,446.1);


// symbols:
(lib.Background = function() {
	this.initialize(img.Background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.Backgroundv2 = function() {
	this.initialize(img.Backgroundv2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.BirdBlink = function() {
	this.initialize(img.BirdBlink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2100);


(lib.birdblinnk1 = function() {
	this.initialize(img.birdblinnk1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,222);


(lib.birdblinnk2 = function() {
	this.initialize(img.birdblinnk2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,222);


(lib.birdblinnk3 = function() {
	this.initialize(img.birdblinnk3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,222);


(lib.BirdEyes = function() {
	this.initialize(img.BirdEyes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2100);


(lib.Cropped980MenuBareEnterYourChildWithGlowButtedToTop = function() {
	this.initialize(img.Cropped980MenuBareEnterYourChildWithGlowButtedToTop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,123);


(lib.eye1 = function() {
	this.initialize(img.eye1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,74);


(lib.eye2 = function() {
	this.initialize(img.eye2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,74);


(lib.eye3 = function() {
	this.initialize(img.eye3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,74);


(lib.fly_1 = function() {
	this.initialize(img.fly_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1089,702);


(lib.fly_2 = function() {
	this.initialize(img.fly_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1089,702);


(lib.Frame1 = function() {
	this.initialize(img.Frame1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.Framev1 = function() {
	this.initialize(img.Framev1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.gazebobackground = function() {
	this.initialize(img.gazebobackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.Gazebo_main = function() {
	this.initialize(img.Gazebo_main);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,774);


(lib.HiImALittle = function() {
	this.initialize(img.HiImALittle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.HiImALittle2 = function() {
	this.initialize(img.HiImALittle2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,219);


(lib.ICanMakejoy = function() {
	this.initialize(img.ICanMakejoy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,219);


(lib.ICanMake = function() {
	this.initialize(img.ICanMake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.LogoIcon101 = function() {
	this.initialize(img.LogoIcon101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,425);


(lib.MenuHeader101 = function() {
	this.initialize(img.MenuHeader101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,133);


(lib.PixieDust = function() {
	this.initialize(img.PixieDust);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.StageBottomcopy = function() {
	this.initialize(img.StageBottomcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,169);


(lib.StageNew2 = function() {
	this.initialize(img.StageNew2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,287);


(lib.StarGirlEyeBlink_V = function() {
	this.initialize(img.StarGirlEyeBlink_V);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2100);


(lib.StarGirlEyes = function() {
	this.initialize(img.StarGirlEyes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2100);


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


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fly_2();
	this.instance.setTransform(-583.9,-415.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-583.9,-415.9,1089,702);


(lib.StageBottomcopy_1 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AvnBjIAAjGIfOAAIAADGg");
	this.shape_1.setTransform(100,10);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,20);


(lib.icanjoy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ICanMakejoy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,980,219);


(lib.hiimpeace2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.HiImALittle2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,980,219);


(lib.eyeblinkbird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.birdblinnk1();

	this.instance_1 = new lib.birdblinnk2();

	this.instance_2 = new lib.birdblinnk3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},44).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},46).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,222);


(lib.blinks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eye1();

	this.instance_1 = new lib.eye2();

	this.instance_2 = new lib.eye3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},24).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},51).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284,74);


(lib.bggazebo = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.wingsflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/* Layers with classic tweens must contain only a single symbol instance. */

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1089,702);


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


(lib.star_girl = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.blinks();
	this.instance.setTransform(1380,383.9,1,1,0,0,0,142,37);

	// Layer 6
	this.instance_1 = new lib.StarGirlEyes();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2100);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).to({alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384.6,3.3,649.2,649.2);


(lib.dust_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pixie Hi
	this.instance = new lib.PixieDust_1("synched",0);
	this.instance.setTransform(185,-129.9,3.109,3.109,0,0,0,117.6,117.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},20).to({x:184.9,alpha:0.898},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.6,-495.5,731.2,731.2);


(lib.big_bue_bird = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.eyeblinkbird();
	this.instance.setTransform(1046.9,1372.3,1,1,0,0,0,155.5,111);

	// Layer 1
	this.instance_1 = new lib.BirdEyes();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2100);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;