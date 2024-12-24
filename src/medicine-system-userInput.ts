class Medicines{
private static counter=1
  constructor(
      public name:string,
      public potency:string,
      public manufacturer:string,
      public quantity:number,
      public price_per_unit:number,
      public id:string=Medicines.generateMedicineId()
      
  ){}
private static generateMedicineId(): string {
    return `M${String(this.counter++).padStart(3, "0")}`; // M001, M002, etc.
}
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
   addMedicine(
      
      name:string,
      potency:string,
      manufacturer:string,
      quantity:number,
      price_per_unit:number):Medicines | null
      {  
          if (Medicines.validateMedicineInput(
              name,
              potency,
              manufacturer,
              quantity,
              price_per_unit)){
                    this.name = name,
                    this.potency = potency,
                    this.manufacturer = manufacturer,
                    this.quantity = quantity,
                    this.price_per_unit = price_per_unit;
                    console.log("Medicine added successfully")
                    return this;
              }
              else{
                  console.log("Medicine not added due to Invalid Input!")
                  return null;
              }
          }
          deleteMedicine(index: number): void {
            if (index < 0 || index >= medicineLists.length) {
                console.error("Invalid Index");
                return;
            }
        
            medicineLists.splice(index, 1);
            console.log("Medicine deleted successfully");
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
          editMedicine(
            index: number,
            name: string,
            potency: string,
            manufacturer: string,
            quantity: number,
            price_per_unit: number
        ): void {
            if (index < 0 || index >= medicineLists.length) {
                console.error("Invalid Index");
                return;
            }
        
            if (!Medicines.validateMedicineInput(name, potency, manufacturer, quantity, price_per_unit)) {
                console.error("Invalid Input Data");
                return;
            }
        
            medicineLists[index] = new Medicines(name, potency, manufacturer, quantity, price_per_unit);
            console.log("Medicine updated successfully.");
        }
        
          static validateMedicineInput(
              name: string,
              potency: string,
              manufacturer: string,
              quantity: number,
              price_per_unit: number
          ): boolean {
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
                  private static counter=1;
                  constructor(
                      public company_name:string,
                      public representative_name:string,
                      private address:string,
                      public description:string,
                      public id:string=Suppliers.generateSupplierId()
                      
                  ){}

                  private static generateSupplierId():string{
                    return `S${String(this.counter++).padStart(3,"0")}`
                  }
                  
                    addSupplier(

                      company_name:string,
                      representative_name:string,
                      address:string,
                      description:string):Suppliers | null
                      {
                          if (Suppliers.validateSupplierInput(
                              company_name,
                              representative_name,
                              address,
                              description)){
          
                                    this.company_name = company_name,
                                    this.representative_name = representative_name,
                                    this.address = address,
                                    this.description = description;                                    
                                  console.log("Supplier added successsfully")
                                  return this
                              }
                              else{
                                  console.log("Supplier not added due to Invalid input")
                                  return null;
                              }
          
                          
                          }
                          
          deleteSupplier(index: number): void {
            if (index < 0 || index >= supplierLists.length) {
                console.error("Invalid Index");
                return;
            }
        
            supplierLists.splice(index, 1);
            console.log("Supplier deleted successfully.");
        }
                        

        editSupplier(
            index: number,
            company_name: string,
            representative_name: string,
            address: string,
            description: string
        ): void {
            if (index < 0 || index >= supplierLists.length) {
                console.error("Invalid Index");
                return;
            }
        
            if (
                !Suppliers.validateSupplierInput(
                    company_name,
                    representative_name,
                    address,
                    description
                )
            ) {
                console.error("Invalid Input Data");
                return;
            }
        
            supplierLists[index] = new Suppliers(
                company_name,
                representative_name,
                address,
                description
            );
        
            console.log("Supplier updated successfully.");
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
              company_name: string,
              representative_name: string,
              address: string,
              description: string
          ): boolean {
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
//friend like function to access private members
function Address(supplier : Suppliers):string{
        return supplier.getAddress()
}    

      class SaleInvoices{
          private static counter=1;
          constructor(
              public date:Date= new Date(),
              public name:string="",
              public manufacturer:string="",
              public quantities:number=0,
              public total_price:number=0,
              public discount:number=0,
              public inv_no:string=SaleInvoices.generateInv_no()
              
          ){}
          private static generateInv_no():string{
            return `SIV${String(this.counter++).padStart(3,"0")}`
          }
          createSaleInvoice(
            medIndex: number,
            quantities: number,
            discount: number
        ): SaleInvoices | null {
            // Validate the index
            if (medIndex < 0 || medIndex >= medicineLists.length) {
                console.error("Invalid Index");
                return null;
            }
        
            // Validate the quantities
            if (quantities <= 0) {
                console.error("Invalid Quantity: Must be greater than 0");
                return null;
            }
        
            // Validate the discount
            if (discount < 0 || discount > 100) {
                console.error("Invalid Discount: Must be between 0 and 100");
                return null;
            }
        
            // Check stock availability
            if (quantities > medicineLists[medIndex].quantity) {
                console.error("Insufficient stock for the requested quantity");
                return null;
            }
        
            // Populate SaleInvoice fields
            this.date = new Date(); // Set the current date as the invoice date
            this.manufacturer = medicineLists[medIndex].manufacturer;
            this.name = medicineLists[medIndex].name;
            this.quantities = quantities;
            this.total_price =
                quantities *
                medicineLists[medIndex].price_per_unit *
                (1 - discount / 100);
            this.discount = discount;
        
            // Deduct stock quantity
            medicineLists[medIndex].quantity -= quantities;
        
            console.log("Sale invoice created successfully!");
            return this;
        }
        
          
          
      }
      class PurchaseInvoices{
          private static counter=1;
          constructor(
              public date:Date=new Date(),
              public manufacturer:string="",
              public name:string="",
              public quantities:number=0,
              public total_price:number=0,
              public discount:number=0,
              public inv_no:string=PurchaseInvoices.generatePIV_no()
          ){}
            private static generatePIV_no():string{
                return `PIV${String(this.counter++).padStart(3,"0")}`
            }

            createPurchaseInvoice(
                medIndex: number,
                quantities: number,
                discount: number
            ): PurchaseInvoices | null {
                // Validate medIndex
                if (medIndex < 0 || medIndex >= medicineLists.length) {
                    console.error("Invalid Index");
                    return null;
                }
            
                // Validate quantities
                if (quantities <= 0) {
                    console.error("Quantity must be greater than zero.");
                    return null;
                }
            
                // Validate discount
                if (discount < 0 || discount > 100) {
                    console.error("Invalid Discount: Must be between 0 and 100.");
                    return null;
                }
            
                // Proceed with creating the invoice
                this.date = new Date();
                this.manufacturer = medicineLists[medIndex].manufacturer;
                this.quantities = quantities;
                this.name = medicineLists[medIndex].name;
                this.total_price =
                    medicineLists[medIndex].price_per_unit * quantities * (1 - discount / 100);
                this.discount = discount;
            
                // Update stock quantity
                console.log("Purchase Invoice Created Successfully");
                medicineLists[medIndex].quantity += quantities;
            
                return this;
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
                const name = prompt("Enter Medicine Name:") || "";
                const potency = prompt("Enter Potency:") || "";
                const manufacturer = prompt("Enter Manufacturer:") || "";
                const quantity = Number(prompt("Enter Quantity:")) || 0;
                const price_per_unit = Number(prompt("Enter Price per Unit:")) || 0;
                const newMed= new Medicines(name, potency, manufacturer, quantity, price_per_unit).addMedicine(name, potency, manufacturer, quantity, price_per_unit);
                if(newMed){
                       medicineLists.push(newMed);
                    }
                break;
            }
            case 2: {
                const indexInput = prompt("Enter Medicine Index:");
                if (indexInput === null || indexInput.trim() === "") {
                    console.error("No index provided. Returning to menu.");
                    break; // Continue the menu loop
                }
            
                const index = Number(indexInput);
                if (isNaN(index) || index < 0 || index >= medicineLists.length) {
                    console.error("Invalid index: Out of range or not a number.");
                    break; // Continue the menu loop
                }
                const name = prompt("Enter new Name:") || "";
                const potency = prompt("Enter new Potency:") || "";
                const manufacturer = prompt("Enter new Manufacturer:") || "";
                const quantity = Number(prompt("Enter new Quantity:")) || 0;
                const price_per_unit = Number(prompt("Enter new Price per Unit:")) || 0;
                medicineLists[index].editMedicine(index, name, potency, manufacturer, quantity, price_per_unit);
                break;
            }
            case 3: {
                const indexInput = prompt("Enter Medicine Index to Delete:");
    
            if (indexInput === null || indexInput.trim() === "") {
                console.error("No index provided. Operation canceled.");
                break;
            }
        
            const index = Number(indexInput);
    
            if (isNaN(index)) {
                console.error("Invalid input: Index must be a number.");
                break;
            }
        
            if (index < 0 || index >= medicineLists.length) {
                console.error("Invalid index: Out of range.");
                break;
            }
                medicineLists[index].deleteMedicine(index);
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
                  const companyName = prompt("Enter Company Name:") || "";
                  const repName = prompt("Enter Representative Name:") || "";
                  const address = prompt("Enter Address:") || "";
                  const description = prompt("Enter Description:") || "";
                  const newSup = new Suppliers( companyName, repName, address, description).addSupplier(companyName, repName, address, description);
                  if(newSup){
                      supplierLists.push(newSup)
                    } 
                  break;
              }
              case 2: {
                const indexInput = prompt("Enter Supplier Index:");
                if (indexInput === null || indexInput.trim() === "") {
                    console.error("No index provided. Returning to menu.");
                    break; // Continue the menu loop
                }
            
                const index = Number(indexInput);
                if (isNaN(index) || index < 0 || index >= supplierLists.length) {
                    console.error("Invalid index: Out of range or not a number.");
                    break; // Continue the menu loop
                }
                  const companyName = prompt("Enter new Company Name:") || "";
                  const repName = prompt("Enter new Representative Name:") || "";
                  const address = prompt("Enter new Address:") || "";
                  const description = prompt("Enter new Description:") || "";
                  supplierLists[index].editSupplier(index, companyName, repName, address, description);
                  break;
              }
              case 3: {
                const indexInput = prompt("Enter Supplier Index to Delete:");
    
                if (indexInput === null || indexInput.trim() === "") {
                    console.error("No index provided. Operation canceled.");
                    break;
                }
            
                const index = Number(indexInput);
        
                if (isNaN(index)) {
                    console.error("Invalid input: Index must be a number.");
                    break;
                }
            
                if (index < 0 || index >= supplierLists.length) {
                    console.error("Invalid index: Out of range.");
                    break;
                }
                  supplierLists[index].deleteSupplier(index);
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
        const medicineIndex = Number(prompt("Enter Medicine Index:")) || 0;
        const saleQty = Number(prompt("Enter Sale Quantity:")) || 0;
        const saleDiscount = Number(prompt("Enter Discount (%):")) || 0;
    
        const newSIV = new SaleInvoices().createSaleInvoice(
            medicineIndex,
            saleQty,
            saleDiscount
        );
    
        if (newSIV) {
            saleInvoiceLists.push(newSIV)
            console.log("New Sale Invoice:", newSIV);
        }
        break;
    }
    
      case 4: {
          const medIndex = Number(prompt("Enter Medicine Index:")) || 0;
          const purchaseQty = Number(prompt("Enter Purchase Quantity:")) || 0;
          const purchaseDiscount = Number(prompt("Enter Discount (%):")) || 0;
          const newPIV = new PurchaseInvoices().createPurchaseInvoice(
              medIndex,
              purchaseQty,
              purchaseDiscount
          );
          if (newPIV){
            purchaseInvoiceLists.push(newPIV)
          }
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
  