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

}
let list= new singlyLinkedList();
console.log(list.push("hello"))
console.log(list.push("Tushar"))
console.log(list.push("How are you"))

