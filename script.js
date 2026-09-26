
/* =========================================
   DIGITAL KABUHAYAN JAVASCRIPT
========================================= */


// ================= LESSON DATA =================

const lessons = [

    {
        title: "Get to know your phone",
        description:
            "Learn simple phone controls and how to open an app.",

        learn:
            "Learn simple phone controls and how to open an app.",

        useful:
            "These basics help you use your phone with confidence.",

        icon: "📱",

        steps: [
            {
                title: "Find the side button.",
                instruction:
                    "Look along the side edge of your phone.",
                image: "⏻"
            },

            {
                title: "Press the side button.",
                instruction:
                    "Press the side button once to wake the phone.",
                image: "📱"
            },

            {
                title: "Find an app icon.",
                instruction:
                    "Look for an app icon on your phone screen.",
                image: "📲"
            },

            {
                title: "Tap the app icon once.",
                instruction:
                    "Tap the app icon once to open it.",
                image: "👆"
            }
        ],

        quiz: {
            question:
                "What should you do to open an app?",

            answers: [
                "A. Tap the app icon once",
                "B. Shake the phone",
                "C. Press every button"
            ],

            correct: 0
        }
    },


    {
        title: "Send a kind message",
        description:
            "Learn how to send a simple and respectful message.",

        learn:
            "Learn how to open a messaging app and send a message.",

        useful:
            "Messaging helps you communicate with family, friends, and customers.",

        icon: "💬",

        steps: [
            {
                title: "Open the messaging app.",
                instruction:
                    "Find and tap your messaging app.",
                image: "💬"
            },

            {
                title: "Choose a person.",
                instruction:
                    "Select the person you want to message.",
                image: "👤"
            },

            {
                title: "Write your message.",
                instruction:
                    "Type a short and respectful message.",
                image: "⌨️"
            },

            {
                title: "Send your message.",
                instruction:
                    "Check your message before tapping send.",
                image: "➤"
            }
        ],

        quiz: {
            question:
                "What is a good message?",

            answers: [
                "A. A respectful message",
                "B. A message with insults",
                "C. A message containing private passwords"
            ],

            correct: 0
        }
    },


    {
        title: "Take a clear product photo",
        description:
            "Learn simple tips for taking clear photos.",

        learn:
            "Learn how to position your phone and take a clear picture.",

        useful:
            "Clear photos can help when showing products to customers.",

        icon: "📷",

        steps: [
            {
                title: "Clean the camera lens.",
                instruction:
                    "Make sure the camera lens is clean.",
                image: "📷"
            },

            {
                title: "Use enough light.",
                instruction:
                    "Move to a bright place with enough light.",
                image: "☀️"
            },

            {
                title: "Keep your phone steady.",
                instruction:
                    "Hold your phone steadily while taking the photo.",
                image: "📱"
            },

            {
                title: "Take the photo.",
                instruction:
                    "Tap the camera button to take the picture.",
                image: "📸"
            }
        ],

        quiz: {
            question:
                "What helps make a photo clearer?",

            answers: [
                "A. Good lighting",
                "B. Covering the camera",
                "C. Shaking the phone"
            ],

            correct: 0
        }
    },


    {
        title: "Search the internet",
        description:
            "Learn how to search for useful information online.",

        learn:
            "Learn how to use a search engine to find information.",

        useful:
            "Internet searching can help you find useful information.",

        icon: "🌐",

        steps: [
            {
                title: "Open a browser.",
                instruction:
                    "Open a browser such as Chrome or Edge.",
                image: "🌐"
            },

            {
                title: "Find the search box.",
                instruction:
                    "Look for the search box at the top of the page.",
                image: "🔎"
            },

            {
                title: "Type your question.",
                instruction:
                    "Type simple words describing what you need.",
                image: "⌨️"
            },

            {
                title: "Read the results.",
                instruction:
                    "Check the results and choose useful information.",
                image: "📄"
            }
        ],

        quiz: {
            question:
                "What should you type when searching?",

            answers: [
                "A. Useful keywords",
                "B. Your password",
                "C. Your OTP"
            ],

            correct: 0
        }
    },


    {
        title: "Online shopping basics",
        description:
            "Learn basic and safe online shopping practices.",

        learn:
            "Learn how to check product information before buying.",

        useful:
            "Safe shopping habits can help protect your money and information.",

        icon: "🛒",

        steps: [
            {
                title: "Find the product.",
                instruction:
                    "Search for the product you want to buy.",
                image: "🔎"
            },

            {
                title: "Check the product details.",
                instruction:
                    "Read the price, description, and reviews.",
                image: "📋"
            },

            {
                title: "Check the seller.",
                instruction:
                    "Look at the seller information before buying.",
                image: "👤"
            },

            {
                title: "Review before buying.",
                instruction:
                    "Check your order details before confirming.",
                image: "🛒"
            }
        ],

        quiz: {
            question:
                "What should you check before buying?",

            answers: [
                "A. Product and seller information",
                "B. Only the picture",
                "C. Nothing"
            ],

            correct: 0
        }
    },


    {
        title: "Stay safe online",
        description:
            "Learn simple ways to protect your personal information.",

        learn:
            "Learn basic habits for keeping your online information safe.",

        useful:
            "Online safety helps protect your accounts and personal information.",

        icon: "🔐",

        steps: [
            {
                title: "Protect your password.",
                instruction:
                    "Keep your password private.",
                image: "🔑"
            },

            {
                title: "Do not share your OTP.",
                instruction:
                    "Never give your OTP to another person.",
                image: "🔐"
            },

            {
                title: "Check suspicious messages.",
                instruction:
                    "Be careful with unexpected links and messages.",
                image: "⚠️"
            },

            {
                title: "Ask for help if unsure.",
                instruction:
                    "Talk to someone you trust when something seems suspicious.",
                image: "🙋"
            }
        ],

        quiz: {
            question:
                "Who should know your OTP?",

            answers: [
                "A. Only you",
                "B. Anyone who asks",
                "C. A stranger online"
            ],

            correct: 0
        }
    }

];


