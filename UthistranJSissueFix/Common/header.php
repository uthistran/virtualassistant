<?php
session_start();
include("includes/language.php");
include("includes/translator.php");

if(isset($_GET['r']))
{
$_SESSION['referrer'] = addslashes(strip_tags($_GET['r']));
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml">
<head>

<meta name=viewport content="width=device-width, initial-scale=1">
<!-- Google Analytics Content Experiment code -->
<!-- <script src="Scripts/swfobject_modified.js" type="text/javascript"></script>
<script>function utmx_section(){}function utmx(){}(function(){var
k='35154071-5',d=document,l=d.location,c=d.cookie;
if(l.search.indexOf('utm_expid='+k)>0)return;
function f(n){if(c){var i=c.indexOf(n+'=');if(i>-1){var j=c.
indexOf(';',i);return escape(c.substring(i+n.length+1,j<0?c.
length:j))}}}var x=f('__utmx'),xx=f('__utmxx'),h=l.hash;d.write(
'<sc'+'ript src="'+'http'+(l.protocol=='https:'?'s://ssl':
'://www')+'.google-analytics.com/ga_exp.js?'+'utmxkey='+k+
'&utmx='+(x?x:'')+'&utmxx='+(xx?xx:'')+'&utmxtime='+new Date().
valueOf()+(h?'&utmxhash='+escape(h.substr(1)):'')+
'" type="text/javascript" charset="utf-8"><\/sc'+'ript>')})();
</script><script>utmx('url','A/B');</script> -->
<!-- End of Google Analytics Content Experiment code -->

<meta https-equiv="content-type" content="text/html; charset=utf-8" />
<link rel="icon" href="images/NewLogoFlashPreloader.png">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- <title>Startheria A Magical Virtual World For Girls And Boys</title> -->
<meta name="description"
	content="Explore the Magical World of Startheria, a virtual world for kids of all ages. Create your own character, play fun games and chat with your friends!" />
<meta name="keywords"
	content="online childrens games for boys and girls,children stories,Startheria,virtual worlds games,girls,boys,tweens,kids,kids casting call,kids,modeling agencies,child modeling,fun childrens games,photo contest,christmas gifts for kids,web tv series,secret codes,virtual characters,virtual pets,Windy, Phire,Misty,Desiree,Evilla,Ruda,Mytheria,Phantar,star babies,star pets,Snowball,En,Endles,Abysson,Phartheon,Magical Gazebo,Magic Time Room,role playing game,cartoons,fairy game,fairies,faery,faeries,fairy,fairy dust,girl games,boy games,avatar,dress up,mmorpg,mmog,mmo,rpg,multi-player" />
<style type="text/css">
	/*<![CDATA[*/
	#apDiv39 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 13;
		left: 1157px;
		top: 535px;
	}

	.fontdescription {
		font-size: 10px;
		color: #000;
	}

	/*]]>*/
	.windy {
		font-size: 16px;
		font-weight: 400;
		color: #000;
	}
