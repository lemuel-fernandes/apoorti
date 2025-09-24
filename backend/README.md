## Folder structure
```
apoorti-backend/
│── .env                         # Environment variables
│── package.json
│── server.js                     # Entry point
│
├── config/
│   ├── db.js                     # MongoDB connection
│   ├── hyperledger.js            # Hyperledger Fabric network connection
│   └── logger.js                 # Winston/Morgan logger config
│
├── src/
|   ├── ai/
│     ├── models/                # ML models (saved as .pkl/.onnx)
│     ├── cropQualityService.js   # CV model inference
│     ├── anomalyService.js       # Fraud/anomaly detection
│     ├── forecastService.js      # Demand/price prediction
│     └── trustEngine.js          # Reputation scoring

│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT authentication
│   │   ├── errorMiddleware.js    # Centralized error handling
│   │   └── roleMiddleware.js     # RBAC (Farmer, Distributor, Retailer, Consumer)
│   │
│   ├── models/
│   │   ├── User.js               # User schema (Farmer, Retailer, etc.)
│   │   ├── Product.js            # Agricultural product schema
│   │   ├── Batch.js              # Batch info (farm-to-fork tracking)
│   │   └── Transaction.js        # Blockchain transaction references
│   │
│   ├── services/
│   │   ├── userService.js        # User management (registration, login)
│   │   ├── productService.js     # Product management
│   │   ├── blockchainService.js  # Hyperledger Fabric transactions
│   │   └── traceService.js       # Supply chain traceability logic
│   │
│   ├── controllers/
│   │   ├── authController.js     # Login, Register, JWT issue
│   │   ├── userController.js     # User CRUD
│   │   ├── productController.js  # Product CRUD
│   │   ├── batchController.js    # Batch lifecycle (harvest → distribution → retail)
│   │   └── traceController.js    # Trace product journey (farm-to-fork)
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── productRoutes.js
│   │   ├── batchRoutes.js
│   │   └── traceRoutes.js
│   │
│   ├── utils/
│   │   ├── jwtUtils.js           # Sign/verify JWTs
│   │   ├── responseHandler.js    # Standard API responses
│   │   ├── hashUtils.js          # Password hashing
│   │   └── validator.js          # Joi/Yup validation schemas
│   │
│   ├── blockchain/
│   │   ├── chaincode/            # Smart contracts (Hyperledger Fabric chaincode)
│   │   │   ├── productChaincode.js
│   │   │   └── traceChaincode.js
│   │   └── network/              # Hyperledger Fabric network configs
│   │       ├── connection.json
│   │       └── wallet/           # Fabric wallets & identities
│   │
│   └── docs/
│       ├── api-spec.yaml         # OpenAPI/Swagger spec
│       └── architecture.md       # System design notes
```