// ================= LANGUAGE =================

let currentLanguage = "English";

const uiTranslations = {
    English: {
        languageLabel: "Language", welcome: "WELCOME, LEARNER",
        heroTitle: "Your digital skills journey starts here.",
        heroDescription: "Take your time. Learn one small step at a time, and practice safely with simple information.",
        browseLessons: "Browse lessons", yourProgress: "YOUR PROGRESS", lessonsComplete: "lessons complete",
        beginnerLevel: "Beginner level", progressMessage: "Every new skill is a reason to feel proud.",
        learnPace: "LEARN AT YOUR OWN PACE", chooseLesson: "Choose a lesson", lessonCount: "6 lessons",
        startLesson: "Start lesson →", home: "Home", brand: "DIGITAL KABUHAYAN",
        whatLearn: "What you will learn", whyUseful: "Why it is useful", step: "Step", of: "of",
        replay: "Replay instruction", back: "Back", next: "Next", done: "Done ✓",
        practiceSafely: "Practice safely", practiceText: "Practice: Find the brightness control. You do not need to change any settings.",
        brightnessControl: "Brightness control", triedPractice: "I tried the practice", quickQuiz: "Quick quiz",
        finishLesson: "I understand — finish lesson",
        warning: "Practice uses pretend information only. Never enter real passwords, PINs, OTPs, or payment details.",
        footerBrand: "Digital Kabuhayan", footerText: "A patient digital teacher, one step at a time.",
        audioOn: "Audio: On", audioOff: "Audio: Off", audioFirst: "Turn Audio On first.",
        darkMode: "Dark mode", lightMode: "Light mode",
        completedAlert: "🎉 Great job! You completed this lesson."
    },
    Bisaya: {
        languageLabel: "Pinulongan", welcome: "MAAYONG PAG-ABOT, MAG-AARAL",
        heroTitle: "Dinhi magsugod ang imong panaw sa digital nga kahanas.",
        heroDescription: "Hinay-hinay lang. Pagkat-on og usa ka gamay nga lakang matag higayon, ug pagpraktis nga luwas gamit ang yano nga impormasyon.",
        browseLessons: "Tan-awa ang mga leksyon", yourProgress: "IMONG PROGRESO", lessonsComplete: "ka leksyon nahuman",
        beginnerLevel: "Nagsugod pa", progressMessage: "Ang matag bag-ong kahanas angay ikapasigarbo.",
        learnPace: "PAGKAT-ON SA IMONG KADAGAN", chooseLesson: "Pili og leksyon", lessonCount: "6 ka leksyon",
        startLesson: "Sugdi ang leksyon →", home: "Balay", brand: "DIGITAL KABUHAYAN",
        whatLearn: "Unsay imong makat-onan", whyUseful: "Nganong mapuslanon kini", step: "Lakang", of: "sa",
        replay: "Usba ang instruksyon", back: "Balik", next: "Sunod", done: "Human ✓",
        practiceSafely: "Pagpraktis nga luwas", practiceText: "Praktis: Pangitaa ang kontrol sa kahayag. Dili nimo kinahanglan usbon ang bisan unsang setting.",
        brightnessControl: "Kontrol sa kahayag", triedPractice: "Gisulayan nako ang praktis", quickQuiz: "Mubo nga quiz",
        finishLesson: "Nasabtan nako — tapusa ang leksyon",
        warning: "Peke ra nga impormasyon ang gigamit sa praktis. Ayaw gyud pagsulod og tinuod nga password, PIN, OTP, o detalye sa bayranan.",
        footerBrand: "Digital Kabuhayan", footerText: "Usa ka mapailobong digital nga magtutudlo, usa ka lakang matag higayon.",
        audioOn: "Audio: Nakasiga", audioOff: "Audio: Patay", audioFirst: "I-on una ang Audio.",
        darkMode: "Mangitngit nga mode", lightMode: "Hayag nga mode",
        completedAlert: "🎉 Maayo kaayo! Nahuman nimo kini nga leksyon."
    },
    Filipino: {
        languageLabel: "Wika", welcome: "MALIGAYANG PAGDATING, MAG-AARAL",
        heroTitle: "Dito nagsisimula ang iyong paglalakbay sa digital na kasanayan.",
        heroDescription: "Maglaan ng oras. Matuto ng isang maliit na hakbang sa bawat pagkakataon, at magsanay nang ligtas gamit ang simpleng impormasyon.",
        browseLessons: "Tingnan ang mga aralin", yourProgress: "IYONG PAG-UNLAD", lessonsComplete: "aralin ang natapos",
        beginnerLevel: "Baguhan", progressMessage: "Ang bawat bagong kasanayan ay dapat ikagalak.",
        learnPace: "MATUTO SA SARILI MONG BILIS", chooseLesson: "Pumili ng aralin", lessonCount: "6 na aralin",
        startLesson: "Simulan ang aralin →", home: "Tahanan", brand: "DIGITAL KABUHAYAN",
        whatLearn: "Ano ang matututunan mo", whyUseful: "Bakit ito mahalaga", step: "Hakbang", of: "ng",
        replay: "Ulitin ang tagubilin", back: "Bumalik", next: "Susunod", done: "Tapos ✓",
        practiceSafely: "Magsanay nang ligtas", practiceText: "Pagsasanay: Hanapin ang kontrol sa liwanag. Hindi mo kailangang baguhin ang anumang setting.",
        brightnessControl: "Kontrol sa liwanag", triedPractice: "Sinubukan ko ang pagsasanay", quickQuiz: "Mabilis na pagsusulit",
        finishLesson: "Naiintindihan ko — tapusin ang aralin",
        warning: "Kunwaring impormasyon lamang ang gamit sa pagsasanay. Huwag kailanman maglagay ng totoong password, PIN, OTP, o detalye ng pagbabayad.",
        footerBrand: "Digital Kabuhayan", footerText: "Isang matiising digital na guro, isang hakbang sa bawat pagkakataon.",
        audioOn: "Audio: Naka-on", audioOff: "Audio: Naka-off", audioFirst: "I-on muna ang Audio.",
        darkMode: "Madilim na mode", lightMode: "Maliwanag na mode",
        completedAlert: "🎉 Magaling! Natapos mo ang araling ito."
    }
};

