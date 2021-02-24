var audio = document.getElementById('audio');
audio.volume = .25; // music is usually very loud upon start.  sets it to 25%

$.ajax({url: 'audio/', success: function(result){
jres = JSON.stringify(result);
stats = result;
for (i = 1, len = Object.keys(result).length+1, ihtml = ''; i < len; i++) { 
ihtml=ihtml+'<button onclick="play('+i+');">Song: <pre>'+result[i].tags.song+'</pre> by: <pre>'+result[i].tags.artist+'</pre> on  <pre>'+result[i].tags.album+'</pre></button><br>';
}
document.getElementById('dyn').innerHTML = ihtml;;
}, error: function(){console.error('something broke.\nbig time.');}});

function play(id){
var wrap = document.getElementById('awrap');
audio.src = 'audio/'+stats[id]._fileName;
wrap.style = '';
}

function contains(text_one, text_two) {
    return text_one.toLowerCase().indexOf(text_two.toLowerCase()) != -1;
}

$("#sbox").keyup(function(){
    var searchText = $(this).val();
    $("div button").each(function() {
        $(this).toggle(contains($(this).text(), searchText));
    });
});
