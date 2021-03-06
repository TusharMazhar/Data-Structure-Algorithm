class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class singlyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push=(value)=>{
        var newNode= new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            this.tail=newNode
        }
        this.length++;
        return this
    }
    pop=()=>{
        if(!this.head) return undefined;
        let current=this.head;
        let newTail=current;
        if(current.next){
              newTail=current;
              current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current

    }

}
let list= new singlyLinkedList();
list.push("hello")
list.push("Tushar")
list.push("How are you")

console.log(list.pop())
console.log(list.pop())
console.log(list.pop())

console.log(list.pop())