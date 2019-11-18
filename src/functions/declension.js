export const declension = (number, txt) => {

    //функция склонения слов в зависимости от числа

    //txt - массив склониний( 1, 2, 5)

    let cases = [2, 0, 1, 1, 1, 2]

    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
