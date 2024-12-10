"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const medicinesFile = path_1.default.join(__dirname, "medicines.json");
const suppliersFile = path_1.default.join(__dirname, "suppliers.json");
const loadJSON = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf-8"));
const saveJSON = (filePath, data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
class Medicine {
    constructor(id, name, potency, manufacturer, quantity, price_per_unit) {
        this.id = id;
        this.name = name;
        this.potency = potency;
        this.manufacturer = manufacturer;
        this.quantity = quantity;
        this.price_per_unit = price_per_unit;
    }
    static addMedicine(id, name, potency, manufacturer, quantity, price_per_unit) {
        const medicines = loadJSON(medicinesFile);
        medicines.push(new Medicine(id, name, potency, manufacturer, quantity, price_per_unit));
        saveJSON(medicinesFile, medicines);
        console.log("Medicine added successfully!");
    }
    static deleteMedicine(index) {
        const medicines = loadJSON(medicinesFile);
        if (index >= 0 && index < medicines.length) {
            medicines.splice(index, 1);
            saveJSON(medicinesFile, medicines);
            console.log("Medicine deleted successfully!");
        }
        else {
            console.log("Invalid index!");
        }
    }
    static displayMedicine() {
        const medicines = loadJSON(medicinesFile);
        console.log(medicines);
    }
}
class Supplier {
    constructor(id, company_name, representative_name, address, description) {
        this.id = id;
        this.company_name = company_name;
        this.representative_name = representative_name;
        this.address = address;
        this.description = description;
    }
    static addSupplier(id, company_name, representative_name, address, description) {
        const suppliers = loadJSON(suppliersFile);
        suppliers.push(new Supplier(id, company_name, representative_name, address, description));
        saveJSON(suppliersFile, suppliers);
    }
    static deleteSupplier(index) {
        const suppliers = loadJSON(suppliersFile);
        if (index >= 0 && index < suppliers.length) {
            suppliers.splice(index, 1);
            saveJSON(suppliersFile, suppliers);
        }
        else {
            console.log("Invalid Input");
        }
    }
    static displaySupplier() {
        const suppliers = loadJSON(suppliersFile);
        console.log(suppliers);
    }
}
Medicine.addMedicine('001', 'Panadol', '250mg', 'Medicos', 10, 2.5);
Medicine.addMedicine('002', 'Brufen', '400mg', 'Pfizer', 20, 5);
Supplier.addSupplier('S001', 'HealthSupplies Inc.', 'John Doe', '123 Market St.', 'Medical Supplies');
Supplier.addSupplier('S002', 'PharmaCo', 'Jane Smith', '456 Elm St.', 'Pharmaceuticals');
Medicine.deleteMedicine(0);
Supplier.deleteSupplier(0);
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
