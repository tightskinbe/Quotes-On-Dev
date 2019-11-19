(function ($) {

    $('body').append('hello aosndoiasjdiaosdjasiodjosaidjaiosdjaoisdj')
    // code goes here

    //1. get request to grab random post and append to the dom


    // add a click event for postanouther and then run the ajax code


    $.ajax({
        method: "GET",
        url: // qod_vars.rest_url + /wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1
    }).done(function (data) {
            console.log(data);

        }).fail(function (error) {
            console.log('fail does not work waaaaaaaaaaaaaaaaa', error);
        })
    //2. post a new quote using the post method
    // use a form to a submit a quite so a .submit quote


})(jQuery);


// function expression    immediatley Invoked function expression
// invoked also means calling a function or just running a function