function buildTranslatedLessons(content) {
    return content.map((item, index) => ({
        ...lessons[index], title: item[0], description: item[1], learn: item[2], useful: item[3],
        steps: lessons[index].steps.map((step, stepIndex) => ({
            ...step, title: item[4][stepIndex][0], instruction: item[4][stepIndex][1]
        })),
        quiz: { question: item[5], answers: item[6], correct: lessons[index].quiz.correct }
    }));
}

const translatedLessons = {
    Bisaya: buildTranslatedLessons([
        ["Ila-ila ang imong telepono", "Hibal-i ang yano nga kontrol sa telepono ug unsaon pag-abli og app.", "Hibal-i ang yano nga kontrol sa telepono ug unsaon pag-abli og app.", "Kining mga sukaranan makatabang nimo sa paggamit sa telepono nga adunay pagsalig.", [["Pangitaa ang buton sa kilid.", "Tan-awa ang daplin sa kilid sa imong telepono."], ["Pislita ang buton sa kilid.", "Pislita kausa ang buton sa kilid aron momata ang telepono."], ["Pangitaa ang icon sa app.", "Pangitaa ang icon sa app sa screen sa imong telepono."], ["I-tap kausa ang icon sa app.", "I-tap kausa ang icon sa app aron maabli kini."]], "Unsa ang buhaton aron maabli ang app?", ["A. I-tap kausa ang icon sa app", "B. I-uyog ang telepono", "C. Pislita ang tanang buton"]],
        ["Pagpadala og maayong mensahe", "Hibal-i unsaon pagpadala og yano ug matinahurong mensahe.", "Hibal-i unsaon pag-abli og messaging app ug pagpadala og mensahe.", "Ang pagmemensahe makatabang nimo sa pakig-istorya sa pamilya, higala, ug kustomer.", [["Ablihi ang messaging app.", "Pangitaa ug i-tap ang imong messaging app."], ["Pili og tawo.", "Pilia ang tawo nga gusto nimong mensahehan."], ["Isulat ang imong mensahe.", "I-type ang mubo ug matinahurong mensahe."], ["Ipadala ang imong mensahe.", "Susiha ang imong mensahe sa dili pa i-tap ang send."]], "Unsa ang maayong mensahe?", ["A. Usa ka matinahurong mensahe", "B. Mensahe nga naay insulto", "C. Mensahe nga adunay pribadong password"]],
        ["Pagkuha og klarong litrato sa produkto", "Hibal-i ang yano nga mga tip sa pagkuha og klarong litrato.", "Hibal-i unsaon pagpahimutang sa telepono ug pagkuha og klarong hulagway.", "Ang klarong litrato makatabang sa pagpakita sa produkto sa mga kustomer.", [["Limpyohi ang lente sa kamera.", "Siguroha nga limpyo ang lente sa kamera."], ["Gamita ang igo nga kahayag.", "Balhin sa hayag nga lugar nga adunay igo nga kahayag."], ["Hupti nga lig-on ang telepono.", "Hupti nga lig-on ang imong telepono samtang nagkuha og litrato."], ["Kuhaa ang litrato.", "I-tap ang buton sa kamera aron kuhaon ang hulagway."]], "Unsa ang makatabang aron moklaro ang litrato?", ["A. Maayong kahayag", "B. Tabonan ang kamera", "C. Uyogon ang telepono"]],
        ["Pagpangita sa internet", "Hibal-i unsaon pagpangita og mapuslanong impormasyon online.", "Hibal-i unsaon paggamit og search engine aron makakita og impormasyon.", "Ang pagpangita sa internet makatabang nimo sa pagpangita og mapuslanong impormasyon.", [["Ablihi ang browser.", "Ablihi ang browser sama sa Chrome o Edge."], ["Pangitaa ang search box.", "Pangitaa ang search box sa ibabaw sa panid."], ["I-type ang imong pangutana.", "I-type ang yano nga mga pulong nga naghulagway sa imong kinahanglan."], ["Basaha ang resulta.", "Susiha ang resulta ug pilia ang mapuslanong impormasyon."]], "Unsa ang i-type kung mangita?", ["A. Mapuslanong mga keyword", "B. Imong password", "C. Imong OTP"]],
        ["Mga sukaranan sa online shopping", "Hibal-i ang yano ug luwas nga paagi sa online shopping.", "Hibal-i unsaon pagsusi sa impormasyon sa produkto sa dili pa mopalit.", "Ang luwas nga pagpamalit makatabang sa pagpanalipod sa imong kuwarta ug impormasyon.", [["Pangitaa ang produkto.", "Pangitaa ang produkto nga gusto nimong paliton."], ["Susiha ang detalye sa produkto.", "Basaha ang presyo, paghulagway, ug mga review."], ["Susiha ang magbabaligya.", "Tan-awa ang impormasyon sa magbabaligya sa dili pa mopalit."], ["Susiha sa dili pa mopalit.", "Susiha ang detalye sa imong order sa dili pa kumpirmahon."]], "Unsa ang susihon sa dili pa mopalit?", ["A. Impormasyon sa produkto ug magbabaligya", "B. Ang hulagway ra", "C. Wala"]],
        ["Magpabiling luwas online", "Hibal-i ang yano nga mga paagi sa pagpanalipod sa imong personal nga impormasyon.", "Hibal-i ang sukaranang batasan aron luwas ang imong online nga impormasyon.", "Ang kaluwasan online makatabang sa pagpanalipod sa imong account ug personal nga impormasyon.", [["Panalipdi ang imong password.", "Hupti nga pribado ang imong password."], ["Ayaw ipaambit ang imong OTP.", "Ayaw gyud ihatag ang imong OTP sa laing tawo."], ["Susiha ang dudahang mensahe.", "Pag-amping sa kalit nga mga link ug mensahe."], ["Pangayo og tabang kung dili sigurado.", "Pakigsulti sa tawo nga imong gisaligan kung adunay kahadlokan."]], "Kinsa ang angay makaila sa imong OTP?", ["A. Ikaw ra", "B. Bisan kinsa nga mangayo", "C. Estranghero online"]]
    ]),
    Filipino: buildTranslatedLessons([
        ["Kilalanin ang iyong telepono", "Alamin ang simpleng kontrol sa telepono at kung paano magbukas ng app.", "Alamin ang simpleng kontrol sa telepono at kung paano magbukas ng app.", "Makakatulong ang mga batayang ito upang magamit mo ang iyong telepono nang may kumpiyansa.", [["Hanapin ang pindutan sa gilid.", "Tingnan ang gilid ng iyong telepono."], ["Pindutin ang pindutan sa gilid.", "Pindutin nang isang beses ang pindutan sa gilid upang magising ang telepono."], ["Hanapin ang icon ng app.", "Hanapin ang icon ng app sa screen ng iyong telepono."], ["I-tap nang isang beses ang icon ng app.", "I-tap nang isang beses ang icon ng app upang buksan ito."]], "Ano ang dapat mong gawin upang magbukas ng app?", ["A. I-tap nang isang beses ang icon ng app", "B. Iling ang telepono", "C. Pindutin ang bawat pindutan"]],
        ["Magpadala ng mabuting mensahe", "Alamin kung paano magpadala ng simple at magalang na mensahe.", "Alamin kung paano magbukas ng messaging app at magpadala ng mensahe.", "Tinutulungan ka ng pagmemensahe na makipag-usap sa pamilya, kaibigan, at mamimili.", [["Buksan ang messaging app.", "Hanapin at i-tap ang iyong messaging app."], ["Pumili ng tao.", "Piliin ang taong gusto mong padalhan ng mensahe."], ["Isulat ang iyong mensahe.", "Mag-type ng maikli at magalang na mensahe."], ["Ipadala ang iyong mensahe.", "Suriin ang iyong mensahe bago i-tap ang send."]], "Ano ang mabuting mensahe?", ["A. Isang magalang na mensahe", "B. Mensaheng may pang-iinsulto", "C. Mensaheng may pribadong password"]],
        ["Kumuha ng malinaw na larawan ng produkto", "Alamin ang simpleng tip para kumuha ng malinaw na larawan.", "Alamin kung paano iposisyon ang iyong telepono at kumuha ng malinaw na larawan.", "Makakatulong ang malinaw na larawan sa pagpapakita ng produkto sa mga mamimili.", [["Linisin ang lente ng camera.", "Tiyaking malinis ang lente ng camera."], ["Gumamit ng sapat na liwanag.", "Lumipat sa maliwanag na lugar na may sapat na liwanag."], ["Panatilihing matatag ang telepono.", "Hawakan nang matatag ang iyong telepono habang kumukuha ng larawan."], ["Kunin ang larawan.", "I-tap ang pindutan ng camera upang kunan ng larawan."]], "Ano ang nakakatulong upang luminaw ang larawan?", ["A. Magandang liwanag", "B. Takpan ang camera", "C. Iling ang telepono"]],
        ["Maghanap sa internet", "Alamin kung paano maghanap ng kapaki-pakinabang na impormasyon online.", "Alamin kung paano gumamit ng search engine upang makahanap ng impormasyon.", "Makakatulong ang paghahanap sa internet upang makahanap ka ng kapaki-pakinabang na impormasyon.", [["Buksan ang browser.", "Magbukas ng browser tulad ng Chrome o Edge."], ["Hanapin ang search box.", "Hanapin ang search box sa itaas ng pahina."], ["I-type ang iyong tanong.", "Mag-type ng simpleng salita na naglalarawan sa kailangan mo."], ["Basahin ang mga resulta.", "Suriin ang mga resulta at pumili ng kapaki-pakinabang na impormasyon."]], "Ano ang dapat mong i-type kapag naghahanap?", ["A. Kapaki-pakinabang na keyword", "B. Ang iyong password", "C. Ang iyong OTP"]],
        ["Mga batayan ng online shopping", "Alamin ang batayan at ligtas na paraan ng online shopping.", "Alamin kung paano suriin ang impormasyon ng produkto bago bumili.", "Makakatulong ang ligtas na pamimili upang maprotektahan ang iyong pera at impormasyon.", [["Hanapin ang produkto.", "Hanapin ang produktong gusto mong bilhin."], ["Suriin ang detalye ng produkto.", "Basahin ang presyo, paglalarawan, at mga review."], ["Suriin ang nagbebenta.", "Tingnan ang impormasyon ng nagbebenta bago bumili."], ["Suriin bago bumili.", "Suriin ang detalye ng iyong order bago kumpirmahin."]], "Ano ang dapat suriin bago bumili?", ["A. Impormasyon ng produkto at nagbebenta", "B. Larawan lamang", "C. Wala"]],
        ["Manatiling ligtas online", "Alamin ang simpleng paraan upang maprotektahan ang iyong personal na impormasyon.", "Alamin ang pangunahing gawi upang mapanatiling ligtas ang iyong online na impormasyon.", "Nakakatulong ang kaligtasan online upang maprotektahan ang iyong account at personal na impormasyon.", [["Protektahan ang iyong password.", "Panatilihing pribado ang iyong password."], ["Huwag ibahagi ang iyong OTP.", "Huwag kailanman ibigay ang iyong OTP sa ibang tao."], ["Suriin ang kahina-hinalang mensahe.", "Mag-ingat sa hindi inaasahang link at mensahe."], ["Humingi ng tulong kapag hindi sigurado.", "Kausapin ang isang taong pinagkakatiwalaan mo kapag may kahina-hinala."]], "Sino ang dapat nakakaalam ng iyong OTP?", ["A. Ikaw lamang", "B. Kahit sinong humihingi", "C. Isang estranghero online"]]
    ])
};

