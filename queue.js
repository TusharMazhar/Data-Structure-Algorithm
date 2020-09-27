const queue=new Array(5);
const Length=queue.length;
let front=0;
let rear=-1;
let totalItem=0;


const isFull=()=>{
    if(totalItem===Length){
        return true;
    }
    return false;
}
const isEmpty=()=>{
    if(totalItem===0){
        return true;
    }
    return false;
}

const enQueue=x=>{
    if(isFull()){
        console.log("Queue is Full")
        return -1;
    }
    rear=(rear+1)% Length;
    queue[rear]=x;
    totalItem=totalItem+1;

}
const deQueue=()=>{
    if(isEmpty()){
        console.log("Queue is Empty")
        return 
    }
    
    
    queue[front]=undefined;
    front=(front+1) % Length;
    totalItem=totalItem-1;
   
    

}

const printValue=()=>{
    const value=[]
    for(let i=0;i<Length;i++){
        value[i]=queue[i];
    }
    console.log(value)
    
}

enQueue(10); 
enQueue(20); 
enQueue(30); 
enQueue(40); 
enQueue(50);  
printValue()
deQueue();
deQueue();
deQueue();
deQueue();
deQueue();
enQueue(60); 
enQueue(70); 
enQueue(80);
printValue();