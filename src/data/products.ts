export const products = [
    {
        id: 1,
        name: "1PH Control Panel",
        category: "Panel",
        price: 3500,
        image: "/all products/1ph.png",
        description: "High-quality single-phase control panel for residential, commercial, and industrial applications",
        features: [
            "Single phase operation for pumps & motors",
            "Advanced protection: overload, voltage fluctuation, short circuit",
            "Premium heavy-duty components",
            "Weather & dust resistant body",
            "Easy installation & maintenance"
        ]
    },
    {
        id: 2,
        name: "2 PH Digital Auto Panel",
        category: "Panel",
        price: 3175,
        image: "/all products/2,3 HP Inside.jpg",
        description: "Fully automatic digital control panel for 2-phase motors up to 7.5 HP",
        features: [
            "Digital LED display (V, A, Timer)",
            "Overload, dry run protection",
            "High/Low voltage protection",
            "Manual/Auto switch operation",
            "Adjustable timer delay"
        ]
    },
    {
        id: 3,
        name: "3 PH Auto Panel",
        category: "Panel",
        price: 3980,
        image: "/all products/3ph panel.jpg",
        description: "Fully automatic 3-phase panel with comprehensive motor protection up to 7.5HP",
        features: [
            "Auto power restoration",
            "Dry run, overload & single-phasing protection",
            "Real-time voltage & current display",
            "DOL starter type",
            "Cyclic timer with adjustable delay"
        ]
    },
    {
        id: 4,
        name: "2/3 PH Panel with Starter",
        category: "Panel",
        price: 5999,
        image: "/all products/2,3 panle.jpg",
        description: "Dual phase panel with integrated starter - no external starter needed",
        features: [
            "Auto ON/OFF for 2 & 3 phase",
            "Digital display (V, A, Timer)",
            "Built-in starter (no external needed)",
            "Heavy-duty MS powder-coated body",
            "Adjustable cyclic timer"
        ]
    },
    {
        id: 5,
        name: "1PH Auto Starter Panel (3-5 HP)",
        category: "Panel",
        price: 4575,
        image: "/all products/1ph 3,5 auto stater.jpg",
        description: "Automatic digital control for single-phase pumps with complete protection",
        features: [
            "LED display (V, A, Timer)",
            "Overload & dry run protection",
            "High/Low voltage protection",
            "Start & Run capacitors included",
            "Auto/Manual mode switch"
        ]
    },
    {
        id: 6,
        name: "114K Auto Switch",
        category: "Auto Switch",
        price: 550,
        image: "/all products/114KT.jpg",
        description: "Compact and reliable auto switch for basic motor control applications",
        features: [
            "Reliable motor control",
            "Compact design",
            "Easy installation",
            "Durable construction"
        ]
    },
    {
        id: 7,
        name: "113K Auto Switch",
        category: "Auto Switch",
        price: 650,
        image: "/all products/MX113 plastic.jpg",
        description: "Enhanced auto switch with superior build quality for demanding use",
        features: [
            "Enhanced protection",
            "Industrial grade quality",
            "Long service life",
            "Robust construction"
        ]
    },
    {
        id: 8,
        name: "121K Auto Switch",
        category: "Auto Switch",
        price: 1050,
        image: "/all products/IMG_9568-MX121K.jpg",
        description: "Advanced auto switch with premium features for professional applications",
        features: [
            "High capacity handling",
            "Advanced circuitry",
            "Professional grade",
            "Extended warranty"
        ]
    },
    {
        id: 9,
        name: "101K Auto Switch",
        category: "Auto Switch",
        price: 650,
        image: "/all products/IMG_9569-MX101K.jpg",
        description: "Reliable entry-level auto switch for standard motor control needs",
        features: [
            "Standard motor control",
            "Cost-effective solution",
            "Proven reliability",
            "Simple operation"
        ]
    },
    {
        id: 10,
        name: "124K Auto Switch",
        category: "Auto Switch",
        price: 750,
        image: "/all products/IMG_9572-MX124K.jpg",
        description: "Versatile auto switch suitable for various motor control applications",
        features: [
            "Versatile applications",
            "Efficient performance",
            "Quality components",
            "Easy maintenance"
        ]
    },
    {
        id: 11,
        name: "334K Auto Switch",
        category: "Auto Switch",
        price: 650,
        image: "/all products/MX305.jpg",
        description: "Dependable auto switch with consistent performance for daily operations",
        features: [
            "Consistent performance",
            "Daily use reliability",
            "Standard features",
            "Affordable pricing"
        ]
    },
    {
        id: 12,
        name: "4G Mobile Auto Switch",
        category: "Auto Switch",
        price: 6500,
        image: "/all products/4G Mobile auto.jpg",
        description: "Smart auto switch with 4G mobile connectivity for remote motor control",
        features: [
            "4G mobile connectivity",
            "Remote control via smartphone",
            "Real-time monitoring",
            "SMS/App notifications",
            "Advanced automation"
        ]
    },
    {
        id: 13,
        name: "305K Auto Switch",
        category: "Auto Switch",
        price: 800,
        image: "/all products/MX305.jpg",
        description: "Premium auto switch with advanced features for professional installations",
        features: [
            "Premium build quality",
            "Advanced automation",
            "Professional installation",
            "Enhanced safety features"
        ]
    }
]

export const categories = ["All", "Panel", "Auto Switch"]

export const featuredProducts = products.slice(0, 4)
