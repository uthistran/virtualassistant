(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Mytheria = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(498,447.1,0.455,0.455,0,0,0,79,126);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(327.8,428.1,0.576,0.545,0,0,0,79,126.1);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(491.6,437.6,1,1,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(478.3,437,1,1,0,0,0,249.5,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(1204));

	// Come Visit
	this.instance_3 = new lib.visit22("synched",0);
	this.instance_3.setTransform(490,649,1,1,0,0,0,406,144.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(86).wait(350).to({startPosition:0,_off:false},0).to({alpha:1},11).wait(89).to({startPosition:0},0).to({alpha:0},13).to({_off:true},11).wait(645));

	// I Teach
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(470.7,711);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).wait(38).to({startPosition:0,_off:false},0).wait(14).to({startPosition:0},0).wait(17).to({startPosition:0},0).to({_off:true},302).wait(772));

	// Hi
	this.instance_5 = new lib.Hi("synched",0);
	this.instance_5.setTransform(748.6,412.1,1.017,1.059,0,0,0,239.5,113);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).wait(12).to({startPosition:0,_off:false},0).to({alpha:1},12).wait(55).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(1109));

	// Pixie Char
	this.instance_6 = new lib.PixieSwirlBody_1("synched",0);
	this.instance_6.setTransform(582.5,408,2.634,2.634,0,0,0,117.6,57.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0,_off:false},0).to({_off:true},23).wait(1).to({x:575.5,y:385.9,_off:false},0).to({_off:true},15).wait(5).to({startPosition:0,_off:false},0).to({_off:true},27).wait(8).to({startPosition:0,_off:false},0).to({_off:true},480).wait(645));

	// Pixie Stage
	this.instance_7 = new lib.PixieDust_1("synched",0);
	this.instance_7.setTransform(430.3,839.1,3.585,3.585,0,0,0,117.7,117.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).wait(113).to({startPosition:0,_off:false},0).to({_off:true},435).wait(656));

	// character
	this.instance_8 = new lib.MythBody101("synched",0);
	this.instance_8.setTransform(429,538.3,0.281,0.281,0,0,0,1000,1467.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0,_off:false},0).to({_off:true},559).wait(645));

	// Footer
	this.instance_9 = new lib.StageNew2();
	this.instance_9.setTransform(-20.3,797.5,0.854,0.972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},1).to({state:[]},559).wait(645));

	// GoldRinger
	this.instance_10 = new lib.Tween2("synched",0);
	this.instance_10.setTransform(490,457.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({startPosition:0,_off:false},0).to({_off:true},30).wait(1174));

	// Bkgrnd
	this.instance_11 = new lib.Bkgrnd("synched",0);
	this.instance_11.setTransform(489.8,490.4,1.186,1.186,0,0,0,489.9,490.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0,_off:false},0).to({_off:true},559).wait(645));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(228.8,249.5,493.2,458.1);


// symbols:
(lib.Bitmap40 = function() {
	this.initialize(img.Bitmap40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,108);


(lib.Bkgrnd_Small = function() {
	this.initialize(img.Bkgrnd_Small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.ClosedEyes = function() {
	this.initialize(img.ClosedEyes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,108);


(lib.ComeVisitMyCastle2 = function() {
	this.initialize(img.ComeVisitMyCastle2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,812,289);


(lib.Eye101pngcopy = function() {
	this.initialize(img.Eye101pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,108);


(lib.Eye202pngcopy = function() {
	this.initialize(img.Eye202pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,108);


(lib.Eye303copy = function() {
	this.initialize(img.Eye303copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,108);


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


(lib.HalfClosedEyes = function() {
	this.initialize(img.HalfClosedEyes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,108);


(lib.IteachtheStartherians = function() {
	this.initialize(img.IteachtheStartherians);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.ImMytheria = function() {
	this.initialize(img.ImMytheria);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,479,226);


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


(lib.MythBody = function() {
	this.initialize(img.MythBody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,2935);


(lib.OpenEyes = function() {
	this.initialize(img.OpenEyes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,108);


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


(lib.TheRulerofStartheria = function() {
	this.initialize(img.TheRulerofStartheria);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,948,141);


(lib.TwinkleStar111 = function() {
	this.initialize(img.TwinkleStar111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.visit22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ComeVisitMyCastle2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,812,289);


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
	this.instance = new lib.OpenEyes();
	this.instance.setTransform(-74.5,-26.2,0.488,0.488);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.5,-26.2,149.2,52.7);


(lib.Ruler = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TheRulerofStartheria();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,948,141);


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


(lib.MythBody101 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MythBody();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2000,2935);


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
	this.instance = new lib.ImMytheria();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,226);


(lib.ClosedEyes_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ClosedEyes();
	this.instance.setTransform(-152.9,-53.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152.9,-53.9,306,108);


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


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ClosedEyes_1();
	this.instance.setTransform(0,0,0.489,0.485);

	this.instance_1 = new lib.HalfClosedEyes();
	this.instance_1.setTransform(-74.2,-26.3,0.486,0.489);

	this.instance_2 = new lib.OpenEyes();
	this.instance_2.setTransform(-74.6,-25.4,0.488,0.48);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.7,-26.3,149.5,52.8);


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


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.IteachtheStartherians();
	this.instance.setTransform(-495.2,-478.5,0.977,0.977);

	this.instance_1 = new lib.Ruler("synched",0);
	this.instance_1.setTransform(21.3,170,1,1,0,0,0,474,70.5);
	this.instance_1.alpha = 0;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-495.2,-478.5,990.6,957.1);


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


(lib.Blink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Blink
	/* Layers with classic tweens must contain only a single symbol instance. */

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-26.2,149.2,52.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;