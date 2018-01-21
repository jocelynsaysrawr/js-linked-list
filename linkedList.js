/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let head = null;
    let tail = null;
    function getHead() {
       return head;
    }

    function getTail() {
       return tail;
    }

    function add(Value) {
        var newNode = {
            value: Value,
            next: null
        };

        if (head === null && tail === null) {
            head = newNode;
            tail = newNode;
        } else{
            tail.next = newNode;
            tail = newNode;
        }
        return newNode;
    }

    function remove(number) {
        let currentNode;
        let count = 0;
        let prevNode = null;

        if(head === null && tail === null){
            return null;
        }else{
            currentNode = head;
        }

        if (number === 0) {
            head = head.next;
            return;
        }

        if (currentNode === tail) {
            prevNode.next = null;
            return;
        }

        while(count < number){
            if (currentNode.next === null){
                return false;
            }
            prevNode = currentNode;
            //console.log(prevNode);
            currentNode = currentNode.next;
            //console.log(currentNode);
            count++;
        }
        if (currentNode.next === null){
            tail = prevNode;
        }
        prevNode.next = currentNode.next;
        return;

    }

    function get(number) {
        let currentNode;
        let index = 0;

        if (head === null && tail === null){
            return null;
        }else{
            currentNode = head;
        }
        while(index < number){
            if(currentNode.next === null){
                return false;
            }
            index++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    function insert(Value, index) {
        let newNode = {
            value: Value,
            next: null
        }
       let prevNode = get(index - 1);
       let nextNode = get(index);
       if (!get(index) || index < 0){
           return false;
       }

       if (index === 0) {
            head = newNode;
            head.next = nextNode;
       }else{
            prevNode.next = {
                value: Value,
                next: nextNode
            }
        }
        
    }


    return {
        getHead: getHead,
        getTail: getTail,
        add: add,
        remove: remove,
        get: get,
        insert: insert
    }
}

var myLinkedList = linkedListGenerator();

console.log(myLinkedList.getHead());
console.log(myLinkedList.add());