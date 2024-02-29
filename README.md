# Patient App

> Patient App for Physicians

Physicians can be overwhelmed by the amount of patient information presented to them. We’d like to create a simple product for them that they feel delighted to use and helps speed up their workflow. Given a large (1MB) data set of patient notes, create a simple frontend web app that lets physician “users” do the following:

## Library
- Material-UI Library:
  While Material-UI offers a wide range of components, it comes with a larger bundle size. Considered the trade-off between feature-rich components and potential impact on page load 
  times.
- MUI Styled for Styling:
  MUI styled allows for easy theming and styling while maintaining the benefits of a CSS-in-JS approach. This decision promotes maintainability and a unified visual identity throughout 
  the application.

## Trade-offs & Design Decisions
- Sidebar Navigation:
  A sidebar promotes intuitive navigation, making it easier for users to explore various features without excessive clicks. It aligns with Material-UI design principles for a cohesive user experience.
- Card Component for Patients:
  Cards offer a visually appealing way to present patient information, maintaining consistency with Material Design guidelines. This design decision prioritizes aesthetics and 
  readability.
- Tabs for Toggling Recent Notes:
  Tabs provide a clear and organized way for users to switch between different views. Enhances user experience by allowing them to focus on specific subsets of information.
- Details Modal:
  Modal overlays might temporarily obscure the main content. However, this design decision prioritizes a clean and focused details viewing experience. 
- Add Notes Drawer:
  Drawer overlays may cover a portion of the main content temporarily. This design decision prioritizes a seamless note-taking experience without disrupting the overall user flow.

## Public Url


### Install dependencies

```bash
npm install
```

### Run React from root

```bash
npm run start
```


### Version

1.0.0

### License

This project is licensed under the MIT License
