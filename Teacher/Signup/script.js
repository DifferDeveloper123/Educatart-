var accessId;
var isAccessIdMatch = "False", isSchoool = "False";
var verification_Code;
var profilePicture = "";

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

document.getElementById('accessTknGenerate').addEventListener('click', ()=>{
    copyAccessToken();
});

function copyAccessToken(){
    let ID = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for ( var i = 0; i < 20; i++ ) {
      ID += characters.charAt(Math.floor(Math.random() * 36));
    }
    accessId = ID;
    
    document.getElementById("accesToken").style.display = 'block';
    document.getElementById("accessTknGenerate").style.display = "none";
    copyToClipboard(accessId);
    
    M.toast({html: "Access Token Copied", classes: 'rounded'})
}

document.getElementById('submitButton').addEventListener('click', ()=>{
    checkIfNotFill('email', "Enter Email", "Please Enter Your Email");
    checkIfNotFill('username', "Enter Usename", "Please Enter Your Username");
    checkIfNotFill('schoolName', "Enter School Name", "Please Enter Your School Name");
    checkIfNotFill('password', "Enter Password", "Please Enter Your Password");
    checkIfNotFill('accessTkn', "Enter Copied Access Token", "Please Enter Copied Access Token");
    checkMatch('accessTkn', accessId, "Access Token Doesn't Match with copied access Token");

    isValid(document.getElementById('schoolName').value);
    
    if(document.getElementById('email').value !== "" && document.getElementById('username').value !== "" && document.getElementById('schoolName').value !== "" && isAccessIdMatch == "True" && isSchoool == true){
    generateVerificationCode();
    }
});

function isValid(str){
  isSchoool = !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str);
  if(isSchoool == false){
    M.toast({html: "The name of the school should not contain any special character", classes: 'rounded'});
  }
 }

function checkIfNotFill(id, placeholder, toast){
if(document.getElementById(id).value == ""){
document.getElementById(id).style.border = '2px solid #ff0000';
document.getElementById(id).placeholder = "Fill it";
M.toast({html: toast, classes: 'rounded'});
}else if(document.getElementById(id).value !== ""){
document.getElementById(id).style.border = 'none';
document.getElementById(id).placeholder = placeholder;
}
}

function checkMatch(id, withmatch, toast){
if(document.getElementById(id).value == withmatch){
isAccessIdMatch = "True";
}else{
M.toast({html: toast, classes: 'rounded'});
}
}

function setUser(username, password, school, email, image){
  profileImage();
    firebase.database().ref('Users/' + accessId + '/').set({
        username: username,
        password: password,
        school: school,
        email: email,
        profileImage: image
    });    
}

