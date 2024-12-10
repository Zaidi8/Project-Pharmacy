class Medicines{
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
            medicineLists.push( new Medicines(
                id,
                name,
                potency,
                manufacturer,
                quantity,
                price_per_unit));
            }
            static deleteMedicine(index:number):void{
                medicineLists.splice(index,1)
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
            editMedicine(index: number,
                id: string,
                name: string,
                potency: string,
                manufacturer: string,
                quantity: number,
                price_per_unit: number
            ): void {
                if (index >= 0 && index < medicineLists.length) {
                    medicineLists[index] = new Medicines(id, name, potency, manufacturer, quantity, price_per_unit);
                }
            }
            
            }
                class Suppliers{
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
                        {
                            supplierLists.push( new Suppliers(
                                id,
                                company_name,
                                representative_name,
                                address,
                                description));
                            }
                            
                            static deleteSupplier(index:number):void{
                                supplierLists.splice(index,1)
                            }

            editSupplier(index: number,
                id: string,
                company_name: string,
                representative_name: string,
                address: string,
                description: string
            ): void {
                if (index >= 0 && index < medicineLists.length) {
                    supplierLists[index] = new Suppliers(id, company_name, representative_name, address, description);
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
                    const date = new Date(); // Set the current date as the invoice date
                    const total_price = quantities * medicineLists[index].price_per_unit * (1 - discount / 100);
                    saleInvoiceLists.push(
                        new SaleInvoices(inv_no, date, medicineLists[index].id, medicineLists[index].manufacturer, quantities, total_price, discount)
                    );
                    console.log("Sale invoice created successfully!");
                    medicineLists[index].quantity-=quantities
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
                quantities: number, 
                index: number, 
                discount: number): void {
                const date= new Date();
                const total_price=medicineLists[index].price_per_unit*quantities*(1-discount/100)
                purchaseInvoiceLists.push(
                    new PurchaseInvoices(inv_no, date, supplierLists[index].id, medicineLists[index].manufacturer, quantities, total_price, discount)
                );
                medicineLists[index].quantity+=quantities
            }
        }
        
        let medicineLists:Array<Medicines>=[];
        let supplierLists:Array<Suppliers>=[];
        let saleInvoiceLists:Array<SaleInvoices>=[];
        let purchaseInvoiceLists:Array<PurchaseInvoices>=[];
        //Add Supplier/Medicine
        Medicines.addMedicine('001', 'Panadol', '250mg', 'Medicos', 10, 2.5);
        Medicines.addMedicine('002', 'Brufen', '400mg', 'Pfizer', 20, 5);
        
        Suppliers.addSupplier('S001', 'HealthSupplies Inc.', 'John Doe', '123 Market St.', 'Medical Supplies');
        Suppliers.addSupplier('S002', 'PharmaCo', 'Jane Smith', '456 Elm St.', 'Pharmaceuticals');
        
        //Delete Supplier/Medicine
        Medicines.deleteMedicine(0);
        Suppliers.deleteSupplier(0);

        //Edit Supplier/Medicine
        medicineLists[0].editMedicine(0, '002', 'Panadol', '250mg', 'Medicos', 10, 2.5)
        supplierLists[0].editSupplier(0, 'S001', 'PharmaCo', 'Jane Smith','456 Elm St.', 'Pharmaceuticals')

        //Search Supplier/Medicine
        medicineLists[0].searchMedicine();
        supplierLists[0].searchSupplier();

        //List Supplier/Medicine Details
        console.log(medicineLists)
        console.log(supplierLists)
        
        //Creates Sales Invoice and Update Stock
        SaleInvoices.createSaleInvoice('IV001',0,12,10)
        console.log(saleInvoiceLists)

        //Creates Purchase Invoice and Update Stock
        PurchaseInvoices.createPurchaseInvoice('PIV001',10,0,25)
        console.log(purchaseInvoiceLists)
        medicineLists[0].searchMedicine();