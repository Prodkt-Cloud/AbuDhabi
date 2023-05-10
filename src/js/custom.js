$('#dash_module_0 .ml-card').each(function(){
    $(this).children().not('.ml-card-image').wrapAll("<div class='funkWrapper'></div>");
 });
     $('#dash_module_3 .tov-ml-content').each(function(){
    $(this).children().not('.ml-card:first-of-type').wrapAll("<div class='funkWrapper'></div>");
 });
     $('#dash_module_3 div.ml-card').each(function(){
    $(this).children().not(':first-of-type').wrapAll("<div class='funkWrapper'></div>");
 });