module.exports  =  {
  // itemList: `select * from table_name`,
  // itemDetail: `select * from table_name where id = ?`,
  // itemInsert: `insert into table_name set ?`,
  // itemUpdate: `update table_name set ? where id = ?`,
  // itemDelete: `delete from table_name where id = ?`,
  categoryList: `select * from product_category`,
  categoryListByCondition: `select * from product_category where `,
  categoryDetail: `select * 
                    from product_category
                    where product_category_id = ?`,
  categoryInsert: `insert into product_category set ?`,
  categoryUpdate: `update product_category 
                    set ? 
                    where product_category_id = ?`,
  categoryDelete: `delete from product_category where product_category_id = ?`,
  customerList: `select * from sample`,
  customerListByCondition: `select * from sample where `,
  customerDetail: `select * from sample where id = ?`,
  customerUpdate: `update sample set ? where id = ?`,
  customerDelete: `delete from sample where id = ?`,
  customerInsert: `insert into sample set ?`,
  productCount: `select count(*) 
                  as count 
                  from product 
                  where product_category_id = ?`,
  supplierList: `select * from product_supplier`,
  supplierListByCondition: `select * from product_supplier where `,
  supplierDetail: `select * from product_supplier where supplier_id = ?`,
  supplierInsert: `insert into product_supplier set ?`,
  supplierUpdate: `update product_supplier set ? where supplier_id = ?`,
  supplierDelete: `delete from product_supplier where supplier_id = ?`,
  productCountBySupplier: `select count(*) as count 
                            from product 
                            where supplier_id = ?`,
  productInsert: `insert into product set ?`,
  productListByCondition: `select t1.*
                                , t2.category_name
                                , t3.supplier_name 
                            from product t1
                                , product_category t2
                                , product_supplier t3
                            where t1.product_category_id  =  t2.product_category_id 
                              and t1.supplier_id  =  t3.supplier_id `,
  productDetail: `select t1.*
                        , t2.category_name
                        , t3.supplier_name 
                    from product t1
                        , product_category t2
                        , product_supplier t3
                    where t1.product_category_id  =  t2.product_category_id 
                      and t1.supplier_id  =  t3.supplier_id 
                      and t1.product_id = ?`,
  productUpdate: `update product set ? where product_id = ?`,
  orderCountByProduct: `select count(*) as count from order_detail where product_id = ?`,
  productDelete: `delete from product where product_id = ?`,
  productList: `select t1.*
                    , t2.category_name
                    , t3.supplier_name 
                  from product t1
                      , product_category t2
                      , product_supplier t3
                  where t1.product_category_id  =  t2.product_category_id 
                  and t1.supplier_id  =  t3.supplier_id`,
  productListByName: `select t1.*
                            , t2.category_name
                            , t3.supplier_name 
                        from product t1
                            , product_category t2
                            , product_supplier t3
                        where t1.product_category_id  =  t2.product_category_id 
                          and t1.supplier_id  =  t3.supplier_id 
                          and t1.product_name like ?`,
  shipperListByCondition: `select * from product_shipper where `,
  shipperList: `select * from product_shipper`,
  shipperInsert: `insert into product_shipper set ?`,
  shipperUpdate: `update product_shipper set ? where shipper_id = ?`,
  orderCount: `select count(*) as count from order_header where shipper_id = ?`,
  shipperDelete: `delete from product_shipper where shipper_id = ?`,
  employeeList: `select * from employee`,
  employeeListByCondition: `select * from employee where `,
  employeeListByName: `select * from employee where active_yn = 'Y' and name like ?`,
  employeeInsert: `insert into employee set ?`,
  employeeUpdate: `update employee set ? where employee_id = ?`,
  customerList2: `select * from customer`,
  customerListByCondition2: `select t1.*
                                  , t2.name as employee_name 
                                from customer t1
                                    , employee t2 
                                where `,
  customerDetail2: `select * from customer where customer_id = ?`,
  customerUpdate2: `update customer set ? where customer_id = ?`,
  customerDelete2: `delete from customer where customer_id = ?`,
  customerInsert2: `insert into customer set ?`,
  orderCount: `select count(*) as count from order_header where customer_id = ?`,
  orderInsert: `insert into order_header set ?`,
  orderDetailInsert: `insert into order_detail (order_id, product_id, order_qty) values ?`,
  orderListByCustomer: `select t1.*
                              , t2.shipper_name
                              , (select count(*) 
                                  from order_detail 
                                  where order_id = t1.order_id) as product_count
                          from order_header t1
                            , product_shipper t2
                          where t1.shipper_id = t2.shipper_id 
                            and t1.customer_id = ?`,
  orderHeader: `select t1.*
                      , t2.shipper_name 
                    from order_header t1
                      , product_shipper t2 
                    where t1.order_id = ? 
                      and t1.shipper_id  =  t2.shipper_id`,
  orderDetail: `select t1.*
                      , t2.product_id
                      , t2.product_name
                      , t2.product_no
                      , t2.original_price
                      , t2.img1
                      , t3.supplier_name
                      , t4.category_name 
                  from order_detail t1
                      , product t2
                      , product_supplier t3
                      , product_category t4 
                  where t1.order_id = ? 
                    and t1.product_id  =  t2.product_id 
                    and t2.supplier_id  =  t3.supplier_id 
                    and t2.product_category_id  =  t4.product_category_id`,
};