</style>
<script type="text/javascript">
	//<![CDATA[
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-17691471-1']);
	_gaq.push(['_trackPageview']);

	(function () {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('http:' == document.location.protocol ? 'https://ssl' : 'https://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
  //]]>
</script>
<script language="JavaScript">
	//<![CDATA[
	var message = "Function Disabled!"; function clickIE4() { if (event.button == 2) { alert(message); return false; } } function clickNS4(e) { if (document.layers || document.getElementById && !document.all) { if (e.which == 2 || e.which == 3) { alert(message); return false; } } } if (document.layers) { document.captureEvents(Event.MOUSEDOWN); document.onmousedown = clickNS4; } else if (document.all && !document.getElementById) { document.onmousedown = clickIE4; } document.oncontextmenu = new Function("alert(message);return false")
 //]]>
</script>
<meta property="og:title"
	content="Explore the Magical World of Startheria, a virtual world for kids. Create your character and play fun games, you can chat with other kids!" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.startheria.com" />
<meta property="og:image"
	content="https://www.startheria.com/images/BlogWithStartheriaKidsSearch&amp;amp;ContestSmaller.png" />
<meta property="og:site_name" content="The Magical World of Startheria" />
<meta property="fb:admins" content="1133101604" />
<meta name="google-site-verification" content="CG-tTZh8UtrWjv2xraJWCBtme6WOV8qgh0Ra7mLvCxY" />
<meta name="sample js dropdown menu" />
<style type="text/css" media="screen">
	/*<![CDATA[*/
	@import url("../Common/css/style.css");

	#apDiv1 {
		position: absolute;
		width: 580px;
		height: 51px;
		z-index: 1;
		left: 151px;
		top: 1075px;
		text-align: center;
		visibility: visible;
	}

	body,
	td,
	th {
		color: #000;
	}

	body {
		text-align: center;

	}

	.style2 {
		color: #000
	}

	#apDiv2 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 8;
	}

	#apDiv3 {
		position: absolute;
		width: 979px;
		height: 115px;
		z-index: 2;
		left: -4px;
		top: 919px;
	}

	#apDiv4 {
		position: absolute;
		width: 978px;
		height: 115px;
		z-index: 8;
		left: 133px;
		top: 1007px;
		visibility: hidden;
	}

	#apDiv1 p .style2 a {
		color: #D6D6D6;
	}

	#apDiv1 p .style2 a {
		color: #006;
	}

	#apDiv1 p .style2 a {
		color: #000;
	}

	#apDiv1 p .style2 a {
		color: #FFF;
	}

	#apDiv7 {
		position: absolute;
		width: 859px;
		height: 115px;
		z-index: 1;
		left: 53px;
		top: 22px;
		color: #FFF;
	}

	body {
		background-repeat: no-repeat;
		/* background-image: url(images/GAZEBOBIGBACK_mini.jpg); */
		margin-top: 0px;
		margin-left: 0px;
		margin-right: 1020px;
		color: #FFF;
	}

	#apDiv5 {
		position: absolute;
		width: 980px;
		height: 980px;
		z-index: 0;
		left: 154px;
		visibility: visible;
	}

	#apDiv8 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: 154px;
		top: 68px;
		visibility: visible;
	}

	#apDiv9 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: 1110px;
		top: 85px;
		visibility: visible;
	}

	#apDiv11 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 8;
		left: 148px;
		top: -4px;
		visibility: visible;
	}

	#apDiv14 {
		position: absolute;
		width: 152px;
		height: 90px;
		z-index: 9;
		left: 2px;
		top: 503px;
		visibility: visible;
	}

	#apDiv15 {
		position: absolute;
		width: 162px;
		height: 115px;
		z-index: 0;
		visibility: visible;
		left: -4px;
		top: 99px;
	}

	#apDiv16 {
		position: absolute;
		width: 233px;
		height: 115px;
		z-index: 0;
		left: 1130px;
		top: 101px;
	}

	#apDiv18 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		visibility: visible;
	}

	#apDiv19 {
		position: absolute;
		width: 144px;
		height: 41px;
		z-index: 1;
		left: -4px;
		top: 118px;
		visibility: visible;
	}

	#apDiv20 {
		position: absolute;
		width: 135px;
		height: 35px;
		z-index: 2;
		top: 45px;
		left: 135px;
		visibility: visible;
	}

	#apDiv21 {
		position: absolute;
		width: 151px;
		height: 35px;
		z-index: 9;
		left: 991px;
		top: 46px;
	}

	#apDiv22 {
		position: absolute;
		width: 144px;
		height: 44px;
		z-index: 10;
		top: 405px;
		left: 3px;
	}

	#apDiv23 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 11;
		left: 150px;
		top: -16px;
	}

	#apDiv24 {
		position: absolute;
		width: 961px;
		height: 553px;
		z-index: 12;
		left: 159px;
		top: 240px;
	}

	#apDiv25 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: -4px;
		top: 59px;
	}

	#apDiv26 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: -153px;
		top: 220px;
	}

	#apDiv27 {
		position: absolute;
		width: 157px;
		height: 115px;
		z-index: 10;
		left: -16px;
		top: 130px;
	}

	#apDiv28 {
		position: absolute;
		width: 162px;
		height: 38px;
		z-index: 11;
		top: -17px;
		left: -1px;
	}

	#apDiv29 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: 156px;
		top: 110px;
		visibility: visible;
	}

	#apDiv30 {
		position: absolute;
		width: 240px;
		height: 115px;
		z-index: 11;
		left: 1135px;
		top: 0px;
		visibility: hidden;
	}

	#apDiv31 {
		position: absolute;
		width: 200px;
		height: 158px;
		z-index: 12;
		left: -50px;
		top: 319px;
		font-size: 18px;
	}

	#apDiv31 .tooSmallLink u {
		font-weight: bold;
	}

	#apDiv32 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 12;
		left: -16px;
		top: 303px;
	}

	#apDiv33 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 13;
	}

	#apDiv34 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 13;
	}

	#apDiv35 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 13;
	}

	#apDiv36 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 13;
	}

	#apDiv37 {
		position: absolute;
		width: 200px;
		height: 268px;
		z-index: 13;
		left: 546px;
		top: 233px;
	}

	/*]]>*/
