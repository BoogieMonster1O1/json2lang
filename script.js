new ClipboardJS('.copy_button');
            
function convert() {
    document.getElementById("lang_content").innerHTML = "";
    var jsonText = document.getElementById("json_content").value;
    var parsed = JSON.parse(jsonText);
    var langParsed = $('#lang_content');
    for (var k in parsed) {
        var done = (k);
        if(k.startsWith("block.")) {
            done = done.replace("block.","tile.")
        }
        if (k.startsWith("block.") || k.startsWith("item.") || k.startsWith("entity.")){
            done = (done.concat(".name"));
        }
        done = (done.concat("="+parsed[k]+"\n"));
        langParsed.append(done);
    }
    
}