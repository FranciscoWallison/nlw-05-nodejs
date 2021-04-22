/* eslint-disable no-template-curly-in-string */
import { setLocale, LocaleObject } from 'yup';

const ptBr: LocaleObject = {
    mixed: {
        required: '${path} é requerido',
    },
    string: {
        max: '${path} precisa ter no máximo ${max} caracteres'
    },
    number: {
        min: '${path} precisa ser no mínimo ${min}'
    },
    boolean: {
        message: '${path} deve ser do tipo "booleano"'
    }
};

setLocale(ptBr);

export * from 'yup';