</style>
<!--[if IE]>
<style type="text/css" media="screen">
 #menu ul li {float: left; width: 100%;}
</style>
<![endif]-->
<!--[if lt IE 7]>
<style type="text/css" media="screen">
body {
behavior: url(csshover.htc);
font-size: 100%;
}

#menu ul li a {height: 1%;} 

#menu a, #menu h2 {
font: bold 0.7em/1.4em arial, helvetica, sans-serif;
}to
</style>
<![endif]-->

<!--Edited by Riyanto Jayadi -->
<style type='text/css'>
	/*<![CDATA[*/
	#popupFiller {
		display: none;
		position: fixed;
		_position: absolute;
		/* hack for internet explorer 6*/
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background: #000000;
		border: px solid #000;
		z-index: 998;
	}

	.popupDiv {
		box-shadow: 0 0 5px gray;
		_position: absolute;
		/* hack for internet explorer 6*/
		font-size: 14px;
		z-index: 999;
		display: none;
		height: 1030px;
		width: 880px;
		height: 971px;
	}


	#popupSignupDiv {
		background: url("images/NewEnterYourChildWButtonSmaller.png") no-repeat;
	}

	#apDiv38 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: 156px;
		top: 111px;
		visibility: visible;
	}

	#loginLink {
		position: absolute;
		width: 157px;
		height: 43px;
		z-index: 12;
		left: 500px;
		top: 297px;
		font-weight: bold;
		text-align: center;
		font-size: 14px;
	}

	#freemembershipLink {
		position: absolute;
		width: 200px;
		height: 35px;
		z-index: 13;
		left: 163px;
		top: 560px;
		text-align: center;
		font-weight: bold;
		font-size: 25px;
	}


	#popupsignupCloseimg {
		font-size: 30px;
		line-height: 14px;
		right: 37px;
		top: 8px;
		position: absolute;
		font-weight: 700;
		display: block;
		color: transparent;

	}

	#popupsignupfreeloginCloseimg {
		font-size: 30px;
		line-height: 14px;
		right: 44px;
		top: 14px;
		position: absolute;
		font-weight: 700;
		display: block;
		color: transparent;

	}

	#apDiv39 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 14;
		left: 1152px;
		top: 718px;
	}
</style>
<!--End of Edited by Riyanto Jayadi -->


<style type="text/css">
</style>





