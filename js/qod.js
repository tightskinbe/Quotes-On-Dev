
(function ($) {

    let lastPage = '';
    $('body').append('')
    $('.btn').click(function () {
        console.log('you clicked the btn');

        lastPage = document.URL;

        $.ajax({
            method: "GET",
            url: window.qod_vars.rest_url + '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
        }).done(function (data) {
            history.pushState(null, null, qod_vars.home_url + '/' + data[0].slug);
            // 1st value is an object which manages State
            // 2nd value is the url title browser tab
            // 3rd value is the url in the browser

            console.log(data);


            //clear html before appending
            $('.entry-content').html('');
            $('.entry-title').html('');
            $('.source').html('');

            //the article content
            const results = data[0].content.rendered;
            // the author of the article
            const author = data[0].title.rendered;
            //get the source then append the text to it if there is some.
            const source = data[0]._qod_quote_source;
            // source link
            const sourceLink = data[0]._qod_quote_source_url;



            $('.entry-content').append(results);
            $('.entry-title').append(author);
            $('.source').append(`<a href="${sourceLink}">${source}</a>`);






        }).fail(function (error) {
            console.log('fail does not work waaaaaaaaaaaaaaaaa', error);
        })
    }); // end of button

    //update the page when we click foward and back buttons
    $(window).on('popstate', function () {
        // update url 
        window.location.replace(lastPage);
    });



    $('#quote-submission-form').submit(function (event) {
        event.preventDefault();
        console.log('ajsndaosjkdn');


        // console.log(window.qod_vars.rest_url);
        const authorOfQuote = document.getElementById('quote-author');
        const quoteContent = document.getElementById('quote-content');
        const quoteSource = document.getElementById('quote-source');
        const quoteSourceUrl = document.getElementById('quote-source-url');
        // const fullForm = document.getElementById('quote-submission-form');

        $.ajax({
            method: "POST",
            url: window.qod_vars.rest_url + '/wp/v2/posts',
            data: { title: authorOfQuote.value, content: quoteContent.value, _qod_quote_source: quoteSource.value, _qod_quote_source_url: quoteSourceUrl.value },

            beforeSend: function (xhr) {
                xhr.setRequestHeader('X-WP-Nonce', window.qod_vars.wpapi_nonce);
            }

        }).done(function () {
            console.log('got the post from you');

            $('#quote-submission-form').slideUp();
            $('.entry-title').hide();
            $('.site-content').append('Thanks for subbing');


        }).fail(function (error) {
            console.log(error);
        })







    })



    // code goes here

    //1. get request to grab random post and append to the dom


    // add a click event for postanouther and then run the ajax code

    //2. post a new quote using the post method
    // use a form to a submit a quite so a .submit quote


})(jQuery);


// function expression    immediatley Invoked function expression
// invoked also means calling a function or just running a function