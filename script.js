// JS for MENU
let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.stile.right = "0";
}
function hideMenu(){
    navLinks.stile.right = "-200px";
}

// Quiz data
const quizzes = {
    quiz1: {
        title: "Викторина о ЛЭТИ",
        questions: [
            {
                question: "В каком году был основан ЛЭТИ?",
                options: [
                    { text: "1886", correct: true },
                    { text: "1899", correct: false },
                    { text: "1901", correct: false },
                    { text: "1917", correct: false }
                ]
            }
        ]
    },
    quiz2: {
        title: "Историческая викторина",
        questions: [
            {
                question: "Какое событие произошло раньше?",
                options: [
                    { text: "Основание ЛЭТИ", correct: true },
                    { text: "Первая радиопередача Попова", correct: false },
                    { text: "Революция 1917 года", correct: false },
                    { text: "Великая Отечественная война", correct: false }
                ]
            }
        ]
    },
    quiz3: {
        title: "Историческая викторина",
        questions: [
            {
                question: "Кто был первым ректором ЛЭТИ?",
                options: [
                    { text: "А.С. Попов", correct: false },
                    { text: "П.Л. Капица", correct: false },
                    { text: "В.И. Вернадский", correct: false },
                    { text: "Н.Г. Писаревский", correct: true }
                ]
            }
        ]
    }
};
// Check loaded page
document.addEventListener('DOMContentLoaded', function() {
    for (const quizId in quizzes) {
        initQuiz(quizId);
    }
});

// Initializing quizez
function initQuiz(quizId) {
    const quizContainer = document.getElementById(quizId);
    const quizData = quizzes[quizId];
    
    quizData.questions.forEach((q, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `<p>${qIndex + 1}. ${q.question}</p>`;
        
        const choicesDiv = document.createElement('div');
        choicesDiv.className = 'quiz-questions';

        q.options.forEach((opt, optIndex) => {
            const optionId = `${quizId}_q${qIndex}_opt${optIndex}`;
            const optionDiv = document.createElement('label');
            optionDiv.className = 'quiz-option';
            optionDiv.innerHTML = `
                <input type="radio" name="${quizId}_q${qIndex}" value="${optIndex}">
                ${opt.text}
            `;
            choicesDiv.appendChild(optionDiv);
        });
        questionDiv.appendChild(choicesDiv  );
        quizContainer.appendChild(questionDiv);
    });
}

// Checking quizez answers
function checkAnswers(quizId) {
    const quizData = quizzes[quizId];
    const resultDiv = document.getElementById(`result${quizId.slice(-1)}`);
    
    quizData.questions.forEach((q, qIndex) => {
        const selectedOption = document.querySelector(
            `input[name="${quizId}_q${qIndex}"]:checked`
        );

        if (selectedOption) {
            const optIndex = parseInt(selectedOption.value);
            if (q.options[optIndex].correct) {
                answer = 'Результат: Верно!';
                bgColor = '#d4edda';
                fontColor = '#155724';
            } else {
                answer = 'Результат: Неверно:('
                bgColor = '#f8d7da';
                fontColor = '#721c24';
            }
        } else {
            answer = 'Выберете вариант ответа!'
            bgColor = '#f8d7da';
            fontColor = '#721c24';
        }
    });
    
    resultDiv.textContent = answer;
    resultDiv.style.backgroundColor = bgColor;
    resultDiv.style.color = fontColor;
}

// Popups

document.querySelectorAll('.openPopup').forEach(item => {
    item.addEventListener('click', function() {
        popupNum = this.id.slice(-1);
        const popup = document.getElementById(`popup${popupNum}`);
        popup.style.display = "flex";
    });
});

document.querySelectorAll('.closePopup').forEach(item => {
    item.addEventListener('click', function(){
        popupNum = this.id.slice(-1);
        const popup = document.getElementById(`popup${popupNum}`);
        popup.style.display = "none";
    });
});
