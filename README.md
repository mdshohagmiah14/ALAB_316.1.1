# ALAB 316.1.1: DOM Manipulation (Part One)

## Overview
This project demonstrates **DOM manipulation** using JavaScript by dynamically modifying elements without changing the HTML or CSS.

## Features
- Selects and styles the `<main>` element.
- Dynamically generates a **navigation menu** from an array.
- Applies style using **CSS custom properties**.

## How It Works
- Uses JavaScript to modify the DOM.
- Creates and updates elements dynamically.
- Appends menu items to `<nav>` based on a data structure.

## Notes
- Run using **Live Server** in **VS Code**.
- Ensure CSS custom properties are defined in `style.css`.

---

# ALAB 316.3.1: DOM Manipulation (Part Two)

## Overview
This part extends **DOM manipulation** by adding interactivity to the navigation menu and handling submenus.

## Features
- Toggles **submenus** when a main menu item is clicked.
- Dynamically builds submenu items based on selected menu data.
- Adds **active** class to highlight selected menu items.

## How It Works
- Listens for click events on both the main and submenu elements.
- Toggles the visibility of the submenu by adjusting its `top` position.
- Updates the content of the main section based on the selected submenu item.

## Notes
- Ensure the `sub-menu` element is positioned properly for submenu visibility.
- Use **CSS Flexbox** for layout styling in the navigation menus.
