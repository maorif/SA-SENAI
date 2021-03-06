let productName = document.getElementById('product-name');
let productDescription = document.getElementById('product-description');
let productValue = document.getElementById('product-value');
let productStockQuantity = document.getElementById('product-stock-quantity');

// Abaixo são as funções adicionar o objeto Produto em um array de objetos e validar os campos preenchidos.

function createNewProduct() {
    let inputError = '';
    let alertText = '';
    switch (true) {
        case (productName.value == ''):
            inputError = 'product-name';
            alertText = `O campo Nome é obrigatório e deve estar preenchido!`;
            nullInputErrorOnRegisterProduct(inputError, alertText);
            break;
        case (productStockQuantity.value == ''):
            inputError = 'product-stock-quantity';
            alertText = `O campo Quantidade é obrigatório e deve estar preenchido!`;
            nullInputErrorOnRegisterProduct(inputError, alertText);
            break;
        case (productStockQuantity.value < 1):
            quantityValidationErrorOnRegisterProduct();
            break;
        case (productDescription.value == ''):
            inputError = 'product-description';
            alertText = `O campo Descrição é obrigatório e deve estar preenchido!`;
            nullInputErrorOnRegisterProduct(inputError, alertText);
            break;
        case (productValue.value == ''):
            inputError = 'product-value';
            alertText = `O campo Valor é obrigatório e deve estar preenchido!`;
            nullInputErrorOnRegisterProduct(inputError, alertText);
            break;
        case (productValue.value < 1):
            valueValidationErrorOnRegisterProduct();
            break;
        default:
            let inputsArr = [
                productName.value,
                Number(productStockQuantity.value),
                productDescription.value,
                Number(productValue.value),
            ];
            let code = db.createNewProduct(...inputsArr);
            addNewProductOnTable(...inputsArr, code);
            successfulProductRegistration();
            clearInputFieldsOnScreen();
    }
}

// Abaixo é a função para limpar os campos de input.

function clearInputFieldsOnScreen() {
    productName.value = '';
    productStockQuantity.value = '';
    productDescription.value = '';
    productValue.value = '';
}

// Abaixo é a função para apresentar o Produto cadastrado na tabela da página.

function addNewProductOnTable(name, quantity, description, value, code) {
    let accountLine = document.createElement('div');
    let idTd = document.createElement('div');
    let nameTd = document.createElement('div');
    let quantityTd = document.createElement('div');
    let descriptionTd = document.createElement('div');
    let valueTd = document.createElement('div');
    idTd.textContent = code;
    nameTd.textContent = name;
    descriptionTd.textContent = description;
    quantityTd.textContent = quantity;
    valueTd.textContent = realBR.format(value);
    accountLine.appendChild(idTd);
    accountLine.appendChild(nameTd);
    accountLine.appendChild(descriptionTd);
    accountLine.appendChild(quantityTd);
    accountLine.appendChild(valueTd);
    let createLine = document.querySelector('#recent-registered-product-table');
    createLine.classList.remove('hidden');
    createLine.appendChild(accountLine);
    accountLine.classList.add('tr-product');
    idTd.classList.add('tbody-td','tbody-td-code');
    nameTd.classList.add('tbody-td','tbody-td-product-name');
    descriptionTd.classList.add('tbody-td','tbody-td-product-description');
    quantityTd.classList.add('tbody-td','tbody-td-product-stock');
    valueTd.classList.add('tbody-td','tbody-td-product-value');
};

// Abaixo são as funções para apresentar alertas e contornar os campos que causam erros nas validações.

function nullInputErrorOnRegisterProduct(inputError, alertText) {
    let param1 = document.getElementById(`product-name`);
    let param2 = document.getElementById(`product-description`);
    let param3 = document.getElementById(`product-value`);
    let param4 = document.getElementById(`product-stock-quantity`);
    let param5 = document.getElementById(`${inputError}`);
    let param6 = document.getElementById('alert-message');
    
    param1.classList.remove('input-error');
    param2.classList.remove('input-error');
    param3.classList.remove('input-error');
    param4.classList.remove('input-error');
    param5.classList.remove('input-error');  
    
    param5.classList.add('input-error');
    
    param6.classList.remove('hidden');
    param6.classList.remove('alert-sucess');
    param6.classList.add('alert','alert-error', 'alert-show');
    param6.textContent = `${alertText}`;

    setTimeout(function(){ 
        let element = document.getElementById(`alert-message`);
        element.classList.add('hidden'); }, 5000); 
};

function quantityValidationErrorOnRegisterProduct() {
    let param1 = document.getElementById(`product-name`);
    let param2 = document.getElementById(`product-stock-quantity`);
    let param3 = document.getElementById('alert-message');

    param1.classList.remove('input-error'); 
    param2.classList.remove('input-error');   

    param2.classList.add('input-error');

    param3.classList.remove('hidden');
    param3.classList.remove('alert-sucess');
    param3.classList.add('alert','alert-error', 'alert-show');             
    param3.textContent = 'O campo Quantidade deve ser igual ou maior que 1 para anunciar!';

    setTimeout(function(){ 
        let element = document.getElementById(`alert-message`);
        element.classList.add('hidden'); }, 5000);
};

function valueValidationErrorOnRegisterProduct() {
    let param1 = document.getElementById(`product-description`);
    let param2 = document.getElementById(`product-value`);
    let param3 = document.getElementById('alert-message');

    param1.classList.remove('input-error'); 
    param2.classList.remove('input-error');   

    param2.classList.add('input-error');

    param3.classList.remove('hidden');
    param3.classList.remove('alert-sucess');
    param3.classList.add('alert','alert-error', 'alert-show');             
    param3.textContent = 'O campo Valor deve ser igual ou maior que R$ 1,00 para anunciar!';

    setTimeout(function(){ 
        let element = document.getElementById(`alert-message`);
        element.classList.add('hidden'); }, 5000);
};

// Abaixo é a função para apresentar a mensagem de sucesso ao cadastrar o Produto.

function successfulProductRegistration() {
    let param1 = document.getElementById(`product-name`);
    let param2 = document.getElementById(`product-stock-quantity`);
    let param3 = document.getElementById(`product-description`);
    let param4 = document.getElementById(`product-value`);
    let param5 = document.getElementById('alert-message');

    param1.classList.remove('input-error');
    param2.classList.remove('input-error');
    param3.classList.remove('input-error');
    param4.classList.remove('input-error');

    param5.classList.remove('hidden');
    param5.classList.remove('alert-error');
    param5.classList.add('alert','alert-sucess', 'alert-show');             
    param5.textContent = `O produto ${param1.value} foi cadastrado com sucesso!`;
    
    setTimeout(function(){ 
        let element = document.getElementById(`alert-message`);
        element.classList.add('hidden'); }, 5000);
};