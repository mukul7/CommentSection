names = ['Tamica', 'Mathew', 'Cammy', 'Sena', 'Ulrike', 'Dalila', 'Melina', 'Sigrid', 'Angelina', 'Charline', 'Vernon', 'Walter', 'Elba', 'Ernesto', 'Manuela', 'Gilberte', 'Leann', 'Oneida', 'Piper', 'Mervi'];


function like()
{

    var count = parseInt(document.getElementById('likecount').innerHTML);
    count+=1;
    document.getElementById('likecount').innerHTML =count;
}

function check(e,texteleme,adclass)
{
    if(e.keyCode== 13)
    {
        var text = $(texteleme).val();
        addcomment(texteleme,text,adclass);
        $(texteleme).remove();
        if(adclass=='base')
        appendd(texteleme);
        countcomments();
    }
}
function addcomment(texteleme,text,adclass)
{
    var replyto = $(texteleme).parent();

    var number = Math.floor(Math.random()*20);
    var name = names[number];
    var commentnamediv = $("<div></div>").text(name);

    $(commentnamediv).addClass('commentername');
    var commentbodydiv = $("<div></div>").text(text);
    $(commentbodydiv).addClass('commentbody');
    var commentfootdiv = $('<div></div');

    $(commentfootdiv).addClass('commentfoot');
    var a = $('<a></a>').text("Reply");

    $(a).attr("onclick","addreplybox(this)");

    $(a).css({'cursor':'pointer','color':'blue'});

    $(commentfootdiv).append(a);

    var comment = $('<div></div>');

    $(comment).addClass("comment");
    $(comment).addClass("adclass");
    $(comment).append(commentnamediv)
    $(comment).append(commentbodydiv);
    $(comment).append(commentfootdiv);
    $(replyto).append(comment);

}

function addreplybox(replytoa)
{
    if($(replytoa).parent().children('textarea').html()==null)
    {
    var textar = $('<textarea></textarea>');
    $(textar).addClass('newcomment');
    $(textar).attr('onkeydown','check(event,this,"kid")');
    $(textar).attr('placeholder','Write a Comment');

    $(replytoa).parent().append(textar);
    $(textar).focus();
    }
}

function showcomments()
{
    $('.postcomments').toggle();
}

function appendd(textar)
{
    var newtext = $(textar).clone();
    $(newtext).val("");
    $('.postcomments').append(newtext);
}

function countcomments()
{
    var count = $('.postcomments').find('.comment').length;
    $('#commentscount').html(count);


}
