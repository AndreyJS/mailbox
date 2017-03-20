# Почтовый ящик с адресной книгой
[Демонстрационное приложение](https://andreyjs.github.io) на [AngularJS 1.6](https://angularjs.org/) + ES6 с использованием компонентного подхода.

### Использованные технологии
 * Сборка: [webpack](http://webpack.github.io/)
 * Маршрутизация: [ui-router](https://ui-router.github.io/)
 * Форматирование дат: [moment.js](https://momentjs.com/)
 * Юнит-тесты: [karma](https://karma-runner.github.io/1.0/index.html) & [jasmine](https://jasmine.github.io/)
 
### Установка
```
$ git clone https://github.com/AndreyJS/mailbox
$ cd mailbox
$ npm install
После установки развернется статический сервер. Приложение станет доступно по адресу [localhost:8080/dist](http://localhost:8080/dist)
```

### Авторизация в приложении 
![authorize](https://cldup.com/kc5RGeEAC0.png)

### Письма
![mails](https://cldup.com/7SXjLf7AZo.png)
 * Вывод списка почтовых ящиков 
 * Вывод списка писем(краткий формат) в почтовом ящике (при выборе ящика) 
 * Вывод письма полностью 
 * Поиск писем в почтовом ящике 
 * Возможность удаления письма (так же групповая операция удаления писем) 
 * Создание нового письма + валидация поля "Кому"
 * При создании письма поле "кому" автодополнение по почтовым адресам пользователей из адресной книги. 

### Адресная книга
<img src="https://cldup.com/vfheMWt39Y.png" width="100" />
![contacts](https://cldup.com/vfheMWt39Y.png | width=100) ![newUser](https://cldup.com/G3kP16J_Wa.png)
 * Список пользователей 
 * Возможность добавляния новых пользователей и редактирование данных + валидация поля "email" 
 * Возможность удаления пользователя 
 * При отправке письма на адрес, которого нет в адресной книге - добавить в список 

### Юнит-тесты