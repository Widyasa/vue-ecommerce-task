const app = new Vue({
    el : '#detail-section',
    data : {
        detail : {
            imgDetail : '',
            nameDetail : '',
            priceDetail : '',
            specsDetail : [],
            sizeDetail : [],
            description : '',
            stock : ''
        },
        sizeSelected : '',
        specialRequest : '-',
        quantity : 0,
        packaging : 'normal',
        cartMessage : 'Failed Store to Cart',
        cart : [],
        totalPrice : 0,
        products: [
            {
                id: 1,
                image : 'https://img.freepik.com/premium-photo/hanging-beige-shirt-with-wood-hanger-wall_1339-158095.jpg?w=360',
                name : 'baju x',
                priceBefore : 20000,
                priceDiscount : 15000,
                description: 'lorem ipsum dolor sit amet',
                stock : 10,
                quantity : 0,
                specs : [
                    'tes',
                    'tes2',
                    'tes3',
                ],
                size : [
                    '40',
                    '41',
                    '42'
                ]
            },
            {
                id: 2,
                image : 'https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-14043.jpg?t=st=1713173805~exp=1713177405~hmac=d7482f6966a6174095e8fa2e6ca1c31656531c916343236cb193da49a5afabd3&w=740',
                name : 'baju x',
                priceBefore : 10000,
                priceDiscount : 5000,
                description: 'lorem ipsum dolor sit amet',
                stock : 10,
                quantity : 0,
                specs : [
                    'tes',
                    'tes2',
                    'tes3',
                ],
                size : [
                    '40',
                    '41',
                    '42'
                ]
            },
            {
                id: 3,
                image : 'https://img.freepik.com/free-photo/pants-hanger-with-green-background_23-2150264165.jpg?t=st=1713172007~exp=1713175607~hmac=3462197e2ab7ddd7cb545cff3ac41109f31edb1db93ff3b2c4b2c82b38d6b8ed&w=360',
                name : 'Celana Cargo',
                priceBefore : 100000,
                priceDiscount : 50000,
                description: 'lorem ipsum dolor sit amet',
                stock : 10,
                quantity : 0,
                specs : [
                    'tes',
                    'tes2',
                    'tes3',
                ],
                size : [
                    '40',
                    '41',
                    '42'
                ]
            },
            {
                id: 4,
                image :'https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-13969.jpg?t=st=1713173413~exp=1713177013~hmac=52791f03f06bf902d3df074eecc15013bfc14e8c62103acfed4a8292ac6f8998&w=740',
                name :'',
                priceBefore : 20000,
                priceDiscount :6000,
                description: 'lorem ipsum dolor sit amet',
                stock : 10,
                quantity : 0,
                specs : [
                    'tes',
                    'tes2',
                    'tes3'

                ],
                size : [
                    '40',
                    '41',
                    '42'
                ]
            },
            {
                id: 5,
                image :'https://img.freepik.com/free-photo/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger_460848-13975.jpg?t=st=1713173613~exp=1713177213~hmac=ff70c8d9e8d77882057ca186da5cdd081bffbfdabff67c123e3015e5b8541ae9&w=740',
                name :'',
                priceBefore : 20000,
                priceDiscount :6000,
                description: 'lorem ipsum dolor sit amet',
                stock : 10,
                quantity : 0,
                specs : [
                    'tes',
                    'tes2',
                    'tes3'

                ],
                size : [
                    '40',
                    '41',
                    '42'
                ]
                        
            },
            {
                id: 6,
                image :'',
                name :'',
                priceBefore : 20000,
                priceDiscount :6000,
                description: 'lorem ipsum dolor sit amet',
                stock : 10,
                quantity : 0,
                specs : [
                    'tes',
                    'tes2',
                    'tes3'

                ],
                size : [
                    '40',
                    '41',
                    '42'
                ]
                
             },
            {
                id: 7,
                image :'',
                name :'',
                priceBefore : 20000,
                priceDiscount :6000,
                description: 'lorem ipsum dolor sit amet',
                stock : 10,
                quantity : 0,
                specs : [
                    'tes',
                    'tes2',
                    'tes3'

                ],
                size : [
                    '40',
                    '41',
                    '42'
                ],
             },
              {
                id: 8,
                image :'',
                name :'',
                priceBefore : 20000,
                priceDiscount :6000,
                description: 'lorem ipsum dolor sit amet',
                stock : 10,
                quantity : 0,
                specs : [
                    'tes',
                    'tes2',
                    'tes3'
                ],
                size : [
                    '40',
                    '41',
                    '42'
                ]
                
            },
                  

        ]
    },
    methods: {
        seeDetail (id) {
            this.detail.imgDetail = this.products[id].image
            this.detail.nameDetail = this.products[id].name
            this.detail.priceDetail = this.products[id].priceDiscount
            this.detail.sizeDetail = this.products[id].size
            this.detail.specsDetail = this.products[id].specs
            this.detail.description = this.products[id].description
            this.detail.stock = this.products[id].stock
        },
        plusQuantity () {
            this.quantity += 1
        },
        minusQuantity () {
            if(this.quantity > 0) {
                this.quantity -= 1
            }
        },
        addToCart() {
            if(this.detail.priceDetail != 0 && this.sizeSelected != '' && this.detail.stock > this.quantity) {
            this.cart.push({name:this.detail.nameDetail, image:this.detail.imgDetail, price:this.detail.priceDetail*this.quantity, packaging:this.packaging, size:this.sizeSelected, quantity:this.quantity, request:this.specialRequest})
                this.cartMessage = "Success Store to Cart"
            }
            this.sizeSelected = ''
            this.specialRequest = '-'
            this.quantity = 0
            this.packaging = 'normal'
        },
        countTotalPrice() {
            for (let i = 0; i < this.cart.length; i++ ) {
                this.totalPrice += this.cart[i].price;
              }
        },
        deleteContentOnCart(id) {
            this.cart.splice(id, 1)
            this.totalPrice = 0
            this.countTotalPrice()
            console.log(this.cart)
        },
        buyProductByDetail() {
            window.location.href = "https://wa.me/6282147382985?text=Hallo%2C%20Saya%20ingin%20memesan%20%0AProduk%3A%20" 
                                    + this.detail.nameDetail + "%0ANotes%3A%20" + this.specialRequest +
                                    "%0AJumlah%3A%20" + this.quantity + "%0A%0ATerimakasih"
        },
        buyProductByCart() {
            let message = "" 
            console.log(this.cart)

            for (let i = 0; i < this.cart.length; i++ ) {
                                message +=
                                    this.cart[i].name + this.cart[i].request + this.cart[i].quantity 
              }
            //   console.log(message)
              window.location.href= "https://wa.me/6282147382985?text=Hallo%2C%20Saya%20ingin%20memesan%20%0AProduk%3A%20" + message
        },

    },
})