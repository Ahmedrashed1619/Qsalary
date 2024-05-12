

// loading to init...........

$(document).ready(function () {
    $('#ready').fadeOut(2000, function () {
        $('body').css('overflow', 'visible');
        $('#topBtn').css('display', 'none')
    })
})


// when click event on topbtn & toggle 

$('#topBtn').click(function () {
    $('html , body').animate({ scrollTop: 0 }, 500);
})

$('#btnTopFooter').click(function () {
    $('html , body').animate({ scrollTop: 0 }, 500);
})

$(window).scroll(function () {

    let featuresOffset = $('#employer').offset().top;
    let aboutOffset = $('#about').offset().top;

    if ($(window).scrollTop() > featuresOffset && $(window).scrollTop() < aboutOffset) {
        $('#topBtn').fadeIn(500);
    }
    else {
        $('#topBtn').fadeOut(250);
    }
})

// change toggle navbar style

$('.navbar .navbar-toggler').click(() => {
    $('.navbar .navbar-toggler').toggleClass('convert');
})


// add class active to an active link and smooth move.....

$('.navbar-nav .nav-item a').click(function () {
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
    let currentSection = $(this).attr('href');
    let currentOffset = $(currentSection).offset().top;
    $('html , body').animate({ scrollTop: currentOffset }, 500);
});

// select the button

let sel = document.querySelector('.custome .language');
let selText = document.querySelector('.custome .language button').innerHTML;

// for change dir & lang

let active = true;

// for media query when resize

function changeDirLeft() {
    if ($('body').width() > 992) {
        $('.special').css({ 'marginRight': '0px', 'marginLeft': 'auto' });
        $('.special-second').css({ 'marginLeft': '0px', 'marginRight': 'auto' });
    }
    else {
        $('.special').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
        $('.special-second').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
    }
}

function changeDirRight() {
    if ($('body').width() > 992) {
        $('.special').css({ 'marginLeft': '0px', 'marginRight': 'auto' });
        $('.special-second').css({ 'marginRight': '0px', 'marginLeft': 'auto' });
    }
    else {
        $('.special').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
        $('.special-second').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
    }
}

$(window).on('resize', () => {

    if (active === true) {
        changeDirLeft();
    }
    else {
        changeDirRight();
    }
});


// click on button for change lang 

