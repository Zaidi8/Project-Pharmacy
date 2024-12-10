"use strict";
class Medicines {
    constructor(id, name, potency, manufacturer, quantity, price_per_unit) {
        this.id = id;
        this.name = name;
        this.potency = potency;
        this.manufacturer = manufacturer;
        this.quantity = quantity;
        this.price_per_unit = price_per_unit;
    }
    static addMedicine(id, name, potency, manufacturer, quantity, price_per_unit) {
        medicineLists.push(new Medicines(id, name, potency, manufacturer, quantity, price_per_unit));
    }
    static deleteMedicine(index) {
        medicineLists.splice(index, 1);
    }
    searchMedicine() {
        console.log(this.id, this.name, this.potency, this.manufacturer, this.quantity, this.price_per_unit);
    }
    editMedicine(index, id, name, potency, manufacturer, quantity, price_per_unit) {
        if (index >= 0 && index < medicineLists.length) {
            medicineLists[index] = new Medicines(id, name, potency, manufacturer, quantity, price_per_unit);
        }
    }
}
class Suppliers {
    constructor(id, company_name, representative_name, address, description) {
        this.id = id;
        this.company_name = company_name;
        this.representative_name = representative_name;
        this.address = address;
        this.description = description;
    }
    static addSupplier(id, company_name, representative_name, address, description) {
        supplierLists.push(new Suppliers(id, company_name, representative_name, address, description));
    }
    static deleteSupplier(index) {
        supplierLists.splice(index, 1);
    }
    editSupplier(index, id, company_name, representative_name, address, description) {
        if (index >= 0 && index < medicineLists.length) {
            supplierLists[index] = new Suppliers(id, company_name, representative_name, address, description);
        }
    }
    searchSupplier() {
        console.log(this.id, this.company_name, this.representative_name, this.address, this.description);
    }
}
class SaleInvoices {
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
        const date = new Date(); // Set the current date as the invoice date
        const total_price = quantities * medicineLists[index].price_per_unit * (1 - discount / 100);
        saleInvoiceLists.push(new SaleInvoices(inv_no, date, medicineLists[index].id, medicineLists[index].manufacturer, quantities, total_price, discount));
        console.log("Sale invoice created successfully!");
        medicineLists[index].quantity -= quantities;
    }
}
class PurchaseInvoices extends SaleInvoices {
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
        const total_price = medicineLists[index].price_per_unit * quantities * (1 - discount / 100);
        purchaseInvoiceLists.push(new PurchaseInvoices(inv_no, date, supplierLists[index].id, medicineLists[index].manufacturer, quantities, total_price, discount));
        medicineLists[index].quantity += quantities;
    }
}
let medicineLists = [];
let supplierLists = [];
let saleInvoiceLists = [];
let purchaseInvoiceLists = [];
//Add Supplier/Medicine
Medicines.addMedicine('001', 'Panadol', '250mg', 'Medicos', 10, 2.5);
Medicines.addMedicine('002', 'Brufen', '400mg', 'Pfizer', 20, 5);
Suppliers.addSupplier('S001', 'HealthSupplies Inc.', 'John Doe', '123 Market St.', 'Medical Supplies');
Suppliers.addSupplier('S002', 'PharmaCo', 'Jane Smith', '456 Elm St.', 'Pharmaceuticals');
//Delete Supplier/Medicine
Medicines.deleteMedicine(0);
Suppliers.deleteSupplier(0);
//Edit Supplier/Medicine
medicineLists[0].editMedicine(0, '002', 'Panadol', '250mg', 'Medicos', 10, 2.5);
supplierLists[0].editSupplier(0, 'S001', 'PharmaCo', 'Jane Smith', '456 Elm St.', 'Pharmaceuticals');
//Search Supplier/Medicine
medicineLists[0].searchMedicine();
supplierLists[0].searchSupplier();
//List Supplier/Medicine Details
console.log(medicineLists);
console.log(supplierLists);
//Creates Sales Invoice and Update Stock
SaleInvoices.createSaleInvoice('IV001', 0, 12, 10);
console.log(saleInvoiceLists);
//Creates Purchase Invoice and Update Stock
PurchaseInvoices.createPurchaseInvoice('PIV001', 10, 0, 25);
console.log(purchaseInvoiceLists);
medicineLists[0].searchMedicine();
