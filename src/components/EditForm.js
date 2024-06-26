import React, { useState, useEffect } from "react";
import OptionsPayment from "./OptionsPayment";

function EditForm({ post, toggleEditInvoice, updatePosts }) {
  const [formData, setFormData] = useState(post);

  useEffect(() => {
    setFormData(post);
  }, [post]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;

    if (field === "quantity" || field === "price") {
      const quantity = parseFloat(updatedItems[index]["quantity"]) || 0;
      const price = parseFloat(updatedItems[index]["price"]) || 0;
      updatedItems[index]["total"] = (quantity * price).toFixed(2);
    }

    const calculatedTotal = updatedItems.reduce(
      (acc, item) => acc + parseFloat(item.total),
      0
    );

    setFormData({
      ...formData,
      items: updatedItems,
      total: calculatedTotal.toFixed(2),
    });
  };

  const handleSaveAndSend = async () => {
    try {
      console.log("Sending PUT request with formData:", formData);

      // Your PUT request logic here

      console.log("Invoice data saved successfully!");
      updatePosts();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddNewItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { name: "", quantity: "", price: "", total: "" },
      ],
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...formData.items];
    updatedItems.splice(index, 1);
    setFormData({ ...formData, items: updatedItems });
  };

  const handleSenderAddressChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      senderAddress: {
        ...prevData.senderAddress,
        [field]: value,
      },
    }));
  };

  const handleClientAddressChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      clientAddress: {
        ...prevData.clientAddress,
        [field]: value,
      },
    }));
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      paymentTerms: value,
    }));
    setSelectedOption(value);
  };

  const [showOptions, setShowOptions] = useState(false);

  const handleSvgClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="edit-form-backdrop">
      {post ? (
        <div className="edit-form-container">
          <div className="form">
            <div className="id-post">
              Edit <span className="hashtag">#</span>
              {formData.id}
            </div>
            <div className="title-form">Bill Form</div>
            <label className="subtitle">Street Address</label>
            <input
              className="content"
              value={formData.senderAddress.street}
              onChange={(e) =>
                handleSenderAddressChange("street", e.target.value)
              }
            />
            <div className="container-form">
              <div className="container-form-div">
                <label className="subtitle">City</label>
                <input
                  className="content input-mobile"
                  value={formData.senderAddress.city}
                  onChange={(e) =>
                    handleSenderAddressChange("city", e.target.value)
                  }
                />
              </div>
              <div className="container-form-div">
                <label className="subtitle">Post Code</label>
                <input
                  className="content input-mobile"
                  value={formData.senderAddress.postCode}
                  onChange={(e) =>
                    handleSenderAddressChange("postCode", e.target.value)
                  }
                />
              </div>
              <div className="input-country-mobile">
                <label className="subtitle">Country</label>
                <input
                  className="content"
                  value={formData.senderAddress.country}
                  onChange={(e) =>
                    handleSenderAddressChange("country", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="title-form">Bill To</div>
            <label className="subtitle">Client's Name</label>
            <input
              className="content"
              value={formData.clientName}
              onChange={(e) => handleInputChange("clientName", e.target.value)}
            />
            <label className="subtitle mt">Client's Email</label>
            <input
              className="content"
              value={formData.clientEmail}
              onChange={(e) => handleInputChange("clientEmail", e.target.value)}
            />
            <label className="subtitle mt">Street Address</label>
            <input
              className="content"
              value={formData.clientAddress.street}
              onChange={(e) =>
                handleClientAddressChange("street", e.target.value)
              }
            />
            <div className="container-form">
              <div className="container-form-div">
                <label className="subtitle">City</label>
                <input
                  className="content input-mobile"
                  value={formData.clientAddress.city}
                  onChange={(e) =>
                    handleClientAddressChange("city", e.target.value)
                  }
                />
              </div>
              <div className="container-form-div">
                <label className="subtitle">Post Code</label>
                <input
                  className="content input-mobile"
                  value={formData.clientAddress.postCode}
                  onChange={(e) =>
                    handleClientAddressChange("postCode", e.target.value)
                  }
                />
              </div>
              <div className="input-country-mobile">
                <label className="subtitle">Country</label>
                <input
                  className="content"
                  value={formData.clientAddress.country}
                  onChange={(e) =>
                    handleClientAddressChange("country", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="container-form contaner-form-payment">
              <div className="container-form-div">
                <label className="subtitle">Invoice Date</label>
                <input
                  type="date"
                  className="content input-date"
                  value={formData.paymentDue}
                  onChange={(e) =>
                    handleInputChange("paymentDue", e.target.value)
                  }
                />
              </div>
              <div className="container-form-div-2">
                <label className="subtitle">Payment Terms</label>
                <input
                  className="content input-date"
                  value={`${formData.paymentTerms}`}
                  onChange={(e) => {
                    handleInputChange("paymentTerms", e.target.value);
                    handleOptionChange(e.target.value);
                  }}
                />
                <svg
                  className="input-days-svg"
                  width="11"
                  height="7"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleSvgClick}
                >
                  <path
                    d="M1 1l4.228 4.228L9.456 1"
                    stroke="#7C5DFA"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              {showOptions && (
                <OptionsPayment handleOptionChange={handleOptionChange} />
              )}
            </div>
            <label className="subtitle mt">Project Description</label>
            <input
              className="content"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
            <div className="item-list">Item List</div>
            <table className="container-item-change">
              <thead>
                <tr className="item-change">
                  <th className="subtitle item-name">Item Name</th>
                  <th className="subtitle">QTY.</th>
                  <th className="subtitle">Price</th>
                  <th className="subtitle">Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {formData.items.map((item, index) => (
                  <tr className="item-change-container" key={index}>
                    <td>
                      <input
                        className="content item-name-company"
                        value={item.name}
                        onChange={(e) =>
                          handleItemChange(index, "name", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="content item-quantity"
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(index, "quantity", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="content item-price"
                        value={item.price}
                        onChange={(e) =>
                          handleItemChange(index, "price", e.target.value)
                        }
                      />
                    </td>
                    <td className="item item-total" placeholder="0.00">
                      {item.total}
                    </td>
                    <td>
                      <button
                        className="btn-trash"
                        onClick={() => handleDeleteItem(index)}
                      >
                        <svg
                          width="13"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                            fill="#888EB0"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="btn-cancel-edit btn-add-item"
              onClick={handleAddNewItem}
            >
              <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                  fill="#7C5DFA"
                  fillRule="nonzero"
                />
              </svg>
              Add New Item
            </button>
          </div>
          <div className="buttons-form">
            <button
              className="btn-cancel-edit"
              onClick={() => toggleEditInvoice(false)}
            >
              Cancel
            </button>
            <button
              className="mark-as-paid"
              onClick={() => {
                toggleEditInvoice(false);
                handleSaveAndSend();
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default EditForm;
