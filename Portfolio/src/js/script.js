


$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'oobwH@p8',
        verticalCentered:false,
        recordHistory:false,
        sectionsColor: ['#201B2D', '#201B2D'],
        anchors: ['home', 'portfolio'],
        navigation: true,
        navigationPosition: "right",
        slidesNavigation: true,
    slidesNavPosition: 'top',
         afterRender: function(){
            var pluginContainer = this;
            let video = document.querySelector("#video");
            let homeSectionVideo = video.children[0].children[0];
            homeSectionVideo.setAttribute('data-keepplaying','');
            let homeSectionScrollDiv = document.querySelector(".home-section__scroll-div");
            homeSectionScrollDiv.addEventListener('click', fullpage_api.moveSectionDown);
        },
    });

});