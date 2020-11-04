<!DOCTYPE html>
<html>
<head>
<title>JavaScript Function</title>
<meta charset = "UTF-8"></head>
<body>
    
<p id = "course"></p>
<script>

function SayHello(course, campus, university) {
    course = "Interactive Multimedia Design";
    campus = "Jordanstown";
    university = "Ulster University";
    window.document.writeln("I'm a second year " + course + " student in " + university + " at "  + campus);
}

SayHello("Interactive Multimedia Design", "Jordanstown", "Ulster University");
</script>
</body>
</html>