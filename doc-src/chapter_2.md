# Examples


### MySQL Database
```rust
use mysql::*;
use mysql::prelude::*;

#[derive(Debug, PartialEq, Eq)]
struct Payment {
    customer_id: i32,
    amount: i32,
    account_name: Option<String>,
}

let database_url = "mysql://root:password@localhost:3307/db_name";
let connection = mysql::Pool::new(database_url).expect("Unable to connect to database");
let count: Vec<Count> = connection.prep_exec("SELECT COUNT(*) total FROM payments", ())
    .map(|res| {
        res.map(|x| x.unwrap())
            .map(|row| {
                let total = mysql::from_row(row);
                Count {
                    total
                }
            }).collect()
    }).unwrap();

let total_items = count.first().unwrap().total;
let items_per_page = 1000;
let pages = Pages::new(total_items, items_per_page);
for page in pages.into_iter() {
    let payments: Vec<Payment> = connection.prep_exec("SELECT * FROM payments LIMIT ?,?", (page.start, page.length));
    // process payments
    for payment in payments.iter() {
        println!("Payment amount: {}", payment.amount);
    }
}

```