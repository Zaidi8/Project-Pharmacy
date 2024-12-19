// class Medicines{
//     constructor(
//         public id:string,
//         public name:string,
//         public potency:string,
//         public manufacturer:string,
//         public quantity:number,
//         public price_per_unit:number
        
//     ){}
    
//     static addMedicine(
        
//         id:string,
//         name:string,
//         potency:string,
//         manufacturer:string,
//         quantity:number,
//         price_per_unit:number):void
//         {  
//             if (Medicines.validateMedicineInput(id,
//                 name,
//                 potency,
//                 manufacturer,
//                 quantity,price_per_unit)){

//                     medicineLists.push( new Medicines(
//                         id,
//                         name,
//                         potency,
//                         manufacturer,
//                         quantity,
//                         price_per_unit));
//                         console.log("Medicine added successfully")
//                 }
//                 else{
//                     console.log("Medicine not added due to Invalid Input!")
//                 }
//             }
//             static deleteMedicine(index:number):void{
//                 try{ if(index<0 || index>=medicineLists.length){
//                     throw new ValidationError("Invalid Index")
//                 }
//                 medicineLists.splice(index,1)
//             }
//                 catch(error){
//                     if(error instanceof Error){
//                         console.error(error.message);
//                     }
//                         return;
//                 }
//             }
            
//             searchMedicine():void{
//                 console.log(
//                     this.id,
//                     this.name,
//                     this.potency,
//                     this.manufacturer,
//                     this.quantity,
//                     this.price_per_unit
//                 )
//             }
//             static editMedicine(index: number,
//                 id: string,
//                 name: string,
//                 potency: string,
//                 manufacturer: string,
//                 quantity: number,
//                 price_per_unit: number
//             ): void {
//                 try{ if(index<0 || index>medicineLists.length){
//                     throw new ValidationError("Invalid Index")
//                 }
//                 if (!Medicines.validateMedicineInput(id,
//                     name,
//                     potency,
//                     manufacturer,
//                     quantity,
//                     price_per_unit))
//                     {
//                         throw new ValidationError("Invalid Input Data")
//                     }
//                     medicineLists[index] = new Medicines(id, name, potency, manufacturer, quantity, price_per_unit);
//                 }
//                 catch(error){
//                     if(error instanceof Error){
//                         console.error(error.message);
//                     }
//                 }
                
//             }
//             static validateMedicineInput(
//                 id: string,
//                 name: string,
//                 potency: string,
//                 manufacturer: string,
//                 quantity: number,
//                 price_per_unit: number
//             ): boolean {
//                 if (!id || typeof id !== "string") {
//                     console.error("Invalid ID: ID must be a non-empty string.");
//                     return false;
//                 }
//                 if (!name || typeof name !== "string") {
//                     console.error("Invalid Name: Name must be a non-empty string.");
//                     return false;
//                 }
//                 if (!potency || typeof potency !== "string") {
//                     console.error("Invalid Potency: Potency must be a non-empty string.");
//                     return false;
//                 }
//                 if (!manufacturer || typeof manufacturer !== "string") {
//                     console.error("Invalid Manufacturer: Manufacturer must be a non-empty string.");
//                     return false;
//                 }
//                 if (typeof quantity !== "number" || quantity <= 0) {
//                     console.error("Invalid Quantity: Quantity must be a positive number.");
//                     return false;
//                 }
//                 if (typeof price_per_unit !== "number" || price_per_unit <= 0) {
//                     console.error("Invalid Price Per Unit: Price must be a positive number.");
//                     return false;
//                 }
//                 return true;
//             }
            
            
//             }
//                 class Suppliers{
//                     constructor(
//                         public id:string,
//                         public company_name:string,
//                         public representative_name:string,
//                         public address:string,
//                         public description:string
                        
//                     ){}
                    
                    
//                     static addSupplier(

//                         id:string,
//                         company_name:string,
//                         representative_name:string,
//                         address:string,
//                         description:string):void
//                         {
//                             if (Suppliers.validateSupplierInput(id,
//                                 company_name,
//                                 representative_name,
//                                 address,
//                                 description)){
            
