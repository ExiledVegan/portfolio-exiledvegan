/** @jsx jsx */
import { jsx } from "theme-ui"
import { RiCopyrightFill } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Copyright{" "}
        <span className="icon">
          <RiCopyrightFill />
        </span>{" "}
        ExiledVegan 2022
      </p>
    </div>
  </footer>
)

export default Footer
