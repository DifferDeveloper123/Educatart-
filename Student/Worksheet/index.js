var database = firebase.database();
var instituteValue, totalQuestion, QuestionValue, option1Value, option2Value, option3Value, correctOptionValue;
var currentQuestion = 1;
var subjectValue, classValue;
var worksheetID_Raw = window.location.search.slice(1);

  everything = {
      check: function(){

          if(window.localStorage.getItem('type') == 'student'){
          }else if(window.localStorage.getItem('type') == 'teacher'){
              window.open('/Teacher/Dashboard/', '_self');
          }else{
              window.open('/', '_self');
          }

        setTimeout(()=>{
          document.getElementById('countdown').style.display = 'none';
          document.getElementById('gooey').style.display = 'none';
          document.getElementById('main').style.opacity = '100%';
          document.getElementById('currentQuestionHolder').style.opacity = '0%';
        }, 6500);

        setTimeout(()=>{
          document.getElementById('currentQuestionHolder').style.opacity = '100%';
        }, 7000);

        setTimeout(()=>{
          document.getElementById('currentQuestionHolder').style.opacity = '0%';
        }, 8500);

        setTimeout(()=>{
          document.getElementById('currentQuestionHolder').style.display = 'none';
        }, 8700);

        if(worksheetID_Raw == ""){
          window.open("/Student/Dashboard/", "_self");
        }else if(worksheetID_Raw !== ""){
         worksheetID_Raw = worksheetID_Raw.replace(/=/g,'":"');
         worksheetID_Raw = '{"' + worksheetID_Raw + '"}';
         var worksheetID = JSON.parse(worksheetID_Raw);
         var ID = worksheetID.id;
        
        document.getElementById('currectQuestionFade').textContent = currentQuestion;

        var titleRef = database.ref('workSheets/' + ID + '/institute');
        titleRef.on("value",(data)=>{
            instituteValue = data.val();
            document.getElementById('title').innerHTML = data.val() + " | Educatart";
            document.getElementById('institute-label').textContent = data.val();
        });

        var subjectRef = database.ref('workSheets/' + ID + '/subject');
        subjectRef.on("value",(data)=>{
            subjectValue = data.val();
            document.getElementById('subject_of_worksheet').textContent = data.val();
        });

        var classRef = database.ref('workSheets/' + ID + '/class');
        classRef.on("value",(data)=>{
            classValue = data.val();
            document.getElementById('class_of_worksheet').textContent = data.val();
        });

        var totalQuestionRef = database.ref('workSheets/' + ID + '/totalQuestions');
        totalQuestionRef.on("value",(data)=>{
          var totalQuestion_Raw = data.val();
          totalQuestion = totalQuestion_Raw - 1;
          document.getElementById('totalCurrentQuestion').textContent = totalQuestion + '/' + currentQuestion;
        });

        var QuestionRef = database.ref('workSheets/' + ID + '/' + currentQuestion + '/' + 'question');
        QuestionRef.on("value",(data)=>{
        QuestionValue = data.val();
        });

        setTimeout(()=>{
            document.getElementById("question-label").textContent = QuestionValue;
        }, 2000);

        setTimeout(() => {
             document.getElementById('options').style.display = 'block';
             var option1Ref = database.ref('workSheets/' + ID + '/' + currentQuestion + '/' + 'option1');
            option1Ref.on("value",(data)=>{
            option1Value = data.val();
            document.getElementById('option1_option').textContent = option1Value;
            });
  
            var option2Ref = database.ref('workSheets/' + ID + '/' + currentQuestion + '/' + 'option2');
            option2Ref.on("value",(data)=>{
            option2Value = data.val();
            document.getElementById('option2_option').textContent = option2Value;
            });
  
            var option3Ref = database.ref('workSheets/' + ID + '/' + currentQuestion + '/' + 'option3');
            option3Ref.on("value",(data)=>{
            option3Value = data.val();
            document.getElementById('option3_option').textContent = option3Value;
            });
  
            var correctOptionRef = database.ref('workSheets/' + ID + '/' + currentQuestion + '/' + 'correctOption');
            correctOptionRef.on("value",(data)=>{
            correctOptionValue = data.val();
            });
        }, 2000);
        if(totalQuestion + 1 == currentQuestion){
        Email.send({
          SecureToken : "71cd6de4-a026-4610-b408-aef7236a1b97",
          To: window.localStorage.getItem('email'),
          From : 'Educatart <educatart@gmail.com>',
          Subject: 'Thank You',
          Body: `
          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width" name="viewport"/>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<title></title>
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
<!--<![endif]-->
<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}
	</style>
<style id="media-query" type="text/css">
		@media (max-width: 920px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col_cont {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num2 {
				width: 16.6% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num5 {
				width: 41.6% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num7 {
				width: 58.3% !important;
			}

			.no-stack .col.num8 {
				width: 66.6% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.no-stack .col.num10 {
				width: 83.3% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}
		}
	</style>
<style id="menu-media-query" type="text/css">
		@media (max-width: 920px) {
			.menu-checkbox[type="checkbox"]~.menu-links {
				display: none !important;
				padding: 5px 0;
			}

			.menu-checkbox[type="checkbox"]~.menu-links span.sep {
				display: none;
			}

			.menu-checkbox[type="checkbox"]:checked~.menu-links,
			.menu-checkbox[type="checkbox"]~.menu-trigger {
				display: block !important;
				max-width: none !important;
				max-height: none !important;
				font-size: inherit !important;
			}

			.menu-checkbox[type="checkbox"]~.menu-links>a,
			.menu-checkbox[type="checkbox"]~.menu-links>span.label {
				display: block !important;
				text-align: center;
			}

			.menu-checkbox[type="checkbox"]:checked~.menu-trigger .menu-close {
				display: block !important;
			}

			.menu-checkbox[type="checkbox"]:checked~.menu-trigger .menu-open {
				display: none !important;
			}

			#menusadqgx~div label {
				border-radius: 0% !important;
			}

			#menusadqgx:checked~.menu-links {
				background-color: #000000 !important;
			}

			#menusadqgx:checked~.menu-links a {
				color: #ffffff !important;
			}

			#menusadqgx:checked~.menu-links span {
				color: #ffffff !important;
			}
		}
	</style>
<style id="icon-media-query" type="text/css">
		@media (max-width: 920px) {
			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}
		}
	</style>
</head>
<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #f3f2f3;">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table bgcolor="#f3f2f3" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f2f3; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top;" valign="top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#f3f2f3"><![endif]-->
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:#ffffff;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<div class="mobile_hide">
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 30px solid #F3F2F3; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffbf00;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffbf00;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:#ffbf00"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:#ffbf00;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<div align="center" class="img-container center fixedwidth" style="padding-right: 0px;padding-left: 0px;">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Educatart Logo" border="0" class="center fixedwidth" src="https://i.ibb.co/qjkTnhF/Educatart.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 180px; max-width: 100%; display: block;" title="Educatart Logo" width="180"/>
<!--[if mso]></td></tr></table><![endif]-->
</div>
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="1" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 6px solid #A800FF; height: 1px; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td height="1" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f3f2f3;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#f3f2f3;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:#f3f2f3"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:#f3f2f3;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="1" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; height: 1px; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td height="1" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ff6600;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ff6600;background-image:url('images/bg-shade.jpg');background-position:center top;background-repeat:repeat">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:#ff6600"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:#ff6600;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:60px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:60px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #555555; mso-line-height-alt: 14px;">
<p style="margin: 0; font-size: 30px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 36px; margin-top: 0; margin-bottom: 0;"><span style="color: #00f4cf; font-size: 30px;"><strong>Hello ` +  window.localStorage.getItem("username") + `</strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 38px; padding-left: 38px; padding-top: 20px; padding-bottom: 15px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:20px;padding-right:38px;padding-bottom:15px;padding-left:38px;">
<div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 14px;">
<p style="margin: 0; font-size: 42px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 50px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 42px; color: #2a272b;"><strong>Thank you for completing your worksheet from ` + instituteValue +`</strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
<table align="right" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 7px solid #FF6600; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f3f2f3;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#f3f2f3;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:#f3f2f3"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:#f3f2f3;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="1" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; height: 1px; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td height="1" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:transparent;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
<tr style="vertical-align: top;" valign="top">
<td align="center" style="word-break: break-word; vertical-align: top; padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; text-align: center; font-size: 0px;" valign="top">
<div class="menu-links">
<!--[if mso]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center">
<tr>
<td style="padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px">
<![endif]--><span class="label" style="padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;display:inline;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;color:#000000;letter-spacing:undefined;"></span>
<!--[if mso]></td></tr></table><![endif]-->
</div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
<table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
<tbody>
<tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://www.youtube.com/channel/UCgJSqtbM0B1wxif2MczbhqA" target="_blank"><img alt="YouTube" height="32" src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="YouTube" width="32"/></a></td>
<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://discord.gg/wQf9EW2c" target="_blank"><img alt="Discord" height="32" src="https://discord.com/assets/f9bb9c4af2b9c32a2c5ee0014661546d.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Discord" width="32"/></a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<div class="mobile_hide">
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 15px; padding-bottom: 15px; padding-left: 15px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:transparent;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>
`})
setTimeout(()=>{
  window.open('/Teacher/Dashboard', "_self");
}, 2000)
      }
     }
    }
  }