<style TYPE="text/css" MEDIA="screen">
	@import url("../Common/css/style.css");

	#apDiv1 {
		position: absolute;
		width: 580px;
		height: 51px;
		z-index: 1;
		left: 152px;
		top: 1075px;
		text-align: center;
		visibility: visible;
	}

	body,
	td,
	th {
		color: #FFF;
	}

	.style2 {
		color: #FFF
	}

	#apDiv2 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 8;
	}

	#apDiv3 {
		position: absolute;
		width: 979px;
		height: 115px;
		z-index: 2;
		left: -4px;
		top: 919px;
	}

	#apDiv4 {
		position: absolute;
		width: 978px;
		height: 115px;
		z-index: 8;
		left: 133px;
		top: 1007px;
		visibility: hidden;
	}

	#apDiv1 p .style2 a {
		color: #D6D6D6;
	}

	#apDiv1 p .style2 a {
		color: #006;
	}

	#apDiv1 p .style2 a {
		color: #000;
	}

	#apDiv1 p .style2 a {
		color: #FFF;
	}

	#apDiv7 {
		position: absolute;
		width: 908px;
		height: 115px;
		z-index: 1;
		left: 43px;
		top: 22px;
		color: #FFF;
	}

	body {
		background-repeat: no-repeat;
		margin-top: 111px;
		margin-left: 156px;
		margin-right: 1000px;
		color: #000;
		/* background-image: url(../Common/GlowOnly.png); */
	}

	#apDiv5 {
		position: absolute;
		width: 980px;
		height: 980px;
		z-index: 0;
		left: 154px;
		visibility: visible;
	}

	#apDiv8 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: 154px;
		top: 68px;
		visibility: visible;
	}

	#apDiv9 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: 1063px;
		top: 173px;
		visibility: visible;
	}

	#apDiv11 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 8;
		left: 148px;
		top: -4px;
		visibility: visible;
	}

	#apDiv14 {
		position: absolute;
		width: 152px;
		height: 90px;
		z-index: 9;
		left: 14px;
		top: 451px;
		visibility: visible;
	}

	#apDiv15 {
		position: absolute;
		width: 162px;
		height: 115px;
		z-index: 0;
		visibility: visible;
		left: -4px;
		top: 99px;
	}

	#apDiv16 {
		position: absolute;
		width: 208px;
		height: 115px;
		z-index: 0;
		left: 1130px;
		top: 101px;
	}

	#apDiv18 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		visibility: visible;
	}

	#apDiv19 {
		position: absolute;
		width: 144px;
		height: 41px;
		z-index: 1;
		left: -4px;
		top: 118px;
		visibility: visible;
	}

	#apDiv20 {
		position: absolute;
		width: 135px;
		height: 35px;
		z-index: 2;
		top: 45px;
		left: 135px;
		visibility: visible;
	}

	#apDiv21 {
		position: absolute;
		width: 151px;
		height: 35px;
		z-index: 9;
		left: 991px;
		top: 46px;
	}

	#apDiv22 {
		position: absolute;
		width: 144px;
		height: 44px;
		z-index: 10;
		top: 405px;
		left: 3px;
	}

	#apDiv23 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 11;
		left: 150px;
		top: -16px;
	}

	#apDiv24 {
		position: absolute;
		width: 961px;
		height: 553px;
		z-index: 12;
		left: 159px;
		top: 240px;
	}

	#apDiv25 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: -4px;
		top: 59px;
	}

	#apDiv26 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: -153px;
		top: 220px;
	}

	#apDiv27 {
		position: absolute;
		width: 157px;
		height: 115px;
		z-index: 10;
		left: -8px;
		top: 173px;
	}

	#apDiv28 {
		position: absolute;
		width: 162px;
		height: 38px;
		z-index: 11;
		top: -17px;
		left: -1px;
	}

	#apDiv29 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: 155px;
		top: 106px;
		visibility: visible;
	}

	#apDiv30 {
		position: absolute;
		width: 240px;
		height: 115px;
		z-index: 11;
		left: 1135px;
		top: 0px;
		visibility: visible;
	}

	#apDiv31 {
		position: absolute;
		width: 200px;
		height: 158px;
		z-index: 12;
		left: -50px;
		top: 319px;
		font-size: 18px;
	}

	#apDiv31 .tooSmallLink u {
		font-weight: bold;
	}

	#apDiv32 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 12;
		left: -16px;
		top: 303px;
	}

	#apDiv33 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 13;
	}

	#apDiv34 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 13;
	}

	#apDiv35 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 13;
	}

	#apDiv36 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 13;
	}

	#apDiv37 {
		position: absolute;
		width: 200px;
		height: 268px;
		z-index: 13;
		left: 546px;
		top: 233px;
	}
