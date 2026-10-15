
export function passwordGenerator(characters = '' , long = 8 ) {
  const text = characters ? characters : "1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
  let password = '';

  for (let i = 0; i < long; i++) {
    let randon = Math.floor(Math.random() * text.length -1)
    password += text.substring(randon, randon + 1);
  };
  return password
}