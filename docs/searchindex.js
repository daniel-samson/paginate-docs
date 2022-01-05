Object.assign(window.search, {"doc_urls":["chapter_1.html#introduction","chapter_2.html#examples","chapter_2.html#mysql-database"],"index":{"documentStore":{"docInfo":{"0":{"body":19,"breadcrumbs":2,"title":1},"1":{"body":0,"breadcrumbs":2,"title":1},"2":{"body":64,"breadcrumbs":3,"title":2}},"docs":{"0":{"body":"Paginate provides a framework agnostic pagination crate, that is especially suited for databases, collections and web pages. Also see: Crate API Documentation Repository Documentation Repository","breadcrumbs":"Introduction » Introduction","id":"0","title":"Introduction"},"1":{"body":"","breadcrumbs":"Examples » Examples","id":"1","title":"Examples"},"2":{"body":"use mysql::*;\nuse mysql::prelude::*; struct Count { total: usize\n} #[derive(Debug, PartialEq, Eq)]\nstruct Payment { customer_id: i32, amount: i32, account_name: Option<String>,\n} let database_url = \"mysql://root:password@localhost:3307/db_name\";\nlet connection = mysql::Pool::new(database_url).expect(\"Unable to connect to database\");\nlet count: Vec<Count> = connection.prep_exec(\"SELECT COUNT(*) total FROM payments\", ()) .map(|res| { res.map(|x| x.unwrap()) .map(|row| { let total = mysql::from_row(row); Count { total } }).collect() }).unwrap(); let total_items = count.first().unwrap().total;\nlet items_per_page = 1000;\nlet pages = Pages::new(total_items, items_per_page);\nfor page in pages.into_iter() { let payments: Vec<Payment> = connection.prep_exec(\"SELECT * FROM payments LIMIT ?,?\", (page.start, page.length)); // process payments for payment in payments.iter() { println!(\"Payment amount: {}\", payment.amount); }\n}","breadcrumbs":"Examples » MySQL Database","id":"2","title":"MySQL Database"}},"length":3,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"0":{"0":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{"c":{"(":{"\"":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"(":{")":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"(":{")":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"2":{"tf":2.0}}}}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}},"e":{"_":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"(":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"2":{"tf":1.0}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"i":{"3":{"2":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"(":{"df":0,"docs":{},"|":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{":":{"/":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{":":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"@":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{":":{"3":{"3":{"0":{"7":{"/":{"d":{"b":{"_":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},":":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"(":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{":":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"(":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{")":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"(":{"\"":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}},"s":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},":":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"(":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":2.449489742783178}},"s":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}}},"s":{".":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"p":{"(":{"df":0,"docs":{},"|":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":1,"docs":{"2":{"tf":2.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"<":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"x":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"breadcrumbs":{"root":{"1":{"0":{"0":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{"c":{"(":{"\"":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"(":{")":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"(":{")":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"2":{"tf":2.0}}}}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.7320508075688772}},"e":{"_":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"(":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"2":{"tf":1.0}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"i":{"3":{"2":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"(":{"df":0,"docs":{},"|":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{":":{"/":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{":":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"@":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{":":{"3":{"3":{"0":{"7":{"/":{"d":{"b":{"_":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},":":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"(":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{":":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"(":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{")":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"(":{"\"":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}},"s":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},":":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"(":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":2.449489742783178}},"s":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}}},"s":{".":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"p":{"(":{"df":0,"docs":{},"|":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":1,"docs":{"2":{"tf":2.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"<":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"x":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"title":{"root":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"m":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});