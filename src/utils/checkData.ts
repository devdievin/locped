const validateCode = (code) => {
  if (code.length !== 13) {
    return false;
  }

  return true;
};

export const check = (code) => validateCode(code);
