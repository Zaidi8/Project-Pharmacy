class Medicines{
  constructor(
      public id:string,
      public name:string,
      public potency:string,
      public manufacturer:string,
      public quantity:number,
      public price_per_unit:number
      
  ){}
  addStock(quantity: number): void {
        this.quantity += quantity
    }
  removeStock(quantity: number): void {
    this.quantity -= quantity
}
  compareStock(otherMedicine: Medicines): Boolean {
    if (this.manufacturer === otherMedicine.manufacturer && this.name === otherMedicine.name && this.potency === otherMedicine.potency) {
      return true;
    } else {
      return false;
    }
}
  static addMedicine(
      
      id:string,
      name:string,
      potency:string,
      manufacturer:string,
      quantity:number,
      price_per_unit:number):void
      {  
          if (Medicines.validateMedicineInput(id,
              name,
              potency,
              manufacturer,
              quantity,price_per_unit)){

                  medicineLists.push( new Medicines(
                      id,
                      name,
                      potency,
                      manufacturer,
                      quantity,
                      price_per_unit));
                      console.log("Medicine added successfully")
              }
              else{
                  console.log("Medicine not added due to Invalid Input!")
              }
          }
          static deleteMedicine(index:number):void{
              try{ if(index<0 || index>=medicineLists.length){
                  throw new ValidationError("Invalid Index")
              }
              medicineLists.splice(index,1)
          }
              catch(error){
                  if(error instanceof Error){
                      console.error(error.message);
                  }
                      return;
              }
          }
          
          searchMedicine():void{
              console.log(
                  this.id,
                  this.name,
                  this.potency,
                  this.manufacturer,
                  this.quantity,
                  this.price_per_unit
              )
          }
          static editMedicine(index: number,
              id: string,
              name: string,
              potency: string,
              manufacturer: string,
              quantity: number,
              price_per_unit: number
          ): void {
              try{ if(index<0 || index>medicineLists.length){
                  throw new ValidationError("Invalid Index")
              }
              if (!Medicines.validateMedicineInput(id,
                  name,
                  potency,
                  manufacturer,
                  quantity,
                  price_per_unit))
                  {
                      throw new ValidationError("Invalid Input Data")
                  }
                  medicineLists[index] = new Medicines(id, name, potency, manufacturer, quantity, price_per_unit);
              }
              catch(error){
                  if(error instanceof Error){
                      console.error(error.message);
                  }
              }
              
          }
          static validateMedicineInput(
              id: string,
              name: string,
              potency: string,
              manufacturer: string,
              quantity: number,
              price_per_unit: number
          ): boolean {
              if (!id || typeof id !== "string") {
                  console.error("Invalid ID: ID must be a non-empty string.");
                  return false;
              }
              if (!name || typeof name !== "string") {
                  console.error("Invalid Name: Name must be a non-empty string.");
                  return false;
              }
              if (!potency || typeof potency !== "string") {
                  console.error("Invalid Potency: Potency must be a non-empty string.");
                  return false;
              }
              if (!manufacturer || typeof manufacturer !== "string") {
                  console.error("Invalid Manufacturer: Manufacturer must be a non-empty string.");
                  return false;
              }
              if (typeof quantity !== "number" || quantity <= 0) {
                  console.error("Invalid Quantity: Quantity must be a positive number.");
                  return false;
              }
              if (typeof price_per_unit !== "number" || price_per_unit <= 0) {
                  console.error("Invalid Price Per Unit: Price must be a positive number.");
                  return false;
              }
              return true;
          }
          
          
          }
              class Suppliers{
                  constructor(
                      public id:string,
                      public company_name:string,
                      public representative_name:string,
                      private address:string,
                      public description:string
                      
                  ){}
                  
                  //friend like function to access prrivate members
                  static addSupplier(

                      id:string,
                      company_name:string,
                      representative_name:string,
                      address:string,
                      description:string):void
                      {
                          if (Suppliers.validateSupplierInput(id,
                              company_name,
                              representative_name,
                              address,
                              description)){
          
                                  supplierLists.push( new Suppliers(
                                      id,
                                      company_name,
                                      representative_name,
                                      address,
                                      description));                                    
                                  console.log("Supplier added successsfully")
                              }
                              else{
                                  console.log("Supplier not added due to Invalid input")
                              }
          
                          
                          }
                          
                          static deleteSupplier(index:number):void{
                              try{ if(index<0 || index>=supplierLists.length){
                                  throw new ValidationError("Invalid Index")
                              }
                              supplierLists.splice(index,1)
                          }
                              catch(error){
                                  if(error instanceof Error){
                                      console.error(error.message);
                                  }
                                  return;        
                              }
                          }

          static editSupplier(index: number,
              id: string,
              company_name: string,
              representative_name: string,
              address: string,
              description: string
          ): void {
              try{ if(index<0 || index>supplierLists.length){
              throw new ValidationError("Invalid Index")
          }
          if (!Suppliers.validateSupplierInput(id,
              company_name,
              representative_name,
              address,
              description))
              {
                  throw new ValidationError("Invalid Input Data")
              }
          supplierLists[index] = new Suppliers(id, company_name, representative_name, address, description)
      }
          catch(error){
              if(error instanceof Error){
                  console.error(error.message);
              }
          }

              
          }
                          
          searchSupplier():void{
              console.log(
                  this.id,
                  this.company_name,
                  this.representative_name,
                  this.address,
                  this.description
              )
          }
          
          static validateSupplierInput(
              id: string,
              company_name: string,
              representative_name: string,
              address: string,
              description: string
          ): boolean {
              if (!id || typeof id !== "string") {
                  console.error("Invalid ID: ID must be a non-empty string.");
                  return false;
              }
              if (!company_name || typeof company_name !== "string") {
                  console.error("Invalid Company Name: Company Name must be a non-empty string.");
                  return false;
              }
              if (!representative_name || typeof representative_name !== "string") {
                  console.error("Invalid Representative Name: Representative Name must be a non-empty string.");
                  return false;
              }
              if (!address || typeof address !== "string") {
                  console.error("Invalid Address: Address must be a non-empty string.");
                  return false;
              }
              if (!description || typeof description !== "string") {
                  console.error("Invalid Description: Description must be a non-empty string.");
                  return false;
              }
              return true;
          }
          //getter for friend function
          public getAddress():string{
            return this.address;
          }
}
//friend like function to aaccess private members
function Address(supplier : Suppliers):string{
        return supplier.getAddress()
}    

      class SaleInvoices{
          constructor(
              public inv_no:string,
              public date:Date,
              public id:string,
              public manufacturer:string,
              public quantities:number,
              public total_price:number,
              public discount:number
              
          ){}
              static createSaleInvoice(
                  inv_no: string,
                  index: number,
                  quantities: number,
                  discount: number
              ): void {
                  try{ 
                      
                  if(index<0 || index>=medicineLists.length){
                  throw new ValidationError("Invalid Index")
                      
                  }
                  if(quantities<=0){
                      throw new ValidationError("Invalid Quantity:Must be greater than 0")
                  }
                  if (discount < 0 || discount > 100) {
                      throw new ValidationError("Invalid Discount: Must be between 0 and 100.");
                  }
          
                  if (quantities > medicineLists[index].quantity) {
                      throw new ValidationError("Insufficient stock for the requested quantity.");
                  }
                  const date = new Date(); // Set the current date as the invoice date
                  const total_price = quantities * medicineLists[index].price_per_unit * (1 - discount / 100);
                  saleInvoiceLists.push(
                      new SaleInvoices(inv_no, date, medicineLists[index].id, medicineLists[index].manufacturer, quantities, total_price, discount)
                  );
                  medicineLists[index].quantity-=quantities
                  console.log("Sale invoice created successfully!");
              }
                  catch(error){
                      if(error instanceof Error){
                          console.error(error.message);
                      }
                      return;
                  }
                  
              }
          
          
      }
      class PurchaseInvoices extends SaleInvoices{
          constructor(
              public inv_no:string,
              public date:Date,
              public id_of_supplier:string,
              public manufacturer:string,
              public quantities:number,
              public total_price:number,
              public discount:number
          ){
              super(inv_no,date,id_of_supplier,manufacturer,quantities,total_price,discount)
          }
          static createPurchaseInvoice(inv_no: string, 
              medIndex: number, 
              SupIndex: number, 
              quantities: number, 
              discount: number): void {


                  try{ if(medIndex<0 || medIndex>=medicineLists.length){
                      throw new ValidationError("Invalid Index")
                  }
                  if (quantities <= 0) {
                      throw new ValidationError("Quantity must be greater than zero.");
                  }
                  if (discount < 0 || discount > 100) {
                      throw new ValidationError("Invalid Discount: Must be between 0 and 100.");
                  }
                  const date= new Date();
                  const total_price=medicineLists[medIndex].price_per_unit*quantities*(1-discount/100)
                  purchaseInvoiceLists.push(
                      new PurchaseInvoices(inv_no, date, supplierLists[medIndex].id, medicineLists[SupIndex].manufacturer, quantities, total_price, discount)
                  );
                  medicineLists[medIndex].quantity+=quantities
                  console.log("Purchase Invoice Created Successfully")
              }
                  catch(error){
                      if(error instanceof Error){
                          console.error(error.message);
                      }
                      return
                  }
                
                  
          }
      }
              

      class ValidationError extends Error {
          constructor(message: string) {
              super(message);
              this.name = "ValidationError";
          }
      }
      
      

      function filterByDate<T extends {date:Date}>(list : T[] , startDate:Date , endDate:Date):T[]{
          if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
              console.error("Invalid dates provided for filtering.");
              return [];
          }
      
          if (startDate > endDate) {
              console.error("Start date must be earlier than or equal to end date.");
              return [];
          }
          else{

              return list.filter(item=> item.date >=startDate&&item.date<=endDate)
          }
      }
      
      let medicineLists:Array<Medicines>=[];
      let supplierLists:Array<Suppliers>=[];
      let saleInvoiceLists:Array<SaleInvoices>=[];
      let purchaseInvoiceLists:Array<PurchaseInvoices>=[];

