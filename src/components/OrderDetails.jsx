import React, { useState } from "react";

// Sample space-themed product data
const spaceProducts = [
  {
    id: 1,
    name: "Galactic Laptop",
    description:
      "A powerful and sleek laptop for all your cosmic computing needs. Equipped with advanced space-age technology, high-performance processors, and a stunning interstellar display.",
    pic: "../src/assets/laptop.jpg",
    price: 99000,
  },
  {
    id: 2,
    name: "Nebula Jeans",
    description:
      "Classic denim jeans that offer both style and comfort, inspired by the swirling beauty of distant nebulae. Made from high-quality cosmic denim fabric, these jeans are perfect for a casual and trendy look.",
    pic: "../src/assets/jeans.jpg",
    price: 2000,
  },
  {
    id: 3,
    name: "Starlight Glasses",
    description:
      "Elegant drinking glasses for your favorite cosmic beverages. Crafted with precision and designed for both practicality and style, these glasses are perfect for any intergalactic occasion.",
    pic: "../src/assets/glasses.jpg",
    price: 300,
  },
];

// Space-themed styling object
const spaceStyles = {
  container: {
    fontFamily: "Arial, sans-serif",
   
    border:"1px solid black",
  },
  productCard: {
    border: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
  },
  button: {
    
    cursor: "pointer",
    padding: "5px 10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "3px",
  },
  spaceDetails: {
    textMd: {
      fontSize: "1.125rem", // 18px
    },
    heading: {
      flex: "1",
      justifyContent: "center",
      fontSize: "2rem", // 32px
      fontWeight: "bold",
      backgroundColor: "#E0F4FF",
      textAlign: "center",
      margin: "2rem",
      padding: "2rem",
      borderRadius: "0", 
    },
    productContainer: {
      display: "flex",
      flexDirection:'column', 
      backgroundColor: "#E0F4FF",
      margin: "1rem",
      padding: "2rem",
      borderRadius: "0", 
    },
    productCardWrapper: {
        border:"1px solid black",
      display:"flex",
      flexDirection:"row",
      width:"fit-content",
      backgroundColor: "#777a78",

      margin: "0.5rem",
      padding: "2rem",
    },
    productImageContainer: {
      position: "relative",
      marginBottom: "1rem",
      height:"200px",
    },
    productImage: {
        border:"1px solid black",
      height:"33rem",
      borderRadius: "0.5rem", // 8px
    },
    productName: {
        border:"1px solid black",
        height:"fit-content",
      backgroundColor: "#d5e6da",
      color: "#66c2ff",
      fontWeight: "bold",
      fontSize: "1.25rem", // 20px
      margin: "0.5rem",

      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
    //   position: "absolute",
      bottom: "1rem",
      left: "1rem",
    },
    productDescription: {
        border:"1px solid black",
      height:"fit-content",
      backgroundColor: "#d5e6da",
      padding: "1rem",
      margin: "0 1rem",
    },
    productPrice: {
        border:"1px solid black",
        height:"fit-content",
      backgroundColor: "#d5e6da",
      padding: "1rem",

      margin: "0 1rem",
    },
    productQuantity: {
        border:"1px solid black",
        height:"fit-content",
      backgroundColor: "#d5e6da",
      padding: "1rem",

      margin: "0 1rem",
    },
    quantityButton: {
        border:"1px solid black",
        height:"fit-content",
      cursor: "pointer",
      padding: "1rem",
      margin: "0.5rem",
    },
    totalCost: {
        border:"1px solid black",
        height:"fit-content",
      backgroundColor: "#d5e6da",
      padding: "2rem",
      borderRadius: "0.75rem", // 12px
      margin: "1rem",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontSize: "1.125rem", // 18px
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
};

const OrderDetails = () => {
  const [spaceOrder, setSpaceOrder] = useState({
    items: spaceProducts.map((product) => ({ ...product, quantity: 0 })),
    orderDate: new Date().toLocaleDateString("en-IN"),
    expectedDeliveryDate: new Date(
      Date.now() + 3 * 24 * 60 * 60 * 1000
    ).toLocaleDateString("en-IN"), // 3 days from today
  });

  const handleQuantityIncrease = (productId) => {
    setSpaceOrder((prevSpaceOrder) => {
      const updatedItems = prevSpaceOrder.items.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );

      return {
        ...prevSpaceOrder,
        items: updatedItems,
      };
    });
  };

  const handleQuantityDecrease = (productId) => {
    setSpaceOrder((prevSpaceOrder) => {
      const updatedItems = prevSpaceOrder.items.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      );

      return {
        ...prevSpaceOrder,
        items: updatedItems,
      };
    });
  };

  const calculateTotalCost = () => {
    return spaceOrder.items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div style={spaceStyles.spaceDetails.container}>
      <p style={spaceStyles.spaceDetails.heading}>Shopping Cart</p>
      <div style={spaceStyles.spaceDetails.productContainer}>
        {spaceOrder.items.map((item) => (
          <div key={item.id} style={spaceStyles.spaceDetails.productCardWrapper}>
            <div style={spaceStyles.spaceDetails.productImageContainer}>
              <img
                src={item.pic}
                style={{...spaceStyles.spaceDetails.productImage,height:"220px"}}
                alt={item.name}
              />
              
            </div>
            <p style={spaceStyles.spaceDetails.productName}>{item.name}</p>
            <p style={spaceStyles.spaceDetails.productDescription}>
              {item.description}
            </p>
            <p style={spaceStyles.spaceDetails.productPrice}>
              Price: ₹{item.price.toFixed(2)}
            </p>
            <p style={spaceStyles.spaceDetails.productQuantity}>
              Quantity: {item.quantity}
            </p>
            <button
              onClick={() => handleQuantityIncrease(item.id)}
              style={{
                ...spaceStyles.spaceDetails.quantityButton,
                backgroundColor: "#4CAF50",
              }}
            >
              +
            </button>
            <button
              onClick={() => handleQuantityDecrease(item.id)}
              style={spaceStyles.spaceDetails.quantityButton}
            >
              -
            </button>
          </div>
        ))}
      </div>
      <div style={spaceStyles.spaceDetails.totalCost}>
        <h3>Total Cost: ₹{calculateTotalCost()}&nbsp;&nbsp;  </h3>
        <p>Ordered On: {spaceOrder.orderDate}&nbsp;&nbsp; </p>
        <p>Delivery Date: {spaceOrder.expectedDeliveryDate}&nbsp;&nbsp;  </p>
      </div>
    </div>
  );
};

export default OrderDetails;
