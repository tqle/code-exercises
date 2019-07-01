import React from "react";
import FormattedAdress from "./FormattedAddress";
import EmailLink from "./EmailLink";

import {
  validateCompanyName,
  validateCompanyCatchPhrase,
  validateCompanyBS
} from "./utils/companyUtil";
import WebLink from "./WebLink";
import PhoneLink from "./PhoneLink";

/**
 * User Info returns full user info
 *
 */
class UserInfo extends React.Component {
  render() {
    // Destructuring objects from props.
    const {
      id,
      name,
      username,
      email,
      address,
      phone,
      website,
      company
    } = this.props;
    // Check address fields, cannot assume address is an object in all cases.
    const street = address && address.street;
    const suite = address && address.suite;
    const state = address && address.state;
    const city = address.city && address.city;
    const zipCode = address && address.zipCode;

    /* NOTE: the sample mock data may have missing state, so add
    a default one for now */
    let companyName, companyCatchPhrase, companyBS;

    companyName = validateCompanyName(company && company.name);
    companyCatchPhrase = validateCompanyCatchPhrase(
      company && company.catchPhrase
    );
    companyBS = validateCompanyBS(company && company.companyBS);

    return (
      <div>
        <div
          id={id}
          className="display-flex flex-col container-border neutral-background-color margin-top padding-left padding-right"
        >
          <header>
            <h1>{name}</h1>
          </header>
          <section>
            {/* UserName */}
            <div className="display-flex flex-row margin-bottom">
              <div className="bold small-width">UserName:</div>
              <div className="margin-left">{username}</div>
            </div>
            {/* E-mail */}
            <div className="display-flex flex-row margin-bottom">
              <div className="bold small-width">E-mail:</div>
              <div className="margin-left">
                <EmailLink email={email} />
              </div>
            </div>
            {/* Address */}
            <div className="display-flex flex-row margin-bottom">
              <div className="bold small-width">Address:</div>
              <div className="margin-left">
                <FormattedAdress
                  street={street}
                  suite={suite}
                  city={city}
                  state={state}
                  zipCode={zipCode}
                />
              </div>
            </div>
            {/* Telephone */}
            <div className="display-flex flex-row margin-bottom">
              <div className="bold small-width">Phone:</div>
              <div className="margin-left">
                <PhoneLink phone={phone} />
              </div>
            </div>
            {/* Website */}
            <div className="display-flex flex-row margin-bottom">
              <div className="bold small-width">Web Site:</div>
              <div className="margin-left">
                <WebLink website={website} />
              </div>
            </div>
            {/* Company Name */}
            <div className="display-flex flex-row margin-bottom">
              <div className="bold small-width">Company:</div>
              <div className="margin-left">{companyName}</div>
            </div>
            <div className="display-flex flex-row margin-bottom">
              <div className="bold small-width">Catch Phrase:</div>
              <div className="margin-left">{companyCatchPhrase}</div>
            </div>
            <div className="display-flex flex-row margin-bottom">
              <div className="bold small-width">BS:</div>
              <div className="margin-left">{companyBS}</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default UserInfo;
