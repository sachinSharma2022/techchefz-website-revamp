export const prepEmailTemplate=(objString)=>{
              const obj=JSON.parse(objString)
              if(obj["portfolioLink"]){
                     return`
                     <!DOCTYPE html>
                     <html lang="en">
                       <head>
                         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                         <link
                           href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                           rel="stylesheet"
                         />
                         <title>Simple Transactional Email</title>
                         <style media="all" type="text/css">
                           /* -------------------------------------
                         GLOBAL RESETS
                     ------------------------------------- */
                     
                           body {
                             font-family: "Roboto", sans-serif;
                             -webkit-font-smoothing: antialiased;
                             font-size: 16px;
                             line-height: 1.3;
                             -ms-text-size-adjust: 100%;
                             -webkit-text-size-adjust: 100%;
                           }
                     
                           table {
                             border-collapse: separate;
                             mso-table-lspace: 0pt;
                             mso-table-rspace: 0pt;
                             width: 100%;
                           }
                     
                           table td {
                             font-family: "Roboto", sans-serif;
                             font-size: 16px;
                             vertical-align: top;
                           }
                           /* -------------------------------------
                         BODY & CONTAINER
                     ------------------------------------- */
                     
                           body {
                             background-color: #f4f5f6;
                             margin: 0;
                             padding: 0;
                           }
                     
                           .body {
                             background-color: #f4f5f6;
                             width: 100%;
                           }
                     
                           .container {
                             margin: 0 auto !important;
                             max-width: 600px;
                             padding: 0;
                             padding-top: 24px;
                             width: 600px;
                           }
                     
                           .content {
                             box-sizing: border-box;
                             display: block;
                             margin: 0 auto;
                             max-width: 600px;
                             padding: 0;
                           }
                     
                           h4 {
                             font-weight: 700;
                             font-size: 20px;
                             line-height: 30px;
                           }
                     
                           h3 {
                             font-weight: 700;
                             font-size: 22px;
                           }
                     
                           /* -------------------------------------
                         HEADER, FOOTER, MAIN
                     ------------------------------------- */
                     
                           .main {
                             background: #ffffff;
                             width: 100%;
                           }
                     
                           .wrapper {
                             box-sizing: border-box;
                           }
                           /* -------------------------------------
                         TYPOGRAPHY
                     ------------------------------------- */
                     
                           p {
                             font-family: Helvetica, sans-serif;
                             font-size: 20px;
                             line-height: 30px;
                             font-weight: normal;
                             margin: 0;
                             margin-bottom: 16px;
                           }
                     
                           a {
                             color: #1e8af2;
                             text-decoration: underline;
                             font-size: 20px;
                           }
                           /* -------------------------------------
                         BUTTONS
                     ------------------------------------- */
                     
                           @media all {
                             .btn-primary table td:hover {
                               background-color: #ec0867 !important;
                             }
                             .btn-primary a:hover {
                               background-color: #ec0867 !important;
                               border-color: #ec0867 !important;
                             }
                           }
                     
                           /* -------------------------------------
                         OTHER STYLES THAT MIGHT BE USEFUL
                     ------------------------------------- */
                     
                           .last {
                             margin-bottom: 0;
                           }
                     
                           .first {
                             margin-top: 0;
                           }
                     
                           .align-center {
                             text-align: center;
                           }
                     
                           .align-right {
                             text-align: right;
                           }
                     
                           .align-left {
                             text-align: left;
                           }
                     
                           .text-link {
                             color: #0867ec !important;
                             text-decoration: underline !important;
                           }
                     
                           .clear {
                             clear: both;
                           }
                     
                           .mt0 {
                             margin-top: 0;
                           }
                     
                           .mb0 {
                             margin-bottom: 0;
                           }
                     
                           .preheader {
                             color: transparent;
                             display: none;
                             height: 0;
                             max-height: 0;
                             max-width: 0;
                             opacity: 0;
                             overflow: hidden;
                             mso-hide: all;
                             visibility: hidden;
                             width: 0;
                           }
                     
                           .powered-by a {
                             text-decoration: none;
                           }
                     
                           .list h4 {
                             margin: 0;
                             float: left;
                             margin-right: 5px;
                           }
                     
                           .list p {
                             margin: 0;
                           }
                     
                           .list .primary-padding {
                             padding: 60px;
                           }
                     
                           .list td {
                             padding: 5px 0;
                           }
                     
                           /* -------------------------------------
                         RESPONSIVE AND MOBILE FRIENDLY STYLES
                     ------------------------------------- */
                     
                           @media only screen and (max-width: 767px) {
                             a {
                               font-size: 18px;
                             }
                             .logo img {
                               height: 30px;
                             }
                             h4 {
                               font-size: 18px;
                               line-height: 25px;
                             }
                     
                             h3 {
                               font-size: 20px;
                             }
                     
                             .pad-mob {
                               padding: 20px !important;
                             }
                             .list .primary-padding {
                               padding: 20px;
                             }
                             .main p,
                             .main td,
                             .main span {
                               font-size: 14px !important;
                               line-height: 25px;
                             }
                             .wrapper {
                               padding: 0px !important;
                             }
                             .content {
                               padding: 0 !important;
                             }
                             .container {
                               padding: 0 !important;
                               padding-top: 8px !important;
                               width: 100% !important;
                             }
                             .main {
                               border-left-width: 0 !important;
                               border-radius: 0 !important;
                               border-right-width: 0 !important;
                             }
                           }
                           /* -------------------------------------
                         PRESERVE THESE STYLES IN THE HEAD
                     ------------------------------------- */
                     
                           @media all {
                             .ExternalClass {
                               width: 100%;
                             }
                             .ExternalClass,
                             .ExternalClass p,
                             .ExternalClass span,
                             .ExternalClass font,
                             .ExternalClass td,
                             .ExternalClass div {
                               line-height: 100%;
                             }
                             .apple-link a {
                               color: inherit !important;
                               font-family: inherit !important;
                               font-size: inherit !important;
                               font-weight: inherit !important;
                               line-height: inherit !important;
                               text-decoration: none !important;
                             }
                             #MessageViewBody a {
                               color: inherit;
                               text-decoration: none;
                               font-size: inherit;
                               font-family: inherit;
                               font-weight: inherit;
                               line-height: inherit;
                             }
                           }
                         </style>
                       </head>
                       <body>
                         <table
                           role="presentation"
                           border="0"
                           cellpadding="0"
                           cellspacing="0"
                           class="body"
                         >
                           <tr>
                             <td>&nbsp;</td>
                             <td class="container">
                               <div class="content">
                                 <!-- START CENTERED WHITE CONTAINER -->
                                 <span class="preheader"
                                   >This is preheader text. Some clients will show this text as a
                                   preview.</span
                                 >
                                 <table
                                   role="presentation"
                                   border="0"
                                   cellpadding="0"
                                   cellspacing="0"
                                   style="background: #111111; height: 68px"
                                 >
                                   <tr>
                                     <td
                                       class="pad-mob logo"
                                       style="vertical-align: middle; padding: 0 60px"
                                     >
                                       <img src="logo.png" alt="logo" height="36" />
                                     </td>
                                   </tr>
                                 </table>
                                 <table
                                   role="presentation"
                                   border="0"
                                   cellpadding="0"
                                   cellspacing="0"
                                   class="main"
                                 >
                                   <!-- START MAIN CONTENT AREA -->
                                   <tr>
                                     <td class="wrapper">
                                       <div style="padding: 60px" class="pad-mob">
                                         <p>Dear Hiring Manager,</p>
                                         <p>
                                           We have received a new job application through our
                                           website/contact form, and I wanted to pass along the
                                           details for your attention.
                                         </p>
                                       </div>
                                       <table border="0" cellpadding="0" cellspacing="0">
                                         <tbody>
                                           <tr>
                                             <td align="left">
                                               <table
                                                 role="presentation"
                                                 border="0"
                                                 cellpadding="0"
                                                 cellspacing="0"
                                                 style="background: #e5f4fe; padding: 60px"
                                                 class="pad-mob"
                                               >
                                                 <tbody>
                                                   <tr>
                                                     <td style="margin-bottom: 24px">
                                                       <h3>Here are the details of the inquiry</h3>
                                                     </td>
                                                   </tr>
                                                   <tr>
                                                     <td>
                                                       <table
                                                         border="0"
                                                         cellpadding="0"
                                                         cellspacing="0"
                                                         class="list"
                                                       >
                                                         <tbody>
                                                         <tr>
                                                         <td>
                                                           <h4>Name:</h4>
                                                           <p>${obj["firstName"]}</p>
                                                         </td>
                                                       </tr>
                                                       <tr>
                                                         <td>
                                                           <h4>Surname:</h4>
                                                           <p>${obj["lastName"]}</p>
                                                         </td>
                                                       </tr>
                                                       <tr>
                                                         <td>
                                                           <h4>Email:</h4>
                                                           <p>${obj["email"]}</p>
                                                         </td>
                                                       </tr>
                                                       <tr>
                                                         <td>
                                                           <h4>Phone Number:</h4>
                                                           <p>${obj["countyCode"]}-${obj["phone"]}</p>
                                                         </td>
                                                       </tr>
                                                           <tr>
                                                             <td>
                                                               <h4>Attached CV:</h4>
                                                               <a href="john_doe_CV.pdf"
                                                                 >john_doe_CV.pdf</a
                                                               >
                                                             </td>
                                                           </tr>
                                                           <tr>
                                                             <td>
                                                               <h4>Portfolio Link:</h4>
                                                               <a href=${obj["portfolioLink"]}
                                                                 >${obj["portfolioLink"]}</a
                                                               >
                                                             </td>
                                                           </tr>
                                                         </tbody>
                                                       </table>
                                                     </td>
                                                   </tr>
                                                   <tr>
                                                     <td>
                                                       <h3 style="margin-top: 40px">Message:</h3>
                                                       <p>
                                                       ${obj["projectExplanation"]}
                                                       </p>
                                                     </td>
                                                   </tr>
                                                 </tbody>
                                               </table>
                                             </td>
                                           </tr>
                                           <tr>
                                             <td align="left">
                                               <table
                                                 role="presentation"
                                                 border="0"
                                                 cellpadding="0"
                                                 cellspacing="0"
                                                 style="padding: 60px"
                                                 class="pad-mob"
                                               >
                                                 <tbody>
                                                   <tr>
                                                     <td>
                                                       <p>
                                                         Please review this information and follow up
                                                         with the individual as soon as possible to
                                                         address their inquiry or provide any
                                                         necessary assistance.
                                                       </p>
                                                       <p>
                                                         Thank you for your attention to this matter.
                                                       </p>
                                                       <p style="margin-top: 90px">Best regards,</p>
                                                     </td>
                                                   </tr>
                                                 </tbody>
                                               </table>
                                             </td>
                                           </tr>
                                         </tbody>
                                       </table>
                                     </td>
                                   </tr>
                     
                                   <!-- END MAIN CONTENT AREA -->
                                 </table>
                     
                                 <!-- END FOOTER -->
                               </div>
                             </td>
                             <td>&nbsp;</td>
                           </tr>
                         </table>
                       </body>
                     </html>
                     `
              }else{
                return `<!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                  <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                    rel="stylesheet"
                  />
                  <title>Simple Transactional Email</title>
                  <style media="all" type="text/css">
                    /* -------------------------------------
                  GLOBAL RESETS
              ------------------------------------- */
              
                    body {
                      font-family: "Roboto", sans-serif;
                      -webkit-font-smoothing: antialiased;
                      font-size: 16px;
                      line-height: 1.3;
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    }
              
                    table {
                      border-collapse: separate;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      width: 100%;
                    }
              
                    table td {
                      font-family: "Roboto", sans-serif;
                      font-size: 16px;
                      vertical-align: top;
                    }
                    /* -------------------------------------
                  BODY & CONTAINER
              ------------------------------------- */
              
                    body {
                      background-color: #f4f5f6;
                      margin: 0;
                      padding: 0;
                    }
              
                    .body {
                      background-color: #f4f5f6;
                      width: 100%;
                    }
              
                    .container {
                      margin: 0 auto !important;
                      max-width: 600px;
                      padding: 0;
                      padding-top: 24px;
                      width: 600px;
                    }
              
                    .content {
                      box-sizing: border-box;
                      display: block;
                      margin: 0 auto;
                      max-width: 600px;
                      padding: 0;
                    }
              
                    h4 {
                      font-weight: 700;
                      font-size: 20px;
                      line-height: 30px;
                    }
              
                    h3 {
                      font-weight: 700;
                      font-size: 22px;
                    }
              
                    /* -------------------------------------
                  HEADER, FOOTER, MAIN
              ------------------------------------- */
              
                    .main {
                      background: #ffffff;
                      width: 100%;
                    }
              
                    .wrapper {
                      box-sizing: border-box;
                    }
                    /* -------------------------------------
                  TYPOGRAPHY
              ------------------------------------- */
              
                    p {
                      font-family: Helvetica, sans-serif;
                      font-size: 20px;
                      line-height: 30px;
                      font-weight: normal;
                      margin: 0;
                      margin-bottom: 16px;
                    }
              
                    a {
                      color: #0867ec;
                      text-decoration: underline;
                    }
                    /* -------------------------------------
                  BUTTONS
              ------------------------------------- */
              
                    @media all {
                      .btn-primary table td:hover {
                        background-color: #ec0867 !important;
                      }
                      .btn-primary a:hover {
                        background-color: #ec0867 !important;
                        border-color: #ec0867 !important;
                      }
                    }
              
                    /* -------------------------------------
                  OTHER STYLES THAT MIGHT BE USEFUL
              ------------------------------------- */
              
                    .last {
                      margin-bottom: 0;
                    }
              
                    .first {
                      margin-top: 0;
                    }
              
                    .align-center {
                      text-align: center;
                    }
              
                    .align-right {
                      text-align: right;
                    }
              
                    .align-left {
                      text-align: left;
                    }
              
                    .text-link {
                      color: #0867ec !important;
                      text-decoration: underline !important;
                    }
              
                    .clear {
                      clear: both;
                    }
              
                    .mt0 {
                      margin-top: 0;
                    }
              
                    .mb0 {
                      margin-bottom: 0;
                    }
              
                    .preheader {
                      color: transparent;
                      display: none;
                      height: 0;
                      max-height: 0;
                      max-width: 0;
                      opacity: 0;
                      overflow: hidden;
                      mso-hide: all;
                      visibility: hidden;
                      width: 0;
                    }
              
                    .powered-by a {
                      text-decoration: none;
                    }
              
                    .list h4 {
                      margin: 0;
                      float: left;
                      margin-right: 5px;
                    }
              
                    .list p {
                      margin: 0;
                    }
              
                    .list .primary-padding {
                      padding: 60px;
                    }
              
                    .list td {
                      padding: 5px 0;
                    }
              
                    /* -------------------------------------
                  RESPONSIVE AND MOBILE FRIENDLY STYLES
              ------------------------------------- */
              
                    @media only screen and (max-width: 640px) {
                      .logo img {
                        height: 30px;
                      }
                      h4 {
                        font-size: 18px;
                        line-height: 25px;
                      }
              
                      h3 {
                        font-size: 20px;
                      }
              
                      .pad-mob {
                        padding: 20px !important;
                      }
                      .list .primary-padding {
                        padding: 20px;
                      }
                      .main p,
                      .main td,
                      .main span {
                        font-size: 14px !important;
                        line-height: 25px;
                      }
                      .wrapper {
                        padding: 0px !important;
                      }
                      .content {
                        padding: 0 !important;
                      }
                      .container {
                        padding: 0 !important;
                        padding-top: 8px !important;
                        width: 100% !important;
                      }
                      .main {
                        border-left-width: 0 !important;
                        border-radius: 0 !important;
                        border-right-width: 0 !important;
                      }
                    }
                    /* -------------------------------------
                  PRESERVE THESE STYLES IN THE HEAD
              ------------------------------------- */
              
                    @media all {
                      .ExternalClass {
                        width: 100%;
                      }
                      .ExternalClass,
                      .ExternalClass p,
                      .ExternalClass span,
                      .ExternalClass font,
                      .ExternalClass td,
                      .ExternalClass div {
                        line-height: 100%;
                      }
                      .apple-link a {
                        color: inherit !important;
                        font-family: inherit !important;
                        font-size: inherit !important;
                        font-weight: inherit !important;
                        line-height: inherit !important;
                        text-decoration: none !important;
                      }
                      #MessageViewBody a {
                        color: inherit;
                        text-decoration: none;
                        font-size: inherit;
                        font-family: inherit;
                        font-weight: inherit;
                        line-height: inherit;
                      }
                    }
                  </style>
                </head>
                <body>
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="body"
                  >
                    <tr>
                      <td>&nbsp;</td>
                      <td class="container">
                        <div class="content">
                          <!-- START CENTERED WHITE CONTAINER -->
                          <span class="preheader"
                            >This is preheader text. Some clients will show this text as a
                            preview.</span
                          >
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            style="background: #111111; height: 68px"
                          >
                            <tr>
                              <td
                                class="pad-mob logo"
                                style="vertical-align: middle; padding: 0 60px"
                              >
                                <img src="logo.png" alt="logo" height="36" />
                              </td>
                            </tr>
                          </table>
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="main"
                          >
                            <!-- START MAIN CONTENT AREA -->
                            <tr>
                              <td class="wrapper">
                                <div style="padding: 60px" class="pad-mob">
                                  <p>Hi there</p>
                                  <p>
                                    We have received a new inquiry through our website/contact
                                    form, and I wanted to pass along the details for your
                                    attention.
                                  </p>
                                </div>
                                <table border="0" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr>
                                      <td align="left">
                                        <table
                                          role="presentation"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          style="background: #e5f4fe; padding: 60px"
                                          class="pad-mob"
                                        >
                                          <tbody>
                                            <tr>
                                              <td style="margin-bottom: 24px">
                                                <h3>Here are the details of the inquiry</h3>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <table
                                                  border="0"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  class="list"
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td>
                                                        <h4>Name:</h4>
                                                        <p>${obj["firstName"]}</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>
                                                        <h4>Surname:</h4>
                                                        <p>${obj["lastName"]}</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>
                                                        <h4>Email:</h4>
                                                        <p>${obj["email"]}</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>
                                                        <h4>Phone Number:</h4>
                                                        <p>${obj["countyCode"]}-${obj["phone"]}</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>
                                                        <h4>Company Name:</h4>
                                                        <p>${obj["companyName"]}</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>
                                                        <h4>Country:</h4>
                                                        <p>${obj["countrySelection"]}</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>
                                                        <h4>Service Required/Offered:</h4>
                                                        <p>${obj["serviceOffered"]?obj["serviceOffered"]:''}${obj["serviceRequired"]?obj["serviceRequired"]:''}</p>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <h3 style="margin-top: 40px">Message:</h3>
                                                <p>
                                                  ${obj["projectExplanation"]}
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="left">
                                        <table
                                          role="presentation"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          style="padding: 60px"
                                          class="pad-mob"
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <h4>Additional Message:</h4>
                                                <p>
                                                  Please review this information and follow up
                                                  with the individual as soon as possible to
                                                  address their inquiry or provide any
                                                  necessary assistance. Thank you for your
                                                  attention to this matter.
                                                </p>
                                                <p style="margin-top: 90px">Best regards,</p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
              
                            <!-- END MAIN CONTENT AREA -->
                          </table>
              
                          <!-- END FOOTER -->
                        </div>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                  </table>
                </body>
              </html>
              `
              }
              
}
