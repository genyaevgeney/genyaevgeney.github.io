////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////////    ФУЛЛПЕЙДЖ (НАЧАЛО)     ///////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////





window.addEventListener('resize',function(e){

    if(window.innerWidth >= 603 && window.innerWidth <= 992) {
        let navMenuHeight = document.querySelector('.nav-menu').offsetHeight;
        let topLineNav = document.querySelector('.topLineNav');
        let bottomLineNav = document.querySelector('.bottomLineNav');
        let navVertical = document.querySelector('#fp-nav');
        let screenHeight = document.body.clientHeight;
        let navHeight = navVertical.offsetHeight;
        let lineNavHeight = screenHeight/2 - navHeight/2;
        topLineNav.style.height = `${lineNavHeight - navMenuHeight - (navHeight*1.3 - navHeight) -20}px`;
        topLineNav.style.bottom = `${navHeight*1.3}px`;
        bottomLineNav.style.height = `${lineNavHeight}px`;
        bottomLineNav.style.top = `${navHeight*1.3}px`;
                // console.dir(headerHeight.offsetHeight);
            }
            if(window.innerWidth > 992) {
                let topLineNav = document.querySelector('.topLineNav');
                let bottomLineNav = document.querySelector('.bottomLineNav');
                // let navVertical = document.querySelector('#fp-nav');
                // let screenHeight = document.body.clientHeight;
                // let navHeight = navVertical.offsetHeight;
                // let lineNavHeight = screenHeight/2 - navHeight/2;
                topLineNav.style.height = "113px";
                // topLineNav.style.bottom = `${navHeight*1.3}px`;
                bottomLineNav.style.height = "113px";
                // bottomLineNav.style.top = `${navHeight*1.3}px`;
            }
            // console.log("test");
        })

