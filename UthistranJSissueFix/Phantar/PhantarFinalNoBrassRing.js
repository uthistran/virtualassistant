(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.PhantarFinalNoBrassRing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(559,471.1,0.384,0.535,0,0,0,79,126);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(352.8,453.1,0.576,0.505,0,0,0,79,126.1);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(491.6,437.6,1,1,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(478.3,468,1,1,0,0,0,249.5,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(655));

	// Blinkanim
	this.instance_3 = new lib.EyeBlink101();
	this.instance_3.setTransform(473.3,202.9,1,1,0,0,0,40,13);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},645).wait(10));

	// Layer 18
	this.instance_4 = new lib.Visit("synched",0);
	this.instance_4.setTransform(480.2,628.2,1,1,0,0,0,388,144.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(376).wait(13).to({startPosition:0,_off:false},0).to({alpha:1},11).wait(135).to({startPosition:0},0).wait(89).to({startPosition:0},0).to({alpha:0},11).to({_off:true},11).wait(10));

	// power
	this.instance_5 = new lib.power("synched",0);
	this.instance_5.setTransform(488.1,874.2,1,1,0,0,0,465.5,111.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(129).wait(1).to({startPosition:0,_off:false},0).to({alpha:1},15).wait(479).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({alpha:0},9).to({_off:true},12).wait(10));

	// Hi
	this.instance_6 = new lib.Hi("synched",0);
	this.instance_6.setTransform(779.5,399,0.918,0.918,0,0,0,222.5,113);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).wait(12).to({startPosition:0,_off:false},0).to({alpha:1},8).wait(66).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({alpha:0},22).to({_off:true},535).wait(10));

	// Layer 20
	this.instance_7 = new lib.TextLong("synched",0);
	this.instance_7.setTransform(498.1,604.2,1,1,0,0,0,410.5,151.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).wait(261).to({startPosition:0,_off:false},0).to({alpha:1},9).to({startPosition:0},104).to({startPosition:0},4).to({alpha:0},10).to({_off:true},257).wait(10));

	// PhantarBody
	this.instance_8 = new lib.PhantarBody101();
	this.instance_8.setTransform(144.6,135.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1).to({state:[]},645).wait(10));

	// Glow
	this.instance_9 = new lib.Glow();
	this.instance_9.setTransform(104.1,94.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},1).to({state:[]},645).wait(10));

	// Footer
	this.instance_10 = new lib.StageNew2();
	this.instance_10.setTransform(-16.9,779.7,0.849,0.994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},1).to({state:[]},645).wait(10));

	// Bkgrnd
	this.instance_11 = new lib.Bkgrnd("synched",0);
	this.instance_11.setTransform(487.8,443.6,1.12,1.146,0,0,0,489.9,490.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0,_off:false},0).to({_off:true},645).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(228.8,280.5,493.2,427.1);


// symbols:
(lib.Bkgrnd_Small = function() {
	this.initialize(img.Bkgrnd_Small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.ComeVisit = function() {
	this.initialize(img.ComeVisit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,776,289);


(lib.Glow = function() {
	this.initialize(img.Glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,669,891);


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


(lib.HiPhantar = function() {
	this.initialize(img.HiPhantar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,445,226);


(lib.ITeach = function() {
	this.initialize(img.ITeach);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,821,303);


(lib.InChargeofCosmicCoincidence = function() {
	this.initialize(img.InChargeofCosmicCoincidence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,931,223);


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


(lib.Phantar_eyeBlkink101 = function() {
	this.initialize(img.Phantar_eyeBlkink101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,26);


(lib.Phantar_eyeBlkink202 = function() {
	this.initialize(img.Phantar_eyeBlkink202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,26);


(lib.Phantar_eyeBlkink303 = function() {
	this.initialize(img.Phantar_eyeBlkink303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,26);


(lib.PhantarBody101 = function() {
	this.initialize(img.PhantarBody101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,588,819);


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


(lib.Visit = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ComeVisit();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,776,289);


(lib.TwnkleStar123 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TwinkleStar111();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.TextLong = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ITeach();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,821,303);


(lib.power = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.InChargeofCosmicCoincidence();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,931,223);


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
	this.instance = new lib.HiPhantar();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,445,226);


(lib.EyeBlink101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Phantar_eyeBlkink101();

	this.instance_1 = new lib.Phantar_eyeBlkink202();

	this.instance_2 = new lib.Phantar_eyeBlkink303();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,26);


(lib.Bkgrnd = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bkgrnd_Small();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


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