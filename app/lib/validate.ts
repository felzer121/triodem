
export const validate = (
  fieldName: string,
  value: string | null
): { isValid: boolean | null; error?: string } => {
  switch (fieldName) {
    case "email":
      if (value === null) return { isValid: false, error: "Поле обязательно" };
      const regexpEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
      return regexpEmail.test(String(value))
        ? { isValid: true }
        : { isValid: false, error: "Введите корректный Email" };
    case "password":
      if (value === null) return { isValid: false, error: "Поле обязательно" };
      if (value.length <= 5)
        return { isValid: false, error: "Пароль должен иметь минимум 5 символов" };
      else return { isValid: true };
    default:
      return { isValid: true };
  }
};
