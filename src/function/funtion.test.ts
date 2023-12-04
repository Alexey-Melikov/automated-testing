import {
  sayHello,
  checkNumber,
  checkPass,
  checkSymbol,
  randomizer,
  urlGenerator,
  isValidEmail,
  isValidPassword,
  validateUserInput,
} from "./function";

// it("Создаёт приветствие", () => {
//   expect(sayHello("Стас", "Басов")).toBe("Здравствуйте, Стас Басов!");
// });

// методы тестирования

// toBe сопоставляет примитивные значения или ссылки на объекты:

// // Тесты пройдут
// expect("Ожидание").toBe("Ожидание");

// let a = {};
// let b = a;
// expect(a).toBe(b);

// // Тесты не пройдут
// // expect("Ожидание").toBe("Реальность");

// // let a1 = {};
// // let b2 = {};
// // expect(a1).toBe(b2);

// // // toEqual сопоставляет объекты или массивы.

// // Тесты пройдут
// expect({ a: undefined, b: 10, c: "text" }).toEqual({ b: 10, c: "text" });
// expect([1, 2, 3]).toEqual([1, 2, 3]);
// expect([[undefined, 1]]).toEqual([[, 1]]); // в правом массиве первый элемент пропущен

// // Тесты не пройдут
// expect({ a: undefined, b: 10, c: "text" }).toEqual({ a: 12, b: 10, c: "text" });
// expect([1, 2, 3, undefined]).toEqual([1, 2, 3]); // массивы не совпадают по длине, в конце правого отсутствует ","

// // toStrictEqual тоже сопоставляет объекты или массивы, но более строго: ожидаемый объект или массив
// // должен полностью соответствовать действительному.
// // То есть обладать теми же свойствами или элементами. Тут undefined и пропущенный элемент не равны:

// expect({ b: 10, c: "text" }).toStrictEqual({ b: 10, c: "text" });
// expect([3, 4, undefined]).toStrictEqual([3, 4, undefined]);

// // Тесты не пройдут
// expect({ a: undefined, b: 10, c: "text" }).toStrictEqual({ b: 10, c: "text" });
// expect([[undefined, 1]]).toStrictEqual([[, 1]]);

// // toBeTruthy и toBeFalsy сравнивают результат с true и false соответственно:

// // Тесты пройдут
// expect(1).toBeTruthy();
// expect(true).toBeTruthy();
// expect(undefined).toBeFalsy();

// // Тесты не пройдут
// expect(null).toBeTruthy();
// expect(0).toBeTruthy();
// expect(true).toBeFalsy();

// // toBeUndefined и toBeDefined сравнивают результат со значением undefined.
// // Метод toBeUndefined проходит, если результат не определён, то есть равен undefined.
// // А метод toBeDefined наоборот — если результат не равен undefined.
// // Этот тест пройдёт даже со значением null — оно считается определённым.

// // Тесты пройдут
// expect(1).toBeDefined();
// expect(null).toBeDefined();
// expect("string").toBeDefined();

// // Тесты не пройдут
// let x;

// expect(x).toBeDefined();
// expect(undefined).toBeDefined();

// https://jestjs.io/docs/getting-started Все тесты

// it("Проверяет наличие цифры", () => {
//   expect(checkNumber("some_not_so_strong_pass")).toBe(false);
//   expect(checkNumber("stronger_pass_123")).toBe(true);
// });

// it("Проверяет наличие спецсимвола", () => {
//   expect(checkSymbol("somePass")).toBe(false);
//   expect(checkSymbol("another_pass")).toBe(true);
// });

// it("Проверяет пароль", () => {
//   expect(checkPass("somePas$")).toBe(false);
//   expect(checkPass("another_pass_123")).toBe(true);
// });

// it("генератор случайных чисел от 10 до 80 включительно", () => {
//   expect(typeof randomizer()).toBe("number");
//   expect(randomizer()).toBeGreaterThanOrEqual(10);
//   expect(randomizer()).toBeLessThanOrEqual(80)
// })

// const urlRegEx =
//   /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

// it("should return url string", () => {
//   expect(typeof urlGenerator("řâñđöḿ text")).toBe("string");
//   expect(urlGenerator("řâñđöḿ text")).toMatch(urlRegEx);
// });