</style>
<!--[if IE]>
<style type="text/css" media="screen">
 #menu ul li {float: left; width: 100%;}
</style>
<![endif]-->
<!--[if lt IE 7]>
<style type="text/css" media="screen">
body {
behavior: url(csshover.htc);
font-size: 100%;
}

#menu ul li a {height: 1%;} 

#menu a, #menu h2 {
font: bold 0.7em/1.4em arial, helvetica, sans-serif;
}to
</style>
<![endif]-->

<!--Edited by Riyanto Jayadi -->
<style type='text/css'>
	#popupFiller {
		display: none;
		position: fixed;
		_position: absolute;
		/* hack for internet explorer 6*/
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background: #000000;
		border: px solid #000;
		z-index: 998;
	}

	.popupDiv {
		box-shadow: 0 0 5px gray;
		_position: absolute;
		/* hack for internet explorer 6*/
		font-size: 14px;
		z-index: 999;
		display: none;
		height: 1030px;
		width: 880px;
		height: 971px;
	}


	#popupSignupDiv {
		background: url("images/NewEnterYourChildWButtonSmaller.png") no-repeat;
	}

	#apDiv38 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: 157px;
		top: 106px;
		visibility: visible;
		margin: auto;
	}

	#loginLink {
		position: absolute;
		width: 157px;
		height: 43px;
		z-index: 12;
		left: 500px;
		top: 297px;
		font-weight: bold;
		text-align: center;
		font-size: 14px;
	}

	#freemembershipLink {
		position: absolute;
		width: 200px;
		height: 35px;
		z-index: 13;
		left: 163px;
		top: 560px;
		text-align: center;
		font-weight: bold;
		font-size: 25px;
	}


	#popupsignupCloseimg {
		font-size: 30px;
		line-height: 14px;
		right: 37px;
		top: 8px;
		position: absolute;
		font-weight: 700;
		display: block;
		color: transparent;

	}

	#popupsignupfreeloginCloseimg {
		font-size: 30px;
		line-height: 14px;
		right: 44px;
		top: 14px;
		position: absolute;
		font-weight: 700;
		display: block;
		color: transparent;

	}

	#apDiv39 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 14;
		left: 1134px;
		top: 418px;
	}

	#apDiv41 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 15;
		left: 193px;
		top: 338px;
	}

	#apDiv42 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 15;
		left: -40px;
		top: 344px;
	}

	#apDiv43 {
		position: absolute;
		width: 141px;
		height: 31px;
		z-index: 16;
		left: 25px;
		top: 464px;
	}

	#apDiv44 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 1;
		left: 957px;
		top: 1096px;
	}

	#apDiv45 {
		position: absolute;
		width: 245px;
		height: 115px;
		z-index: 15;
		left: -46px;
		top: 152px;
	}

	.description {
		color: #1D57A0;
	}

	#apDiv46 {
		position: absolute;
		width: 200px;
		height: 115px;
		z-index: 12;
	}

	#apDiv47 {
		position: absolute;
		width: 446px;
		height: 115px;
		z-index: 12;
		left: 455px;
		top: 1104px;
	}

	#apDiv47 p {
		font-size: 18px;
		font-style: normal;
		font-weight: normal;
		color: #FFF;
	}
