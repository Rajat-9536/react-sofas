<div className="cell small-12 medium-12 large-8">
            {!showAddressForm && (
              <button onClick={handleProceedToCheckout}>
                Proceed to Checkout
              </button>
            )}
            {showAddressForm && (
              <form onSubmit={handleAddressSubmit}>
                <label>
                  fullname:
                  <input
                    type="text"
                    name="fullname"
                    value={fullname}
                    onChange={(event) => setFullname(event.target.value)}
                  />
                </label>
                <label>
                  mobile number:
                  <input
                    type="text"
                    name="mobile_number"
                    value={mobile_number}
                    onChange={(event) => setMobile_number(event.target.value)}
                  />
                </label>
                <label>
                  locality:
                  <input
                    type="text"
                    name="locality"
                    value={locality}
                    onChange={(event) => setlocality(event.target.value)}
                  />
                </label>
                <label>
                  Address:
                  <input
                    type="text"
                    name="street_address"
                    value={street_address}
                    onChange={(event) => setStreet_address(event.target.value)}
                  />
                </label>
                <label>
                  City:
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </label>
                <label>
                  Postal Code:
                  <input
                    type="text"
                    name="postal_code"
                    value={postal_code}
                    onChange={(event) => setPostal_code(event.target.value)}
                  />
                </label>
                <label>
                  state:
                  <input
                    type="text"
                    name="state"
                    value={state}
                    onChange={(event) => setstate(event.target.value)}
                  />
                </label>

                <label>
                  landmark:
                  <input
                    type="text"
                    name="landmark"
                    value={landmark}
                    onChange={(event) => setlandmark(event.target.value)}
                  />
                </label>

                <label>
                  alternate_phone_number:
                  <input
                    type="text"
                    name="alternate_phone_number"
                    value={alternate_phone_number}
                    onChange={(event) =>
                      setalternate_phone_number(event.target.value)
                    }
                  />
                </label>
                <button type="submit">Submit Address</button>
              </form>
            )}
          </div>