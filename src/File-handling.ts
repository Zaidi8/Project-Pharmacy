
// let x:number = prompt(`1. Manage Medicines
// 2. Manage Suppliers
// 3. Record Sale
// 4. Record Purchase
// 5. Generate Reports
// 6. Exit`)
// if (x===1){
//     prompt(`a. Add Medicine
//         b. Edit Medicine
//         c. Delete Medicine
//         d. View Stock`)
// }
// else if(x===2){
//     prompt(`a. Add Supplier
//     b. Edit Supplier
//     c. Delete Supplier
//     d. View Suppliers`)
    
// }
// else if(x===3){
//     prompt(`a. Generate Sale Invoice`)

// }
// else if(x===4){

//     prompt(`a. Generate Purchase Invoice`)
// }
// else if(x===5){
//     prompt(` a. Stock Report
//     b. Sales Summary (using date range)
//     c. Purchase Summary (using date range)`)

// }

import * as fs from "fs"
import path from "path";
const medicinesFile = path.join(__dirname, "medicines.json");
const suppliersFile = path.join(__dirname, "suppliers.json");

const loadJSON = (filePath: string) => JSON.parse(fs.readFileSync(filePath, "utf-8"));
const saveJSON = (filePath: string, data: any) => fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
class Medicine{
    constructor(
        public id:string,
        public name:string,
        public potency:string,
        public manufacturer:string,
        public quantity:number,
        public price_per_unit:number

    ){}
    
    static addMedicine(
        
        id:string,
        name:string,
         potency:string,
         manufacturer:string,
         quantity:number,
         price_per_unit:number):void
         {
            const medicines = loadJSON(medicinesFile);
        medicines.push(new Medicine(id, name, potency, manufacturer, quantity, price_per_unit));
        saveJSON(medicinesFile, medicines);
        console.log("Medicine added successfully!");
         }
    static deleteMedicine(index:number):void{
        const medicines = loadJSON(medicinesFile);
        if (index >= 0 && index < medicines.length) {
            medicines.splice(index, 1);
            saveJSON(medicinesFile, medicines);
            console.log("Medicine deleted successfully!");
        } else {
            console.log("Invalid index!");
        }
    }

    static displayMedicine():void{
        const medicines=loadJSON(medicinesFile);
       console.log(medicines)
    }
}

class Supplier{
    constructor(
        public id:string,
        public company_name:string,
        public representative_name:string,
        public address:string,
        public description:string
        
    ){}
    
    
    static addSupplier(
        
        id:string,
        company_name:string,
        representative_name:string,
        address:string,
        description:string):void
        {   const suppliers=loadJSON(suppliersFile)
            suppliers.push( new Supplier(
                id,
                company_name,
                representative_name,
                address,
                description));
            saveJSON(suppliersFile,suppliers)
            }

            static deleteSupplier(index:number):void{
                const suppliers=loadJSON(suppliersFile)
                if(index>=0&&index<suppliers.length){

                    suppliers.splice(index,1)
                    saveJSON(suppliersFile,suppliers)
                }
                else{
                    console.log("Invalid Input")
                }
            }
            
            static displaySupplier():void{
                const suppliers=loadJSON(suppliersFile)
                console.log(suppliers);
            }
        
        }

        Medicine.addMedicine('001', 'Panadol', '250mg', 'Medicos', 10, 2.5);
        Medicine.addMedicine('002', 'Brufen', '400mg', 'Pfizer', 20, 5);
        
        Supplier.addSupplier('S001', 'HealthSupplies Inc.', 'John Doe', '123 Market St.', 'Medical Supplies');
        Supplier.addSupplier('S002', 'PharmaCo', 'Jane Smith', '456 Elm St.', 'Pharmaceuticals');
        
        Medicine.deleteMedicine(0);
        Supplier.deleteSupplier(0)
        Medicine.displayMedicine();
        Supplier.displaySupplier();
    //     class SaleInvoice{
    //         constructor(
    //             public inv_no:string,
    //             public date:Date,
    //             public id_of_medicine:string,
    //             public manufacturer:string,
    //             public quantities:string,
    //             public total_price:string,
    //             public discount:string
                
    //         ){}
            
    //     }
    // //     class PurchaseInvoice extends SaleInvoice{
    // //         constructor(
    // //             public inv_no:string,
    // //             public date:Date,
    // //             public id_of_supplier:string,
    // //             public manufacturer:string,
    // //             public quantities:string,
    // //             public total_price:string,
    // //             public discount:string
    // //         ){
    // //             super(inv_no,date,id_of_supplier,manufacturer,quantities,total_price,discount)
    // //         }
            
    // // }
    
       
        
    //     // console.log(m1);
