const questions = [
    {
        question: "1. Apa alasan yang mendasari untuk menjunjung tinggi persatuan dan kesatuan pada Proklamasi Kemerdekaan Indonesia? ",
        options: ["A. Adanya persamaan nasib karena dijajah", "B. Karena ingin membangun kerajaan yang sangat berkuasa", 
            "C. Semua wilayah di Indonesia ingin memiliki otonomi sendiri", "D. Persatuan dan kesatuan pada proklamasi hanya sebagai simbol agar diterima masyarakat luas"],
        answer: "A. Adanya persamaan nasib karena dijajah"
    },
    {
        question: "2. Apa yang dimaksud dengan wawasan nusantara?",
        options: ["A. Konsep untuk mencapai kemajuan ekonomi di wilayah NKRI", "B. Cara pandang bangsa Indonesia terhadap diri dan lingkungannya", 
            "C. Strategi mempertahankan wilayah Nusantara dari ancaman militer", "D. Program pembangunan nasional berbasis kebudayaan"],
        answer: "B. Cara pandang bangsa Indonesia terhadap diri dan lingkungannya"
    },
    {
        question: "3. Apa yang termasuk dalam trigatra wawasan nusantara?",
        options: ["A. Ideologi, politik, dan sosial budaya", "B. Geografi, sumber daya alam, dan penduduk", 
            "C. Pertahanan, keamanan, dan ekonomi", "D. Hukum, teknologi, dan budaya"],
        answer: "B. Geografi, sumber daya alam, dan penduduk"
    },
    {
        question: "4. Wilayah Nusantara pernah dijajah oleh beberapa negara. Negara manakah yang bukan penjajah Indonesia?",
        options: [ "A. Jepang", "B. Belanda", "C. Inggris", "D. Jerman"],
        answer: "D. Jerman"
    },
    {
        question: "5. Apa tujuan internal dari wawasan nusantara?",
        options: ["A. Memperjuangkan kemerdekaan Indonesia", "B. Mewujudkan kebahagiaan umat manusia", 
            "C. Mewujudkan kesatuan di semua aspek kehidupan nasional", "D. Menjalin hubungan baik dengan negara lain"],
        answer: "C. Mewujudkan kesatuan di semua aspek kehidupan nasional"
    },
    {
        question: "6. Apa tujuan wawasan nusantara secara eksternal?",
        options: ["A. Menjaga persatuan dan kesatuan bangsa", "B. Membantu mewujudkan perdamaian dunia", 
            "C. Mengembangkan ekonomi nasional", "D. Mengukuhkan kekuatan militer"],
        answer: "B. Membantu mewujudkan perdamaian dunia"
    },
    {
        question: "7. 'Negara Indonesia ialah Negara Kesatuan yang berbentuk Republik' adalah bunyi UUD berdasarkan? ",
        options: ["A. Pasal 2 ayat 1", "B. Pasal 1 ayat 1", 
            "C. Pasal 1 ayat 2", "D. Pasal 3 ayat 1"],
        answer: "B. Pasal 1 ayat 1"
    },
    {
        question: "8. Apa tujuan Negara Kesatuan Republik Indonesia yang terdapat dalam Pembukaan UUD 1945?",
        options: ["A. Mengatur pembagian wewenang antar daerah", "B. Membentuk pemerintah yang terpusat di daerah", 
            "C. Melindungi segenap bangsa Indonesia dan mencerdaskan kehidupan bangsa", "D. Memberikan otonomi seluas-luasnya kepada daerah"],
        answer: "C. Melindungi segenap bangsa Indonesia dan mencerdaskan kehidupan bangsa"
    },
    {
        question: "9. Apa fungsi dari Wawasan Nusantara bagi masyarakat Indonesia?",
        options: ["A. Sebagai dasar untuk memisahkan daerah satu dengan lainnya", "B. Sebagai cara pandang dan sikap untuk mewujudkan tujuan negara", 
            "C. Sebagai alat untuk mempertahankan kekuasaan pemerintah pusat", "D. Sebagai cara untuk memaksimalkan pembangunan ekonomi"],
        answer: "B. Sebagai cara pandang dan sikap untuk mewujudkan tujuan negara"
    },
    {
        question: "10. Apa hakikat dari Wawasan Nusantara?",
        options: ["A. Keberagaman budaya dan suku bangsa Indonesia", "B. Kesatuan dan persatuan bangsa Indonesia di wilayah Nusantara", 
            "C. Kemampuan menjaga perbatasan negara", "D. Cara pandang untuk meningkatkan ekonomi Indonesia"],
        answer: "B. Kesatuan dan persatuan bangsa Indonesia di wilayah Nusantara"
    },
    {
        question: "11. Berdasarkan geografi, Indonesia berada di antara…",
        options: ["A. Samudra Pasifik dan Samudra Atlantik", "B. Benua Asia dan Afrika", 
            "C. Samudra Hindia dan Samudra Pasifik", "D. Samudra Pasifik dan Laut Mediterania"],
        answer: "C. Samudra Hindia dan Samudra Pasifik"
    },
    {
        question: "12. Apa arti kata 'wawasan' menurut asal katanya dalam bahasa Jawa?",
        options: ["A. Melihat dengan mata", "B. Pandangan, tinjauan, atau cara melihat", 
            "C. Memperhatikan lingkungan sekitar", "D. Meneliti dan memahami keadaan"],
        answer: "B. Pandangan, tinjauan, atau cara melihat"
    },
    {
        question: "13. Kapan Sumpah Pemuda dilaksanakan? ",
        options: ["A. 1 Juni 1945", "B. 28 Oktober 1929", 
            "C. 28 Oktober 1928", "D. 1 Oktober 1967"],
        answer: "C. 28 Oktober 1928"
    },
    {
        question: "14. Tujuan NKRI terdapat pada UUD alinea ke berapa? ",
        options: ["A. Pertama", "B. Kedua", 
            "C. Ketiga", "D. Keempat"],
        answer: "D. Keempat"
    },
    {
        question: "15. Siapakah tokoh yang menjadi pembangkit semangat dalam melawan penjajah pada video pertama? ",
        options: ["A. Sutan Sjahrir", "B. Bung Karno", 
            "C. Bung Hatta", "D. Bung Tomo"],
        answer: "D. Bung Tomo"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(optionElement, option));
        optionsElement.appendChild(optionElement);
    });
    nextButton.classList.add('hidden');
}

function selectOption(optionElement, selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        optionElement.style.backgroundColor = 'lightgreen';
    } else {
        optionElement.style.backgroundColor = 'lightcoral';
    }
    Array.from(optionsElement.children).forEach(child => {
        child.removeEventListener('click', () => selectOption(child, child.textContent));
    });
    nextButton.classList.remove('hidden');
}

function showResult() {
    questionElement.classList.add('hidden');
    optionsElement.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.textContent = `Skor Anda: ${score} dari ${questions.length}`;
    optionsElement.innerHTML = '';
    resultElement.style.animation = 'fadeIn 1s ease-in-out'; // Memicu animasi
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    questionElement.classList.remove('hidden');
    optionsElement.classList.remove('hidden');
    resultElement.classList.add('hidden');
    showQuestion();
});

showQuestion();