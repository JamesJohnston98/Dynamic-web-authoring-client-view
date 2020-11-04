<!DOCTYPE html>

<html>
<head>
<title>BMW image Swap </title>
<script>
    
function bgColor(bg) {
 document.body.style.background = bg;
}    
    
</script>
</head>
<body bgColor = "white">
<a href = '#' onmouseover = "document.photo.src='BMW.JPG';"
   onmouseout= "document.photo.src='BMW2.JPG'">
<img src = "BMW.JPG" width = "600" height = "400" name = "photo" border = "0"></a>
    
<br /><br />
<table style="width:300px;height:100px">
  <tr>
    <td onmouseover="bgChange(this.style.backgroundColor)" 
        onmouseout="bgChange('transparent')"
        style="background-color:Khaki">
    </td>
      </tr>
</table>
<a href = '#'>Change colour to maroon</a>
    </body>
</html