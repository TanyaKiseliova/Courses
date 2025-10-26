class MathArray extends Array{

   static fromStr(str){
          return new MathArray(...str.split(' ').map(Number)) //sky.pro/wiki/javascript/preobrazovanie-stroki-chisel-v-massiv-chisel-v-java-script/
    }
    sum(){
         return this.reduce((sum, el) => sum + el, 0)
    }
    average(){
        return this.sum()/this.length
    }

    even(){
        return this.filter(item => item % 2 !=0)
    }

    biggerThan10(){
        return this.filter(item => item > 10)
    }

    custom(){
        return this.join('-');
    }
    
}


export {MathArray}
