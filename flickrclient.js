window.onload = function() {
    var URL = "https://api.flickr.com/services/feeds/photos_public.gne?tags=";
    
    $('#btnSubmit').click(function(){
        var term = $('#txtSearch').val();
        URL += term;
        console.log(URL);
        
        $.ajax({
         url: URL,
            context: document.body})
        .done(function(data){
            console.log(data);
            var pics = $(data).find('entry');
            $(pics).each(function(){
                var $entry = $(this);
                var link = $entry.find('link');
                link = link[1];
                var photoURL = $(link).attr('href');
                displayPhoto(photoURL);
            })
        });
    });
}

function displayPhoto(photo)
{
    var photoHTML = "<div>";
    photoHTML += "<img src='" + photo + "' style='width: 100%'/>";
    photoHTML += "</div>"
    document.getElementById('result').innerHTML += photoHTML;
}