// Prompt-based interactive interface
function promptMenu(message: string, options: string[]): number {
  const promptMessage = `${message}\n${options
      .map((option, index) => `${index + 1}. ${option}`)
      .join("\n")}`;
  const choice = Number(prompt(promptMessage));
  if (isNaN(choice) || choice < 1 || choice > options.length) {
      console.error("Invalid choice. Please select a valid option.");
      return -1;
  }
  return choice;
}

let choice: number;
do {
  choice = promptMenu("Choose an option:", [
      "Manage Medicines",
      "Manage Suppliers",
      "Record Sale",
      "Record Purchase",
      "Generate Reports",
      "Exit",
  ]);

  switch (choice) {
    case 1: {
        const medicineChoice = promptMenu("Manage Medicines:", [
            "Add Medicine",
            "Edit Medicine",
            "Delete Medicine",
            "View Stock",
            "Update Stock",
            "Compare Medicines",
        ]);
        switch (medicineChoice) {
            case 1: {
                const id = prompt("Enter Medicine ID:") || "";
                const name = prompt("Enter Medicine Name:") || "";
                const potency = prompt("Enter Potency:") || "";
                const manufacturer = prompt("Enter Manufacturer:") || "";
                const quantity = Number(prompt("Enter Quantity:")) || 0;
                const price_per_unit = Number(prompt("Enter Price per Unit:")) || 0;
                Medicines.addMedicine(id, name, potency, manufacturer, quantity, price_per_unit);
                break;
            }
            case 2: {
                const index = Number(prompt("Enter Medicine Index:")) || 0;
                const id = prompt("Enter new ID:") || "";
                const name = prompt("Enter new Name:") || "";
                const potency = prompt("Enter new Potency:") || "";
                const manufacturer = prompt("Enter new Manufacturer:") || "";
                const quantity = Number(prompt("Enter new Quantity:")) || 0;
                const price_per_unit = Number(prompt("Enter new Price per Unit:")) || 0;
                Medicines.editMedicine(index, id, name, potency, manufacturer, quantity, price_per_unit);
                break;
            }
            case 3: {
                const index = Number(prompt("Enter Medicine Index to Delete:")) || 0;
                Medicines.deleteMedicine(index);
                break;
            }
            case 4:
                console.log("Medicine Stock:");
                medicineLists.forEach((medicine, index) => {
                    console.log(`Index: ${index}`);
                    medicine.searchMedicine();
                });
                break;
            case 5: { // Update Stock
                const index = Number(prompt("Enter Medicine Index:")) || 0;
                const updateChoice = promptMenu("Update Stock:", ["Add Stock", "Remove Stock"]);
                switch (updateChoice) {
                    case 1: {
                        const quantity = Number(prompt("Enter Quantity to Add:")) || 0;
                        medicineLists[index].addStock(quantity);
                        console.log("Stock updated successfully.");
                        break;
                    }
                    case 2: {
                        const quantity = Number(prompt("Enter Quantity to Remove:")) || 0;
                        if (quantity > medicineLists[index].quantity) {
                            console.error("Cannot remove more stock than available.");
                        } else {
                            medicineLists[index].removeStock(quantity);
                            console.log("Stock updated successfully.");
                        }
                        break;
                    }
                    default:
                        console.error("Invalid choice. Returning to the menu.");
                        break;
                }
                break;
            }
            case 6: { // Compare Medicines
                const firstIndex = Number(prompt("Enter Index of the First Medicine:")) || 0;
                const secondIndex = Number(prompt("Enter Index of the Second Medicine:")) || 0;
                if (firstIndex < 0 || secondIndex < 0 || 
                    firstIndex >= medicineLists.length || 
                    secondIndex >= medicineLists.length) {
                    console.error("Invalid indexes provided.");
                } else {
                    const areEqual = medicineLists[firstIndex].compareStock(medicineLists[secondIndex]);
                    if (areEqual) {
                        console.log("The medicines are identical (same name, potency, and manufacturer).");
                    } else {
                        console.log("The medicines are different.");
                    }
                }
                break;
            }
            default:
                break;
        }
        break;
      }
      
      case 2: {
          const supplierChoice = promptMenu("Manage Suppliers:", [
              "Add Supplier",
              "Edit Supplier",
              "Delete Supplier",
              "View Suppliers",
          ]);
          switch (supplierChoice) {
              case 1: {
                  const id = prompt("Enter Supplier ID:") || "";
                  const companyName = prompt("Enter Company Name:") || "";
                  const repName = prompt("Enter Representative Name:") || "";
                  const address = prompt("Enter Address:") || "";
                  const description = prompt("Enter Description:") || "";
                  Suppliers.addSupplier(id, companyName, repName, address, description);
                  break;
              }
              case 2: {
                  const index = Number(prompt("Enter Supplier Index:")) || 0;
                  const id = prompt("Enter new ID:") || "";
                  const companyName = prompt("Enter new Company Name:") || "";
                  const repName = prompt("Enter new Representative Name:") || "";
                  const address = prompt("Enter new Address:") || "";
                  const description = prompt("Enter new Description:") || "";
                  Suppliers.editSupplier(index, id, companyName, repName, address, description);
                  break;
              }
              case 3: {
                  const index = Number(prompt("Enter Supplier Index to Delete:")) || 0;
                  Suppliers.deleteSupplier(index);
                  break;
              }
              case 4:
                  console.log("Suppliers:");
                  supplierLists.forEach((supplier, index) => {
                      console.log(`Index: ${index}`);
                      supplier.searchSupplier();
                  });
                  break;
              default:
                  break;
          }
          break;
      }
      case 3: {
          const saleInvNo = prompt("Enter Sale Invoice No:") || "";
          const medicineIndex = Number(prompt("Enter Medicine Index:")) || 0;
          const saleQty = Number(prompt("Enter Sale Quantity:")) || 0;
          const saleDiscount = Number(prompt("Enter Discount (%):")) || 0;
          SaleInvoices.createSaleInvoice(saleInvNo, medicineIndex, saleQty, saleDiscount);
          break;
      }
      case 4: {
          const purchaseInvNo = prompt("Enter Purchase Invoice No:") || "";
          const supplierIndex = Number(prompt("Enter Supplier Index:")) || 0;
          const purchaseQty = Number(prompt("Enter Purchase Quantity:")) || 0;
          const purchaseDiscount = Number(prompt("Enter Discount (%):")) || 0;
          PurchaseInvoices.createPurchaseInvoice(
              purchaseInvNo,
              supplierIndex,
              supplierIndex,
              purchaseQty,
              purchaseDiscount
          );
          break;
      }
      case 5: {
        const reportChoice = promptMenu("Generate Reports:", [
          "Generate Sales Report",
          "Generate Purchase Report",
          "Generate Stock Update Report",
        ]);
  
        switch (reportChoice) {
          case 1: {
            const dateFilter = promptMenu("Filter Sales Report by Date?", [
              "Yes",
              "No",
            ]);
            if (dateFilter === 1) {
              const startDate = new Date(prompt("Enter Start Date (YYYY-MM-DD):") || "");
              const endDate = new Date(prompt("Enter End Date (YYYY-MM-DD):") || "");
              console.log("Filtered Sales Report:");
              saleInvoiceLists
                .filter(
                  invoice =>
                    new Date(invoice.date) >= startDate &&
                    new Date(invoice.date) <= endDate
                )
                .forEach(invoice => console.log(invoice));
            } else {
              console.log("Full Sales Report:");
              saleInvoiceLists.forEach(invoice => console.log(invoice));
            }
            break;
          }
          case 2: {
            const dateFilter = promptMenu("Filter Purchase Report by Date?", [
              "Yes",
              "No",
            ]);
            if (dateFilter === 1) {
              const startDate = new Date(prompt("Enter Start Date (YYYY-MM-DD):") || "");
              const endDate = new Date(prompt("Enter End Date (YYYY-MM-DD):") || "");
              console.log("Filtered Purchase Report:");
              purchaseInvoiceLists
                .filter(
                  invoice =>
                    new Date(invoice.date) >= startDate &&
                    new Date(invoice.date) <= endDate
                )
                .forEach(invoice => console.log(invoice));
            } else {
              console.log("Full Purchase Report:");
              purchaseInvoiceLists.forEach(invoice => console.log(invoice));
            }
            break;
          }
          case 3: {
            console.log("Stock Update Report:");
            medicineLists.forEach((medicine, index) => {
              console.log(`Index: ${index}, Name: ${medicine.name}, Quantity: ${medicine.quantity}`);
            });
            break;
          }
          default:
            break;
        }
        break;
      }
      case 6:
        console.log("Exiting...");
        break;
      default:
        console.error("Invalid choice. Please select a valid option.");
    }
  } while (choice !== 6);
  