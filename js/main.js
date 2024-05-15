

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

    if ($(window).scrollTop() > employerOffset) {
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


$('.faqs .group-quiz .quiz').click(function(){
    $(this).children('div').toggleClass('add');
    $(this).parent().siblings().children().children('div').removeClass('add');
    $(this).siblings().slideToggle(300);
    $(this).parent().siblings().children('.answer').slideUp(300);
})

// in the begining..

$(document).ready(()=>{
    $('.faqs .group-quiz .quiz div').eq(0).addClass('add');
    let answerFaq = Array.from($('.faqs .group-quiz .answer'));
    
    for(let i = 0; i < answerFaq.length; i++){
        $(answerFaq[0]).slideDown();
        if(i > 0)
        {
            $(answerFaq[i]).slideUp();
        }
    };
})


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

            $('.faqs').attr('dir', 'ltr');
            $('.faqs .main-title h2').text('FAQs');
            $('.faqs .group-quiz .quiz h5').eq(0).text('What is Qsalary ?');
            $('.faqs .group-quiz .quiz h5').eq(1).text('Is Qsalary a loan service ?');
            $('.faqs .group-quiz .quiz h5').eq(2).text('For whom is Qsalary ?');
            $('.faqs .group-quiz .quiz h5').eq(3).text('Is there a minimum salary requirement for this app ?');
            $('.faqs .group-quiz .quiz h5').eq(4).text('Is there a minimum number of employees required from the company ?');
            $('.faqs .group-quiz .quiz h5').eq(5).text('Does Qsalary charge any interest ?');
            $('.faqs .buttons button').text('See more');
            // ................................................

            $('.partners').attr('dir', 'ltr');
            $('.partners .main-title h2').text('َOur Success Partners');
            // ................................................
            
            $('.start').attr('dir', 'ltr');
            $('.start .main-title h6').text('Start Now');
            $('.start .main-title h2').text('Ready to empower your employees with anytime wage access ?');
            $('.start .item i').addClass('me-2');
            $('.start .item i').removeClass('ms-2');
            $('.start .item span').eq(0).text('Quick & easy');
            $('.start .item span').eq(1).text('Automation');
            $('.start .item span').eq(2).text('No Interests');
            $('.start .item span').eq(3).text('Stress Free');
            $('.start .buttons button').text('REQUEST A DEMO');
            // ................................................
            
            $('.contact').attr('dir', 'ltr');
            $('.contact .main-title h6').eq(0).text('Stay in the know');
            $('.contact .main-title h3').eq(0).text('Subscribe Mailing List');
            $('.contact .main-title .subscribe input').attr('placeholder', 'Email address');
            $('.contact .main-title .subscribe button').text('Subscribe');
            $('.contact .main-title h6').eq(1).text('Follow Us');
            $('.contact .main-title h3').eq(1).text('Social Media Accounts');
            // ................................................

            $('footer').attr('dir', 'ltr');
            $('footer .navigate a').eq(0).text('Blog');
            $('footer .navigate a').eq(1).text('FAQ');
            $('footer .navigate a').eq(2).text('Privacy Policy');
            $('footer .powered h6').text('Powered by ASFA Ventures');
            $('footer .rights h6').text('All rights reserved© Qsalary 2023');
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
    
            $('.faqs').attr('dir', 'rtl');
            $('.faqs .main-title h2').text('الأسئلة الشائعة');
            $('.faqs .group-quiz .quiz h5').eq(0).text('ما هو تطبيق Qsalary ؟');
            $('.faqs .group-quiz .quiz h5').eq(1).text('هل Qsalary خدمة قروض ؟');
            $('.faqs .group-quiz .quiz h5').eq(2).text('لمن تطبيق Qsalary ؟');
            $('.faqs .group-quiz .quiz h5').eq(3).text('هل يوجد حد أدنى للرواتب المؤهلة للاستفادة من هذا التطبيق ؟');
            $('.faqs .group-quiz .quiz h5').eq(4).text('هل يوجد حد أدنى لعدد الموظفين في الشركة ؟');
            $('.faqs .group-quiz .quiz h5').eq(5).text('هل يتقاضى Qsalary أي فائدة ؟');
            $('.faqs .buttons button').text('شـاهد الـمـزيـد');
            // ................................................

            $('.partners').attr('dir', 'rtl');
            $('.partners .main-title h2').text('َشركاء النجاح');
            // ................................................

            $('.start').attr('dir', 'rtl');
            $('.start .main-title h6').text('ابدأ الآن');
            $('.start .main-title h2').text('جاهز لتمكين موظفيك من الوصول إلى رواتبهم المستحقة متى أرادوا ؟');
            $('.start .item i').addClass('ms-2');
            $('.start .item i').removeClass('me-2');
            $('.start .item span').eq(0).text('سهل وسريع');
            $('.start .item span').eq(1).text('بشكل آلي');
            $('.start .item span').eq(2).text('دون فوائد');
            $('.start .item span').eq(3).text('خالي من الضغوطات');
            $('.start .buttons button').text('اطلب عرضاً توضيحياً الآن');
            // ................................................

            $('.contact').attr('dir', 'rtl');
            $('.contact .main-title h6').eq(0).text('ابقى على اطلاع');
            $('.contact .main-title h3').eq(0).text('اشترك بالنشرة البريدية');
            $('.contact .main-title .subscribe input').attr('placeholder', 'بريدك الإلكتروني');
            $('.contact .main-title .subscribe button').text('إشتراك');
            $('.contact .main-title h6').eq(1).text('تابعنا على');
            $('.contact .main-title h3').eq(1).text('منصات التواصل الإجتماعي');
            // ................................................

            $('footer').attr('dir', 'rtl');
            $('footer .navigate a').eq(0).text('المدونة');
            $('footer .navigate a').eq(1).text('الأسئلة الشائعة');
            $('footer .navigate a').eq(2).text('سياسة الخصوصية');
            $('footer .powered h6').text('مدعوم من مشاريع ASFA');
            $('footer .rights h6').text('جميع الحقوق محفوظة © Qsalary 2023');
        }
    })
}