$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'oobwH@p8',
        verticalCentered:false,
        recordHistory:false,
        sectionsColor: ['#201B2D', '#201B2D', '#201B2D', '#201B2D', '#201B2D', '#201B2D', '#201B2D'],
        anchors: ['welcome', 'about', 'news', 'music', 'media', 'gallery', 'contact'],
        menu: '#menu',
        // scrollOverflow:true, 
        // normalScrollElements:'.main-page',
        // bigSectionsDestination:'bottom',
        // fixedElements:
        // loopTop:true,
        // loopBottom:true,
        // autoScrolling:false,
        // fitToSection:false,
        // fitToSectionDelay:2000,
        // scrollHorizontally: true,
        // sectionsColor: ['black','#F7C101','#201B2D'],
        // lockAnchors: true,
        // scrollingSpeed:900,
        navigation: true,
        // normalScrollElements: '.main-page',
        navigationPosition: "right",
        // sectionSelector: '.section',
        // fixedElements: '#myMenu',
        afterRender: function(){




            var pluginContainer = this;
            let welcomeSectionVideoWrapper = document.querySelector("#video");
            let welcomeSectionVideo = welcomeSectionVideoWrapper.children[0].children[0];
            welcomeSectionVideo.setAttribute('data-keepplaying','');
            let welcomeSectionScrollDiv = document.querySelector(".StoronnimV-welcome-section__scroll-div");
            welcomeSectionScrollDiv.addEventListener('click', fullpage_api.moveSectionDown);








            // Боковые линии от навигации
            if(window.innerWidth >= 603 && window.innerWidth <= 992) {
                let navMenuHeight = document.querySelector('.nav-menu').offsetHeight;
                let topLineNav = document.createElement('span');
                topLineNav.classList.add("topLineNav");
                let bottomLineNav = document.createElement('span');
                bottomLineNav.classList.add("bottomLineNav");
                let navVertical = document.querySelector('#fp-nav');
                navVertical.appendChild(topLineNav);
                navVertical.appendChild(bottomLineNav);
                let screenHeight = document.body.clientHeight;
                let navHeight = navVertical.offsetHeight;
                let lineNavHeight = screenHeight/2 - navHeight/2;
                topLineNav.style.height = `${lineNavHeight - 101 - (navHeight*1.3 - navHeight) -20}px`;
                topLineNav.style.bottom = `${navHeight*1.3}px`;
                bottomLineNav.style.height = `${lineNavHeight}px`;
                bottomLineNav.style.top = `${navHeight*1.3}px`;
                // console.log(lineNavHeight - navMenuHeight - (navHeight*1.3 - navHeight) -20);
                // console.dir(headerHeight.offsetHeight);
            }
            if(window.innerWidth > 992) {
                let topLineNav = document.createElement('span');
                topLineNav.classList.add("topLineNav");
                let bottomLineNav = document.createElement('span');
                bottomLineNav.classList.add("bottomLineNav");
                let navVertical = document.querySelector('#fp-nav');
                navVertical.appendChild(topLineNav);
                navVertical.appendChild(bottomLineNav);
                // let screenHeight = document.body.clientHeight;
                let navHeight = navVertical.offsetHeight;
                // let lineNavHeight = screenHeight/2 - navHeight/2;
                // topLineNav.style.height = `${lineNavHeight}px`;
                topLineNav.style.bottom = `${navHeight*1.3}px`;
                // bottomLineNav.style.height = `${lineNavHeight}px`;
                bottomLineNav.style.top = `${navHeight*1.3}px`;
            }






            // console.log(screenHeight);
        },
        onLeave: function(origin, destination, direction) {
            let header = document.querySelector(".StoronnimV-header");
            let navVertical = document.querySelector('#fp-nav');
            let navMenu = document.querySelector('.nav-menu');
            let linearListInHeader = document.querySelector('.StoronnimV-header__nav');

            if(destination.index === 0 && origin.index === 1) {
                linearListInHeader.style.transition = "opacity .2s ease";
                navVertical.style.transition = "opacity .2s ease";
                linearListInHeader.style.opacity = '0';
                navVertical.style.opacity = '0';
                setTimeout(function() {
                    linearListInHeader.style.display = 'none';
                    navVertical.style.display = 'none';
                }, 200);
            } 
            // if(destination.index >= 2 && origin.index >= 1) {
            //     header.style.transition = "opacity .2s ease";
            //     navVertical.style.transition = "opacity .2s ease";
            //     header.style.opacity = '0';
            //     navVertical.style.opacity = '0';
            //     setTimeout(function() {
            //         linearListInHeader.style.display = 'none';
            //         navVertical.style.display = 'none';
            //     }, 200);
            // }
            // if(destination.index === 2) {
            //     navMenu.style.display = "block";
            // } 
            // if(destination.index === 1) {
            //     linearListInHeader.style.display = "block";
            // } 
            if(destination.index >= 2 && origin.index === 1) {
                navMenu.style.display = "block";
                linearListInHeader.style.transition = "opacity .2s ease";
                linearListInHeader.style.opacity = '0';
                setTimeout(function() {
                    linearListInHeader.style.display = 'none';
                }, 200);
            }
            if(destination.index === 1 && origin.index === 0) {
                linearListInHeader.style.display = 'block';
                navVertical.style.display = 'block';
            }
            if(destination.index === 1 && origin.index >= 2) {
                navMenu.style.transition = "opacity .2s ease";
                navMenu.style.opacity = '0';
                linearListInHeader.style.display = "block";
                setTimeout(function() {
                    navMenu.style.display = 'none';
                }, 200);


            }
            if(destination.index === 0 && origin.index >= 2) {
                navMenu.style.transition = "opacity .2s ease";
                navVertical.style.transition = "opacity .2s ease"; 
                navMenu.style.opacity = '0';
                navVertical.style.opacity = '0';
                setTimeout(function() {
                    navMenu.style.display = 'none';
                    navVertical.style.display = 'none';
                }, 200);

            }
            if(destination.index >= 2 && origin.index >= 2) {
                navMenu.style.transition = "opacity .2s ease";
                navMenu.style.opacity = '0';
            }
        },
        afterLoad: function(origin, destination, direction){
            let loadedSection = this;
            let header = document.querySelector(".StoronnimV-header");
            let navVertical = document.querySelector('#fp-nav');
            let navMenu = document.querySelector('.nav-menu');
            let linearListInHeader = document.querySelector('.StoronnimV-header__nav');

        //использование индекса
        if(destination.index >= 2 && origin.index === 0){
            linearListInHeader.style.opacity = '0';
            linearListInHeader.style.display = 'none';
            navMenu.style.opacity = '1';
            navMenu.style.display = 'block';

        }
        if(destination.index === 0 && origin === null){
            linearListInHeader.style.opacity = '0';
            navVertical.style.opacity = '0';
            setTimeout(function() {
                linearListInHeader.style.display = 'none';
                navVertical.style.display = 'none';
            }, 1000);
        }
        if(destination.index === 1 && origin.index === 0) {
            linearListInHeader.style.transition = "opacity 1.5s ease";
            navVertical.style.transition = "opacity 1.5s ease";
            linearListInHeader.style.opacity = '1';
            navVertical.style.opacity = '1';
        } 
        if(destination.index >= 2 && origin.index === 1) {
            navMenu.style.transition = "opacity 1.5s ease";
            navMenu.style.opacity = '1';

        }
        if(destination.index === 1 && origin.index >= 2) {
            linearListInHeader.style.transition = "opacity 1.5s ease";
            linearListInHeader.style.opacity = '1';

        }
        if(destination.index >= 2 && origin.index >= 2) {
            navMenu.style.transition = "opacity 1.5s ease";
            navMenu.style.opacity = '1';
        }
        // if(destination.index === 0 && origin.index === 2) {
        //     linearListInHeader.style.transition = "opacity 1.5s ease";
        //     linearListInHeader.style.opacity = '1';

        // }
        // if(destination.index === 2) {  
        //     navMenu.style.opacity = "1";
        //     linearListInHeader.style.opacity = "0";
        //     setTimeout(function() { 
        //         linearListInHeader.style.display = "none";
        //     }, 1500); 
        // } 
        // if(destination.index === 1) {
        //     console.log("load");  
        //     linearListInHeader.style.opacity = "1";
        //     navMenu.style.opacity = "0";
        //     setTimeout(function() { 
        //         navMenu.style.display = "none";
        //     }, 2400); 
        // }


        //использование ссылки с привязкой
        // if(origin.anchor == 'secondSlide'){
        //     alert("Section 2 ended loading");
        // }
    },
        // navigationPosition: 'right', 
        // navigationTooltips: ['hi', 'there', 'my', 'friend'],
        // showActiveTooltip: true,
        // slidesNavigation: true,
        // slidesNavPosition: 'top',
        // slidesToSections: true,
        // responsiveWidth:900,
        // responsiveSlides:true,
        // parallax: true,
        // parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
        // parallaxOptions: {
        //     type: 'reveal',
        //     percentage: 62,
        //     property: 'translate'
        // },
        // scrollingSpeed: 1000,
    });

});


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////////    ФУЛЛПЕЙДЖ (КОНЕЦ)     ////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////