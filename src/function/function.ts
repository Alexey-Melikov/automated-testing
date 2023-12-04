export const sayHello = (
  firstName: string | undefined,
  secondName: string | undefined
) => {
  return `Здравствуйте, ${firstName} ${secondName}!`;
};

// проверяем наличие цифры
export function checkNumber(pass: string | undefined) {
  if (typeof pass === "string") {
    let regex = /\d/;
    return regex.test(pass); // метод test вернёт true, если шаблон регулярного выражения найден в строке
  }
}

// проверяем наличие спецсимвола
export function checkSymbol(pass: string | undefined) {
  if (typeof pass === "string") {
    let regex = /[!@#$%^&*(),.?":{}|<>_]/;
    return regex.test(pass);
  }
}

// запускаем обе проверки
export function checkPass(pass: string | undefined) {
  return checkNumber(pass) && checkSymbol(pass);
}

export const randomizer = () => {
  const min = 10;
  const max = 80;
  return Math.random() * (max - min) + min;
};

export const urlGenerator = (string: string) => {
  const restrictedCharacters =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const charactersReplacements =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const specialCharactersRegExp = new RegExp(
    restrictedCharacters.split("").join("|"),
    "g"
  );

  return `http://yandex.praktikum.ru/${
    string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // заменяем whitespace на -
      .replace(specialCharactersRegExp, (c) =>
        charactersReplacements.charAt(restrictedCharacters.indexOf(c))
      ) // заменяем специальные символы
      .replace(/&/g, "-and-") // заменяем & на 'and'
      .replace(/[^\w\-]+/g, "") // убираем не слова
      .replace(/\-\-+/g, "-") // заменяем несколько - на один -
      .replace(/^-+/, "") // обрезаем - в начале строки
      .replace(/-+$/, "") // обрезаем - в конце строки
  }`;
};

export const isValidPassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
};

export const isValidEmail = (email: string) => {
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return emailRegex.test(email);
};


type Tresult = {
  isValidated: boolean;
  message: null | string;
  error: null | string;
};

export const validateUserInput = (email: string, password: string) => {
  const result = <Tresult>{
    isValidated: isValidPassword(password) && isValidEmail(email),
    message: null,
    error: null,
  };

  if (isValidPassword(password) && isValidEmail(email)) {
    result.message = "Пользователь успешно cоздан!";
  } else if (isValidEmail(email) && !isValidPassword(password)) {
    result.error = "Пароль неправильный";
  } else if (!isValidEmail(email) && isValidPassword(password)) {
    result.error = "Email неправильный";
  } else {
    result.error = "Данные не верны";
  }
  console.log(result);

  return result;
};

