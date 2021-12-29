module.exports = function toReadable(number) {
    let temp = number;
    const result = [];
    const dozens = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const toTwenty = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const toTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    const map = { 100: 0, 10: 0, 1: 0 };
    const values = [100, 10, 1];
  
    if (number === 0) {
      return 'zero';
    }
  
    for (let i = 0; i <= values.length - 1; i += 1) {
      if (temp >= values[i]) {
        const res = Math.floor(temp / values[i]);
        map[values[i]] = res;
        temp -= (res * values[i]);
      } else {
        continue;
      }
    }
  
    for (let i = 0; i <= values.length - 1; i += 1) {
      const current = values[i];
  
      switch (current) {
        case 100: {
          if (map[current] === 0) {
            break;
          }
          const index = map[current] - 1;
          result.push(`${dozens[index]} hundred`);
          break;
        }
  
        case 10: {
          if (map[current] === 0) {
            break;
          }
  
          const temporary = map[current];
  
          if (temporary === 1) {
            result.push(toTen[map[1]]);
            map[1] = 0;
          } else {
            result.push(toTwenty[temporary - 1]);
          }
          break;
        }
  
        case 1:
          if (map[current] === 0) {
            break;
          }
          const temporary = map[current];
  
          if (temporary === 1 && map[10] === 1) {
            return 0;
          }
          result.push(dozens[temporary - 1]);
  
          break;
  
        default:
          break;
      }
    }
  
    return result.join(' ');
  };
  