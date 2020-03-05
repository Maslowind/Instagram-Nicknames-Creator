Постановка задачи: Найти всевозможные комбинации с Username пользователя при регистрации в Instagram, найдя всевозможные комбинации с символом '.';
Входные данные: Email юзера, находится в "input.json";
Выходные данные: Всевозможные комбинации никнейма с символом '.', находится в "result.json";

Алгоритм: 
1. Получаем Email из "input.json". Делаем это в getJsonData;
2. Получаем никнейм юзера. Делаем это в getNicknameSymbols;
3. Разбиваем никнейм юзера на массив символов. Добавляем пустые элементы в массив до, между и после символов. Делаем это в getWorkArray;
4. Создаем двумерный массив размера [count][pow(2,count)], где count - кол-во позиций, для которых ищем все переборы. Массив состоит из 0 и 1. Делаем это в getDataset;
5. "Сводим" вместе пункты 3. и 4.В цикле проходимся по таблице. Каждая строка - это очередная комбинация никнейма, где 0 - пропуск, а 1 - точка. Получаем pow(2,count) вариаций никнейма. Делаем это в getNicknamesList;
6. Результат записываем в "result.json" . Делаем это в getJsonResult.