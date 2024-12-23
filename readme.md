Project Title: Pharmacy Management System
Project Description



=>Project Setup:

1-Installing vs code
2-Intstalling extensions like liver server
3-Installing git and github and configure it in vs code
4-Create and configure tsconfig.json file



=>Available Commands:

=)Medicine Management
1-Add Medicine
2-Edit Medicine
3-Delete Medicine
4-View Stock of Medicines

=)Supplier Management
1-Add Supplier
2-Edit Supplier
3-Delete Supplier
4-View Stock of Suppliers

=)Generate Sale Invoice and update stock
=)Generate Purchase Invoice and update stock

=)Generate Reports
1-Sale Reports with and without date filtering
2-Purchase Reports with and without date filtering

=)Exit





=>Project Structure:
.
├── index.js          # Main entry point of the application
├── classes/          # Contains all class definitions
│   ├── Medicine.js   # Class for managing medicines
│   ├── Supplier.js   # Class for managing suppliers
│   ├── SaleInvoice.js# Class for handling sales invoices
│   ├── PurchaseInvoice.js # Class for handling purchase invoices
├── utils/            # Utility functions
│   ├── promptMenu.js # Custom prompt-based menu utility
├── data/             # Stores initial or sample data
│   ├── medicineData.json  # Sample medicine data
│   ├── supplierData.json  # Sample supplier data
└── README.md         # Documentation for the project




=>Dependencies:

Install prompt-sync