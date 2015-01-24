<!DOCTYPE html>
<html>
  <head>
    <title>
      Portfolio
    </title>
    <meta charset="UTF-8" />
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100' rel='stylesheet' type='text/css'>
    <link href="assets/css/feather-webfont/feather.css" rel="stylesheet" />
    <link href="assets/css/reset.css" rel="stylesheet" />
    <link href="assets/css/forms.css" rel="stylesheet" />
    <script src="assets/js/jquery.js" type="text/javascript"></script>
    <script src="assets/js/velocity.js" type="text/javascript"></script>
    <script src="assets/js/main.js" type="text/javascript"></script>
  </head>
  <body>
    <div class="page">

      <div class="pageStart">
        <div id="laptop">
          <div class="top-body Xcenter zdepth">
            <div class="screen XYcenter">
              <br>
              lorenzkromer.<img src="./images/oe.png" alt="">
              <br>
              <br>
              <button class="buttonStart">START</button>
            </div>
          </div>
          <div class="bottom-body Xcenter zdepth">
            <div class="Xcenter" id="openslot">&nbsp;</div>
          </div>
        </div>
      </div>

      <div class="pageNavigation zdepth">
        <div class="logo Vcenter"><a href="http://lorenzkromer.at">http://lorenzkromer.at</a></div>
        <div class="mainNavigation Vcenter">
          <ul>
            <li class="mainNavItem" data-value="#projects:1">PROJECTS</li>
            <li class="mainNavItem" data-value="#me:2">ME</li>
            <li class="mainNavItem" data-value="#skills:3">SKILLS</li>
            <li class="mainNavItem" data-value="#downloads:4">DOWNLOADS</li>
            <li class="mainNavItem" data-value="#contact:5">CONTACT</li>
          </ul>
        </div>
      </div>

      <div class="pageContent">
        <div class="post Xcenter" id="projects">
            <h3 class="Xcenter">PROJECTS</h3>
            <p class="Xcenter">hier ein kleiner überblick über ein paar projekte, bei denen ich mitgearbeitet habe. falls euch gefällt was ihr seht, lasst es mich wissen ;-)</p>
            <div class="projectViewer Xcenter">
              <ul>
                <li>
                  <div class="projectCover">Radiopreis</div>
                  <div class="projectClick">klick mich!</div>
                  <div class="projectItem" id="pi-1">
                    <img src="./images/preis.jpg" alt="">
                  </div>
                </li>
                <li>
                  <div class="projectCover">c-TV</div>
                  <div class="projectClick">klick mich!</div>
                  <div class="projectItem" id="pi-2">
                    <img src="./images/ct.jpg" alt="">
                  </div>
                </li>
                <li>
                  <div class="projectCover">Mapple Guestbook</div>
                  <div class="projectClick">klick mich!</div>
                  <div class="projectItem" id="pi-3">
                    <img src="./images/mapple.jpg" alt="">
                  </div>
                </li>
                <li>
                  <div class="projectCover">Python Projekte</div>
                  <div class="projectClick">klick mich!</div>
                  <div class="projectItem" id="pi-4">
                    <img src="./images/python.jpg" alt="">
                  </div>
                </li>
                <li>
                  <div class="projectCover">Raspberry Pi</div>
                  <div class="projectClick">klick mich!</div>
                  <div class="projectItem" id="pi-5">
                    <img src="./images/rpi.jpg" alt="">
                  </div>
                </li>
                <li>
                  <div class="projectCover">Portfolio</div>
                  <div class="projectClick">klick mich!</div>
                  <div class="projectItem" id="pi-6">
                    <img src="./images/wiese.jpg" alt="">
                  </div>
                </li>
              </ul>
              <div class="projectInfo Xcenter">
                <div class="projectText"></div>
              </div>
            </div>
        </div>
        <div class="post Xcenter" id="me">
            <h3>THAT'S ME</h3>
            <div class="posShift">
              <div class="postLeft">
                <p>hi! mein name ist lorenz kromer. <br> ich bin 21 jahre alt, lebe in wien und studiere in st. pölten. <br><br>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cum distinctio eum asperiores rem enim fugit <br> eaque voluptas est laboriosam in repudiandae architecto placeat, illum atque quasi explicabo, culpa, molestias!Lorem ipsum dolor
                  <br><br> sit amet, consectetur adipisicing elit. Reprehenderit voluptas, aperiam quae provident, recusandae rem quis. Ut quaerat, quasi iste voluptate et dolorem atque sed neque voluptates, molestias dolor enim!
                </p>
              </div>
              <div class="postRight">
                <img src="./images/porttrait.jpg" alt="">
              </div>
              <div class="clearfix">&nbsp;</div>
          </div>
        </div>
        <div class="post Xcenter" id="skills">
            <h3>SKILLS</h3>
            <div class="diagram Xcenter">
              &nbsp;
            </div>
            <div class="switch Xcenter">
              <div class="switchItem selected" id="sID-1">Code</div>
              <div class="switchItem" id="sID-2">Design</div>
              <div class="switchItem" id="sID-3">Usability</div>
            </div>
        </div>
        <div class="post Xcenter" id="downloads">
            <h3>DOWNLOADS</h3>
            <p class="Xcenter">??? coming soon ???</p>
        </div>
        <div class="post Xcenter" id="contact">
            <h3>CONTACT</h3>
            <form action="#">
              <input type="text" class="contactForm" placeholder="Name"><br>
              <input type="text" class="contactForm" placeholder="Email"><br>
              <textarea name="" class="contactForm ta" placeholder="Message" id="" cols="30" rows="10"></textarea><br>
              <input type="submit" class="contactForm button" value="SEND MESSAGE"></input>
            </form>
        </div>
      </div>
    </div>
  </body>
</html>