function generateVerificationCode(){
        let CODE = "";
          CODE += Math.floor((Math.random() * 9000) + 1000);
    
        verification_Code = CODE;

        Email.send({
            SecureToken : "71cd6de4-a026-4610-b408-aef7236a1b97",
            To: document.getElementById("email").value,
            From : 'Educatart <educatart@gmail.com>',
            Subject: 'Verification code for Educatart',
            Body: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
             <head> 
              <meta charset="UTF-8"> 
              <meta content="width=device-width, initial-scale=1" name="viewport"> 
              <meta name="x-apple-disable-message-reformatting"> 
              <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
              <meta content="telephone=no" name="format-detection"> 
              <title>Verification Code</title> 
              <!--[if (mso 16)]>
                <style type="text/css">
                a {text-decoration: none;}
                </style>
                <![endif]--> 
              <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
              <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG></o:AllowPNG>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]--> 
              <!--[if !mso]><!-- --> 
              <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap rel="stylesheet"> 
              <!--<![endif]--> 
              <style type="text/css">
            #outlook a {
                padding:0;
            }
            .ExternalClass {
                width:100%;
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height:100%;
            }
            .es-button {
                mso-style-priority:100!important;
                text-decoration:none!important;
            }
            a[x-apple-data-detectors] {
                color:inherit!important;
                text-decoration:none!important;
                font-size:inherit!important;
                font-family:inherit!important;
                font-weight:inherit!important;
                line-height:inherit!important;
            }
            .es-desk-hidden {
                display:none;
                float:left;
                overflow:hidden;
                width:0;
                max-height:0;
                line-height:0;
                mso-hide:all;
            }
            [data-ogsb] .es-button {
                border-width:0!important;
                padding:15px 25px 15px 25px!important;
            }
            @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
            </style> 
             </head> 
             <body style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
              <div class="es-wrapper-color" style="background-color:#F4F4F4"> 
               <!--[if gte mso 9]>
                        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                            <v:fill type="tile" color="#f4f4f4"></v:fill>
                        </v:background>
                    <![endif]--> 
               <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
                 <tr class="gmail-fix" height="0" style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0"> 
                   <table cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px"> 
                     <tr style="border-collapse:collapse"> 
                      <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img src="https://rvlmbw.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px" alt width="600" height="1"></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" style="padding:0;Margin:0"> 
                   <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#FFA73B;background-repeat:repeat;background-position:center top"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"> 
                       <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px"> 
                           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td valign="top" align="center" style="padding:0;Margin:0;width:580px"> 
                               <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="center" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:25px;padding-bottom:25px;font-size:0px"><img src="https://i.ibb.co/h7BVVPk/Educatart.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="166"></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table> 
                   <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;background-color:#ffa73b" bgcolor="#ffa73b" align="center"> 
                       <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="padding:0;Margin:0"> 
                           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="center" style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px"><h1 style="Margin:0;line-height:58px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:48px;font-style:normal;font-weight:normal;color:#111111">Welcome!</h1></td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse"> 
                                  <td bgcolor="#ffffff" align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0"> 
                                   <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                     <tr style="border-collapse:collapse"> 
                                      <td style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
                                     </tr> 
                                   </table></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table> 
                   <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"> 
                       <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="padding:0;Margin:0"> 
                           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#ffffff" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td class="es-m-txt-l" bgcolor="#ffffff" align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">We're excited to have you get started. First, you need to enter this verification code to confirm your account.</p></td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="center" style="padding:35px;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:53px;color:#666666;font-size:35px">` + verification_Code + `</p></td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse"> 
                                  <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">If you have any questions, just reply to this email—we're always happy to help out.</p></td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse"> 
                                  <td class="es-m-txt-l" align="left" style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">Cheers,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">Educatart</p></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
              </div>  
             </body>
            </html>
        `
}); 
        
        document.getElementById("login-card").style.display = "none";
        document.getElementById('preloader').style.display = "block";
        setTimeout(()=>{
        document.getElementById('preloader').style.display = "none";
        document.getElementById("wrapper").style.display = "block";
        }, 3000)
}

function profileImage(){
  if(document.getElementById('username').value.charAt(0) == 'A' || document.getElementById('username').value.charAt(0) == 'a'){
    profilePicture = 'https://i.ibb.co/m6YXBTg/Educatart-A.png';
  }else if(document.getElementById('username').value.charAt(0) == 'B' || document.getElementById('username').value.charAt(0) == 'b'){
    profilePicture = 'https://i.ibb.co/72d7BZ3/Educatart-B.png';
  }else if(document.getElementById('username').value.charAt(0) == 'C' || document.getElementById('username').value.charAt(0) == 'c'){
    profilePicture = 'https://i.ibb.co/51BNpXN/Educatart-C.png';
  }else if(document.getElementById('username').value.charAt(0) == 'D' || document.getElementById('username').value.charAt(0) == 'd'){
    profilePicture = 'https://i.ibb.co/ZzhFLsP/Educatart-D.png';
  }else if(document.getElementById('username').value.charAt(0) == 'E' || document.getElementById('username').value.charAt(0) == 'e'){
    profilePicture = 'https://i.ibb.co/P58f7zP/Educatart-E.png';
  }else if(document.getElementById('username').value.charAt(0) == 'F' || document.getElementById('username').value.charAt(0) == 'f'){
    profilePicture = 'https://i.ibb.co/68hWvJk/Educatart-F.png';
  }else if(document.getElementById('username').value.charAt(0) == 'G' || document.getElementById('username').value.charAt(0) == 'g'){
    profilePicture = 'https://i.ibb.co/SPMM2Wb/Educatart-G.png';
  }else if(document.getElementById('username').value.charAt(0) == 'H' || document.getElementById('username').value.charAt(0) == 'h'){
    profilePicture = 'https://i.ibb.co/wQqx1my/Educatart-H.png';
  }else if(document.getElementById('username').value.charAt(0) == 'I' || document.getElementById('username').value.charAt(0) == 'i'){
    profilePicture = 'https://i.ibb.co/Zc9qhr9/Educatart-I.png';
  }else if(document.getElementById('username').value.charAt(0) == 'J' || document.getElementById('username').value.charAt(0) == 'j'){
    profilePicture = 'https://i.ibb.co/t4VtRmq/Educatart-J.png';
  }else if(document.getElementById('username').value.charAt(0) == 'K' || document.getElementById('username').value.charAt(0) == 'k'){
    profilePicture = 'https://i.ibb.co/B2k7nqY/Educatart-K.png';
  }else if(document.getElementById('username').value.charAt(0) == 'L' || document.getElementById('username').value.charAt(0) == 'l'){
    profilePicture = 'https://i.ibb.co/Y45pDsZ/Educatart-L.png';
  }else if(document.getElementById('username').value.charAt(0) == 'M' || document.getElementById('username').value.charAt(0) == 'm'){
    profilePicture = 'https://i.ibb.co/SPLnG0z/Educatart-M.png';
  }else if(document.getElementById('username').value.charAt(0) == 'N' || document.getElementById('username').value.charAt(0) == 'n'){
    profilePicture = 'https://i.ibb.co/tXDTQcT/Educatart-N.png';
  }else if(document.getElementById('username').value.charAt(0) == 'O' || document.getElementById('username').value.charAt(0) == 'o'){
    profilePicture = 'https://i.ibb.co/SxRdq5G/Educatart-O.png';
  }else if(document.getElementById('username').value.charAt(0) == 'P' || document.getElementById('username').value.charAt(0) == 'p'){
    profilePicture = 'https://i.ibb.co/0fs9Px5/Educatart-P.png';
  }else if(document.getElementById('username').value.charAt(0) == 'Q' || document.getElementById('username').value.charAt(0) == 'q'){
    profilePicture = 'https://i.ibb.co/R41LCdm/Educatart-Q.png';
  }else if(document.getElementById('username').value.charAt(0) == 'R' || document.getElementById('username').value.charAt(0) == 'r'){
    profilePicture = 'https://i.ibb.co/rxSMMQ4/Educatart-R.png';
  }else if(document.getElementById('username').value.charAt(0) == 'S' || document.getElementById('username').value.charAt(0) == 's'){
    profilePicture = 'https://i.ibb.co/sJ05htx/Educatart-S.png';
  }else if(document.getElementById('username').value.charAt(0) == 'T' || document.getElementById('username').value.charAt(0) == 't'){
    profilePicture = 'https://i.ibb.co/PG29HhH/Educatart-T.png';
  }else if(document.getElementById('username').value.charAt(0) == 'U' || document.getElementById('username').value.charAt(0) == 'u'){
    profilePicture = 'https://i.ibb.co/7tp5bDQ/Educatart-U.png';
  }else if(document.getElementById('username').value.charAt(0) == 'V' || document.getElementById('username').value.charAt(0) == 'v'){
    profilePicture = 'https://i.ibb.co/zsWSB0J/Educatart-V.png';
  }else if(document.getElementById('username').value.charAt(0) == 'W' || document.getElementById('username').value.charAt(0) == 'w'){
    profilePicture = 'https://i.ibb.co/s5N1Yfb/Educatart-W.png';
  }else if(document.getElementById('username').value.charAt(0) == 'X' || document.getElementById('username').value.charAt(0) == 'x'){
    profilePicture = 'https://i.ibb.co/ZRrQDW4/Educatart-X.png';
  }else if(document.getElementById('username').value.charAt(0) == 'Y' || document.getElementById('username').value.charAt(0) == 'y'){
    profilePicture = 'https://i.ibb.co/C0r0kX7/Educatart-Y.png';
  }else if(document.getElementById('username').value.charAt(0) == 'Z' || document.getElementById('username').value.charAt(0) == 'z'){
    profilePicture = 'https://i.ibb.co/QC29Ly5/Educatart-Z.png';
  }
}


function verifyAccount(){
    if(document.getElementById('verificationIdInput').value == verification_Code){

        profileImage();
        
        window.localStorage.setItem('username', document.getElementById('username').value);
        window.localStorage.setItem('email', document.getElementById('email').value);
        window.localStorage.setItem('school name', document.getElementById('schoolName').value);
        window.localStorage.setItem('access token', document.getElementById('accessTkn').value);
        window.localStorage.setItem('profile', profilePicture);
        window.localStorage.setItem('type', "teacher");

        setUser(document.getElementById('username').value, document.getElementById('password').value, document.getElementById('schoolName').value, document.getElementById('email').value, profilePicture);

        Email.send({
            SecureToken : "71cd6de4-a026-4610-b408-aef7236a1b97",
            To: document.getElementById("email").value,
            From : 'Educatart <educatart@gmail.com>',
            Subject: 'Welcome To Educatart',
            Body: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
             <head> 
              <meta charset="UTF-8"> 
              <meta content="width=device-width, initial-scale=1" name="viewport"> 
              <meta name="x-apple-disable-message-reformatting"> 
              <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
              <meta content="telephone=no" name="format-detection"> 
              <title>New email template 2021-07-16</title> 
              <!--[if (mso 16)]>
                <style type="text/css">
                a {text-decoration: none;}
                </style>
                <![endif]--> 
              <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
              <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG></o:AllowPNG>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]--> 
              <style type="text/css">
            #outlook a {
                padding:0;
            }
            .ExternalClass {
                width:100%;
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height:100%;
            }
            .es-button {
                mso-style-priority:100!important;
                text-decoration:none!important;
            }
            a[x-apple-data-detectors] {
                color:inherit!important;
                text-decoration:none!important;
                font-size:inherit!important;
                font-family:inherit!important;
                font-weight:inherit!important;
                line-height:inherit!important;
            }
            .es-desk-hidden {
                display:none;
                float:left;
                overflow:hidden;
                width:0;
                max-height:0;
                line-height:0;
                mso-hide:all;
            }
            [data-ogsb] .es-button {
                border-width:0!important;
                padding:10px 20px 10px 20px!important;
            }
            @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:13px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:13px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
            </style> 
             </head> 
             <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
              <div class="es-wrapper-color" style="background-color:#F6F6F6"> 
               <!--[if gte mso 9]>
                        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                            <v:fill type="tile" color="#f6f6f6"></v:fill>
                        </v:background>
                    <![endif]--> 
               <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" style="padding:0;Margin:0"> 
                   <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
                     <tr style="border-collapse:collapse"></tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-adaptive" align="center" style="padding:0;Margin:0"> 
                       <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" bgcolor="#fdc74a" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#fdc74a;background:linear-gradient(50deg, #FDC74A 25%, #FBA32E 99%);width:600px"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="Margin:0;padding-top:15px;padding-bottom:15px;padding-left:15px;padding-right:15px"> 
                           <table cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:570px"> 
                               <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td class="es-m-p0l" align="center" style="padding:0;Margin:0;font-size:0px"><a style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:plum;font-size:14px"><img src="https://i.ibb.co/h7BVVPk/Educatart.png" alt="Children's logo" title="Children's logo" width="166" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table> 
                   <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                   <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"> 
                       <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="padding:0;Margin:0"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" valign="top" style="padding:0;Margin:0;width:600px"> 
                               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr style="border-collapse:collapse"> 
                                 <td align="center" bgcolor="#FDC74A" style="padding:35px;Margin:0"><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:45px;color:#333333;font-size:30px"><strong>Hello ` + window.localStorage.getItem('username') + `</strong></p></td>
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr>   
                   <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"> 
                       <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="padding:0;Margin:0"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" valign="top" style="padding:0;Margin:0;width:600px"> 
                               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="center" style="padding:0;Margin:0;position:relative"><a style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#E84A54;font-size:14px"><img class="adapt-img" src="https://rvlmbw.stripocdn.email/content/guids/bannerImgGuid/images/94361626431734811.png" alt title width="100%" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" bgcolor="#074090" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;background-color:#074090"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="left" style="padding:0;Margin:0;width:560px"> 
                               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr class="es-mobile-hidden" style="border-collapse:collapse"> 
                                  <td align="center" height="29" style="padding:0;Margin:0"></td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-bottom:10px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:'comic sans ms', 'marker felt-thin', arial, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#ffffff">Knowledge is Power</h2></td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#ffffff;font-size:14px">This is an educational app please stay connect to get educational and acadmic guidance from your teacher.</p></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" bgcolor="#074090" style="padding:0;Margin:0;background-color:#074090"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" valign="top" style="padding:0;Margin:0;width:600px"> 
                               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://rvlmbw.stripocdn.email/content/guids/CABINET_4943309fe0a12e91630d162136533abc/images/6451595423577938.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" bgcolor="#fb9831" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#fb9831"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" valign="top" style="padding:0;Margin:0;width:560px"> 
                               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="center" style="padding:0;Margin:0;padding-top:5px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:'comic sans ms', 'marker felt-thin', arial, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#ffffff">Learn to earn<span data-cke-bookmark="1" style="display:none">&nbsp;</span></h2></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" bgcolor="#074090" style="padding:0;Margin:0;background-color:#074090"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" valign="top" style="padding:0;Margin:0;width:600px"> 
                               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://rvlmbw.stripocdn.email/content/guids/CABINET_4943309fe0a12e91630d162136533abc/images/52111595438546339.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table> 
                   <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"> 
                       <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" bgcolor="#eb535e" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#eb535e;width:600px"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" bgcolor="#074090" style="padding:0;Margin:0;background-color:#074090"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" valign="top" style="padding:0;Margin:0;width:600px"> 
                               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://rvlmbw.stripocdn.email/content/guids/CABINET_4943309fe0a12e91630d162136533abc/images/73861595440141310.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px"> 
                           <table cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:560px"> 
                               <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'comic sans ms', 'marker felt-thin', arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">Email</h3></td> 
                                 </tr> 
                                 <tr style="border-collapse:collapse"> 
                                  <td class="es-m-txt-c" esdev-links-color="#333333" align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF;font-size:14px"><a target="_blank" href="mailto:educatart@gmail.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#87CEEB;font-weight:boldfont-size:14px">educatart@gmail.com</a></p></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px"> 
                           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                               <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td align="center" style="padding:0;Margin:0;padding-bottom:15px;font-size:0"> 
                                   <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                     <tr style="border-collapse:collapse"> 
                                      <td valign="top" align="center" style="padding:0;Margin:0"><img title="Youtube" src="https://rvlmbw.stripocdn.email/content/assets/img/social-icons/logo-colored/youtube-logo-colored.png" alt="Yt" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                                     </tr> 
                                   </table></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
              </div>  
             </body>
            </html>
        `
});

setTimeout(()=>{
    window.open('/Teacher/Dashboard/', "_self");
},6000);

    }else{
        M.toast({html: 'Please Enter Correct Verification code'});
    }
}

function load(){
    if(window.localStorage.getItem('type') == 'student'){
    window.open('/Student/Dashboard/', '_self');
    }else if(window.localStorage.getItem('type') == 'teacher'){
    window.open('/Teacher/Dashboard/', '_self');
    }else{
    }
}