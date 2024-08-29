document.addEventListener('DOMContentLoaded', function() {
    const humanizeBtn = document.getElementById('humanize-btn');
    const clearBtn = document.getElementById('clear-btn');
    const inputTextarea = document.querySelector('.input-container textarea');
    const outputContainer = document.querySelector('.output-container');
    const outputText = document.getElementById('output-text');
    const outputPlaceholder = document.getElementById('output-placeholder');
    const timer = document.getElementById('timer');
    const wordCountInput = document.querySelector('.input-container .word-count');
    const wordCountOutput = document.querySelector('.output-container .word-count');
    const copyIcon = document.querySelector('.copy-icon');
    const responseNumber = document.getElementById('response-number');
    const prevResponseBtn = document.getElementById('prev-response');
    const nextResponseBtn = document.getElementById('next-response');

    let responses = [];
    let currentResponseIndex = 0;

    // Calculate word count for input textarea
    inputTextarea.addEventListener('input', function() {
        const wordCount = this.value.trim().split(/\s+/).filter(word => word.length > 0).length;
        wordCountInput.textContent = `Number of Words: ${wordCount}`;
    });

    // Display and calculate word count for output text
    function displayOutput(response) {
        outputText.textContent = response;
        const wordCount = response.trim().split(/\s+/).filter(word => word.length > 0).length;
        wordCountOutput.textContent = `Number of Words: ${wordCount}`;
    }

    // Handle Humanize AI button click
    humanizeBtn.addEventListener('click', function() {
        const inputText = inputTextarea.value.trim();
        if (inputText === '') return;

        timer.style.display = 'block';
        outputPlaceholder.style.display = 'none';
        outputText.style.display = 'none';
        outputContainer.style.display = 'block';

        setTimeout(() => {
            // Simulate API call to humanize text
            const humanizedText = `${inputText} (Humanized)`;
            responses.push(humanizedText);
            currentResponseIndex = responses.length - 1;
            displayOutput(humanizedText);
            timer.style.display = 'none';
            outputText.style.display = 'block';
            responseNumber.textContent = `${currentResponseIndex + 1}/${responses.length}`;
        }, 2000);
    });

    // Handle Clear button click
    clearBtn.addEventListener('click', function() {
        inputTextarea.value = '';
        outputText.textContent = '';
        outputPlaceholder.style.display = 'block';
        outputText.style.display = 'none';
        wordCountInput.textContent = 'Number of Words: 0';
        wordCountOutput.textContent = 'Number of Words: 0';
        outputContainer.style.display = 'none';
        responses = [];
        currentResponseIndex = 0;
        responseNumber.textContent = `1/1`;
    });

    // Handle copy icon click
    copyIcon.addEventListener('click', function() {
        const textToCopy = outputText.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Text copied to clipboard');
        }).catch(err => {
            alert('Failed to copy text');
        });
    });

    // Handle response navigation
    prevResponseBtn.addEventListener('click', function() {
        if (currentResponseIndex > 0) {
            currentResponseIndex--;
            displayOutput(responses[currentResponseIndex]);
            responseNumber.textContent = `${currentResponseIndex + 1}/${responses.length}`;
        }
    });

    nextResponseBtn.addEventListener('click', function() {
        if (currentResponseIndex < responses.length - 1) {
            currentResponseIndex++;
            displayOutput(responses[currentResponseIndex]);
            responseNumber.textContent = `${currentResponseIndex + 1}/${responses.length}`;
        }
    });
    const modeElements = document.querySelectorAll('.modeselection div');

    modeElements.forEach(element => {
        element.addEventListener('click', function() {
            modeElements.forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        });
    });
    

modeElements.forEach(element => {
element.addEventListener('click', function() {
modeElements.forEach(el => el.classList.remove('active'));
this.classList.add('active');
});
});
});