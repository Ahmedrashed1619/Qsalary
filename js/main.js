

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

    let employerOffset = $('#employer').offset().top;
    let aboutOffset = $('#about').offset().top;

    if ($(window).scrollTop() > employerOffset && $(window).scrollTop() < aboutOffset) {
        $('#topBtn').fadeIn(500);
    }
    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('second-nav')
    }
    else {
        $('#topBtn').fadeOut(250);
        $('.navbar').removeClass('second-nav')
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


// for change dir & lang

let active = true;
let trans = document.querySelectorAll('.language-btn');

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

for (let x = 0; x < trans.length; x++) {
    const element = trans[x];
    
    element.addEventListener('click', () => {
        active = !active;
    
        if (active === true) {
            // $('body').css('fontFamily', 'Montserrat');
    
            // .............................
    
            $('nav').attr('dir', 'ltr');
            $('.navbar .navbar-toggler').css({ 'marginLeft': '0px', 'marginRight': '15px' });
            $('.navbar .container-navbar-brand span').text('| Your Cash Solution');
    
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
    
            $('.navbar-collapse .language-btn').addClass('ms-5');
            $('.navbar-collapse .language-btn').removeClass('me-5');
            $('.language-btn span').text('العربيـة');
            $('.language-btn img').attr('src', '../imgs/arabic.png');

            $('.custome .join button').text('Join Today');
            // ...............................
    
            $('header').attr('dir', 'ltr');
            $('.total-header .container').css({ 'backgroundPosition': 'right' })
            $('.caption h1').text('Financial Wellness Gate for Your Employees')
            $('.caption p').text('Empower your employees to access their earned wages anytime, and make every day a payday.');
            $('.caption .buttons .main-btn').text('Request a demo')
            $('.caption .buttons .main-btn').addClass('me-sm-3')
            $('.caption .buttons .main-btn').removeClass('ms-sm-3')
            $('.caption .buttons .second-btn').html('<i class="fa-solid fa-download me-1"></i> Download the app')
            $('.caption .buttons .second-btn i').addClass('me-1');
            $('.caption .buttons .second-btn i').removeClass('ms-1');
            // .................................................
    
            $('.employer').attr('dir', 'ltr');
            $('.employer .main-title h2').text('Employer Benefits');
            $('.employer .one h5').text('Zero Cost');
            $('.employer .one p').text('No hidden, surprise or additional fees.');
            $('.employer .two h5').text('Zero Interest');
            $('.employer .two p').text('Full compliance with Shariah.');
            $('.employer .three h5').text('Time-saving');
            $('.employer .three p').text('Release pressure on human resources in your company.');
            $('.employer .four h5').text('Easy Liquidity');
            $('.employer .four p').text('Your employees will no longer need to apply for loans.');
            $('.employer .five h5').text('Money Collection');
            $('.employer .five p').text('Withdrawn Payments will be automatically deducted when transferring salaries.');
            $('.employer .six h5').text('Quick Access');
            $('.employer .six p').text('Meet the financial needs of your employees whenever they want.');
            $('.employer .seven h5').text('Increased Productivity');
            $('.employer .seven p').text('Free your employees from financial worries, enabling complete focus on their work.');
            $('.employer .eight h5').text('Turnover Reduction');
            $('.employer .eight p').text('Enhance employee job satisfaction and loyalty.');
            $('.employer .buttons button').text('See more');
            // ................................................
    
            $('.how .main-title h6').text('How Does Qsalary Work?');
            $('.how .main-title h2').text('Financial Freedom for Your Employees in 3 Simple Steps');
            $('.how .one h5').text('Register Your Company');
            $('.how .one p').text('Registration is easy, complications and hassle free, just contact us.');
            $('.how .two h5').text('Add Your Employees');
            $('.how .two p').text('Effortlessly add your employees and their details in a click or let us take care of it.');
            $('.how .three h5').text('Set Maximum Withdrawal Limits for Each Employee');
            $('.how .three p').text('Enable easy on-demand access to earned wages, complying with wage protection laws.');
            // ................................................

            $('.financial').attr('dir', 'ltr');
            $('.financial .main-title h2').text('Taking your employees out of their financial stress');
            $('.financial .one p').text('of individuals experience financial stress at least once a year');
            $('.financial .two p').text('the annual cost to employers in lost productivity as a result of employee financial stress');
            $('.financial .three p').text('of employee turnover attributable to financial stress');
            $('.financial .buttons button').text('Request a demo');
            // ................................................

            $('.employee').attr('dir', 'ltr');
            $('.employee .main-title h2').text('Employee Benefits');
            $('.employee .one h5').text('Instant Liquidity 24/7');
            $('.employee .one p').text('Do you have emergency expenses? Get liquidity with just one click.');
            $('.employee .two h5').text('No More Wages Delays');
            $('.employee .two p').text('Administrative procedures will no longer hinder your earned wages access. Get the money you need anytime.');
            $('.employee .three h5').text("You Won't Miss Any Promotion");
            $('.employee .three p').text('With Qsalary, never miss sales discounts due to liquidity issues.');
            $('.employee .four h5').text('Centralized Expense Management');
            $('.employee .four p').text('Enjoy a user-friendly app displaying your remaining wages on your smartphone.');
            $('.employee .five h5').text('Fixed Fees, 0% Interest');
            $('.employee .five p').text('No interest will apply to any amount you withdraw, but a flat fee per withdrawal.');
            $('.employee .buttons button').text('See more');
            // ................................................
    
            $('.get-app').attr('dir', 'ltr');
            $('.get-app .caption p').text('َDownload the APP');
            $('.get-app .caption h4').text('Help Us Contact Your Company');
            $('.get-app .img-mob img').attr('src', './imgs/mobile-en.png');
            // ................................................

            $('.partners').attr('dir', 'ltr');
            $('.partners .main-title h2').text('َOur Success Partners');
            // ................................................

            $('.about').attr('dir', 'ltr');
            $('.about h5').text('About us');
            $('.about h2').text('About Zari on time...');
            $('.about p').text('An application that provides various reservation services for hospitals, salons, restaurants, banks, and others... In Saudi Arabia, Egypt, and soon in the GCC Countries, and you can see all the offers and coupons while you are at home.');
            // .................................................
    
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
            // $('body').css('fontFamily', 'IBM Plex Sans Arabic')
    
            // .............................
    
            $('nav').attr('dir', 'rtl');
            $('.navbar .navbar-toggler').css({ 'marginLeft': '15px', 'marginRight': '0px' });
            $('.navbar .container-navbar-brand span').text('| سيولة بكل سهولة');
    
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
    
            $('.navbar-collapse .language-btn').addClass('me-5');
            $('.navbar-collapse .language-btn').removeClass('ms-5');
            $('.language-btn span').text('English');
            $('.language-btn img').attr('src', '../imgs/english.png');

            $('.custome .join button').text('انضم الآن');
            // ...............................

            $('header').attr('dir', 'rtl');
            $('.total-header .container').css({ 'backgroundPosition': 'left' })
            $('.caption h1').text('كيوسالاري، البوابة المالية لتوفير الراحة لموظفيك')
            $('.caption p').text('‌مكِّن موظفيك من الوصول إلى مستحقاتهم المالية بسهولة وفي أي وقت، ليكون كل يوم هو يوم الراتب.');
            $('.caption .buttons .main-btn').text('اطلب عرضاً توضيحياً الآن')
            $('.caption .buttons .main-btn').addClass('ms-sm-3')
            $('.caption .buttons .main-btn').removeClass('me-sm-3')
            $('.caption .buttons .second-btn').html('<i class="fa-solid fa-download me-1"></i> حـمّـل الـتطبـيـق')
            $('.caption .buttons .second-btn i').removeClass('me-1');
            $('.caption .buttons .second-btn i').addClass('ms-1');
            // .................................................
    
            $('.employer').attr('dir', 'rtl');
            $('.employer .main-title h2').text('مزايا صاحب العمل');
            $('.employer .one h5').text('صفر تكلفة');
            $('.employer .one p').text('بدون رسوم خفية أو مفاجئة أو إضافية.');
            $('.employer .two h5').text('صفر فوائد');
            $('.employer .two p').text('متوافق مع مبادئ الشريعة الإسلامية.');
            $('.employer .three h5').text('توفير الوقت');
            $('.employer .three p').text('يخفف أعباء قسم الموارد البشرية في شركتك.');
            $('.employer .four h5').text('سيولة بسهولة');
            $('.employer .four p').text('لن يحتاج موظفوك للاستدانة بعد الآن.');
            $('.employer .five h5').text('استرداد المال');
            $('.employer .five p').text('اقتطاع تلقائي للمبالغ المسحوبة عند تحويل الرواتب.');
            $('.employer .six h5').text('وصول سريع');
            $('.employer .six p').text('تأمين الاحتياجات المالية لموظفيك متى أرادوا.');
            $('.employer .seven h5').text('إنتاجية أعلى');
            $('.employer .seven p').text('إزالة الصعوبات المالية عن موظفيك ليكون تركيزهم على عملهم فقط.');
            $('.employer .eight h5').text('الحد من التسرب الوظيفي');
            $('.employer .eight p').text('تحسين الرضا والولاء الوظيفي لموظفيك.');
            $('.employer .buttons button').text('شاهد المزيد');
            // ................................................

            $('.how').attr('dir', 'rtl');
            $('.how .main-title h6').text('؟Qsalary كيف يعمل تطبيق ');
            $('.how .main-title h2').text(' خطوات بسيطة3حرر موظفيك مالياً بـ');
            $('.how .one h5').text('سجل شركتك');
            $('.how .one p').text('ستكون عملية التسجيل سهلة وبسيطة، من غير Qsalary مع أي تعقيدات أو عراقيل، فقط تواصل معنا.');
            $('.how .two h5').text('أضف موظفيك');
            $('.how .two p').text('أضف موظفيك وسجل بياناتهم بنقرات بسيطة، أو اترك لنا هذه المهمة.');
            $('.how .three h5').text('اختر الحد الأقصى للسحب لكل موظف');
            $('.how .three p').text('امنح موظفيك إمكانية الحصول على مستحقاتهم  بسهولة بما يتوافق مع قوانين حماية الأجور');
            // ................................................

            $('.financial').attr('dir', 'rtl');
            $('.financial .main-title h2').text('َلّص موظفيك من قلق الضغوطات المالية');
            $('.financial .one p').text('من الأفراد يمرون بصعوبات وضائقات مالية مرة سنوياً على الأقل');
            $('.financial .two p').text('هي الكلفة السنوية للخسارة بسبب نقص إنتاجية الموظفين الذين يعانون من ضغوطات مالية');
            $('.financial .three p').text('من نسب استقالة الموظفين ترجع إلى الضغوطات المالية');
            $('.financial .buttons button').text('اطلب عرضاً توضيحياً الآن');
            // ................................................

            $('.employee').attr('dir', 'rtl');
            $('.employee .main-title h2').text('مزايا الموظفين');
            $('.employee .one h5').text('24/7 سيولة مالية فورية');
            $('.employee .one p').text('هل أنت بحاجة إلى مصاريف طارئة؟ احصل على السيولة بضغطة زر.');
            $('.employee .two h5').text('لا تأخير في صرف مستحقاتك');
            $('.employee .two p').text('لن تشكل الإجراءات الإدارية عائقاً للحصول على مستحقاتك المالية.');
            $('.employee .three h5').text("لن يفوتك أي عرض ترويجي");
            $('.employee .three p').text('لن تكون نقص السيولة سبباً في تفويت أي خصم على الشراء بعد الآن.');
            $('.employee .four h5').text('إدارة مصاريفك من مكان واحد');
            $('.employee .four p').text('تمتع بتطبيق بسيط وسهل يُظهر المبلغ المتبقي من مستحقاتك من خلال هاتفك الذكي.');
            $('.employee .five h5').text('% فوائد0رسوم ثابتة، ');
            $('.employee .five p').text('لن تُطبَّق أية فوائد على أي مبلغ تقوم بسحبه، وإنَّما رسوم ثابتة لكل عملية سحب.');
            $('.employee .buttons button').text('شاهد المزيد');
            // ................................................

            $('.get-app').attr('dir', 'rtl');
            $('.get-app .caption p').text('َحمّل التطبيق الآن!');
            $('.get-app .caption h4').text('واحصل على السيولة بسهولة');
            $('.get-app .img-mob img').attr('src', './imgs/mobile-ar.png');
            // ................................................
    
            $('.partners').attr('dir', 'rtl');
            $('.partners .main-title h2').text('َشركاء النجاح');
            // ................................................

            $('.about').attr('dir', 'rtl');
            $('.about h5').text('من نحن ؟');
            $('.about h2').text('عن Zari On Time');
            $('.about p').text(`تطبيق يهتم بتقديم خدمات الحجز المتنوعة مستشفيات، صالونات، مطاعم، بنوك وغيرها.. في المملكة العربية السعودية ومصر وقريباً في دول الخليج، وتقدر تشوف كل العروض والكوبونات وأنت ببيتك.`);    
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
}
