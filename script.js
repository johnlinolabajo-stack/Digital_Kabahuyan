
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

function loadLesson() {

    const lesson = lessons[currentLesson];

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

        options[index].classList.remove("correct");
        options[index].classList.remove("wrong");

        options[index].disabled = false;

    });

    document.getElementById("practiceCheck").checked = false;

    document.getElementById("finishBtn").disabled = true;

    document.getElementById("finishBtn")
        .classList.remove("active");

    updateStep();

    // updateQuizButtons();
}


// ================= STEP =================

function updateStep() {

    const lesson = lessons[currentLesson];

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

        nextButton.textContent = "Done ✓";

    } else {

        nextButton.textContent = "Next →";

    }
}


// ================= NEXT =================

function nextStep() {

    const lesson = lessons[currentLesson];

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
            lessons[currentLesson].quiz.correct;

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

    alert(
        "🎉 Great job! You completed this lesson."
    );

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

document
    .getElementById("audioBtn")
    .addEventListener("click", function () {

        audioEnabled = !audioEnabled;

        if (audioEnabled) {

            this.innerHTML = "🔊 <b>Audio: On</b>";

        } else {

            this.innerHTML = "🔊 <b>Audio: Off</b>";

        }
    });


function readInstruction() {

    if (!audioEnabled) {

        alert("Turn Audio On first.");

        return;
    }

    const text =
        lessons[currentLesson]
        .steps[currentStep]
        .instruction;

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);
}