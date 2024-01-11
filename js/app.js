document.getElementById('triangle').addEventListener('click', function () {
    const values = getInputFieldAndText('triangleBField', 'triangleHField', 'tTextB', 'tTextH');

    const area = 0.5 * parseFloat(values[0]) * parseFloat(values[1]);

    appendClass('Triangle', area);

})

document.getElementById('rectangle').addEventListener('click', function () {
    const values = getInputFieldAndText('rectangleWField', 'rectangleLField', 'rTextW', 'rTextL');

    const area = parseFloat(values[0]) * parseFloat(values[1]);

    appendClass('Rectangle', area);

})


//edit function

document.getElementById('editPara').addEventListener('click', function(){
    document.getElementById('hidden').classList.remove('hidden');

    const pFirstInput = document.getElementById('paraBField');
    const pSecondInput = document.getElementById('paraHField');
    const firstTextElement = document.getElementById('pTextB');
    firstTextElement.innerText = pFirstInput.value;
    const secondTextElement = document.getElementById('pTextH');
    secondTextElement.innerText = pSecondInput.value;

})

document.getElementById('parallelogram').addEventListener('click', function () {

    const values = getInputFieldAndText('paraBField', 'paraHField', 'pTextB', 'pTextH');

    const area = parseFloat(values[0]) * parseFloat(values[1]);
    document.getElementById('hidden').classList.add('hidden');
    appendClass('Parallelogram', area);

})