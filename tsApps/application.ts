class MyClass {

    constructor(private s: string) {
    }

    sort(): string {
        let arrayString = this.s.split('');
        let tmp = '';

        for (let i = 0; i < arrayString.length; i++) {
            for (let j = i + 1; j < arrayString.length; j++) {
                if (arrayString[i] > arrayString[j]) {
                    tmp = arrayString[i];
                    arrayString[i] = arrayString[j];
                    arrayString[j] = tmp;
                }
            }
        }
        return arrayString.join('');
    }


    reverse(): string {
        let arrayString = this.s.split('');
        arrayString.reverse();
        return arrayString.join('');
    }

    noOfWords(): string {
        let arrayString = this.s.split('');

        var counts = 0;
        for (let i of arrayString) {
            if (i == ' ') {
                counts += 1;
            }
        }

        console.log('11111111111111', counts)
        return counts.toString();
    }

    appearnces(): string {
        let arrayString = this.s.split('');

        let arrays = [];
        let result = 0;
        for (let i = 0; i < arrayString.length; i++) {

            for (let j = 0; j < arrayString.length; j++) {
                if (arrayString[i] == arrayString[j]) {
                    result++;
                }
                
            }

            if (arrays.indexOf(arrayString[i]+':'+result)> -1) {
                //In the array!
            } else {
                //Not in the array
                arrays.push(arrayString[i] + ':' + result)
            }
                
            result = 0
        }
        
        return arrays.toString();
    }



}


let value = new MyClass("zdacfge amol abc");
// 1. sort a string by alphabet
console.log(`Value after sort ${value.sort()}`)

// 2. Reverce a string find out appearnces of  the specific char in  a string and its frequency (in number)
console.log(`Value after reverse ${value.reverse()}`)

console.log(`Number of words ${value.noOfWords()}`)


let value1 = new MyClass("this is the demo demo demo");
console.log(`appearnces of  the specific char ${value1.appearnces()}`)