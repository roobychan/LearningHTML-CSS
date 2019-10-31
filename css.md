# CSS

CSS is used to define styles for web pages.

A CSS rule-set contains a selector and a declaration block.

```css
selector {
  property:value;
  }
```

## Cascading Order

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1. Inline style
2. External and intertnal style
3. Browser default

___If internal style and external CSS file affects the same element, the last selector will take effect.___

## Selector

- Element Selector

    Element seelctor selects HTML elements based on the element name.

    ```css
    p {
      color:red;
    }
    ```

- id Selector

    id slelecter uses id attribute to select an element. id is unique within a page.

    ```css
    #id1 {
      text-aligh: left;
    }
    ```

- Class Selector

    Class selector selects HTML elements with a specific class attribute.

    ```css
    .title {
      text-align:center;
    }
    p.title {
      text-align:left;
    }
    ```

- Universal Selector

    It selects all elements.

    ```css
    * {
      text-align:right;
    }
    ```

- Grouping Selector

    Combine the selector into a gourp with same style.

    ```css
    h1 h2 h3 {
      text-align:center;
    }
    ```

- Descendant Selector
  
    Descendant selector matches all elements inside of a specific element.

    ```css
    div p{
      color:yellow;
    }
    ```

- Child Selector

    Child Selector selects all elelemts that are the children of a specified element.

    ```css
    div > p {
      color:white;
    }
    ```

- Adjacent Sibling Selector

    The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.

    ```css
    div + p {
      background-color: yellow;
    }
    /* selects all <p> elements that are placed immediately after <div> elements*/
    ```

- General Sibliing Selector

    The general sibling selector selects all elements that are siblings of a specified element.

    ```css
    div ~ p{
      background-color:yellow;
    }
    /*selects all <p> elements that are siblings of <div> elements*/
    ```

- Pseudo-classes

    A pseudo-class is used to define a special state of an element.

    ```css
    selector:pseudo-class {
      property:value;
    }
    ```

    ```css
    div:hover div p{
      color:red;
    }
    ```

- Pseudo-elements
  
    A CSS pseudo-element is used to style specified parts of an element.

    ```css
    selector::pseudo-element{
      property:value;
    }
    ```

    ```css
    p::first-line{
      color:black;
    }
    ```
