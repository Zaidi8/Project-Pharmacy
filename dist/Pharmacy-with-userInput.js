"use strict";
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
        medicineList.push(new Medicine(id, name, potency, manufacturer, quantity, price_per_unit));
        console.log("Medicine added successfully!");
    }
    static deleteMedicine(index) {
        medicineList.splice(index, 1);
        console.log("Medicine deleted successfully!");
    }
    editMedicine(index, id, name, potency, manufacturer, quantity, price_per_unit) {
        if (index >= 0 && index < medicineList.length) {
            medicineList[index] = new Medicine(id, name, potency, manufacturer, quantity, price_per_unit);
            console.log("Medicine edited successfully!");
        }
    }
    searchMedicine() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Potency: ${this.potency}, Manufacturer: ${this.manufacturer}, Quantity: ${this.quantity}, Price per Unit: ${this.price_per_unit}`);
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
        supplierList.push(new Supplier(id, company_name, representative_name, address, description));
        console.log("Supplier added successfully!");
    }
    static deleteSupplier(index) {
        supplierList.splice(index, 1);
        console.log("Supplier deleted successfully!");
    }
    editSupplier(index, id, company_name, representative_name, address, description) {
        if (index >= 0 && index < supplierList.length) {
            supplierList[index] = new Supplier(id, company_name, representative_name, address, description);
            console.log("Supplier edited successfully!");
        }
    }
    searchSupplier() {
        console.log(`ID: ${this.id}, Company Name: ${this.company_name}, Representative: ${this.representative_name}, Address: ${this.address}, Description: ${this.description}`);
    }
}
class SaleInvoice {
    constructor(inv_no, date, id, manufacturer, quantities, total_price, discount) {
        this.inv_no = inv_no;
        this.date = date;
        this.id = id;
        this.manufacturer = manufacturer;
        this.quantities = quantities;
        this.total_price = total_price;
        this.discount = discount;
    }
    static createSaleInvoice(inv_no, index, quantities, discount) {
        const date = new Date();
        const total_price = quantities * medicineList[index].price_per_unit * (1 - discount / 100);
        saleInvoiceList.push(new SaleInvoice(inv_no, date, medicineList[index].id, medicineList[index].manufacturer, quantities, total_price, discount));
        medicineList[index].quantity -= quantities;
        console.log("Sale invoice created successfully!");
    }
}
class PurchaseInvoice extends SaleInvoice {
    constructor(inv_no, date, id_of_supplier, manufacturer, quantities, total_price, discount) {
        super(inv_no, date, id_of_supplier, manufacturer, quantities, total_price, discount);
        this.inv_no = inv_no;
        this.date = date;
        this.id_of_supplier = id_of_supplier;
        this.manufacturer = manufacturer;
        this.quantities = quantities;
        this.total_price = total_price;
        this.discount = discount;
    }
    static createPurchaseInvoice(inv_no, quantities, index, discount) {
        const date = new Date();
        const total_price = medicineList[index].price_per_unit * quantities * (1 - discount / 100);
        purchaseInvoiceList.push(new PurchaseInvoice(inv_no, date, supplierList[index].id, medicineList[index].manufacturer, quantities, total_price, discount));
        medicineList[index].quantity += quantities;
        console.log("Purchase invoice created successfully!");
    }
}
let medicineList = [];
let supplierList = [];
let saleInvoiceList = [];
let purchaseInvoiceList = [];
// Prompt-based interactive interface
let choice;
do {
    choice = Number(prompt(`Choose an option:
        1. Manage Medicines
        2. Manage Suppliers
        3. Record Sale
        4. Record Purchase
        5. Generate Reports
        6. Exit`));
    switch (choice) {
        case 1:
            const medicineChoice = Number(prompt(`1. Add Medicine
                2. Edit Medicine
                3. Delete Medicine
                4. View Stock`));
            if (medicineChoice === 1) {
                const id = prompt("Enter Medicine ID:") || "";
                const name = prompt("Enter Medicine Name:") || "";
                const potency = prompt("Enter Potency:") || "";
                const manufacturer = prompt("Enter Manufacturer:") || "";
                const quantity = Number(prompt("Enter Quantity:")) || 0;
                const price_per_unit = Number(prompt("Enter Price per Unit:")) || 0;
                Medicine.addMedicine(id, name, potency, manufacturer, quantity, price_per_unit);
            }
            else if (medicineChoice === 2) {
                // Edit Medicine
                const index = Number(prompt("Enter medicine index:")) || 0;
                const id = prompt("Enter new ID:") || "";
                const name = prompt("Enter new Name:") || "";
                const potency = prompt("Enter new Potency:") || "";
                const manufacturer = prompt("Enter new Manufacturer:") || "";
                const quantity = Number(prompt("Enter new Quantity:")) || 0;
                const price_per_unit = Number(prompt("Enter new Price per Unit:")) || 0;
                new Medicine("", "", "", "", 0, 0).editMedicine(index, id, name, potency, manufacturer, quantity, price_per_unit);
            }
            else if (medicineChoice === 3) {
                const index = Number(prompt("Enter index of medicine to delete:"));
                Medicine.deleteMedicine(index);
            }
            else if (medicineChoice === 4) {
                console.log("Stock:");
                medicineList.forEach((medicine, index) => {
                    console.log(`Index: ${index}`);
                    medicine.searchMedicine();
                });
            }
            break;
        case 2:
            const supplierChoice = Number(prompt(`1. Add Supplier
                2. Edit Supplier
                3. Delete Supplier
                4. View Suppliers`));
            if (supplierChoice === 1) {
                const id = prompt("Enter Supplier ID:") || "";
                const companyName = prompt("Enter Company Name:") || "";
                const repName = prompt("Enter Representative Name:") || "";
                const address = prompt("Enter Address:") || "";
                const description = prompt("Enter Description:") || "";
                Supplier.addSupplier(id, companyName, repName, address, description);
            }
            else if (supplierChoice === 2) {
                const index = Number(prompt("Enter supplier index:"));
                const id = prompt("Enter new ID:") || "";
                const companyName = prompt("Enter new Company Name:") || "";
                const repName = prompt("Enter new Representative Name:") || "";
                const address = prompt("Enter new Address:") || "";
                const description = prompt("Enter new Description:") || "";
                new Supplier("", "", "", "", "").editSupplier(index, id, companyName, repName, address, description);
            }
            else if (supplierChoice === 3) {
                const index = Number(prompt("Enter index of supplier to delete:"));
                Supplier.deleteSupplier(index);
            }
            else if (supplierChoice === 4) {
                console.log("Suppliers:");
                supplierList.forEach((supplier, index) => {
                    console.log(`Index: ${index}`);
                    supplier.searchSupplier();
                });
            }
            break;
        case 3:
            const saleInvNo = prompt("Enter Sale Invoice No:") || "";
            const medicineIndex = Number(prompt("Enter Medicine Index:")) || 0;
            const saleQty = Number(prompt("Enter Sale Quantity:")) || 0;
            const saleDiscount = Number(prompt("Enter Discount (%):")) || 0;
            SaleInvoice.createSaleInvoice(saleInvNo, medicineIndex, saleQty, saleDiscount);
            break;
        case 4:
            const purchaseInvNo = prompt("Enter Purchase Invoice No:") || "";
            const supplierIndex = Number(prompt("Enter Supplier Index:")) || 0;
            const purchaseQty = Number(prompt("Enter Purchase Quantity:")) || 0;
            const purchaseDiscount = Number(prompt("Enter Discount (%):")) || 0;
            PurchaseInvoice.createPurchaseInvoice(purchaseInvNo, purchaseQty, supplierIndex, purchaseDiscount);
            break;
        case 5:
            console.log("Stock Report:");
            medicineList.forEach(medicine => medicine.searchMedicine());
            console.log("Sales Summary:");
            saleInvoiceList.forEach(invoice => console.log(invoice));
            console.log("Purchase Summary:");
            purchaseInvoiceList.forEach(invoice => console.log(invoice));
            break;
        case 6:
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
} while (choice !== 6);