sel.addEventListener('click', () => {
    active = !active;

    if (active === true) {
        $('body').css('fontFamily', 'Montserrat');

        // .............................

        $('nav').attr('dir', 'ltr');
        $('.navbar .navbar-toggler').css({ 'marginLeft': '0px', 'marginRight': '15px' });
        $('.navbar .container-navbar-brand span').text('| Your Cash Solution');
        // $('.collapse .navbar-nav').addClass('me-5');
        // $('.collapse .navbar-nav').removeClass('ms-5');
        // $('.custome').addClass('ms-5');
        // $('.custome').removeClass('me-5');

        $('a[href = "#home"]').text('Home');
        $('a[href = "#employer"]').text('Employer Benefits');
        $('a[href = "#employee"]').text('Employee Benefits');
        $('a[href = "#about"]').text('About Us');
        $('a[href = "#contact"]').text('Contact');

        // blogsDetailes page handel ar & en 
        $('a[href = "index.html#home"]').text('Home');
        $('a[href = "index.html#employer"]').text('Employer Benefits');
        $('a[href = "index.html#employee"]').text('Employee Benefits');
        $('a[href = "index.html#about"]').text('About Us');
        $('a[href = "index.html#contact"]').text('Contact');

        $('.custome .language button').text('العربيـة');
        // ...............................

        $('header').attr('dir', 'ltr');
        $('.caption h1').text('Save your time and money')
        $('.caption p').text('We solved it in one application that saves your time and money, from your home you can book your appointments, tables, events, and more other options,  and find the best exclusive offers that save your wallet and provides all your home services, your Business consulting and others. ');
        $('.home .vectors .vector').css('marginTop', '0px');
        $('.home .buttons .special-m').html(`<i
            class="fa-solid fa-download me-1"></i> Get App`);
        $('.home .buttons .special-m i').addClass('me-1');
        // $('.home .buttons .special-m').removeClass('ms-3');
        // $('.home .buttons .special-m').addClass('me-3');
        $('.home .buttons .special-m i').removeClass('ms-1');
        $('.home .buttons a').css('fontSize', '18px');
        $('.home .buttons .second-btn').html(`<i
            class="fa-solid fa-circle-play me-1"></i> Watch Video`);
        $('.home .buttons .second-btn i').addClass('me-1');
        $('.home .buttons .second-btn i').removeClass('ms-1');

        // .................................................

        $('.features').attr('dir', 'ltr');

        if ($('body').width() > 992) {
            $('.special').css({ 'marginRight': '0px', 'marginLeft': 'auto' });
            $('.special-second').css({ 'marginLeft': '0px', 'marginRight': 'auto' });
        }
        else {
            $('.special').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
            $('.special-second').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
        }

        $('.feature span').css({ 'marginLeft': '0px', 'marginRight': '14px' })
        $('.features .main-title h5').text('Features');
        $('.features .main-title h2').text('We do this and more');
        $('.feature .one').text('Book your appointment with our partners and choose the day that suits you.  All you must do is choose the appropriate date and book it, (Halls, restaurants, car rental, clinics and many other) all you need just choose the suitable date and time.');
        $('.feature .two').html('Enjoy with your family members or friends, we collected the best entertainment places in your area that suit all categories and saved the time of confusion and choice for you.');
        $('.feature .three').text('Dont be confused of choosing where to go and where are the best places to have fun with our partners in KSA, EGYPYT and soon in all GCC Countries.');
        $('.feature .four').text('The most unique and exclusive coupons you can buy through the application that provide saving for you, get coupons and discount services.');
        $('.feature .five').text('The most exclusive offers in your area in various fields according to your interest and thus we saved the hard of searching for the best offers and also, we saved your money.');
        $('.feature .six').text('Why do you wait for your turn and stop in the crowded queues? Take the waiting number while you are at home and come to your appointment at Banks, Hospitals, Restaurants and others.');
        $('.feature .seven').text('Order from the application, receive when you in the car, and save the time of preparation for yourself.');
        $('.feature .eight').text('Request the service you need while you at home! Home services, telephone consultations and more.');

        // ................................................

        $('.screenshots h5').text('Application');
        $('.screenshots h2').text('Get the knowledge about the app');

        // ................................................

        $('.about').attr('dir', 'ltr');
        $('.about h5').text('About us');
        $('.about h2').text('About Zari on time...');
        $('.about p').text('An application that provides various reservation services for hospitals, salons, restaurants, banks, and others... In Saudi Arabia, Egypt, and soon in the GCC Countries, and you can see all the offers and coupons while you are at home.');

        // .................................................

        $('.get').attr('dir', 'ltr');
        $('.get .main-title h5').text('Get our app');
        $('.get .main-title h2').text('Download the application');
        $('.get .main-title p').text('Our applications are available now on App store & Play store..');
        $('.parag p').css('textAlign', 'start');
        $('.client h4').text('Zari on Time (Client App)');
        $('.client i').removeClass('ms-3');
        $('.client i').addClass('me-3');
        $('.client .parag .available').text('Available on the');
        $('.client .parag .get-on').text('Get On');
        $('.manager h4').text('Zari on Time (Manager App)');
        $('.manager i').removeClass('ms-3');
        $('.manager i').addClass('me-3');
        $('.manager .available').text('Available on the');
        $('.manager .get-on').text('Get On');

        // ...................................................

        $('.footer').attr('dir', 'ltr')
        $('.logo-footer p').text(`Zari On Time it’s an application for booking appointments with service and product providers
            to preserve the time of the customer and the facility.`);
        $('.logo-footer h5').text('Follow us ');
        $('.navigate .first-navigate').text('navigate');
        $('.navigate .contact').text('Contact us');
        $('.navigate .contact2').text('KSA Branches');
        $('.navigate .contact3').text('Egypt Branches');
        $('.navigate div span').removeClass('ms-3');
        $('.navigate div span').addClass('me-3');
        $('.navigate div .ksa').text('Riyadh Office: 8491 Othman Bin Affaan Road Al Narjas - Riyadh - KSA.');
        $('.navigate div .ksa2').text('AL-Madina Office: 7865 King Abdullah Bin - Abdulaziz Road - Jasham - AL-Madina - KSA.');
        $('.navigate div .egy').text('9 Street Saeed Zakaria - Nasr City - Cairo - Egypt');
        $('.phone a').attr('dir', 'ltr');
        $('.phone .first').removeClass('ms-2');
        $('.phone .first').addClass('me-2');
        $('.phone .second').removeClass('me-2');
        $('.phone .second').addClass('ms-2');

        // Contact En
        $('#contact').attr('dir', 'ltr');
        $('.main__title-h2').text('Contact Us');
        $('.label__name').text('Name');
        $('.label__phone').text(' Phone');
        $('.label__email').text('  Email');
        $('.label__company').text('Company Name');
        $('.label__message').text('Message');
        $('.btn__message').text('Send Message');

        // Blog En 
        $('#rowData').attr('dir', 'ltr');
        $('.blog__title-h2').text('Blogging');
        displayBlogEn();
    }
    else {
        $('body').css('fontFamily', 'IBM Plex Sans Arabic')

        // .............................

        $('nav').attr('dir', 'rtl');
        $('.navbar .navbar-toggler').css({ 'marginLeft': '15px', 'marginRight': '0px' });
        $('.navbar .container-navbar-brand span').text('| سيولة بكل سهولة');
        // $('.collapse .navbar-nav').addClass('ms-5');
        // $('.collapse .navbar-nav').removeClass('me-5');
        // $('.custome').addClass('me-5');
        // $('.custome').removeClass('ms-5');

        $('a[href = "#home"]').text('الرئيسية');
        $('a[href = "#employer"]').text('مزايا صاحب العمل');
        $('a[href = "#employee"]').text('مزايا الموظفين');
        $('a[href = "#about"]').text('نبذة عنا');
        $('a[href = "#contact"]').text('تواصل معنا');

        /**last update add #contact and blog En nav  */
        $('a[href = "index.html#home"]').text('الرئيسية');
        $('a[href = "index.html#employer"]').text('مزايا صاحب العمل');
        $('a[href = "index.html#employee"]').text('مزايا الموظفين');
        $('a[href = "index.html#about"]').text('نبذة عنا');
        $('a[href = "index.html#contact"]').text('تواصل معنا');


        $('.custome .language button').text('English');
        // ...............................

        $('header').attr('dir', 'rtl');
        $('.caption h1').text('‌حليناها في تطبيق واحد نوفر لك وقتك ومالك')
        $('.caption p').text('‌من بيتك تقدر تحجز مواعيدك وطاولاتك ومناسباتك والخيارات أكثر، ‌وتلاقي أفضل العروض الحصرية اللي توفر جيبك‌ وجميع الخدمات المنزلية والاستشارية وغيرها..');
        $('.home .vectors .vector').css('marginTop', '30px');
        $('.home .buttons .special-m').html(`<i
            class="fa-solid fa-download me-1"></i> الحصول علي التطبيق`);
        $('.home .buttons .special-m i').removeClass('me-1');
        // $('.home .buttons .special-m').addClass('ms-3');
        $('.home .buttons .special-m i').addClass('ms-1');
        $('.home .buttons a').css('fontSize', '16px');
        $('.home .buttons .second-btn').html(`<i
            class="fa-solid fa-circle-play me-1"></i> شاهد الفيديو`);
        $('.home .buttons .second-btn i').removeClass('me-1');
        $('.home .buttons .second-btn i').addClass('ms-1');

        // .................................................

        $('.features').attr('dir', 'rtl');

        if ($('body').width() > 992) {
            $('.special').css({ 'marginLeft': '0px', 'marginRight': 'auto' });
            $('.special-second').css({ 'marginRight': '0px', 'marginLeft': 'auto' });
        }
        else {
            $('.special').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
            $('.special-second').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
        }

        $('.feature span').css({ 'marginRight': '0px', 'marginLeft': '14px' })
        $('.features .main-title h5').text('المميزات');
        $('.features .main-title h2').text('نسوي كذا وأكثر');
        $('.feature .one').text('‌احجز موعدك مع شركائنا واختار اليوم اللي يناسبك سواء استراحات‌، قاعات، مطاعم، تأجير سيارات، عيادات وغيرها العديد كل اللي عليك تختار الموعد المناسب وتحجز‌.');
        $('.feature .two').html('‌استمتع مع أفراد أسرتك أو أصدقائك جمعنا أفضل الأماكن الترفيهية في منطقتك‌ اللي تناسب كل‌‌ الفئات وفرنا عليك وقت الحيرة والاختيار‌.');
        $('.feature .three').text('‌لا تحتار وتشيل هم وين تروح ووين افضل الأماكن لقضاء متعتك من خلال شركائنا في كل من المملكة العربية السعودية و‌‌مصر وقريباً في الخليج .');
        $('.feature .four').text(' أكثر العروض في منطقتك والحصرية في مجالات متعددة حسب اهتمامك وبكذا وفرنا عليك مشقة البحث عن‌ ‌افضل العروض ووفرنا مالك‌.');
        $('.feature .five').text('‌ليه تنتظر دورك وتوقف في زحمة الطوابير خذ رقم الانتظار وانت في بيتك وتعال على‌ ‌موعدك بنوك‌، مستشفيات، عيادات، مطاعم وغيرها.');
        $('.feature .six').text('‌اطلب من التطبيق واستلم من السيارة و وفر على نفسك وقت التجهيز .‌');
        $('.feature .seven').text('‌اكثر الكوبونات الحصرية والخاصة تقدر تشتريها من خلال التطبيق واللي توفر عليك، احصل على‌ ‌كوبونات وخدمات مخفضة .');
        $('.feature .eight').text('‌اطلب الخدمة اللي تحتاجها وانت ببيتك!‌ ‌صيانة منزلية، عاملات منزلية، استشارات‌‌ هاتفية مع مختصين قانونيين ‌ماليين وغيرهم..');

        // ................................................

        $('.screenshots h5').text('التطبيق');
        $('.screenshots h2').text('تعرف على التطبيق');

        // ................................................

        $('.about').attr('dir', 'rtl');
        $('.about h5').text('من نحن ؟');
        $('.about h2').text('عن Zari On Time');
        $('.about p').text(`تطبيق يهتم بتقديم خدمات الحجز المتنوعة مستشفيات، صالونات، مطاعم، بنوك وغيرها.. في المملكة العربية السعودية ومصر وقريباً في دول الخليج، وتقدر تشوف كل العروض والكوبونات وأنت ببيتك.`);

        // .................................................

        $('.get').attr('dir', 'rtl');
        $('.get .main-title h5').text('الحصول على التطبيق ؟');
        $('.get .main-title h2').text('حمل التطبيق احجز موعدك وريح بالك!');
        $('.get .main-title p').text('التطبيق متاح الآن على App store & Play store');
        $('.parag p').css('textAlign', 'start');
        $('.client h4').text('Zari on Time (تطبيق العميل)');
        $('.client i').removeClass('me-3');
        $('.client i').addClass('ms-3');
        $('.client .parag .available').text('متاح علي');
        $('.client .parag .get-on').text('الذهاب لــ');
        $('.manager h4').text('Zari on Time (تطبيق المدير)');
        $('.manager i').removeClass('me-3');
        $('.manager i').addClass('ms-3');
        $('.manager .available').text('متاح علي');
        $('.manager .get-on').text('الذهاب لــ');

        // ...................................................
        $('.footer').attr('dir', 'rtl')
        $('.logo-footer p').text('هو تطبيق لحجز المواعيد مع مزودي الخدمة والمنتجات للحفاظ علي وقت العميل والمنشأة.');
        $('.logo-footer h5').text('تابعنــــا');
        $('.navigate .first-navigate').text('التنقل');
        $('.navigate .contact').text('تواصل معنــا');
        $('.navigate .contact2').text('فروع السعودية');
        $('.navigate .contact3').text('فروع مصر');
        $('.navigate div span').removeClass('me-3');
        $('.navigate div span').addClass('ms-3');
        $('.navigate div .ksa').text('مكتب الرياض: 8491 طريق انس بن مالك تقاطع طريق عثمان بن عفان النرجس - الرياض - المملكة العربية السعودية.');
        $('.navigate div .ksa2').text('   مكتب المدينة المنورة: 7865 الملك عبدالله بن عبدالعزيز - جاسم - المدينة المنورة - المملكة العربية السعودية.   ');
        $('.navigate div .egy').text('9 شارع سعيد زكريا - مدينة نصر - القاهرة - جمهورية مصر العربية.');
        $('.phone a').attr('dir', 'ltr');
        $('.phone .first').removeClass('me-2');
        $('.phone .first').addClass('ms-2');
        $('.phone .second').removeClass('ms-2');
        $('.phone .second').addClass('me-2');

        // contact Ar
        $('#contact').attr('dir', 'rtl');
        $('.main__title-h2').text('تواصل معنا');
        $('.label__name').text('الاسم');
        $('.label__phone').text('رقم الهاتف');
        $('.label__email').text('البريد الالكتروني');
        $('.label__company').text('اسم الشركه');
        $('.label__message').text('اترك رساله');
        $('.btn__message').text('  إرسل رساله');

        // Blog Ar 
        $('#rowData').attr('dir', 'rtl');
        $('.blog__title-h2').text('مقالات');
        displayBlogAr()

    }
})

// click on video button

function toggleTrailer() {
    let trailer = document.querySelector('.trailer');
    let video = document.querySelector('.trailer iframe');

    trailer.classList.toggle('play');
    video.pause();
    video.currentTime = 0;
}

let btn = document.querySelector('.modal-btn');
let closeBtb = document.querySelector('.close');

btn.addEventListener('click', () => {
    toggleTrailer();
});

closeBtb.addEventListener('click', () => {
    toggleTrailer();
});
