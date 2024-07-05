import { theme, ThemeConfig } from 'antd';

const { defaultAlgorithm, darkAlgorithm } = theme;

const lightTheme: ThemeConfig = {
  algorithm: defaultAlgorithm,
  token: {
    // Basic Colors
    colorPrimary: 'rgba(24, 144, 255, 1)',
    colorLink: 'rgba(24, 144, 255, 1)',
    colorSuccess: 'rgba(82, 196, 26, 1)',
    colorWarning: 'rgba(250, 173, 20, 1)',
    colorError: 'rgba(245, 34, 45, 1)',

    // Font and Text Colors
    fontSize: 14,
    colorTextHeading: 'rgba(0, 0, 0, 0.85)',
    colorText: 'rgba(0, 0, 0, 0.65)',
    colorTextSecondary: 'rgba(0, 0, 0, 0.45)',
    colorTextDisabled: 'rgba(0, 0, 0, 0.25)',

    // Border and Shadow
    borderRadius: 4,
    colorBorder: 'rgba(217, 217, 217, 1)',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',

    // Background Colors
    colorBgBase: 'rgba(255, 255, 255, 1)',
    colorBgContainer: 'rgba(255, 255, 255, 1)',
    colorBgElevated: 'rgba(255, 255, 255, 1)',
    colorBgLayout: 'rgba(240, 242, 245, 1)',
    colorBgSpotlight: 'rgba(255, 255, 255, 1)',

    // Custom Properties
    controlOutline: 'rgba(24, 144, 255, 1)',
    opacityLoading: 0.5,
  },
  components: {
    Layout: {
      headerBg: 'rgba(255, 255, 255, 0.85)',
      bodyBg: 'rgba(255, 255, 255, 1)',
      triggerBg: 'rgba(0, 33, 64, 1)',
      colorText: 'rgba(255, 255, 255, 1)',
      colorBgTextHover: 'rgba(24, 144, 255, 0.1)',
      headerHeight: 64,
      headerPadding: '0 24px',
    },
    Collapse: {
      headerBg: 'rgba(240, 242, 245, 1)',
      //headerColor: 'rgba(0, 0, 0, 0.85)',
      //bodyBg: 'rgba(255, 255, 255, 1)',
      //bodyColor: 'rgba(0, 0, 0, 0.65)',
      //borderColor: 'rgba(217, 217, 217, 1)',
    },
    Menu: {
      itemBg: 'rgba(255, 255, 255, 1)',
      itemColor: 'rgba(0, 0, 0, 0.65)',
      //itemBgHover: 'rgba(24, 144, 255, 0.1)',
      //itemColorHover: 'rgba(24, 144, 255, 1)',
    },
    Tour: {
      //popupBg: 'rgba(255, 255, 255, 1)',
      //popupBorderColor: 'rgba(217, 217, 217, 1)',
      //popupColor: 'rgba(0, 0, 0, 0.65)',
    },
    Modal: {
      headerBg: 'rgba(255, 255, 255, 1)',
      //headerColor: 'rgba(0, 0, 0, 0.85)',
      //bodyBg: 'rgba(255, 255, 255, 1)',
      //bodyColor: 'rgba(0, 0, 0, 0.65)',
      //borderColor: 'rgba(217, 217, 217, 1)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
    Tabs: {
      //tabBarBg: 'rgba(255, 255, 255, 1)',
      //tabColor: 'rgba(0, 0, 0, 0.65)',
      //indicatorColor: 'rgba(24, 144, 255, 1)',
    },
    Alert: {
      //bodyBg: 'rgba(255, 255, 255, 1)',
      //bodyColor: 'rgba(0, 0, 0, 0.85)',
      //borderColor: 'rgba(217, 217, 217, 1)',
    },
    Badge: {
      //color: 'rgba(255, 255, 255, 1)',
      //bg: 'rgba(24, 144, 255, 1)',
    },
    Input: {
      //bg: 'rgba(255, 255, 255, 1)',
      //borderColor: 'rgba(217, 217, 217, 1)',
      //color: 'rgba(0, 0, 0, 0.85)',
      //placeholderColor: 'rgba(0, 0, 0, 0.45)',
    },
    //TextArea: {
    //bg: 'rgba(255, 255, 255, 1)',
    //borderColor: 'rgba(217, 217, 217, 1)',
    //color: 'rgba(0, 0, 0, 0.85)',
    //placeholderColor: 'rgba(0, 0, 0, 0.45)',
    //},
    Button: {
      //color: 'rgba(255, 255, 255, 1)',
      //bg: 'rgba(24, 144, 255, 1)',
      //borderColor: 'rgba(24, 144, 255, 1)',
      boxShadow: '0 2px 8px rgba(24, 144, 255, 0.3)',
    },
    Notification: {
      //bg: 'rgba(255, 255, 255, 1)',
      //borderColor: 'rgba(217, 217, 217, 1)',
      //color: 'rgba(0, 0, 0, 0.85)',
    },
    Tag: {
      //bg: 'rgba(24, 144, 255, 0.1)',
      //borderColor: 'rgba(24, 144, 255, 1)',
      //color: 'rgba(24, 144, 255, 1)',
    },
    Card: {
      //bg: 'rgba(255, 255, 255, 1)',
      //borderColor: 'rgba(217, 217, 217, 1)',
      //color: 'rgba(0, 0, 0, 0.85)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
    Drawer: {
      //bg: 'rgba(255, 255, 255, 1)',
      //borderColor: 'rgba(217, 217, 217, 1)',
      //color: 'rgba(0, 0, 0, 0.85)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
    Flex: {
      //gap: '16px',
    },
    Transfer: {
      //bodyBg: 'rgba(255, 255, 255, 1)',
      //bodyBorderColor: 'rgba(217, 217, 217, 1)',
      //itemBg: 'rgba(240, 242, 245, 1)',
      //itemBgHover: 'rgba(24, 144, 255, 0.1)',
    },
    Form: {
      labelColor: 'rgba(0, 0, 0, 0.85)',
      //itemBg: 'rgba(255, 255, 255, 1)',
      //itemBorderColor: 'rgba(217, 217, 217, 1)',
    },
    //FloatButtonGroup: {
    //color: 'rgba(255, 255, 255, 1)',
    //bg: 'rgba(24, 144, 255, 1)',
    //borderColor: 'rgba(24, 144, 255, 1)',
    //boxShadow: '0 2px 8px rgba(24, 144, 255, 0.3)',
    //},
    Pagination: {
      itemBg: 'rgba(255, 255, 255, 1)',
      //itemBorderColor: 'rgba(217, 217, 217, 1)',
      //itemColor: 'rgba(0, 0, 0, 0.85)',
    },
    Select: {
      // Token Name	Description	Type	Default Value
      // clearBg	Background color of clear button	string	#ffffff
      // multipleItemBg	Background color of multiple tag	string	rgba(0, 0, 0, 0.06)
      // multipleItemBorderColor	Border color of multiple tag	string	transparent
      // multipleItemBorderColorDisabled	Border color of multiple tag when disabled	string	transparent
      // multipleItemColorDisabled	Text color of multiple tag when disabled	string	rgba(0, 0, 0, 0.25)
      // multipleItemHeight	Height of multiple tag	number	24
      // multipleItemHeightLG	Height of multiple tag with large size	number	32
      // multipleItemHeightSM	Height of multiple tag with small size	number	16
      // multipleSelectorBgDisabled	Background color of multiple selector when disabled	string	rgba(0, 0, 0, 0.04)
      // optionActiveBg	Background color when option is active	string	rgba(0, 0, 0, 0.04)
      // optionFontSize	Font size of option	number	14
      // optionHeight	Height of option	number	32
      // optionLineHeight	Line height of option	undefined | LineHeight<string | number>	1.5714285714285714
      // optionPadding	Padding of option	undefined | Padding<string | number>	5px 12px
      // optionSelectedBg	Background color when option is selected	string	#e6f4ff
      // optionSelectedColor	Text color when option is selected	string	rgba(0, 0, 0, 0.88)
      // optionSelectedFontWeight	Font weight when option is selected	undefined | FontWeight	600
      // selectorBg	Background color of selector	string	#ffffff
      // showArrowPaddingInlineEnd	Inline end padding of arrow	number	18
      // singleItemHeightLG	Height of single selected item with large size	number	40
      // zIndexPopup	z-index of dropdown	number	1050
      // Global Token
      // colorBgContainer	Container background color, e.g: default button, input box, etc. Be sure not to confuse this with `colorBgElevated`.	string	#ffffff
      // colorBgContainerDisabled	Control the background color of container in disabled state.	string	rgba(0, 0, 0, 0.04)
      // colorBgElevated	Container background color of the popup layer, in dark mode the color value of this token will be a little brighter than `colorBgContainer`. E.g: modal, pop-up, menu, etc.	string	#ffffff
      // colorBorder	Default border color, used to separate different elements, such as: form separator, card separator, etc.	string	#d9d9d9
      // colorError	Used to represent the visual elements of the operation failure, such as the error Button, error Result component, etc.	string	#ff4d4f
      // colorErrorBg	The background color of the error state.	string	#fff2f0
      // colorErrorBgHover	The hover state background color of the error state.	string	#fff1f0
      // colorErrorHover	The hover state of the error color.	string	#ff7875
      // colorErrorOutline	Control the outline color of input component in error state.	string	rgba(255, 38, 5, 0.06)
      // colorFillSecondary	The second level of fill color can outline the shape of the element more clearly, such as Rate, Skeleton, etc. It can also be used as the Hover state of the third level of fill color, such as Table, etc.	string	rgba(0, 0, 0, 0.06)
      // colorFillTertiary	The third level of fill color is used to outline the shape of the element, such as Slider, Segmented, etc. If there is no emphasis requirement, it is recommended to use the third level of fill color as the default fill color.	string	rgba(0, 0, 0, 0.04)
      // colorIcon	Weak action. Such as `allowClear` or Alert close button	string	rgba(0, 0, 0, 0.45)
      // colorIconHover	Weak action hover color. Such as `allowClear` or Alert close button	string	rgba(0, 0, 0, 0.88)
      // colorPrimary	Brand color is one of the most direct visual elements to reflect the characteristics and communication of the product. After you have selected the brand color, we will automatically generate a complete color palette and assign it effective design semantics.	string	#1677ff
      // colorPrimaryHover	Hover state under the main color gradient.	string	#4096ff
      // colorSplit	Used as the color of separator, this color is the same as colorBorderSecondary but with transparency.	string	rgba(5, 5, 5, 0.06)
      // colorText	Default text color which comply with W3C standards, and this color is also the darkest neutral color.	string	rgba(0, 0, 0, 0.88)
      // colorTextDescription	Control the font color of text description.	string	rgba(0, 0, 0, 0.45)
      // colorTextDisabled	Control the color of text in disabled state.	string	rgba(0, 0, 0, 0.25)
      // colorTextPlaceholder	Control the color of placeholder text.	string	rgba(0, 0, 0, 0.25)
      // colorTextQuaternary	The fourth level of text color is the lightest text color, such as form input prompt text, disabled color text, etc.	string	rgba(0, 0, 0, 0.25)
      // colorTextTertiary	The third level of text color is generally used for descriptive text, such as form supplementary explanation text, list descriptive text, etc.	string	rgba(0, 0, 0, 0.45)
      // colorWarning	Used to represent the warning map token, such as Notification, Alert, etc. Alert or Control component(like Input) will use these map tokens.	string	#faad14
      // colorWarningBg	The background color of the warning state.	string	#fffbe6
      // colorWarningBgHover	The hover state background color of the warning state.	string	#fff1b8
      // colorWarningHover	The hover state of the warning color.	string	#ffd666
      // colorWarningOutline	Control the outline color of input component in warning state.	string	rgba(255, 215, 5, 0.1)
      // borderRadius	Border radius of base components	number	6
      // borderRadiusLG	LG size border radius, used in some large border radius components, such as Card, Modal and other components.	number	8
      // borderRadiusSM	SM size border radius, used in small size components, such as Button, Input, Select and other input components in small size	number	4
      // borderRadiusXS	XS size border radius, used in some small border radius components, such as Segmented, Arrow and other components with small border radius.	number	2
      // boxShadowSecondary	Control the secondary box shadow style of an element.	string	0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)
      // controlHeight	The height of the basic controls such as buttons and input boxes in Ant Design	number	32
      // controlHeightLG	LG component height	number	40
      // controlHeightSM	SM component height	number	24
      // controlOutline	Control the outline color of input component.	string	rgba(5, 145, 255, 0.1)
      // controlOutlineWidth	Control the outline width of input component.	number	2
      // controlPaddingHorizontal	Control the horizontal padding of an element.	number	12
      // controlPaddingHorizontalSM	Control the horizontal padding of an element with a small-medium size.	number	8
      // fontFamily	The font family of Ant Design prioritizes the default interface font of the system, and provides a set of alternative font libraries that are suitable for screen display to maintain the readability and readability of the font under different platforms and browsers, reflecting the friendly, stable and professional characteristics.	string	-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
      // fontSize	The most widely used font size in the design system, from which the text gradient will be derived.	number	14
      // fontSizeIcon	Control the font size of operation icon in Select, Cascader, etc. Normally same as fontSizeSM.	number	12
      // fontSizeLG	Large font size	number	16
      // fontSizeSM	Small font size	number	12
      // lineHeight	Line height of text.	number	1.5714285714285714
      // lineType	Border style of base components	string	solid
      // lineWidth	Border width of base components	number	1
      // motionDurationMid	Motion speed, medium speed. Used for medium element animation interaction.	string	0.2s
      // motionDurationSlow	Motion speed, slow speed. Used for large element animation interaction.	string	0.3s
      // motionEaseInOut	Preset motion curve.	string	cubic-bezier(0.645, 0.045, 0.355, 1)
      // motionEaseInOutCirc	Preset motion curve.	string	cubic-bezier(0.78, 0.14, 0.15, 0.86)
      // motionEaseInQuint	Preset motion curve.	string	cubic-bezier(0.755, 0.05, 0.855, 0.06)
      // motionEaseOutCirc	Preset motion curve.	string	cubic-bezier(0.08, 0.82, 0.17, 1)
      // motionEaseOutQuint	Preset motion curve.	string	cubic-bezier(0.23, 1, 0.32, 1)
      // paddingSM	Control the small padding of the element.	number	12
      // paddingXS	Control the extra small padding of the element.	number	8
      // paddingXXS	Control the extra extra small padding of the element.	number	4
    },
    Space: {
      // padding	Control the padding of the element.	number	16
      // paddingLG	Control the large padding of the element.	number	24
      // paddingXS	Control the extra small padding of the element.	number	8
    },
  },
};

const darkTheme: ThemeConfig = {
  algorithm: darkAlgorithm,
  token: {
    // Basic Colors
    colorPrimary: 'rgba(23, 125, 220, 1)',
    colorLink: 'rgba(23, 125, 220, 1)',
    colorSuccess: 'rgba(73, 170, 25, 1)',
    colorWarning: 'rgba(216, 150, 20, 1)',
    colorError: 'rgba(166, 29, 36, 1)',

    // Font and Text Colors
    fontSize: 14,
    colorTextHeading: 'rgba(255, 255, 255, 0.85)',
    colorText: 'rgba(255, 255, 255, 0.85)',
    colorTextSecondary: 'rgba(255, 255, 255, 0.65)',
    colorTextDisabled: 'rgba(255, 255, 255, 0.25)',

    // Border and Shadow
    borderRadius: 4,
    colorBorder: 'rgba(67, 67, 67, 1)',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',

    // Background Colors
    colorBgBase: 'rgba(0, 0, 0, 1)',
    colorBgContainer: 'rgba(0, 0, 0, 1)',
    colorBgElevated: 'rgba(33, 33, 33, 1)',
    colorBgLayout: 'rgba(20, 20, 20, 1)',
    colorBgSpotlight: 'rgba(0, 21, 41, 1)',

    // Custom Properties
    controlOutline: 'rgba(23, 125, 220, 1)',
    opacityLoading: 0.5,
  },
  components: {
    Layout: {
      headerBg: 'rgba(0, 21, 41, 0.2)',
      footerBg: 'rgba(0, 21, 41, 0.2)',
      bodyBg: 'rgba(0, 0, 0, 1)',
      triggerBg: 'rgba(0, 33, 64, 1)',
      colorText: 'rgba(255, 255, 255, 1)',
      colorBgTextHover: 'rgba(23, 125, 220, 0.1)',
      headerHeight: 64,
      headerPadding: '0 24px',
    },
    Collapse: {
      headerBg: 'rgba(20, 20, 20, 1)',
      //headerColor: 'rgba(255, 255, 255, 0.85)',
      //bodyBg: 'rgba(33, 33, 33, 1)',
      //bodyColor: 'rgba(255, 255, 255, 0.65)',
      //borderColor: 'rgba(67, 67, 67, 1)',
    },
    Menu: {
      itemBg: 'rgba(20, 20, 20, 1)',
      itemColor: 'rgba(255, 255, 255, 0.65)',
      //itemBgHover: 'rgba(23, 125, 220, 0.1)',
      //itemColorHover: 'rgba(23, 125, 220, 1)',
    },
    Tour: {
      //popupBg: 'rgba(33, 33, 33, 1)',
      //popupBorderColor: 'rgba(67, 67, 67, 1)',
      //popupColor: 'rgba(255, 255, 255, 0.65)',
    },
    Modal: {
      headerBg: 'rgba(20, 20, 20, 1)',
      //headerColor: 'rgba(255, 255, 255, 0.85)',
      //bodyBg: 'rgba(33, 33, 33, 1)',
      //bodyColor: 'rgba(255, 255, 255, 0.65)',
      //borderColor: 'rgba(67, 67, 67, 1)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    },
    Tabs: {
      //tabBarBg: 'rgba(33, 33, 33, 1)',
      //tabColor: 'rgba(255, 255, 255, 0.65)',
      //indicatorColor: 'rgba(23, 125, 220, 1)',
    },
    Alert: {
      //bodyBg: 'rgba(33, 33, 33, 1)',
      //bodyColor: 'rgba(255, 255, 255, 0.85)',
      //borderColor: 'rgba(67, 67, 67, 1)',
    },
    Badge: {
      //color: 'rgba(255, 255, 255, 1)',
      //bg: 'rgba(23, 125, 220, 1)',
    },
    Input: {
      //bg: 'rgba(20, 20, 20, 1)',
      //borderColor: 'rgba(67, 67, 67, 1)',
      //color: 'rgba(255, 255, 255, 0.85)',
      //placeholderColor: 'rgba(255, 255, 255, 0.45)',
    },
    //TextArea: {
    //bg: 'rgba(20, 20, 20, 1)',
    //borderColor: 'rgba(67, 67, 67, 1)',
    //color: 'rgba(255, 255, 255, 0.85)',
    //placeholderColor: 'rgba(255, 255, 255, 0.45)',
    //},
    Button: {
      //color: 'rgba(255, 255, 255, 1)',
      //bg: 'rgba(23, 125, 220, 1)',
      //borderColor: 'rgba(23, 125, 220, 1)',
      boxShadow: '0 2px 8px rgba(23, 125, 220, 0.3)',
    },
    Notification: {
      //bg: 'rgba(33, 33, 33, 1)',
      //borderColor: 'rgba(67, 67, 67, 1)',
      //color: 'rgba(255, 255, 255, 0.85)',
    },
    Tag: {
      //bg: 'rgba(23, 125, 220, 0.1)',
      //borderColor: 'rgba(23, 125, 220, 1)',
      //color: 'rgba(23, 125, 220, 1)',
    },
    Card: {
      //bg: 'rgba(20, 20, 20, 1)',
      //borderColor: 'rgba(67, 67, 67, 1)',
      //color: 'rgba(255, 255, 255, 0.85)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    },
    Drawer: {
      //bg: 'rgba(20, 20, 20, 1)',
      //borderColor: 'rgba(67, 67, 67, 1)',
      //color: 'rgba(255, 255, 255, 0.85)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    },
    Flex: {
      //gap: '16px',
    },
    Transfer: {
      //bodyBg: 'rgba(33, 33, 33, 1)',
      //bodyBorderColor: 'rgba(67, 67, 67, 1)',
      //itemBg: 'rgba(20, 20, 20, 1)',
      //itemBgHover: 'rgba(23, 125, 220, 0.1)',
    },
    Form: {
      labelColor: 'rgba(255, 255, 255, 0.85)',
      //itemBg: 'rgba(20, 20, 20, 1)',
      //itemBorderColor: 'rgba(67, 67, 67, 1)',
    },
    //FloatButtonGroup: {
    //color: 'rgba(255, 255, 255, 1)',
    //bg: 'rgba(23, 125, 220, 1)',
    //borderColor: 'rgba(23, 125, 220, 1)',
    //boxShadow: '0 2px 8px rgba(23, 125, 220, 0.3)',
    //},
    Pagination: {
      itemBg: 'rgba(33, 33, 33, 1)',
      //itemBorderColor: 'rgba(67, 67, 67, 1)',
      //itemColor: 'rgba(255, 255, 255, 0.85)',
    },
    Select: {
      // theme
    },
    Space: {
      //gap: '16px',
    },
  },
};

export { lightTheme, darkTheme };
