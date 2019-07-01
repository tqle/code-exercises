import React from "react";
import { validateWebSite } from "./utils/linkUtil";

/**
 * Web Link extends link tag with
 * custom title to indicate link is an web url.
 */
class WebLink extends React.Component {
  render() {
    // Destructuring objects from props.
    let { website } = this.props;

    // Check for empty, undefined, null cases
    let validWebSite = validateWebSite(website);
    // FUTURE: Write a regex or pattern match if website is valid url format

    return (
      <a title={"URL:" + validWebSite} href={validWebSite}>
        {validWebSite}
      </a>
    );
  }
}

export default WebLink;
