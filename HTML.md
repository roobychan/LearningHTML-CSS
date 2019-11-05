# HTML

- HTML Dcoument Type
  html for HTML5

  ```html
  <!DOCTYPE html>
  ```

- Head

  Head is a container for metadata.
  
- Tags
  - Body
  
      Defines document body

    ```html
    <body>
    </body>
    ```

  - h1 to h6
  - Paragraph

    title is deplayed as tooltip.
    p will ingore extra spaces and extera lines.

    ```html
    <p style="color:red" title=""></p>
    ```

    To use preformatted text with line breaks, use "pre".

    ```html
    <pre></pre>
    ```

  - Text Formantting
    - Bold: b
    - Important: strong
    - Italic: i
    - Marked: mark
    - Emphasized: em
    - Small: small
    - Deleted: del
    - Inserted: ins
    - Subscript: sub
    - Superscript: sup
  
  - Quotationand Citation
    - Short Quotation: q
    - Quotations: blockquote
    - Abbreviation: abbr
    - Contact Info: address
    - Work Title: cite
    - Bi-Directional Override: bdo
  - Links

    ```html
    <a href="" Title="">link</a>
    ```

    - style

      ```css
      a:link {
        color: green;
        background-color: transparent;
        text-decoration: none;
        display: inline-block;
      }

      a:visited {
        color: pink;
        background-color: transparent;
        text-decoration: none;
      }

      a:hover {
        color: red;
        background-color: transparent;
        text-decoration: underline;
      }

      a:active {
        color: yellow;
        background-color: transparent;
        text-decoration: underline;
      }
      ```

    - Target
      - _blank
      - _self
      - _parent
      - _top

    - Bookmark

      ```html
      <p id="b1"></p>
      <a href="#b1"></a>
      ```

- Images

    ```html
    <img src="" alt="" style="width:1px;height:1px" />
    ```

  - Buttons

    ```html
    <button />
    ```

  - List
    - Unordered List

      ```html
      <ul list-style-type="">
        <li></li>
      </ul>
      ```

    - Ordered List

      ```html
      <ol type="1/A/a/I/i" start = "20">
        <li></li>
        <li></li>
      </ol>
      ```

    - Description List

      ```html
      <dl>
        <dt>title1</dt>
        <dd>description1</dd>
        <dt>title2</dt>
        <dd>description2</dd>
      </dl>
      ```

  - Line break

      ```html
      <br>
      ```

  - Horizontal Rules

    ```html
    <hr>
    ```
  
  - Table

    ```html
    <table>
      <caption>table<caption>
      <thead>
        <tr>
          <th>head1</th>
          <th>head2</th>
          <th>head3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data1</td>
          <td>data2</td>
          <td>data3</td>
        </tr>
      </tbody>
    </table>
    ```

  - Iframe

    ```html
    <iframe src="" name=""></iframe>
    ```

  - Form

      name attribute is mandatory.
    - Attribute
      - accept-charset
      - action
      - autocomplete
      - enctype
      - method
      - name
      - novalidate
      - target
    - Input types
      - button
      - checkbox
      - color
      - date
      - datetime-local
      - email
      - file
      - hidden
      - image
      - month
      - number
      - password
      - radio
      - range
      - reset
      - search
      - submit tel
      - text
      - time
      - url
      - week
    - Input Restrictions
      - checked
      - disalbed
      - max
      - maxlength
      - min
      - pattern
      - readonly
      - required
      - size
      - step
      - value

    ```html
    <form action="post">
      <fieldset>
        <legend>test form:</legend>
        <ul>
          <li>f1<input type="text" name="" id=""></li>
          <li>f2<input type="checkbox" name="" id=""></li>
          <li>
            <select name="test" id="dp" multiple>
              <option value="val1">value1</option>
              <option value="val2">value2</option>
              <option value="val3">value3</option>
            </select>
          </li>
          <li><textarea name="texta" id="" cols="20" rows="3"></textarea></li>
          <li><button type="submit" onclick="">test</button></li>
        </ul>
      </fieldset>
    </form>
    ```

    - Data list

      ```html
      <form action="">
      <input list="list1" name="name">
      <datalist id="list1">
        <option value="rooby">
        <option value="richard">
        <option value="biqiang">
      </datalist>

    </form>
    ```

    - Style
      - border
      - border-collapse
      - padding
      - text-align
      - border-spacing

- Style Attribute

  ```html
  <tagname style="property:value;">
  ```

  - background-color
  - color
  - border
  - font-family
  - font-size
  - text-align
  - padding
  - margin
  
    ```html
    <p01>test</>
    ```

    ```css
    #p01 {
      color:blue;
    }
    ```
  
  - Internal CSS

    ```html
    <style></style>
    ```

  - External CSS

    ```html
    <link rel="stylesheet" href="">
    ```
