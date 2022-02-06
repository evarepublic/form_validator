"use strict";

const valid = new Validator({
  selector: "#main-form",
  pattern: {
    phone: /^\+380\d{7}$/,
    zip: /\d{5,6}/,
  },
  method: {
    // свойство - id, значение - методы
    phone: [["notEmpty"], ["pattern", "phone"]],
    email: [["notEmpty"], ["pattern", "email"]],
  },
});

valid.init();
