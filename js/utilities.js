function getInputFieldAndText(firstInput, secondInput, firstText, secondText) {
    const firstInputField = document.getElementById(firstInput);
    const firstInputValue = firstInputField.value;
    const secondInputField = document.getElementById(secondInput);
    const secondInputValue = secondInputField.value;
    const firstTextElement = document.getElementById(firstText);
    firstTextElement.innerText = firstInputValue;

    const secondTextElement = document.getElementById(secondText);
    secondTextElement.innerText = secondInputValue;



    return [firstInputValue, secondInputValue];

}


function appendClass(text, area) {
    const areaList = document.getElementById('area-list');
    const li = document.createElement('li');
    li.innerHTML = `<span>${text} &nbsp;</span><span>${area}cm<sup>2</sup></span>`;
    areaList.appendChild(li);
}


function TextToField() {
    const pFirstTextElement = document.getElementById('pTextB');
    const pSecondTextElement = document.getElementById('pTextH');

    const pFirstTextValue = pFirstTextElement.innerText;
    const pSecondTextValue = pSecondTextElement.innerText;

    const pFirstInput = document.getElementById('paraBField');
    const pSecondInput = document.getElementById('paraHField');

    pFirstInput.value = pFirstTextValue;
    pSecondInput.value = pSecondTextValue;
}
TextToField()