var scramble = (str1, str2) => {
    var letters = mapString(str1)
    var word = mapString(str2)
    
    for (var key in word) {
      if (letters[key]) {
        if (word[key] > letters[key]) {
          return false
        }
      } else {
        return false
      }
    }
    return true
  }
  
  var mapString = str => {
    let obj = {}
    str.split('').forEach(el => obj[el] = (el in obj) ? obj[el] + 1 : 1)
    return obj
  }

//Problem explanation below

/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be 
rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False */

//Tests to check the result:

/* describe('Example Tests', function(){
    Test.assertEquals(scramble('rkqodlw','world'),true);
    Test.assertEquals(scramble('cedewaraaossoqqyt','codewars'),true);
    Test.assertEquals(scramble('katas','steak'),false);
    Test.assertEquals(scramble('scriptjavx','javascript'),false);
    Test.assertEquals(scramble('scriptingjava','javascript'),true);
    Test.assertEquals(scramble('scriptsjava','javascripts'),true);
    Test.assertEquals(scramble('javscripts','javascript'),false);
    Test.assertEquals(scramble('aabbcamaomsccdd','commas'),true);
  }); */