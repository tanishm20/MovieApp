const formate = (s, ...values) => {
  for (const arg in values) {
    s = s.replace(`{${arg}}`, values[arg]);
  }
  return s;
};

export default formate;
