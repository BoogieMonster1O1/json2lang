new ClipboardJS('.copy_button');
            
function convert(){
    document.getElementById("lang_content").innerHTML = "";
    var jsonText = document.getElementById("json_content").value;
    console.log(jsonText);
    var parsed = JSON.parse(jsonText);
    console.log(parsed);
    var langParsed = $('#lang_content');
    for (var k in parsed) {
        var done = (k+"="+parsed[k]+"\n");
        console.log(done);
        langParsed.append(done);
    }
    
}