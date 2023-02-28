This project contains info about bonus calculation: 
Bonus_calc.js has function that calculates bonus. Final amount depends on basic salary (exceeds 50 or not).
Bonus_calc.test.js checks accuracy of calculation depending on the salary value input.
To run the project one should install node js, initialise the project (npm init), fill in package json file with relevant info about the project (name, description, scripts test: jest, repository, author). Afterwards install jest: npm install --save-dev jest.
To run the tests located in the Bonus_calc.test file use command npm run test. 

## Покрытие кода представляет собой показатель того, какая часть исходного кода охвачена тестами.

Для расчета покрытия необходимо сделать следующее: 

Установить на проект плагин для оценки покрытия кода тестированием. В терминале задать команду: 
# npm install --save-dev babel-plugin-istanbul

Запустить в терминале расчет покрытия командой:
# npx jest –coverage

В данном отчете мы можем увидеть:

Покрытие веток - сколько выполнено веток контрольной структуры (например, операторов if)
Покрытие строк - сколько строк исходного кода протестировано.

