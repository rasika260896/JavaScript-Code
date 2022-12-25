class StaffList{
  
    arr=[];
    add(name,age){
        console.log(name);
        if(age > 20){
         this.arr.push({name,age});
         console.log(this.arr);
        }
        else{
            throw new Error("staff age must be greater than 20");
        }
    }

    remove(name){
     const found = this.arr.find(i=>i.name===name);
     if(found){
        this.arr = this.arr.filter(i=>i.name!==name)
        return true;
     }
     return false;
    }

    getSize(){
        return this.arr.length;
    }

}

const staff = new StaffList();
staff.add("Rasika",26);
staff.remove("Rasika");
staff.getSize()