</style>
<!--End of Edited by Riyanto Jayadi -->

<script type="text/javascript">



</script>
<meta https-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>

<body leftmargin="156px" topmargin="111px" marginheight="115px">





	<!-- Edited by Riyanto Jayadi -->
	<script type='text/javascript' src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

	<script type='text/javascript'>

		$(document).ready(function () {

			$('#popupFiller').click(function () {
				$('#popupFiller').fadeOut('slow');
				$('#popupSignupDiv').fadeOut('slow');
				$('#popupSignupFreeLoginDiv').fadeOut('slow');
			});

			$('#popupSignupClose').click(function () {
				$('#popupFiller').fadeOut('slow');
				$('#popupSignupDiv').fadeOut('slow');


			});

			$('#popupSignupFreeLoginClose').click(function () {
				$('#popupFiller').fadeOut('slow');
				$('#popupSignupFreeLoginDiv').fadeOut('slow');
			});


			$("#signup").click(function () {
				//centering
				$("#popupSignupDiv").css({
					"position": "absolute",
					"top": "150px",
					"left": ($(document).width() - $("#popupSignupDiv").width()) / 2 - 65
				});
				//only need force for IE6

				$("#popupFiller").css({
					"height": $(document).height() + 'px'
				});


				$("#popupFiller").css({ "opacity": "0.3" }).fadeIn("slow");
				$("#popupSignupDiv").fadeIn("slow");

			});

			$("#signupFree").click(function () {

				$("#popupSignupFreeLoginDiv").css({
					"position": "absolute",
					"top": "150px",
					"left": ($(document).width() - $("#popupSignupFreeLoginDiv").width()) / 2 - 65
				});
				//only need force for IE6

				$("#popupFiller").css({
					"height": $(document).height() + 'px'
				});


				$("#popupFiller").css({ "opacity": "0.3" }).fadeIn("slow");
				$("#popupSignupFreeLoginDiv").fadeIn("slow");
			});

			$("#login").click(function () {

				//centering
				$("#popupSignupFreeLoginDiv").css({
					"position": "absolute",
					"top": "150px",
					"left": ($(document).width() - $("#popupSignupFreeLoginDiv").width()) / 2 - 65
				});
				//only need force for IE6

				$("#popupFiller").css({
					"height": $(document).height() + 'px'
				});


				$("#popupFiller").css({ "opacity": "0.3" }).fadeIn("slow");
				$("#popupSignupFreeLoginDiv").fadeIn("slow");
			});
		});
	</script>

	<!-- End of Edited by Riyanto Jayadi -->




	<!--<script SRC="https://cdn.wibiya.com/Toolbars/dir_0970/Toolbar_970442/Loader_970442.js" TYPE="text/javascript">
</script>

