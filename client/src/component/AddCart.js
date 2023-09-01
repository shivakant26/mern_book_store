import { useState } from "react";
import { Table } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Qunatity from "./common/Quntity";
import { useForm } from "react-hook-form";
import InputField from "./common/InputField";

const AddToCart = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const [showCoup, setShowCoup] = useState(false);
  const [acco, setAcco] = useState(2);
  const proceedCheckout = () => {
    setStep(2);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

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
                <span className="step_num">{1}</span>
                <span className="step_text">Shopping Cart</span>
              </div>
              <div
                className={step === 2 ? "step d-flex active" : "step d-flex"}
                onClick={() => setStep(2)}
              >
                <span className="step_num">{2}</span>
                <span className="step_text">Checkout Details</span>
              </div>
              <div
                className={step === 3 ? "step d-flex active" : "step d-flex"}
                onClick={() => setStep(3)}
              >
                <span className="step_num">{3}</span>
                <span className="step_text">Order Complete</span>
              </div>
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
                              src={require("../assets/images/cover_book_2.jpg")}
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
                    <Table className="shop_table">
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
                            Proceed to checkout
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
                        <h5>Customer information</h5>
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
                        <h5>billing details</h5>
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
                          <select className="w-100">
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
                          <h5>Additional information</h5>
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
                          <h5>Payment</h5>
                          <div className="accordian">
                            <div className="accor d-flex">
                              <div>
                                <input
                                  type="radio"
                                  name="payment"
                                  value="transfer"
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
                          <button className="cart_btn w-100">
                            Place order{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="orders"></div>
                </div>
              </>
            ) : (
              <>
                <div className="three">three</div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