function checkOption(){
if(document.getElementById("option1_option").textContent == correctOptionValue){

  document.getElementById("option1_option").classList.add("check");
  document.getElementById("option2_option").classList.add("check");
  document.getElementById("option3_option").classList.add("check");
  
  setTimeout(() => {
    document.getElementById("option1_option").classList.remove("check");
    document.getElementById("option2_option").classList.remove("check");
    document.getElementById("option3_option").classList.remove("check");
  }, 700);
  
setTimeout(() => {
  document.getElementById("option1_option").classList.add("right");
  document.getElementById("option2_option").classList.add("wrong");
  document.getElementById("option3_option").classList.add("wrong");
}, 1000);
setTimeout(()=>{
  document.getElementById("option1_option").classList.remove("right");
  document.getElementById("option2_option").classList.remove("right");
  document.getElementById("option3_option").classList.remove("right");
  document.getElementById("option1_option").classList.remove("wrong");
  document.getElementById("option2_option").classList.remove("wrong");
  document.getElementById("option3_option").classList.remove("wrong");
  currentQuestion = currentQuestion + 1;
  everything.check();
}, 2000);
document.getElementById('currentQuestionHolder').style.display = 'block';
setTimeout(() => {
document.getElementById('currentQuestionHolder').style.opacity = '100%';
}, 2500);
setTimeout(() => {
document.getElementById('currentQuestionHolder').style.opacity = '0%';
}, 3500);
setTimeout(() => {
  document.getElementById('currentQuestionHolder').style.display = 'none';
  }, 3700);
}else if(document.getElementById("option2_option").textContent == correctOptionValue){

  document.getElementById("option1_option").classList.add("check");
  document.getElementById("option2_option").classList.add("check");
  document.getElementById("option3_option").classList.add("check");
  
  setTimeout(() => {
    document.getElementById("option1_option").classList.remove("check");
    document.getElementById("option2_option").classList.remove("check");
    document.getElementById("option3_option").classList.remove("check");
  }, 700);

  setTimeout(() => {
    document.getElementById("option2_option").classList.add("right");
    document.getElementById("option1_option").classList.add("wrong");
    document.getElementById("option3_option").classList.add("wrong");
  }, 1000);
  setTimeout(()=>{
    document.getElementById("option1_option").classList.remove("right");
    document.getElementById("option2_option").classList.remove("right");
    document.getElementById("option3_option").classList.remove("right");
    document.getElementById("option1_option").classList.remove("wrong");
    document.getElementById("option2_option").classList.remove("wrong");
    document.getElementById("option3_option").classList.remove("wrong");
    currentQuestion = currentQuestion + 1;
    everything.check();
  }, 2000);
  document.getElementById('currentQuestionHolder').style.display = 'block';
  setTimeout(() => {
  document.getElementById('currentQuestionHolder').style.opacity = '100%';
  }, 2500);
  setTimeout(() => {
  document.getElementById('currentQuestionHolder').style.opacity = '0%';
  }, 3500);
  setTimeout(() => {
    document.getElementById('currentQuestionHolder').style.display = 'none';
    }, 3700);
}else if(document.getElementById("option3_option").textContent == correctOptionValue){

  document.getElementById("option1_option").classList.add("check");
  document.getElementById("option2_option").classList.add("check");
  document.getElementById("option3_option").classList.add("check");
  
  setTimeout(() => {
    document.getElementById("option1_option").classList.remove("check");
    document.getElementById("option2_option").classList.remove("check");
    document.getElementById("option3_option").classList.remove("check");
  }, 700);
  
  setTimeout(() => {
    document.getElementById("option3_option").classList.add("right");
    document.getElementById("option1_option").classList.add("wrong");
    document.getElementById("option2_option").classList.add("wrong");
  }, 1000);
  setTimeout(()=>{
    document.getElementById("option1_option").classList.remove("right");
    document.getElementById("option2_option").classList.remove("right");
    document.getElementById("option3_option").classList.remove("right");
    document.getElementById("option1_option").classList.remove("wrong");
    document.getElementById("option2_option").classList.remove("wrong");
    document.getElementById("option3_option").classList.remove("wrong");
    currentQuestion = currentQuestion + 1;
    everything.check();
  }, 2000);
  document.getElementById('currentQuestionHolder').style.display = 'block';
  setTimeout(() => {
  document.getElementById('currentQuestionHolder').style.opacity = '100%';
  }, 2500);
  setTimeout(() => {
  document.getElementById('currentQuestionHolder').style.opacity = '0%';
  }, 3500);
  setTimeout(() => {
    document.getElementById('currentQuestionHolder').style.display = 'none';
    }, 3700);
}
}

var quiz = {
  exit: function(){
    Swal.fire({
      title: 'Are you sure you want to exit?',
      text: '"\n\"',
      allowOutsideClick: false,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Exit',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("/Teacher/Dashboard/", "_self");
      }
    })
  }
}