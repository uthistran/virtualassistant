(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.MagicalGazeboFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Preloader
	this.instance = new lib.TwnkleStarAnim123();
	this.instance.setTransform(477,461.1,0.424,0.424,0,0,0,79,126.1);

	this.instance_1 = new lib.TwnkleStarAnim123();
	this.instance_1.setTransform(354.8,448.1,0.343,0.343,0,0,0,78.9,126.1);

	this.myLoader = new lib.Preloader();
	this.myLoader.setTransform(491.6,437.6,1,1,0,0,0,100,10);

	this.instance_2 = new lib.LogoIcon101_1("synched",0);
	this.instance_2.setTransform(480.3,442.7,1,1,0,0,0,249.5,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.myLoader},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).to({state:[]},601).wait(7));

	// dust_b
	this.instance_3 = new lib.dust_b();
	this.instance_3.setTransform(498,492.5,1,1,0,0,0,7,16);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).wait(8).to({_off:false},0).wait(590).to({_off:true},3).wait(7));

	// twinkle star
	this.instance_4 = new lib.TwnkleStarAnim123();
	this.instance_4.setTransform(299,841,0.444,0.444,0,0,0,79,126);

	this.instance_5 = new lib.TwnkleStarAnim123();
	this.instance_5.setTransform(676.7,846,0.386,0.386,0,0,0,79,126.1);

	this.instance_6 = new lib.dust_a();
	this.instance_6.setTransform(1000.1,-1.8,1.34,0.001,0,0,0,15,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6,p:{regY:36.4,scaleX:1.34,scaleY:0.001,x:1000.1,y:-1.8}},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_6,p:{regY:25,scaleX:1,scaleY:1,x:614,y:440}}]},598).to({state:[]},3).wait(7));

	// Magical Gazebo
	this.instance_7 = new lib.MagicalGazebo();
	this.instance_7.setTransform(-5.6,665.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1).to({state:[]},601).wait(7));

	// menu bottom
	this.instance_8 = new lib.StageNew2();
	this.instance_8.setTransform(-25.2,756.1,0.859,0.919);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},598).to({state:[]},3).wait(7));

	// GoldRing
	this.instance_9 = new lib.Symbol6("synched",0);
	this.instance_9.setTransform(490.3,490.3);
	this.instance_9.alpha = 0;

	this.instance_10 = new lib.Symbol9("synched",0);
	this.instance_10.setTransform(490.3,490.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9,p:{alpha:0}}]},3).to({state:[{t:this.instance_9,p:{alpha:0.033}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.067}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.1}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.133}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.167}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.2}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.233}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.267}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.3}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.37}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.44}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.51}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.58}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.616}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.652}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.688}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.724}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_9,p:{alpha:1}}]},1).to({state:[{t:this.instance_10,p:{alpha:1}}]},93).to({state:[{t:this.instance_10,p:{alpha:0.92}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.84}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.76}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.7}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.64}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.58}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.48}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.38}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.343}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.307}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.27}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.27}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.27}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.27}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.27}}]},1).to({state:[{t:this.instance_10,p:{alpha:0.059}}]},1).to({state:[]},8).to({state:[]},452).wait(7));

	// TheyMust
	this.instance_11 = new lib.Symbol17("synched",0);
	this.instance_11.setTransform(497.3,566.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(536).to({startPosition:0,_off:false},0).wait(8).to({alpha:0.34},0).wait(9).to({alpha:0.641},0).wait(7).to({alpha:0.73},0).wait(8).to({alpha:1},0).to({_off:true},40).wait(1));

	// ASecretCode
	this.instance_12 = new lib.Symbol7("synched",0);
	this.instance_12.setTransform(491.3,524.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(155).wait(245).to({startPosition:0,_off:false},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.137},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.206},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.275},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.415},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.485},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.584},0).wait(1).to({alpha:0.617},0).wait(1).to({alpha:0.649},0).wait(1).to({alpha:0.681},0).wait(1).to({alpha:0.713},0).wait(1).to({alpha:0.746},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.81},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).to({_off:true},112).wait(65));

	// MagicAppear
	this.instance_13 = new lib.Symbol10("synched",0);
	this.instance_13.setTransform(496.3,561.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(181).to({startPosition:0,_off:false},0).wait(1).to({x:498.6,alpha:0.056},0).wait(1).to({x:500.8,alpha:0.112},0).wait(1).to({x:503.1,alpha:0.168},0).wait(1).to({x:505.4,alpha:0.224},0).wait(1).to({x:507.6,alpha:0.28},0).wait(1).to({x:507.2,alpha:0.317},0).wait(1).to({x:506.7,alpha:0.354},0).wait(1).to({x:506.2,alpha:0.391},0).wait(1).to({x:505.7,alpha:0.429},0).wait(1).to({x:505.3,alpha:0.466},0).wait(1).to({x:504.8,alpha:0.503},0).wait(1).to({x:504.3,alpha:0.54},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).to({_off:true},200).wait(209));

	// LWingAnim
	this.instance_14 = new lib.wingsflap();
	this.instance_14.setTransform(766.8,546.3,0.429,0.429,0,0,179.5,331.4,528.3);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(181).to({_off:false},0).to({_off:true},421).wait(7));

	// BWingAnim
	this.instance_15 = new lib.wingsflap();
	this.instance_15.setTransform(419.1,419.4,0.771,0.771,0,0,0,331.2,528.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(181).to({_off:false},0).to({_off:true},421).wait(7));

	// Nursery
	this.instance_16 = new lib.Nursery980();
	this.instance_16.setTransform(-19,75.4,1.045,1.045);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},181).to({state:[]},421).wait(7));

	// 10000 Years
	this.instance_17 = new lib.Symbol18();
	this.instance_17.setTransform(493,507.9);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(82).to({_off:false},0).wait(5).to({alpha:0.309},0).wait(8).to({alpha:0.629},0).wait(7).to({alpha:0.82},0).wait(6).to({alpha:1},0).to({_off:true},73).wait(428));

	// The Startheria
	this.instance_18 = new lib.Symbol3("synched",0);
	this.instance_18.setTransform(498.3,510.4);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({startPosition:0,_off:false},0).to({alpha:1},18).to({startPosition:0},26).to({_off:true},37).wait(527));

	// Background
	this.instance_19 = new lib.Gazebo();
	this.instance_19.setTransform(-12.9,8,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},1).to({state:[]},180).to({state:[]},421).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(230.8,255.2,493.2,452.4);