//                                     supplierLists.push( new Suppliers(
//                                         id,
//                                         company_name,
//                                         representative_name,
//                                         address,
//                                         description));                                    
//                                     console.log("Supplier added successsfully")
//                                 }
//                                 else{
//                                     console.log("Supplier not added due to Invalid input")
//                                 }
            
                            
//                             }
                            
//                             static deleteSupplier(index:number):void{
//                                 try{ if(index<0 || index>=supplierLists.length){
//                                     throw new ValidationError("Invalid Index")
//                                 }
//                                 supplierLists.splice(index,1)
//                             }
//                                 catch(error){
//                                     if(error instanceof Error){
//                                         console.error(error.message);
//                                     }
//                                     return;        
//                                 }
//                             }

//             static editSupplier(index: number,
//                 id: string,
//                 company_name: string,
//                 representative_name: string,
//                 address: string,
//                 description: string
//             ): void {
//                 try{ if(index<0 || index>supplierLists.length){
//                 throw new ValidationError("Invalid Index")
//             }
//             if (!Suppliers.validateSupplierInput(id,
//                 company_name,
//                 representative_name,
//                 address,
//                 description))
//                 {
//                     throw new ValidationError("Invalid Input Data")
//                 }
//             supplierLists[index] = new Suppliers(id, company_name, representative_name, address, description)
//         }
//             catch(error){
//                 if(error instanceof Error){
//                     console.error(error.message);
//                 }
//             }

                
//             }
                            
//             searchSupplier():void{
//                 console.log(
//                     this.id,
//                     this.company_name,
//                     this.representative_name,
//                     this.address,
//                     this.description
//                 )
//             }
            
//             static validateSupplierInput(
//                 id: string,
//                 company_name: string,
//                 representative_name: string,
//                 address: string,
//                 description: string
//             ): boolean {
//                 if (!id || typeof id !== "string") {
//                     console.error("Invalid ID: ID must be a non-empty string.");
//                     return false;
//                 }
//                 if (!company_name || typeof company_name !== "string") {
//                     console.error("Invalid Company Name: Company Name must be a non-empty string.");
//                     return false;
//                 }
//                 if (!representative_name || typeof representative_name !== "string") {
//                     console.error("Invalid Representative Name: Representative Name must be a non-empty string.");
//                     return false;
//                 }
//                 if (!address || typeof address !== "string") {
//                     console.error("Invalid Address: Address must be a non-empty string.");
//                     return false;
//                 }
//                 if (!description || typeof description !== "string") {
//                     console.error("Invalid Description: Description must be a non-empty string.");
//                     return false;
//                 }
//                 return true;
//             }
            
//         }
//         class SaleInvoices{
//             constructor(
//                 public inv_no:string,
//                 public date:Date,
//                 public id:string,
//                 public manufacturer:string,
//                 public quantities:number,
//                 public total_price:number,
//                 public discount:number
                
//             ){}
//                 static createSaleInvoice(
//                     inv_no: string,
//                     index: number,
//                     quantities: number,
//                     discount: number
//                 ): void {
//                     try{ 
                        
//                     if(index<0 || index>=medicineLists.length){
//                     throw new ValidationError("Invalid Index")
                        
//                     }
//                     if(quantities<=0){
//                         throw new ValidationError("Invalid Quantity:Must be greater than 0")
//                     }
//                     if (discount < 0 || discount > 100) {
//                         throw new ValidationError("Invalid Discount: Must be between 0 and 100.");
//                     }
            
//                     if (quantities > medicineLists[index].quantity) {
//                         throw new ValidationError("Insufficient stock for the requested quantity.");
//                     }
//                     const date = new Date(); // Set the current date as the invoice date
//                     const total_price = quantities * medicineLists[index].price_per_unit * (1 - discount / 100);
//                     saleInvoiceLists.push(
//                         new SaleInvoices(inv_no, date, medicineLists[index].id, medicineLists[index].manufacturer, quantities, total_price, discount)
//                     );
//                     medicineLists[index].quantity-=quantities
//                     console.log("Sale invoice created successfully!");
//                 }
//                     catch(error){
//                         if(error instanceof Error){
//                             console.error(error.message);
//                         }
//                         return;
//                     }
                    
