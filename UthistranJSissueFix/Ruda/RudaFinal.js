(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.RudaFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(520,449,0.424,0.424,0,0,0,79,126);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(394.8,471,0.535,0.535,0,0,0,79,126);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(515.6,447.6,1,1,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(508.3,436,1,1,0,0,0,249.5,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).to({state:[]},2).wait(465));

	// EyeBlink
	this.instance_3 = new lib.RudaEyeBkinkAnim();
	this.instance_3.setTransform(491.8,229,1,1,0,0,0,35,12.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},466).wait(1));

	// ISay
	this.instance_4 = new lib.Symbol5("synched",0);
	this.instance_4.setTransform(517,531.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(374).to({startPosition:0,_off:false},0).wait(5).to({alpha:0.34},0).wait(4).to({alpha:0.691},0).wait(18).to({alpha:1},0).to({_off:true},66).wait(1));

	// IDoWhat
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.setTransform(495,526,1.081,1.081,0,0,-0.2);
	this.instance_5.alpha = 0.328;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(267).to({startPosition:0,_off:false},0).wait(6).to({alpha:0.48},0).wait(8).to({alpha:0.75},0).wait(9).to({alpha:1},0).wait(79).to({alpha:0.609},0).wait(5).to({startPosition:0},0).wait(4).to({alpha:0},0).to({_off:true},1).wait(89));

	// Power
	this.instance_6 = new lib.Power("synched",0);
	this.instance_6.setTransform(492.2,848.2,0.932,0.932,0,0,0,528,64);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(88).wait(2).to({startPosition:0,_off:false},0).to({alpha:1},14).wait(316).to({startPosition:0},0).to({alpha:0},17).to({_off:true},30).wait(1));

	// Hi
	this.instance_7 = new lib.Hi("synched",0);
	this.instance_7.setTransform(749,351,1.069,1.069,0,0,0,145.5,113);
	this.instance_7.alpha = 0.219;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).wait(12).to({startPosition:0,_off:false},0).wait(12).to({alpha:1},0).wait(227).to({scaleX:1.1,scaleY:1.1},0).to({alpha:0},14).to({_off:true},201).wait(1));

	// Body
	this.instance_8 = new lib.RudaHiRez();
	this.instance_8.setTransform(342.5,148,0.261,0.246);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1).to({state:[]},466).wait(1));

	// Footer
	this.instance_9 = new lib.StageNew2();
	this.instance_9.setTransform(-23.3,745.5,0.857,0.958);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},1).to({state:[]},466).wait(1));

	// GoldRinger
	this.instance_10 = new lib.Tween2("synched",0);
	this.instance_10.setTransform(490,457.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({startPosition:0,_off:false},0).to({alpha:1},7).wait(244).to({startPosition:0},0).to({alpha:0},14).to({_off:true},201).wait(1));

	// Bkgrnd
	this.instance_11 = new lib.Abyssonpngcopy();
	this.instance_11.setTransform(-54.4,37.7,1.114,1.114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},1).to({state:[]},466).wait(1));

	// Layer 24
	this.instance_12 = new lib.BlueGlow();
	this.instance_12.setTransform(0,0,2.154,2.155,0,-1.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},1).wait(467));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258.8,248.5,493.2,469.1);


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


(lib.HiRuda = function() {
	this.initialize(img.HiRuda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,226);


(lib.Iusedtobe = function() {
	this.initialize(img.Iusedtobe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1056,128);


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


(lib.RudaBlink101 = function() {
	this.initialize(img.RudaBlink101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,103);


(lib.RudaBlink202 = function() {
	this.initialize(img.RudaBlink202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,103);


(lib.RudaBlink303 = function() {
	this.initialize(img.RudaBlink303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,103);


(lib.RudaCode = function() {
	this.initialize(img.RudaCode);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,264);


(lib.RudaHiRez = function() {
	this.initialize(img.RudaHiRez);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1136,3000);


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


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ISayWho();
	this.instance.setTransform(-575.9,-223.3,1.175,1.175);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-575.9,-223.3,1152,446.7);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.IDoWantEn();
	this.instance.setTransform(-544.9,-211.2,1.112,1.112);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-544.9,-211.2,1090,422.7);


(lib.Ring101 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GoldRing104();
	this.instance.setTransform(106.9,561.6);

	this.instance_1 = new lib.GoldRing103();
	this.instance_1.setTransform(0,195.7);

	this.instance_2 = new lib.GoldRing102();
	this.instance_2.setTransform(59.7,41.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.GoldRing101).s().p("AxAGLIAAsVMAiCAAAIAAMVgAlYCTIgNAKQgUACgMADQgVAFgEALQgCADAAATQABAMAGAIQANARAfACIAAAGQgBAJAIALQALAUAVAAQCEAAAmgPQAVgJAAgaIAAgIQAegIAAgdQAAgogoAAIhNAAQgIgagmABQgqgBgiAXgABEAwIgIAJQgWAQAAARQAAAKAHAKQAMAUAcgBQAtABAlgVQAkgTAAgTQAAgpgtgBIgUABIgKgBQgoAAgUATg");
	this.shape.setTransform(378.7,39.5);

	this.addChild(this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,488.9,749.6);


(lib.Power = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Iusedtobe();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1056,128);


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
	this.instance = new lib.HiRuda();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,291,226);


(lib.Blink30333 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.RudaBlink303();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,269,103);


(lib.Blink20234 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.RudaBlink101();
	this.instance.setTransform(0,0,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.6,24.7);


(lib.Blink20222 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.RudaBlink202();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,269,103);


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


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Ring101("synched",0);
	this.instance.setTransform(244.4,0,1.003,1,0,0,180,244.5,374.8);

	this.instance_1 = new lib.Ring101("synched",0);
	this.instance_1.setTransform(-244.9,0.1,1,1,0,0,0,244.5,374.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.4,-374.8,979.1,749.7);


(lib.RudaEyeBkinkAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Blink20234("synched",0);
	this.instance.setTransform(35,12.9,1.084,1.036,0,0,0,32.3,12.4);

	this.instance_1 = new lib.Blink20222();
	this.instance_1.setTransform(35,12.7,0.26,0.245,0,0,0,134.4,51.6);

	this.instance_2 = new lib.Blink30333();
	this.instance_2.setTransform(35,12.8,0.261,0.25,0,0,0,134.5,51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,25.6);


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