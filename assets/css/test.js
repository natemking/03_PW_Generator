if (lower && !upper && !nums && !spChars) {password.push(lowAlpha[Math.floor(Math.random() * lowAlpha.length)]);} 
else if (lower && upper && !nums && !spChars) {password.push(lowUp[Math.floor(Math.random() * lowUp.length)]);}
else if (lower && !upper && nums && !spChars) {password.push(lowNum[Math.floor(Math.random() * lowNum.length)]);}
else if (lower && !upper && !nums && spChars) {password.push(lowChar[Math.floor(Math.random() * lowChar.length)]);}
else if (lower && upper && nums && !spChars) {password.push(lowUpNum[Math.floor(Math.random() * lowUpNum.length)]);}
else if (lower && upper && !nums && spChars) {password.push(lowUpChar[Math.floor(Math.random() * lowUpChar.length)]);}
else if (lower && !upper && nums && spChars) {password.push(lowNumChar[Math.floor(Math.random() * lowNumChar.length)]);}
else if (lower && upper && nums && spChars) {password.push(all[Math.floor(Math.random() * all.length)]);}
else if (!lower && upper && !nums && !spChars) {password.push(upAlpha[Math.floor(Math.random() * upAlpha.length)]);}
else if (!lower && upper && nums && !spChars) {password.push(upNum[Math.floor(Math.random() * upNum.length)]);}
else if (!lower && upper && !nums && spChars) {password.push(upChar[Math.floor(Math.random() * upChar.length)]);}
else if (!lower && upper && nums && spChars) {password.push(upNumChar[Math.floor(Math.random() * upNumChar.length)]);}
else if (!lower && !upper && nums && !spChars) {password.push(numbers[Math.floor(Math.random() * numbers.length)]);}
else if (!lower && !upper && nums && spChars) password.push(numChar[Math.floor(Math.random() * numChar.length)]);}
else if (!lower && !upper && !nums && spChars) {password.push(sym[Math.floor(Math.random() * sym.length)]);}
  