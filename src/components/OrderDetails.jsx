import React, { useState } from "react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Laptop",
    description:
      "A powerful and sleek laptop for all your computing needs. Equipped with the latest technology, high-performance processors, and a stunning display.",
    pic: "../src/assets/laptop.jpg",
    price: 99000,
  },
  {
    id: 2,
    name: "Denim Jeans",
    description:
      "Classic denim jeans that offer both style and comfort. Made from high-quality denim fabric, these jeans are perfect for a casual and trendy look.",
    pic: "../src/assets/jeans.jpg",
    price: 2000,
  },
  {
    id: 3,
    name: "Glasses",
    description:
      "Elegant drinking glasses for your favorite beverages. Crafted with precision and designed for both practicality and style, these glasses are perfect for any occasion.",
    pic: "../src/assets/glasses.jpg",
    price: 300,
  },
];

// Styling object
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
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
  orderDetails: {
    textMd: {
      fontSize: "1.125rem", // 18px
    },
    heading: {
      flex: "1",
      justifyContent: "center",
      fontSize: "2rem", // 32px
      fontWeight: "bold",
      backgroundColor: "#f0f4f8",
      textAlign: "center",
      margin: "2rem",
      padding: "2rem",
      borderRadius: "0.375rem", // 6px
    },
    productContainer: {
      display: "flex",
      backgroundColor: "#f0f4f8",
      margin: "1rem",
      padding: "2rem",
      borderRadius: "0.75rem", // 12px
    },
    productCard: {
      backgroundColor: "#e5e7eb",
      borderRadius: "0.75rem", // 12px
      margin: "0.5rem",
      padding: "2rem",
      width: "33.33%",
    },
    productImage: {
      width: "100%",
      borderRadius: "0.5rem", // 8px
    },
    productName: {
      backgroundColor: "#fff",
      color: "#3b82f6",
      fontWeight: "bold",
      fontSize: "1.25rem", // 20px
      margin: "0.5rem",
      borderRadius: "0.25rem", // 4px
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
      position: "absolute",
      bottom: "1rem",
      left: "1rem",
    },
    productDescription: {
      backgroundColor: "#fff",
      padding: "1rem",
      borderRadius: "0.25rem", // 4px
      margin: "1rem 0",
    },
    productPrice: {
      backgroundColor: "#fff",
      padding: "1rem",
      borderRadius: "0.25rem", // 4px
      margin: "1rem 0",
    },
    productQuantity: {
      backgroundColor: "#fff",
      padding: "1rem",
      borderRadius: "0.25rem", // 4px
      margin: "1rem 0",
    },
    quantityButton: {
      cursor: "pointer",
      padding: "1rem",
      borderRadius: "0.25rem", // 4px
      border: "none",
      margin: "0.5rem",
    },
    totalCost: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "0.75rem", // 12px
      margin: "1rem",
      display: "inline-block",
      fontSize: "1.125rem", // 18px
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    productImageContainer: {
      position: "relative",
      marginBottom: "1rem",
    },
  },
};

const OrderDetails = () => {
  const [order, setOrder] = useState({
    items: products.map((product) => ({ ...product, quantity: 0 })),
    orderDate: new Date().toLocaleDateString("en-IN"),
    expectedDeliveryDate: new Date(
      Date.now() + 3 * 24 * 60 * 60 * 1000
    ).toLocaleDateString("en-IN"), // 3 days from today
  });

  const handleQuantityIncrease = (productId) => {
    setOrder((prevOrder) => {
      const updatedItems = prevOrder.items.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );

      return {
        ...prevOrder,
        items: updatedItems,
      };
    });
  };

  const handleQuantityDecrease = (productId) => {
    setOrder((prevOrder) => {
      const updatedItems = prevOrder.items.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      );

      return {
        ...prevOrder,
        items: updatedItems,
      };
    });
  };

  const calculateTotalCost = () => {
    return order.items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div style={styles.orderDetails.container}>
      <p style={styles.orderDetails.heading}>Order Details</p>
      <div style={styles.orderDetails.productContainer}>
        {order.items.map((item) => (
          <div key={item.id} style={styles.orderDetails.productCard}>
            <div style={styles.orderDetails.productImageContainer}>
              <img
                src={item.pic}
                style={styles.orderDetails.productImage}
                alt={item.name}
              />
              <p style={styles.orderDetails.productName}>{item.name}</p>
            </div>
            <p style={styles.orderDetails.productDescription}>
              {item.description}
            </p>
            <p style={styles.orderDetails.productPrice}>
              Price: ₹{item.price.toFixed(2)}
            </p>
            <p style={styles.orderDetails.productQuantity}>
              Quantity: {item.quantity}
            </p>
            <button
              onClick={() => handleQuantityIncrease(item.id)}
              style={{
                ...styles.orderDetails.quantityButton,
                backgroundColor: "#4CAF50",
              }}
            >
              +
            </button>
            <button
              onClick={() => handleQuantityDecrease(item.id)}
              style={styles.orderDetails.quantityButton}
            >
              -
            </button>
          </div>
        ))}
      </div>
      <div style={styles.orderDetails.totalCost}>
        <h3>Total Cost: ₹{calculateTotalCost()}</h3>
        <p>Order Date: {order.orderDate}</p>
        <p>Expected Delivery Date: {order.expectedDeliveryDate}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
