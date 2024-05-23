
// class Product{

//     productId:string;
//     productName:string;
//     productPrice:number;
//     productStock:number;

//     constructor(productId:string,productName:string,productPrice:number,productStock:number)
//     {
//      this. productId=productId;
//      this.productName=productName;
//      this. productPrice=productPrice;
//      this.productStock=productStock;
//      arrayOfInstance.push(this);
//      console.log(productName,"has been added")     
//     }
    
// }


// class  Customer{

//   customerId:number;
//   customerName:string;
//   customerEmail:string;
//   constructor(customerId:number,customerName:string,customerEmail:string)
//     {
//      this.customerId=customerId;
//      this.customerName=customerName;
//      this.customerEmail=customerEmail
//      arrayOfInstance.push(this);
//      console.log(customerName,"has been  added")
//     }

// }


// class Order
// {

//  orderId:number=0
//  customerId:number=0;
//  products:{pname:string;quantity:number|boolean}[]=[];
//  constructor(orderId:number,customerId:number)
//   {  
//     const instanceName=arrayOfInstance.find(instanceName => instanceName instanceof Customer && instanceName.customerId==customerId)
//      if(instanceName)
//        {
//         //console.log(instanceName)
//         //const customerId2=instanceName instanceof Customer && instanceName.customerId
//         this.orderId=orderId;
//         this.customerId=customerId;
//         arrayOfInstance.push(this);
//         console.log("order id been created since custommer is found")
//        }
//      else
//        {
//         console.log("Order id hasn't been created since User doesnt exist!!!")
//        }   
//  }
//  addProduct(productName:string,productNos:number|boolean):void 
//  {
 
//   let instanceName=arrayOfInstance.find(instanceName => instanceName instanceof Product && instanceName.productName==productName)
//   const currentStock=instanceName instanceof Product && instanceName.productStock;//  console.log(currentStock);
//   if(productNos > currentStock )
//    {
//     console.log("product out of stock")
//    }
//   else
//    {
//    let instance22=arrayOfInstance.find(instanceName => instanceName instanceof Order && this==instanceName)
//    instance22 instanceof Order && instance22.products.push({pname:productName,quantity:productNos})
//    console.log("Order has been  placed!!")
//   }
//  }
// }


// let arrayOfInstance:Object[]=[];
// const product1=new Product("p1","pepsi",40,100);  // add product
// const product2=new Product("p2","Lays",10,150);  //add product
// const product3=new Product("p3","playstation",45000,20);

// const customer1=new Customer(29,"Alice","alice@gmail.com")   //add user with user-id 29
// const customer2=new Customer(39,"Zen","Zen@gmail.com")       // add user with user-id 39

// const order1=new Order(1,29)  // check wheather passed   "id" exist and if it exist, create orderid . 
// const order2=new Order(50,39)  //  check wheather the passed  "id" exist and if exist, create orderid 
// const order3=new Order(1,399)  // user-id 399 doesnt exist!!!  so cant make an order id 

// order1.addProduct("pepsi",3)  
// order1.addProduct("Lays",10)

// order2.addProduct("playstation",4)

// console.log("order details is \n",order1);
// console.log("order2 details is \n",order2)



type userType={id:number;name:string}

const users:userType[]=[{id:1,name:"joseph"},{id:2,name:"rosily"}]

const object1={findmany:()=>users,adduser:({id,name}:{name:string;id:number})=>users.push({id,name}),findById:(id:number)=> users.find((object2:{id:number;name:string})=> { if(object2.id == id)return(object2.name)})}
object1.adduser({id:333,name:"anaj"});
console.log(object1.findById(2222));
console.log("database is",object1.findmany())


console.log("new idea");

const postivie:{nameofplayer:string,id:number}={nameofplayer:"messi",id:222}
const newArray:{nameofplayer:string}[]=[]


const {nameofplayer}=postivie;

newArray.push({nameofplayer});


console.log("here we go",newArray);

