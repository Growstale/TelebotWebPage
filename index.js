let tg = window.Telegram.WebApp;
let requestText = document.getElementById('requestText').value;
let requestStatus = document.getElementById('requestStatus').value;
if (tg.initDataUnsafe && tg.initDataUnsafe.chat) 
{
    groupInfoLabel.textContent = tg.initDataUnsafe.chat.title;
} 
else 
{
    groupInfoLabel.textContent = "Информация о беседе недоступна";
}

function createRequest() {
    if (requestText && requestStatus) {
        alert(`Заявка с текстом "${requestText}" и статусом "${requestStatus}" создана!`);
        document.getElementById('requestForm').reset(); 
    } else {
        alert('Пожалуйста, заполните все обязательные поля!');
    }
}