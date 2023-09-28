function rev_string(str){
    rev='';
    for(let i=0;i<str.length;i++){
        rev = str[i] + rev;
    }
    return rev;
}

const result_string = rev_string("babab");

console.log(result_string);


// str="Sumit";
// i=0    str[i]='S';
// i=1    str[i]='u';
// i=2    str[i]='m';
// i=3    str[i]='i';
// i=4    str[i]='t';

// rev = 'imus'
// rev = s;                str[i] = "s" ,    //  's' +  '' = 's'
// rev = us;               str[i] = "u" ,         rev = str[i] + rev;   // 'u' + 's' = 'us';
// rev = mus;              str[i] = "m" ,    //   'm' + 'us' = 'mus';
// rev = imus;             str[i] = "i",     //   'i' + 'mus' = 'imus';
// rev = timus;            str[i] = "t" ,    //   't' + 'imus' = 'timus';