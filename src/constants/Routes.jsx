export const Routes = {
    // ---------- Core Pages ----------
    HOME: {
        path: '/',
        title: "Home",
        meta: {
            title: "Home | Shopora",
            description: "Discover top-quality products, best deals, and new arrivals at Shopora – your one-stop online shopping destination."
        }
    },

    CATEGORIES: {
        path: "/categories",
        title: "Categories",
        meta: {
            title: "Categories | Shopora",
            description: "Browse product categories at Shopora.",
        },
    },

    CATEGORY: (slug) => ({
        path: `/categories/${slug}`,
    }),

    BRANDS: {
        path: "/brands",
        title: "Brands",
        meta: {
            title: "Brands | Shopora",
            description: "Browse product brands at Shopora.",
        },
    },

    BRAND: (slug) => ({
        path: `/brands/${slug}`,
    }),

    PRODUCTS: {
        path: "/products",
        title: "Products",
        meta: {
            title: "All Products | Shopora",
            description: "Browse all products at Shopora across electronics, fashion, home, and more.",
        },
    },

    PRODUCT: (slug) => ({
        path: `/products/${slug}`,
    }),

    CART: {
        path: "/cart",
        title: "Cart",
        meta: {
            title: "Shopping Cart | Shopora",
            description: "Review items in your cart before checkout."
        }
    },

    CHECKOUT: {
        path: "/checkout",
        title: "Checkout",
        meta: {
            title: "Checkout | Shopora",
            description: "Secure checkout with multiple payment options."
        }
    },

    WISHLIST: {
        path: "/wishlist",
        title: "Wishlist",
        meta: {
            title: "My Wishlist | Shopora",
            description: "Save your favorite products to your wishlist and easily find them later for a faster, smarter shopping experience at Shopora."
        }
    },

    // ---------- User Account Pages ----------
    ACCOUNT: {
        path: '/account',
        title: "Account Dashboard",
        meta: {
            title: "My Account | Shopora",
            description: "Access your profile, track orders, manage addresses, and update your account details."
        }
    },

    LOGIN: {
        path: '/login',
        title: "Login",
        meta: {
            title: "Login | Shopora",
            description: "Login to your Shopora account to track orders, manage your profile, and access exclusive features."
        }
    },

    REGISTER: {
        path: '/register',
        title: "Register",
        meta: {
            title: "Register a Account | Shopora",
            description: "Create a Shopora account to enjoy personalized recommendations, faster checkout, and order tracking."
        }
    },

    // ---------- Marketing / Info Pages ----------
    ABOUT: {
        path: '/about',
        title: "About",
        meta: {
            title: "About Us | Shopora",
            description: "Learn about Shopora’s mission, story, and commitment to providing you the best shopping experience."
        }
    },

    CONTACT: {
        path: '/contact',
        title: "Contact",
        meta: {
            title: "Contact Us | Shopora",
            description: "Have questions? Contact our support team for assistance with orders, returns, or general inquiries."
        }
    },

    FAQ: {
        path: '/faqs',
        title: "FAQ",
        meta: {
            title: "FAQ | Shopora",
            description: "Find answers to commonly asked questions about orders, payments, delivery, and product returns."
        }
    },

    // ---------- Policy Pages ----------
    RETURNS_POLICY: {
        path: '/policies/returns',
        title: "Returns & Refunds",
        meta: {
            title: "Return & Refund Policy | Shopora",
            description: "Our return and refund policy ensures safe, easy, and hassle-free returns within the eligible time frame."
        }
    },

    PRIVACY_POLICY: {
        path: '/policies/privacy',
        title: "Privacy Policy",
        meta: {
            title: "Privacy Policy | Shopora",
            description: "Understand how Shopora collects, uses, and protects your personal information."
        }
    },

    TERMS_POLICY: {
        path: '/policies/terms',
        title: "Terms & Conditions",
        meta: {
            title: "Terms & Conditions | Shopora",
            description: "Read the terms and conditions governing the use of our website and services."
        }
    }
};