function getCurrentLessons() {
    return translatedLessons[currentLanguage] || lessons;
}

function translatePage() {
    const text = uiTranslations[currentLanguage];
    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.textContent = text[element.dataset.i18n];
    });
    document.querySelectorAll("[data-lesson-title]").forEach(element => {
        element.textContent = getCurrentLessons()[element.dataset.lessonTitle].title;
    });
    document.querySelectorAll("[data-lesson-description]").forEach(element => {
        element.textContent = getCurrentLessons()[element.dataset.lessonDescription].description;
    });
    updateAudioLabel();
    updateDarkModeLabel();
}


// ================= VARIABLES =================

let currentLesson = 0;
let currentStep = 0;

let completedLessons = [];

let quizAnswered = false;
let practiceDone = false;


// ================= HOME =================

function scrollToLessons() {

    document
        .getElementById("lessons")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ================= OPEN LESSON =================

function openLesson(index) {

    currentLesson = index;
    currentStep = 0;

    quizAnswered = false;
    practiceDone = false;

    document
        .getElementById("homePage")
        .classList.add("hidden");

    document
        .getElementById("lessonPage")
        .classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    loadLesson();
}


// ================= LOAD LESSON =================

function loadLesson(reset = true) {

    const lesson = getCurrentLessons()[currentLesson];

    document.getElementById("lessonTitle")
        .textContent = lesson.title;

    document.getElementById("lessonDescription")
        .textContent = lesson.description;

    document.getElementById("learnText")
        .textContent = lesson.learn;

    document.getElementById("usefulText")
        .textContent = lesson.useful;

    document.getElementById("quizQuestion")
        .textContent = lesson.quiz.question;

    const options =
        document.querySelectorAll(".quiz-option");

    lesson.quiz.answers.forEach((answer, index) => {

        options[index].textContent = answer;

        if (reset) {
            options[index].classList.remove("correct");
            options[index].classList.remove("wrong");
            options[index].disabled = false;
        }

    });

    if (reset) {
        document.getElementById("practiceCheck").checked = false;
        document.getElementById("finishBtn").disabled = true;
        document.getElementById("finishBtn").classList.remove("active");
    }

    updateStep();

    // updateQuizButtons();
}


// ================= STEP =================

function updateStep() {

    const lesson = getCurrentLessons()[currentLesson];

    const step = lesson.steps[currentStep];

    document.getElementById("stepNumber")
        .textContent = currentStep + 1;

    document.getElementById("currentStep")
        .textContent = currentStep + 1;

    document.getElementById("stepTitle")
        .textContent = step.title;

    document.getElementById("stepInstruction")
        .textContent = step.instruction;

    document.getElementById("stepImage")
        .textContent = step.image;


    const percentage =
        ((currentStep + 1) / lesson.steps.length) * 100;

    document.getElementById("stepPercent")
        .textContent = percentage + "%";

    document.getElementById("stepProgress")
        .style.width = percentage + "%";


    const backButton =
        document.getElementById("backBtn");

    if (currentStep === 0) {

        backButton.disabled = true;

        backButton.style.opacity = "0.5";

    } else {

        backButton.disabled = false;

        backButton.style.opacity = "1";
    }


    const nextButton =
        document.getElementById("nextBtn");

    if (currentStep === lesson.steps.length - 1) {

        nextButton.textContent = uiTranslations[currentLanguage].done;

    } else {

        nextButton.textContent = `${uiTranslations[currentLanguage].next} →`;

    }
}


// ================= NEXT =================

function nextStep() {

    const lesson = getCurrentLessons()[currentLesson];

    if (currentStep < lesson.steps.length - 1) {

        currentStep++;

        updateStep();

        window.scrollTo({
            top: 200,
            behavior: "smooth"
        });

    } else {

        document
            .querySelector(".practice-card")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
}


// ================= BACK =================

function previousStep() {

    if (currentStep > 0) {

        currentStep--;

        updateStep();

    }
}


// ================= PRACTICE =================

function checkPractice() {

    const checkbox =
        document.getElementById("practiceCheck");

    practiceDone = checkbox.checked;

    updateFinishButton();
}


// ================= QUIZ =================

function answerQuiz(button, correct) {

    if (quizAnswered) {
        return;
    }

    quizAnswered = true;

    if (correct) {

        button.classList.add("correct");

    } else {

        button.classList.add("wrong");

        const correctIndex =
            getCurrentLessons()[currentLesson].quiz.correct;

        document
            .querySelectorAll(".quiz-option")
            [correctIndex]
            .classList.add("correct");
    }


    document
        .querySelectorAll(".quiz-option")
        .forEach(btn => {
            btn.disabled = true;
        });


    updateFinishButton();
}


// ================= FINISH BUTTON =================

function updateFinishButton() {

    const finishButton =
        document.getElementById("finishBtn");

    if (practiceDone && quizAnswered) {

        finishButton.disabled = false;

        finishButton.classList.add("active");

    } else {

        finishButton.disabled = true;

        finishButton.classList.remove("active");
    }
}


// ================= FINISH LESSON =================

function finishLesson() {

    if (!quizAnswered || !practiceDone) {
        return;
    }

    if (!completedLessons.includes(currentLesson)) {

        completedLessons.push(currentLesson);

    }

    updateHomeProgress();

    alert(uiTranslations[currentLanguage].completedAlert);

    goHome();
}


// ================= UPDATE HOME PROGRESS =================

function updateHomeProgress() {

    const count =
        completedLessons.length;

    document.getElementById("completedCount")
        .textContent = count;


    const percentage =
        (count / lessons.length) * 100;

    document.getElementById("progressFill")
        .style.width = percentage + "%";
}


// ================= HOME =================

function goHome() {

    document
        .getElementById("lessonPage")
        .classList.add("hidden");

    document
        .getElementById("homePage")
        .classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================= AUDIO =================

let audioEnabled = false;
let darkModeEnabled = false;

function updateAudioLabel() {
    document.getElementById("audioLabel").textContent = audioEnabled
        ? uiTranslations[currentLanguage].audioOn
        : uiTranslations[currentLanguage].audioOff;
}

function updateDarkModeLabel() {
    const button = document.getElementById("darkModeBtn");
    const enabled = document.body.classList.contains("dark-mode");

    document.getElementById("darkModeLabel").textContent = enabled
        ? uiTranslations[currentLanguage].lightMode
        : uiTranslations[currentLanguage].darkMode;
    button.setAttribute("aria-pressed", enabled);
}

document
    .getElementById("audioBtn")
    .addEventListener("click", function () {

        audioEnabled = !audioEnabled;

        updateAudioLabel();
    });

document.getElementById("darkModeBtn").addEventListener("click", function () {
    darkModeEnabled = !darkModeEnabled;
    document.body.classList.toggle("dark-mode", darkModeEnabled);
    updateDarkModeLabel();
});


function readInstruction() {

    if (!audioEnabled) {

        alert(uiTranslations[currentLanguage].audioFirst);

        return;
    }

    const text =
        getCurrentLessons()[currentLesson]
        .steps[currentStep]
        .instruction;

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = currentLanguage === "Filipino" ? "fil-PH"
        : currentLanguage === "Bisaya" ? "ceb-PH" : "en-US";

    window.speechSynthesis.speak(speech);
}


document.getElementById("language").addEventListener("change", function () {
    currentLanguage = this.value;
    translatePage();

    if (!document.getElementById("lessonPage").classList.contains("hidden")) {
        loadLesson(false);
    }
});

translatePage();