// symbols:
(lib.ASecretCodePower = function() {
	this.initialize(img.ASecretCodePower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.Background = function() {
	this.initialize(img.Background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.Backgroundv2 = function() {
	this.initialize(img.Backgroundv2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.BigWingsMove = function() {
	this.initialize(img.BigWingsMove);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,139);


(lib.BlueGlow = function() {
	this.initialize(img.BlueGlow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.fly_1 = function() {
	this.initialize(img.fly_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,791,780);


(lib.fly_2 = function() {
	this.initialize(img.fly_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,791,780);


(lib.Gazebo = function() {
	this.initialize(img.Gazebo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.GoldRing = function() {
	this.initialize(img.GoldRing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


(lib.ItTakesTenThousand = function() {
	this.initialize(img.ItTakesTenThousand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.ItTakesTenThousand2 = function() {
	this.initialize(img.ItTakesTenThousand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.LogoIcon101 = function() {
	this.initialize(img.LogoIcon101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,425);


(lib.MagicalGazebo = function() {
	this.initialize(img.MagicalGazebo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.MagicallyAppear = function() {
	this.initialize(img.MagicallyAppear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.MenuHeader101 = function() {
	this.initialize(img.MenuHeader101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,133);


(lib.Nursery980 = function() {
	this.initialize(img.Nursery980);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,694);


(lib.NurseryNoBigLeafsNowings = function() {
	this.initialize(img.NurseryNoBigLeafsNowings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,980);


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


(lib.TheStartheriaStarBabies = function() {
	this.initialize(img.TheStartheriaStarBabies);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.TheyAreTaught = function() {
	this.initialize(img.TheyAreTaught);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.TheyMustFulfill = function() {
	this.initialize(img.TheyMustFulfill);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.TwinkleStar111 = function() {
	this.initialize(img.TwinkleStar111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.WhiteGlow = function() {
	this.initialize(img.WhiteGlow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.WingBig = function() {
	this.initialize(img.WingBig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.WingsLittle = function() {
	this.initialize(img.WingsLittle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,380);


(lib.WingsLittleMove = function() {
	this.initialize(img.WingsLittleMove);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,85);


(lib.TwnkleStar123 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TwinkleStar111();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,198);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TheStartheriaStarBabies();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ItTakesTenThousand2();
	this.instance.setTransform(-556.3,-215.6,1.135,1.135);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-556.3,-215.6,1112.8,431.5);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TheyMustFulfill();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.WingBig();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.BigWingsMove();
	this.instance.setTransform(-75.9,-69.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.9,-69.4,152,139);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MagicallyAppear();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ASecretCodePower();
	this.instance.setTransform(-489.9,-189.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GoldRing();
	this.instance.setTransform(-489.9,-489.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-489.9,980,980);


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


(lib.wingsflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.setTransform(331.4,528.4);

	this.instance_1 = new lib.Symbol11("synched",0);
	this.instance_1.setTransform(254.9,522.4,1,1,0,0,0,54.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{regX:54.5,x:254.9}}]},27).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:0,x:200.4}}]},1).to({state:[{t:this.instance_1,p:{regX:54.5,x:254.9}}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.6,338.4,980,380);


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


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol6("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-489.9,980,980);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween1("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.9,-189.9,980,380);


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

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;