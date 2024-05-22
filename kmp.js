var strStr = function(haystack, needle) {

    let lps = needle.split('').map(() => 0);
    let pre = 0;
    for(let i = 1; i < needle.length; i++) {
        while(pre > 0 && needle[i] !== needle[pre]) {
            pre = lps[pre - 1]
        }

        if(needle[pre] === needle[i]) {
            lps[i] = pre + 1;
            pre++;
        }
    }
    console.log(lps);
    let np = 0;
    for(let i = 0; i < haystack.length; i++) {
        while(np > 0 && needle[np] !== haystack[i]) {
            np = lps[np - 1]
        }

        if(needle[np] === haystack[i]) {
            np++;
        }

        if(np >= needle.length) {
            return i - np + 1;
        }
    }
    
    return -1;
};

console.log(strStr('ababcaababcaabc', 'abab'));