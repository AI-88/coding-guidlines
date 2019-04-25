# CSS Modules

## Definition

A **CSS Module** is a CSS file in which all class names and animation names are scoped locally by default.

## Example

`/src/components/`

:open_file_folder: NavBar

- :page_with_curl: [NavBar.js](./examples/src/components/Navbar/Navbar.js)
- :page_with_curl: [NavbarNavbar.modules.css](./examples/src/components/Navbar/Navbar.module.css)

---

`Navbar.js`

```jsx
import React from 'react';
import classes from './Navbar.module.css';
const Navbar = () => {
  return (
    <>
      <div className={classes.NavContainer}>Company Name</div>
      <ul>
        <li>NavItem One</li>
        <li>NavItem Two</li>
      </ul>
    </>
  );
};
/**
Notes:
  1. <></> is shorthand for <React.Fragment></React.Fragment> if you didn't know that already
  2.
**/
```

---

`Navbar.module.css`

```css
.NavContainer {
  margin-top: 16px;
}
```

The `module.css` is the file extention needed to create a CSS Module. CSS Modules are css files but allow you to use them as variables.

---

# Without CSS Modules (aka regular way)

`Navbar.js`

```jsx
import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <div className="NavContainer">CompanyLogo</div>
      <ul>
        <li>NavItemOne</li>
        <li>NavItemTwo</li>
      </ul>
    </>
  );
};
```

`Navbar.css`

```css
.NavContainer {
  margin-top: 16px;
}
```

---

### Resources

[Documentation - Adding a CSS Modules Stylesheet](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet)
