import {
  defaultFont
} from "assets/jss/material-dashboard-pro-react.js";

const productItemStyle = theme => ({
  container: {
    height: 30
  },
  title: {
    fontFamily: defaultFont.fontFamily,
    textAlign: "left"
  },
  value: {
    fontFamily: defaultFont.fontFamily,
    textAlign: "center"
  },
  cost: {
    fontFamily: defaultFont.fontFamily,
    textAlign: "right",
    fontWeight: 500
  }
});

export default productItemStyle;
