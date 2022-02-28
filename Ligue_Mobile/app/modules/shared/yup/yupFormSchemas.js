import * as yup from 'yup';
const yupFormSchemas = {
  string(label, config) {
    config = config || {};
    let yupChain = yup.string().nullable(true).trim().label(label);
    if (config.required) {
      yupChain = yupChain.required();
    }
    if (config.min || config.min === 0) {
      yupChain = yupChain.min(config.min);
    }
    if (config.max || config.max === 0) {
      yupChain = yupChain.max(config.max);
    }

    return yupChain;
  },
  decimalRange(label) {
    return yup
      .array()
      .ensure()
      .compact()
      .of(
        yup
          .number()
          .transform((cv, ov) => {
            return ov === '' ? null : cv;
          })
          .nullable(true)
          .label(label),
      )
      .label(label);
  },
  enumerator(label) {
    return yup
      .string()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .label(label)
      .nullable(true);
  },
};
export default yupFormSchemas;