// Как создать набор
// Функция describe создаёт набор. Её первый аргумент — описание набора, второй — колбэк с тестами:

// describe('Проверка обработчика запроса', () => {
//   it('должен проверять данные на валидность', () => {/* здесь код теста */});
//   it('должен считать хеш пароля', () => {/* здесь код теста */});
//   it('должен записывать данные в базу', () => {/* здесь код теста */});
// });

// Также у describe есть третий параметр: максимальное время исполнения тестового набора.
// Это ограничение защищает от зависаний тестов из-за бесконечных циклов и рекурсий.
// По умолчанию это время составляет 5 секунд. Но его можно:
// увеличить, если тест может зависеть от «внешних» процессов: например, ответа сервера при обработке крупных файлов или обращении к платёжным системам;
// уменьшить: такое бывает нужно, когда мы меняем код не для новой функциональности, а для оптимизации существующей.
// Таким образом, метод describe помогает аккуратно оформить тесты и ограничить время их выполнения.

const dataValid = { email: "bob@yandex.ru", password: "1amAp0k3m0n%" };

const dataInvalidPassword = { email: "bob@yandex.ru", password: "123456" };
const dataInvalidEmail = { email: "bob", password: "1amAp0k3m0n%" };
const dataInvalidCredentials = { email: "bob", password: "12345" };

// #isValidEmail проверять, что email валиден; ++
// #isValidPassword проверять, что пароль валиден; ++
// #validateUserInput возвращать message, если данные верны, и не возвращать ошибку;
// #validateUserInput возвращать ошибку об email, если он неверный;
// #validateUserInput возвращать ошибку о пароле, если он неверный;
// #validateUserInput возвращать общую ошибку, если все данные неверные.
//тесты здесь

describe("Набор тестов валидации", () => {
  it("#isValidEmail", () => {
    expect(isValidEmail(dataValid.email)).toBeTruthy();
    expect(isValidEmail(dataInvalidEmail.email)).toBeFalsy();
  });

  it("#isValidPassword", () => {
    expect(isValidPassword(dataValid.password)).toBeTruthy();
    expect(isValidPassword(dataInvalidPassword.password)).toBeFalsy();
  });

  it("message, если данные верны, и не возвращать ошибку", () => {
    expect(
      validateUserInput(dataValid.email, dataValid.password).isValidated
    ).toBeTruthy();
    expect(
      validateUserInput(dataValid.email, dataValid.password).error
    ).toBeNull();
    expect(validateUserInput(dataValid.email, dataValid.password).message).toBe(
      "Пользователь успешно cоздан!"
    );
  });

  it("возвращать ошибку об email, если он неверный", () => {
    expect(
      validateUserInput(dataInvalidEmail.email, dataInvalidEmail.password)
        .isValidated
    ).toBeFalsy();
    expect(
      validateUserInput(dataInvalidEmail.email, dataInvalidEmail.password).error
    ).toBe("Email неправильный");
    expect(
      validateUserInput(dataInvalidEmail.email, dataInvalidEmail.password)
        .message
    ).toBeNull();
  });

  it("возвращать ошибку о пароле, если он неверный", () => {
    expect(
      validateUserInput(dataInvalidPassword.email, dataInvalidPassword.password)
        .isValidated
    ).toBeFalsy();
    expect(
      validateUserInput(dataInvalidPassword.email, dataInvalidPassword.password)
        .error
    ).toBe("Пароль неправильный");
    expect(
      validateUserInput(dataInvalidPassword.email, dataInvalidPassword.password)
        .message
    ).toBeNull();
  });

  it("возвращать общую ошибку, если все данные неверные", () => {
    expect(
      validateUserInput(
        dataInvalidCredentials.email,
        dataInvalidCredentials.password
      ).isValidated
    ).toBeFalsy();
    expect(
      validateUserInput(
        dataInvalidCredentials.email,
        dataInvalidCredentials.password
      ).error
    ).toBe("Данные не верны");
    expect(
      validateUserInput(
        dataInvalidCredentials.email,
        dataInvalidCredentials.password
      ).message
    ).toBeNull();
  });
});