<noscript>
<a HREF="https://www.wibiya.com/">Web Toolbar by Wibiya</a>
</noscript>-->
	<div ID="fb-root"></div>
	<script SRC="https://connect.facebook.net/en_US/all.js" TYPE="text/javascript">
	</script>
	<script TYPE="text/javascript">
		//<![CDATA[
		FB.init({
			appId: '284550802099', cookie: true,
			status: true, xfbml: true
		});
  //]]>
	</script>
	<!-- <div class="description" id="apDiv40">
		Startheria Virtual World For Girls Boys
	</div> -->
	<div id="layout">
		<div id="apDiv6">
			<center>
				<div id="menu">
					<ul class="level0">
						<li><a href="javascript:void(0);"><img src="../Common/Menunoglow/Menu_1.png"
									alt="Startheria Virtual World" width="110" height="231" border="0" /></a>
							<ul style="width:210px">
								<li><a href="Play.php" class="">Create Your Character & Chat</a>
								<li><a href="Play game.php" class=""> Secret Codes Easy</a>
								<li><a href="Play gameV2.php" class=""> Secret Codes Advanced</a>
							</ul>
						</li>
					</ul>
					<ul class="level0">
						<li><a href="TradingCards.php"><img src="../Common/Menunoglow/Menu_2.png"
									alt="Startheria Virtual World" width="130" height="231" border="0" /></a>
						</li>
					</ul>
					<ul class="level0">
						<li><a href="javascript:void(0);"><img src="../Common/Menunoglow/Menu_3.png"
									alt="Startheria Virtual World" width="100" height="230" border="0"
									onClick="window.open('../TradingCardsGoingToStoreNotice.php', 'terms','width=1000,height=500,menubar=no,status=no, location=yes,toolbar=no,scrollbars=yes')"></a>

							<ul style="width:140px">
								<li><a href="TradingCards.php" class=""></a>
								<li><a href="T-ShirtsMisty.php" class=""></a>
								<li><a href="LimitedEditionArtAll.php" class=""></a>
								</li>

							</ul>
						</li>
					</ul>
					<ul class="level0">
						<li><a href="index.php"><img src="../Common/Menunoglow/Menu_4.png" alt="Startheria Virtual World"
									width="290" height="231" border="0" /></a></li>
					</ul>
					<ul class="level0">
						<li><a href="javascript:void(0);"><img src="../Common/Menunoglow/Menu_5.png"
									alt="Startheria Virtual World" width="120" height="231" border="0" /></a>
							<ul style="width:215px">
								<li><a href="Startheria World.php" class="">Startheria</a></li>
								<li><a href="Abysson.php" class="">Abysson</a></li>
								<li><a href="Phartheon.php" class="">Phartheon</a></li>
								<li><a href="Magical Gazebo.php" class="">Magical Gazebo</a></li>
								<li><a href="MagicTimeRoom.php" class="">Magic Time Room</a></li>
							</ul>
						</li>
					</ul>

					<ul class="level0">
						<li><a href="javascript:void(0);"><img src="../Common/Menunoglow/Menu_6.png"
									alt="Startheria Virtual World" width="120" height="231" border="0" /></a>
							<ul style="width:215px">
								<li><a href="Windy.php" class="">Windy</a></li>
								<li><a href="Phire.php" class="">Phire</a></li>
								<li><a href="Misty.php" class="">Misty</a></li>
								<li><a href="Desiree.php" class="">Desiree</a></li>
								<li><a href="Evilla.php" class="">Evilla</a></li>
								<li><a href="En.php" class="">En</a></li>
								<li><a href="Ruda.php" class="">Ruda</a></li>
								<li><a href="Mytheria.php" class="">Mytheria</a></li>
								<li><a href="Phantar.php" class="">Phantar</a></li>
								<!-- <li><a href="Codas.php" class="">Codas</a></li>-->
								<li><a class="MenuBarItemSubmenu" href="#">Star Babies</a>
									<ul>
										<li><a href="Star Boy Peace.php">Baby Boys</a></li>
										<li><a href="Star Girl Joy.php">Baby Girls</a></li>
									</ul>
								</li>
								<li><a href="#" class="">Star Pets</a></li>
								<li><a href="Snowball.php" class="">Snowball</a></li>
								<!-- <li><a href="Endle.php" class="">Endles</a></li>-->
							</ul>
						</li>
					</ul>
					<ul class="level0">
						<li><a href="javascript:void(0);"><img src="../Common/Menunoglow/Menu_7.png"
									alt="Startheria Virtual World" width="120" height="231" border="0" /></a>
							<ul style="width:120px">
								<!-- Edited by Riyanto Jayadi -->
								<li><a href="#" id="login" class="">Log In</a></li>
								<!--<li><a id="signup" href="#" class="">Enter Your Child</a></li>-->
								<li><a href="#" id="signupFree" class="">Free Membership</a></li>
								<!-- Edited by Riyanto Jayadi -->
							</ul>
						</li>
					</ul>

				</div>
			</center>
		</div>
    <div>
</body>
</html>