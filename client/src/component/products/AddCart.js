import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Qunatity from "../common/Quntity";
import { useForm } from "react-hook-form";
import InputField from "../common/InputField";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const [showCoup, setShowCoup] = useState(false);
  const [acco, setAcco] = useState(2);
  const token = localStorage.getItem("token");

  const proceedCheckout = () => {
    if (!token) {
      navigate("/login");
    } else {
      setStep(2);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    setStep(3);
    // reset();
  };

  useEffect(() => {
    setValue("payment", "cash");
  }, []);

  const handleChange = (e) => {
    if (e.target.value === "cash") {
      setAcco(2);
    } else {
      setAcco(1);
    }
  };

  return (
    <>
      <div className="cart_section">
        <div className="center_wr">
          <h2>Cart</h2>
          <div className="cart_content">
            <div className="steppers d-flex">
              <div
                className={step === 1 ? "step d-flex active" : "step d-flex"}
                onClick={() => setStep(1)}
              >
                <span className={step === 1 ? "step_num active" : "step_num"}>
                  {1}
                </span>
                <span className="step_text">Shopping Cart</span>
              </div>
              {token && (
                <>
                  <div
                    className={
                      step === 2 ? "step d-flex active" : "step d-flex"
                    }
                  >
                    <span
                      className={step === 2 ? "step_num active" : "step_num"}
                    >
                      {2}
                    </span>
                    <span className="step_text">Checkout Details</span>
                  </div>
                  <div
                    className={
                      step === 3 ? "step d-flex active" : "step d-flex"
                    }
                    onClick={() => setStep(3)}
                  >
                    <span
                      className={step === 3 ? "step_num active" : "step_num"}
                    >
                      {3}
                    </span>
                    <span className="step_text">Order Complete</span>
                  </div>
                </>
              )}
            </div>
            {step === 1 ? (
              <>
                <div className="shopping_cart d-flex">
                  <div className="product_details">
                    <Table className="shop_table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Qunatity</th>
                          <th>Subtotal</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src={require("../../assets/images/cover_book_2.jpg")}
                              height="80px"
                              width="60px"
                              alt="product_image"
                            />
                          </td>
                          <td>Harry potter</td>
                          <td>125</td>
                          <td className="add_quantity qt d-flex">
                            <Qunatity count={count} setCount={setCount} />
                          </td>
                          <td>250</td>
                          <td>
                            <IoIosCloseCircleOutline />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className="checkout_total">
                    <h5>Cart Total</h5>
                    <Table className="shop_table" style={{ overflowX: "auto" }}>
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td>123.00</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td>123.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <div className="tfoot">
                          <a href="#javascript">Have a Coupon?</a>
                          <button
                            className="cart_btn"
                            onClick={proceedCheckout}
                          >
                            Proceed to buy
                          </button>
                        </div>
                      </tfoot>
                    </Table>
                  </div>
                </div>
              </>
            ) : step === 2 ? (
              <>
                <div className="customer_address d-flex">
                  <div className="customer_information">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="customer_info">
                        <h5 className="tx-left tx-upper mb-20">
                          Customer information
                        </h5>
                        <div className="form_field">
                          <InputField
                            id="email"
                            type="text"
                            placeholder="Email"
                            register={register("email", {
                              required: "Email is required *",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                              },
                            })}
                            error={errors.email}
                          />
                        </div>
                      </div>
                      <div className="billings">
                        <h5 className="tx-left tx-upper mb-20">
                          billing details
                        </h5>
                        <div className="billig_row d-flex">
                          <div className="form_field w-48">
                            <InputField
                              id="firstName"
                              type="text"
                              placeholder="First name*"
                              register={register("firstName", {
                                required: "firstName is required *",
                              })}
                              error={errors.firstName}
                            />
                          </div>
                          <div className="form_field w-48">
                            <InputField
                              id="lastName"
                              type="text"
                              placeholder="Last name*"
                              register={register("lastName", {
                                required: "lastName is required *",
                              })}
                              error={errors.lastName}
                            />
                          </div>
                        </div>
                        <div className="form_field">
                          <InputField
                            id="companyName"
                            type="text"
                            placeholder="Company Name*"
                            register={register("companyName", {
                              required: "companyName is required *",
                            })}
                            error={errors.companyName}
                          />
                        </div>
                        <div className="form_field">
                          <select
                            className="w-100"
                            {...register("countryName", {
                              required: "contryName is required *",
                            })}
                          >
                            <option value="india">India</option>
                            <option value="Usa">Usa</option>
                            <option value="shriLanka">shriLanka</option>
                          </select>
                        </div>
                        <div className="billig_row d-flex">
                          <div className="form_field w-48">
                            <InputField
                              id="HnoStreetName"
                              type="text"
                              placeholder="House No and Street Name"
                              register={register("HnoStreetName", {
                                required:
                                  "House No and Street Name is required *",
                              })}
                              error={errors.HnoStreetName}
                            />
                          </div>
                          <div className="form_field w-48">
                            <InputField
                              id="Apartment"
                              type="text"
                              placeholder="Company Name*"
                              register={register("apartment", {
                                required: "Apartment , suite ,unit required *",
                              })}
                              error={errors.apartment}
                            />
                          </div>
                        </div>
                        <div className="billig_row d-flex">
                          <div className="form_field w-31">
                            <InputField
                              id="townOrCity"
                              type="text"
                              placeholder="Town/City *"
                              register={register("townOrCity", {
                                required: "Town/City is required *",
                              })}
                              error={errors.townOrCity}
                            />
                          </div>
                          <div className="form_field w-31">
                            <InputField
                              id="state"
                              type="text"
                              placeholder="State *"
                              register={register("state", {
                                required: "State is required *",
                              })}
                              error={errors.state}
                            />
                          </div>
                          <div className="form_field w-31">
                            <InputField
                              id="zipcode"
                              type="text"
                              placeholder="Zip Code *"
                              register={register("zipcode", {
                                required: "Zip Code required *",
                              })}
                              error={errors.zipcode}
                            />
                          </div>
                        </div>
                        <div className="additional_info">
                          <h5 className="tx-left tx-upper mb-20">
                            Additional information
                          </h5>
                          <div className="form_field">
                            <InputField
                              id="phone"
                              type="text"
                              placeholder="Phone *"
                              register={register("phone", {
                                required: "phone required *",
                              })}
                              error={errors.phone}
                            />
                          </div>
                        </div>
                        <div className="coupone_field">
                          {showCoup && (
                            <div className="form_field">
                              <InputField
                                id="couponCode"
                                type="text"
                                placeholder="Coupon Code *"
                                register={register("couponCode", {
                                  required: "Coupon Code required *",
                                })}
                                error={errors.couponCode}
                              />
                            </div>
                          )}
                          <p onClick={() => setShowCoup(!showCoup)}>
                            Have a Coupon?
                          </p>
                        </div>
                        <div className="form_field payment_option">
                          <h5 className="tx-left tx-upper mb-20">Payment</h5>
                          <div className="accordian">
                            <div className="accor d-flex">
                              <div>
                                <input
                                  type="radio"
                                  name="payment"
                                  value="transfer"
                                  {...register("payment", {
                                    required: "firstName is required *",
                                  })}
                                  onChange={(e) => handleChange(e)}
                                />
                              </div>
                              <div>Direct bank transfer</div>
                            </div>
                            {acco === 1 && (
                              <div className="panels">
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order will not be shipped until
                                the funds have cleared in our account.
                              </div>
                            )}
                          </div>
                          <div className="accordian">
                            <div className="accor d-flex">
                              <div>
                                <input
                                  type="radio"
                                  name="payment"
                                  value="cash"
                                  {...register("payment", {
                                    required: "firstName is required *",
                                  })}
                                  onChange={(e) => handleChange(e)}
                                />
                              </div>
                              <div>Cash on delivery</div>
                            </div>
                            {acco === 2 && (
                              <div className="panels">
                                Pay with cash upon delivery.
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="form_field">
                          <button className="cart_btn w-100" type="submit">
                            Place order
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="orders">
                    <h5 className="tx-left tx-upper mb-20">Your Order</h5>
                    <Table style={{ overflowX: "auto" }}>
                      <thead>
                        <tr>
                          <th className="tx-left lt-gray pd-8">Product</th>
                          <th className="tx-right lt-gray pd-8">Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tx-left lt-gray pd-8">
                            Product Name 10 x 1
                          </td>
                          <td className="tx-right lt-gray pd-8">₹ 125.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th className="tx-left lt-gray pd-8">Subtotal</th>
                          <td className="tx-right lt-gray pd-8">₹ 125.00</td>
                        </tr>
                        <tr>
                          <th className="tx-left pd-8">Total</th>
                          <td className="tx-right pd-8">₹ 125.00</td>
                        </tr>
                      </tfoot>
                    </Table>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="order_complete">
                  <div className="woo_success">
                    <h4>Thank you. Your order has been received.</h4>
                  </div>
                  <div className="order_summery d-flex">
                    <div className="woo_pay">
                      <p>Order number:</p>
                      <h6>856</h6>
                    </div>
                    <div className="woo_pay">
                      <p>Date:</p>
                      <h6>September 1, 2023</h6>
                    </div>
                    <div className="woo_pay">
                      <p>Total:</p>
                      <h6>$1,700.00</h6>
                    </div>
                    <div className="woo_pay">
                      <p>Payment method:</p>
                      <h6>Cash on delivery</h6>
                    </div>
                  </div>
                  <div className="woo_order_details">
                    <p className="tx-left lt-gray">
                      Pay with cash upon delivery.
                    </p>
                    <h5 className="tx-left tx-upper mb-20">order details</h5>
                    <Table style={{ overflowX: "auto" }}>
                      <thead>
                        <tr>
                          <th className="tx-left lt-gray pd-8">Product</th>
                          <th className="tx-right lt-gray pd-8">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tx-left lt-gray pd-8">
                            Product Name 10 x 1
                          </td>
                          <td className="tx-right lt-gray pd-8">₹ 125.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th className="tx-left lt-gray pd-8">Subtotal</th>
                          <td className="tx-right lt-gray pd-8">₹ 125.00</td>
                        </tr>
                        <tr>
                          <th className="tx-left lt-gray pd-8">
                            Payment Method
                          </th>
                          <td className="tx-right lt-gray pd-8">
                            Cash on delivery
                          </td>
                        </tr>
                        <tr>
                          <th className="tx-left pd-8">Total</th>
                          <td className="tx-right pd-8">₹ 125.00</td>
                        </tr>
                        <tr>
                          <th className="tx-left pd-8">Note:</th>
                          <td className="tx-right pd-8">sdflkdsj</td>
                        </tr>
                      </tfoot>
                    </Table>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
