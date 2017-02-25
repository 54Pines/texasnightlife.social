<!DOCTYPE html>
<html lang="en">
<!-- TEST CODE TO CHECK GIT -->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Texas Nightlife - Turn On the Night</title>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom Styles -->
    <link href="css/style.css" rel="stylesheet">
    <script src="https://use.fontawesome.com/0a257e644a.js"></script>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
</head>

<body>
    <!-- Fixed navbar -->
    <nav id="header" class="navbar navbar-fixed-top">
        <div id="header-container" class="container navbar-container">
            <div class="navbar-header">
                <button type="button" id="navbar_toggle" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a id="brand" class="navbar-brand" href="index.html"><img src="img/logo.png" alt="Texas Nightlife" title="Texas Nightlife"></a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="apparel.html">Bar Apparel</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
            <!-- /.nav-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    <!-- /.navbar -->
    <!-- Ad Space for Phone Only -->
    <a href="#" class="visible-xs col-xs-12 phone_only">
    </a>
    <!-- begin outer shell -->
    <div class="col-sm-12 outer_shell">
        <!-- hero image -->
        <div id="banner-load" class="fade-in">
            <img class="TNL_logo" src="img/TNL_blue.png" alt="Texas Nightlife Logo" />
            <h2>Contact us by filling out the form below!</h2>
        </div>
        <!-- form -->
        <form action="mailer.php" method="POST" id="group-form" class="form-horizontal">
            <h2>Please Fill Out This Form</h2>
            <div class="col-xs-12 col-sm-3 col-sm-offset-3 text-left">
                <div class="control-group">
                    <label class="control-label" for="inputFname" name="inputFname">First Name</label>
                    <div class="controls">
                        <input type="text" id="inputFname" placeholder="First Name" required>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="inputLname" name="inputLname">Last Name</label>
                    <div class="controls">
                        <input type="text" id="inputLname" placeholder="Last Name" required>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-3 text-right">
                <div class="control-group">
                    <label class="control-label" for="phone" name="phone">Phone Number</label>
                    <div class="controls">
                        <input type="text" id="phone" placeholder="Phone Number">
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="email" name="email">Email Address</label>
                    <div class="controls">
                        <input type="text" id="email" placeholder="Email Address" required>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-sm-offset-3 text-left">
                <div class="control-group">
                    <label class="control-label" for="text" name="text">Your Message</label>
                    <div class="controls">
                        <textarea class="group-form" rows="4" id="text" name="text" placeholder="Your message..."></textarea>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 text-center">
                <button type="submit" class="btn submit_button">Submit</button>
            </div>

        </form>
    </div>
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="list-inline" id="footer">
                        <li>
                            <a href="https://www.facebook.com/itsyournighttexas/" <i class="fa fa-facebook-square fa-4x icon" aria-hidden="true"></i>
                            </a>
                            <p>FACEBOOK</p>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="https://www.instagram.com/texasnightlife/" <i class="fa fa-instagram fa-4x icon" aria-hidden="true"></i>
                            </a>
                            <p>INSTAGRAM</p>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="https://www.snapchat.com/add/texasnightlife" <i class="fa fa-snapchat fa-4x icon" aria-hidden="true"></i>
                            </a>
                            <p>SNAPCHAT</p>
                        </li>
                    </ul>
                    <p class="copyright text-muted small">Copyright &copy; Texas Nightlife 2016. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <!-- navbar js -->
    <script src="js/navbar.js"></script>
    <!-- hero js -->
    <script src="js/hero.js"></script>

</body>

</html>