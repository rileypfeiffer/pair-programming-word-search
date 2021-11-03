const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    let verticalJoin = [];
    if (letters.length !== 0 && letters[0].length !== undefined) {
      for (let i = 0; i < letters[0].length; i++) {
        verticalJoin.push([]);
        for (let j = 0; j < letters.length; j++) {
          verticalJoin[i].push([letters[j][i]]);
        }
      }
      verticalJoin = verticalJoin.map(ls => ls.join(""));
  
      for (let l of horizontalJoin) {
        if (l.includes(word)) {
          return true;
        }
      }
      for (let l of verticalJoin) {
        if (l.includes(word)) {
          return true;
        }
      }
    } return false;
  };

module.exports = wordSearch;