//                 }
            
            
//         }
//         class PurchaseInvoices extends SaleInvoices{
//             constructor(
//                 public inv_no:string,
//                 public date:Date,
//                 public id_of_supplier:string,
//                 public manufacturer:string,
//                 public quantities:number,
//                 public total_price:number,
//                 public discount:number
//             ){
//                 super(inv_no,date,id_of_supplier,manufacturer,quantities,total_price,discount)
//             }
//             static createPurchaseInvoice(inv_no: string, 
//                 medIndex: number, 
//                 SupIndex: number, 
//                 quantities: number, 
//                 discount: number): void {


//                     try{ if(medIndex<0 || medIndex>=medicineLists.length){
//                         throw new ValidationError("Invalid Index")
//                     }
//                     if (quantities <= 0) {
//                         throw new ValidationError("Quantity must be greater than zero.");
//                     }
//                     if (discount < 0 || discount > 100) {
//                         throw new ValidationError("Invalid Discount: Must be between 0 and 100.");
//                     }
//                     const date= new Date();
//                     const total_price=medicineLists[medIndex].price_per_unit*quantities*(1-discount/100)
//                     purchaseInvoiceLists.push(
//                         new PurchaseInvoices(inv_no, date, supplierLists[medIndex].id, medicineLists[SupIndex].manufacturer, quantities, total_price, discount)
//                     );
//                     medicineLists[medIndex].quantity+=quantities
//                     console.log("Purchase Invoice Created Successfully")
//                 }
//                     catch(error){
//                         if(error instanceof Error){
//                             console.error(error.message);
//                         }
//                         return
//                     }
                  
                    
//             }
//         }
                

//         class ValidationError extends Error {
//             constructor(message: string) {
//                 super(message);
//                 this.name = "ValidationError";
//             }
//         }
        
        

//         function filterByDate<T extends {date:Date}>(list : T[] , startDate:Date , endDate:Date):T[]{
//             if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
//                 console.error("Invalid dates provided for filtering.");
//                 return [];
//             }
        
//             if (startDate > endDate) {
//                 console.error("Start date must be earlier than or equal to end date.");
//                 return [];
//             }
//             else{

//                 return list.filter(item=> item.date >=startDate&&item.date<=endDate)
//             }
//         }
        
//         let medicineLists:Array<Medicines>=[];
//         let supplierLists:Array<Suppliers>=[];
//         let saleInvoiceLists:Array<SaleInvoices>=[];
//         let purchaseInvoiceLists:Array<PurchaseInvoices>=[];
//         //Add Supplier/Medicine
//         Medicines.addMedicine('001', 'Panadol', '250mg', 'Medicos', 10, 2.5);
//         Medicines.addMedicine('002', 'Brufen', '400mg', 'Pfizer', 20, 5);
        
//         Suppliers.addSupplier('S001', 'HealthSupplies Inc.', 'John Doe', '123 Market St.', 'Medical Supplies');
//         Suppliers.addSupplier('S002', 'PharmaCo', 'Jane Smith', '456 Elm St.', 'Pharmaceuticals');
        
//         //Delete Supplier/Medicine
//         Medicines.deleteMedicine(0);
//         Suppliers.deleteSupplier(0);

//         //Edit Supplier/Medicine
//         Medicines.editMedicine(0, '002', 'Panadol', '250mg', 'Medicos', 10, 2.5)
//         Suppliers.editSupplier(0, 'S001', 'PharmaCo', 'Jane Smith','456 Elm St.', 'Pharmaceuticals')

//         //Search Supplier/Medicine
//         medicineLists[0].searchMedicine();
//         supplierLists[0].searchSupplier();

//         //List Supplier/Medicine Details
//         console.log(medicineLists)
//         console.log(supplierLists)
        
//         //Creates Sales Invoice and Update Stock
//         //Testing Input Validation
//         SaleInvoices.createSaleInvoice('IV001',0,1,10)
//         console.log(saleInvoiceLists)

//         //Creates Purchase Invoice and Update Stock
//         //Testing Input Validation
//         PurchaseInvoices.createPurchaseInvoice('PIV001',0,0,10,25)
//         PurchaseInvoices.createPurchaseInvoice('PIV001',0,0,4,25)
//         console.log(purchaseInvoiceLists)
//         medicineLists[0].searchMedicine();

//         //filter by date
//         console.log(filterByDate(purchaseInvoiceLists,new Date("2024-12-16"),new Date("2024-12-20")));