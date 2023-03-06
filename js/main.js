// creating patterns 

 

const inputs = document.querySelectorAll('input');

// email verification
//   1           2              3       4 
//(yourname) @ (domain) . (extension)(.again)

// yourname - any letters, numbers, dots and/or hyphens
// domain - any letters, numbers and/or hyphens
// extensions - any letters
// a dot(.) then any letters

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,11}$/i,
    password: /^[\w@-]{8,20}$/ ,
    slug : /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

function validate(field, regex){
    //console.log(regex.test(field.value));

    if(regex.test(field.value)){
        field.className = 'valid';
    }

    else {
        field.className = 'invalid';
    }
}

inputs.forEach(input => {
    input.addEventListener('input', (e) =>{
        // console.log(e.target.attributes.name.value)

        validate(e.target, patterns[e.target.attributes.name.value])
    })
})






// ------------ Notes ----------------

// 1. matching character set
// [ng] ninja , ginja
//[abc123] 000
//[^pe] match all characters except 1 or 2

//2. Ranges
//[a-z] match all alphabets

// lowercase range and upper case range

//[a-zA-z]

// Numbers
//[0-9]

//Phone numbers
//[0-9][0-9]...[0-9]

//3. Repeating Characters

//[0-9]+ any number of character long at least one

// strict length
// [0-9]{11} match this eleven number of times concurrently 
// [a-z]{11} match eleven letter words

// [a-z]{5,8} //match between 5 to 8 letter words 


// Meta characters
// \d match any digit (same as [0-9])
// \w match any word characters(a-z, A-Z, 0-9 ans _'s)
// \s match a white space character (spaces and tabs)
// \t match a tab character only

// d-- 'd'
// \d any digit character test regex101

// e.g \d\s\w

// special characters

//+ The one or more quantifier
// \
// [] the character set
//[^] the negate symbol in a character set

// ? the Zero or one quantifier makes a precedding character optional
// e.g /hello?/ hello or hell

// . any character whatsoever  (except the new line character)

// * The 0-or-more quantifier (a bit like plus)

// Lesson 8
// Starting and Ending pattern
// e.g 5 exact character caret and $
// caret ^[a-5]{5}

// Lesson 9

// Alternate character | 
// p | t , (p|t)yre