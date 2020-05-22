const bcrypt = require("bcryptjs");

const db = {
    HOST: "localhost",
    PORT: 27017,
    DB: "musalasoft_db"
};

const user = {
    username: "musala.soft@example.com",
    password: bcrypt.hashSync("Musalas0ft", 8)
};

const ASSETS_URL = "https://dev-assets.opencarwash.com/musalasoft/products";

const products = [
    {
        id: "1",
        name: "😀 Big Smile",
        bestseller: true,
        on_sale: false,
        price: 5.21,
        url: "big-smile",
        description:
            "The Big Smile artwork is a really cool image designed for any room sizes. Manufactured specially for this store. Contains a Musala Soft pet which is adorable and cool. We recommend this article because of its style.",
        image: `${ASSETS_URL}/big-smile.jpg`,
        thumbnail: `${ASSETS_URL}/big-smile-thumbnail.jpg`
    },
    {
        id: "2",
        name: "☕ Coffee Cup",
        best_seller: false,
        on_sale: true,
        price: 5.21,
        url: "coffee-cup",
        description:
            "The Coffee Cup artwork is a really cool image designed for any room sizes. Manufactured specially for this store. Contains a Musala Soft pet which is adorable and cool. We recommend this article because of its style.",
        image: `${ASSETS_URL}/coffee-cup.jpg`,
        thumbnail: `${ASSETS_URL}/coffee-cup-thumbnail.jpg`
    },
    {
        id: "3",
        name: "☀ Good Morning",
        bestseller: true,
        on_sale: true,
        price: 5.21,
        url: "good-morning",
        description:
            "The Good Morning artwork is a really cool image designed for any room sizes. Manufactured specially for this store. Contains a Musala Soft pet which is adorable and cool. We recommend this article because of its style.",
        image: `${ASSETS_URL}/good-morning.jpg`,
        thumbnail: `${ASSETS_URL}/good-morning-thumbnail.jpg`
    },
    {
        id: "4",
        name: "🎨 Painting",
        bestseller: true,
        on_sale: false,
        price: 5.21,
        url: "painting",
        description:
            "The Painting artwork is a really cool image designed for any room sizes. Manufactured specially for this store. Contains a Musala Soft pet which is adorable and cool. We recommend this article because of its style.",
        image: `${ASSETS_URL}/painting.jpg`,
        thumbnail: `${ASSETS_URL}/painting-thumbnail.jpg`
    },
    {
        id: "5",
        name: "😎 Sun Glasses",
        best_seller: false,
        on_sale: true,
        price: 5.21,
        url: "sun-glasses",
        description:
            "The Sun Glasses artwork is a really cool image designed for any room sizes. Manufactured specially for this store. Contains a Musala Soft pet which is adorable and cool. We recommend this article because of its style.",
        image: `${ASSETS_URL}/sun-glasses.jpg`,
        thumbnail: `${ASSETS_URL}/sun-glasses-thumbnail.jpg`
    },
    {
        id: "6",
        name: "🆗 Giant OK",
        bestseller: true,
        on_sale: true,
        price: 5.21,
        url: "giant-ok",
        description:
            "The Giant OK artwork is a really cool image designed for any room sizes. Manufactured specially for this store. Contains a Musala Soft pet which is adorable and cool. We recommend this article because of its style.",
        image: `${ASSETS_URL}/giant-ok.jpg`,
        thumbnail: `${ASSETS_URL}/giant-ok-thumbnail.jpg`
    }
];

module.exports = {
    db,
    user,
    products
};
