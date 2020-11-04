<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" language = "EN">
<head><title> A Basic Function _error </title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<script type="text/javascript" language="JavaScript">
 var thevisitor = document.myform.visitor.value;
 function doSomething() {
     window.alert; "Is this OK, " + thevisitor  "?";
  document.write = "Is this OK, " thevisitor + "?";
 }
//ends script hiding -->
</script>
</head>
<body bgcolor="white">
<p> Please type your name and click the button. </p>
<form name="myform">
<input type="text" size="30" name="visitor">
<br>
<input type="button" name="mybutton" value="dosomething" onclick="doSomething();">
</form>
</body>
</html> 
