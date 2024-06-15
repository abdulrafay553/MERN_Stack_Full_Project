const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// mongodb confiq here
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:mern-book-store@cluster0.x1vwiue.mongodb.net/mern-book-store";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const bookCollections = client.db("BookInventory").collection("Books");


        // insert a book to db: Post Method
        app.post("/upload-book", async (req, res) => {
            const data = req.body;
            // console.log(data);
            const result = await bookCollections.insertOne(data);
            res.send(result);
        })

        // // get all books from db
        // app.get("/all-books", async (req, res) => {
        //     const books = bookCollections.find();
        //     const result = await books.toArray();
        //     res.send(result)
        // })

        // get all books & find by a category from db
        app.get("/all-books", async (req, res) => {
            let query = {};
            if (req.query?.category) {
                query = { category: req.query.category }
            }
            const result = await bookCollections.find(query).toArray();
            res.send(result)
        })

        // update a books method
        app.patch("/book/:id", async (req, res) => {
            const id = req.params.id;
            // console.log(id);
            const updateBookData = req.body;
            const filter = { _id: new ObjectId(id) };
            const updatedDoc = {
                $set: {
                    ...updateBookData
                }
            }
            const options = { upsert: true };

            // update now
            const result = await bookCollections.updateOne(filter, updatedDoc, options);
            res.send(result);
        })


        // delete a item from db
        app.delete("/book/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollections.deleteOne(filter);
            res.send(result);
        })


        // get a single book data
        app.get("/book/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollections.findOne(filter);
            res.send(result)
        })

        // API to create checkout session
        app.post("/create-checkout-session", async (req, res) => {
            const { productIds, shippingOption } = req.body;

            // Fetch product details from MongoDB
            const products = await bookCollections.find({ _id: { $in: productIds } }).toArray();

            // Format line items for Stripe
            const lineItems = products.map((product) => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.bookTitle,
                        images: [product.imageURL],
                    },
                    unit_amount: Math.round(product.Price * 100), // Amount in cents
                    quantity: product.quantity,
                },
            }));

            // Create checkout session
        });



        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})