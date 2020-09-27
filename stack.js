const stack=new Array(4);
let top=-1;


const push=x=>{
  
    if(top<stack.length-1){
        top=top+1;
        stack[top]=x;
        console.log(x)
    }else{
        console.log("stack is full")
        return -1;
    }
}
const pop=()=>{

    if(top>=0){
        
        const value=stack[top];
        top=top-1;
        return value;
    }else{
        console.log("There is no value in Stack")
        return -1;
    }

}
const peek=()=>{
    if(top>=0){
        return stack[top];
    }else{
        console.log("Stack is Empty")
        return -1;
    }

}

console.log(stack.length);
push(30);
push(35);
push(40);
push(45);

push(50);
push(55);
push(60);
console.log('peek',peek())
console.log('pop',pop())
push(50);
push(55);
push(60);
console.log('peek',peek())


