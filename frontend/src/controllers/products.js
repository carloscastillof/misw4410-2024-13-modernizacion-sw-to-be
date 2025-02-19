const config = require('../config/app-config.js');
const mysql = require('mysql');

const controller = class ProductsController {
    constructor() {
        // mysql connection
        this.con = mysql.createConnection(config.sqlCon);
    }

    getAll(){
        return new Promise((resolve,reject) => {
            this.con.query('SELECT * FROM `products`', function (err, result) {
                if (result.length < 1) {
                    reject(new Error("No registered products"));
                } else {
                    resolve(result);
                }
            });
        });
    }

    getAllWithSizes() {
        return new Promise((resolve,reject) => {
            this.con.query('SELECT * FROM `sizes` JOIN products ON sizes.product_id = products.id', function (err, result) {
                if(err) reject(new Error(err));
                if (result < 1) {
                    reject(new Error("No registered products"));
                } else {
                    resolve(result);
                }
            });
        });
    }

    getProduct(id) {
        return new Promise((resolve,reject) => {
            this.con.query('SELECT * FROM products JOIN sizes ON products.id = sizes.product_id WHERE id ='+id, function (err, result) {
                if(err) reject(err);
                if (result.length < 1) {
                    reject(new Error("Product not registered"));
                } else {
                    resolve(result);
                }
            });
        });
    }

    getByIdArray(idList) {
        return new Promise((resolve,reject) => {
            this.con.query('SELECT id, title, sizes.size, sizes.price FROM products JOIN sizes ON products.id = sizes.product_id WHERE `id` IN ('+idList+')', function (err, result) {
                if(err) reject(err)
                if (result == undefined) {
                    reject(new Error("Products not registered"));
                } else {
                    resolve(result);
                }
            });
        });
    }

    checkStock(id, size) {
        return new Promise((resolve,reject) => {
            this.con.query('SELECT stock FROM sizes WHERE product_id = '+id+' AND size = "'+size+'"', function (err, result) {
                if(err) reject(err)
                if (result.length < 1) {
                    reject(new Error("Product not registered"));
                } else {
                    resolve(result[0]);
                }
            });
        });
    }

    async updateAllDetails(product, sizes, id) {
        return new Promise( async (resolve,reject) => {
            try {
                await this.updateProduct(product, id);
                for (let size of sizes) {
                    await this.updateSizes(size, id);
                }
                resolve('Product updated successfully!');
            } catch (e) {
                reject(e);
            }
        });
    }

    updateProduct(product, id) {
        return new Promise((resolve,reject) => {
            this.con.query('UPDATE `products` SET ? WHERE `id` = ?', [product, id] , function (err, result) {
                if(err) reject(err);
                resolve();
            });
        });
    }

    updateSizes(size, id) {
        return new Promise((resolve,reject) => {
            this.con.query('UPDATE `sizes` SET ? WHERE `product_id` = ? AND `size` = ?', [size, id, size.size] , function (err, result) {
                if(err) reject(err);
                resolve();
            });
        });
    }

    getPaginated(page) {
        return new Promise((resolve,reject) => {
                if (typeof page!== 'number') {
                    reject(new Error("Page must be a number"));
                } else if (page < 0) {
                    page = 0;
                }
                page = page + 1;

                const request = require('request');
                const options = {
                'method': 'GET',
                'url': `http://localhost:8080/products/?page=${page}`
                };
                request(options,  (error, response) => {
                let result = JSON.parse(response.body);

                if (error) reject(new Error(error));
                if (result.length < 1) {
                    reject(new Error("No more products"));
                } else {
                    resolve(result);
                }
            });
        });
    }

    outOfStock() {
        return new Promise((resolve,reject) => {
            var request = require("request");
            var options = {
                "method": "GET",
                "url": "http://localhost:8080/products/stock",
            };
            request(options, function (error, response) {
                if (error) reject(new Error(error));
                let result = JSON.parse(response.body);
                if (result.length < 1) {
                    reject(new Error("All produtcs in stock!"));
                } else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
    }
}

module.exports = controller;













