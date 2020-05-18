# HTML
HyperText Markup Language
* HyperText: Moving from web to via **Link**
* Markup: To use as prescribed in a document
* Language

The Web uses **HTML5** as standard.

<br>

## 0. Term
* HTML Element: ```<tagname>Contents</tagname>```

* Empty Element: ```<meta charset="UTF-8">  // meta```<br>
  * ex) br, hr, img, input, link...
* Attribute: ```<img src="Hello.jpg">  // src```
  * Attribute Name: src, lang, title, style, id, class...
  * Attribute Value: Hello.jpg
* Comments: ```<!-- This is a comments -->  // <!-- -->```

<br>

## 1. Heading(1~6)
```
<h1>This is a Head 1(h1)</h1>
<h2>This is a Head 2(h2)</h2>
<h3>This is a Head 3(h3)</h3>
<h4>This is a Head 4(h4)</h4>
<h5>This is a Head 5(h5)</h5>
<h6>This is a Head 6(h6)</h6>
```
![image](https://user-images.githubusercontent.com/38516906/72703914-537e2600-3b9a-11ea-9f83-a5b44a94589c.png)

<br>

## 2. Paragraph
```
<p> This is a Paragraph 1</p>
<p> This is a Paragraph 2</p> 
<p> This is a Paragraph 3</p>
<p> This is a Paragraph 4</p>
```
![image](https://user-images.githubusercontent.com/38516906/72695205-1191b780-3b7b-11ea-81d0-b2c526ece84f.png)

<br>

## 3. Formatting
```
<b>Bold</b> font formatting<br> <!-- Just Bold -->
<strong>Bold</strong> font formatting <!-- Emphasis Bold-->

<i>Itallic font</i><br> <!-- Just Itallic-->
<em>Itallic font</em> <!-- Emphasis Itallic-->

This is a <mark>Mark</mark><br>

This is a <ins>Insert</ins><br>
This is a <del>Delete</del>

This is a <sup>SuperScript</sup><br>
This is a <sub>SubScript</sub>
```
![image](https://user-images.githubusercontent.com/38516906/72695277-4f8edb80-3b7b-11ea-94e3-d2e34125f20e.png)

<br>

## 4. Style
format: ```<tagname style="attributename:attributevalue;">Contents</tagname>```
```
<h3>Before: This is a content before applying style</h3>
<br>
<h3 style="font-size: 150%;">This is a style which is related in font size</h3>
<h3 style="color:cornflowerblue;">This is a style which is related in color</h3>
<h3 style="text-align: center;">This is a style which is related in font align</h3>
<br>
<h3 style="font-size: 150%; color: cornflowerblue; text-align: center;">After: This is a content after applying all of styles</h3>
```
![image](https://user-images.githubusercontent.com/38516906/72700034-ed8ba180-3b8d-11ea-93a5-2c80978379db.png)

<br>

## 5. Image
format: ```<img src="source URI" alt="">```
```
<img src="http://dn.joongdo.co.kr/mnt/images/file/2018y/06m/07d/2018060701000651500027651.jpg" alt="Puss in Boots"><br>
<img src="http://dn.joongdo.co.kr/mnt/images/file/2018y/06m/07d/2018060701000651500027651.jpg" alt="Puss in Boots" width="220px" height="180px"><br>
<img src="http://dn.joongdo.co.kr/mnt/images/file/2018y/06m/07d/2018060701000651500027651.jpg" alt="Puss in Boots" style="width: 220px; height: 180px;">
```
![image](https://user-images.githubusercontent.com/38516906/72700811-5ecc5400-3b90-11ea-92e4-5a5fe0357820.png)

<br>

## 6. URI(Uniform Resource Identifier) & Link
1. URI
  * URL: Uniform Resource **Locator**(Absolute URL / Relative URL)<br>
    ```<protocol://ip_address:port_number/path/file_name?query>```
    * protocol: Convention on web server request. Regulary use **http** or **https**
    * ip_address: Unique number assigned to the network connection device
    * port_number: Web server access gate. Regulary use http as 80 and https as 443
    * path: Web server resource path
    * query: Web server request parameter(key1=value1)
  * URN: Uniform Resource **Name**
2. Link<br>
format: ```<a href="moving_scheduled_path">```
```
<a href="https://www.google.com">Move Google site</a><br>
<a href="https://www.google.com" target="_self">Move Google site(Direct)</a><br>
<a href="https://www.google.com" target="_blank">Move Google site(New page)</a><br><br>
<a href="C:\Users\kkyy0\Desktop\Web\page\01_text_style.html" target="_blank"> Absolute Path</a><br>
<a href="./01_text_style.html" target="_blank">Relative Path</a>
```
![image](https://user-images.githubusercontent.com/38516906/72702549-6c84d800-3b96-11ea-8ce6-ab2cacb06329.png)

<br>

## 7. Layout
1. Block
```
<!-- All lines -->
<p style="background-color: aquamarine;">p is a block</p>
<div style="background-color: cadetblue;">Also, div is a  block</div>
```
![image](https://user-images.githubusercontent.com/38516906/72703608-5c222c80-3b99-11ea-8335-6ffda553f876.png)

2. Inline
```
<!-- Until contents-->
<strong style="background-color: coral;">strong is a Inline</strong><br>
<a style="background-color: cornsilk;">Also, a is a Inline</a><br>
<span style="background-color: darkgrey;">Lastly, span is a Inline</span>
```
![image](https://user-images.githubusercontent.com/38516906/72703637-70fec000-3b99-11ea-9575-8624f3449cb3.png)

<br>

## 8. Semantic
```
<div style="text-align: center; width: 350px";>
    <header style="background-color: darkolivegreen;">This is a header</header>
    <nav style="background-color: darksalmon;">This is a navigation</nav>
    <section style="background-color: darkseagreen; float: left;">
        <article>This is an article inside section 1</article>
        <article>This is an article inside section 2</article>
        <article>This is an article inside section 3</article>
        </section>
    <aside style="background-color: deepskyblue;">This is a aside</aside>
    <footer style="background-color: greenyellow; clear: left;">This is a footer</footer>
</div>
```
![image](https://user-images.githubusercontent.com/38516906/72704643-bc669d80-3b9c-11ea-9574-269e3217036f.png)

<br>

## 9. List
1. The basic of List
```
<h2>1-1. dt / dt / dd </h2>
    <h3>The basic of List</h3>
        <dl>
            <dt>Term 1</dt> <!-- dt: data -->
                <dd>- the description about Term 1</dd> <!-- dd: data description-->
            <dt>Term 2</dt>
                <dd>- the description about Term 2 </dd>
        </dl>
```
![image](https://user-images.githubusercontent.com/38516906/72767457-45321780-3c37-11ea-952f-627f00d67449.png)

2. ul, ol, li
  * ul, li
  ```
  <h3>1-2-1. ul / li</h3> <!-- unordered list -->
        <ul>
            <li>unordered list 1</li>
            <li>unordered list 2</li>
            <li>unordered list 3</li>
            <li>unordered list 4</li>
        </ul>
  ```
  ![image](https://user-images.githubusercontent.com/38516906/72767546-9c37ec80-3c37-11ea-8d30-619d6b6dffa7.png)

  * ol, li
  ```
  <h3>1-2-2. ol / li</h3> <!-- ordered list -->
        <ol type="A"> <!-- default: 1,2,3,.. (only write ol)-->
            <li>ordered list 1</li>
            <li>ordered list 2</li>
            <li>ordered list 3</li>
            <li>ordered list 4</li>
        </ol>
  ```
  ![image](https://user-images.githubusercontent.com/38516906/72767571-c25d8c80-3c37-11ea-9b03-f2d7d180c03c.png)

<br>

## 10. Table
1. The basic of Table
```
<h2>1-1. The basic of Table</h2>
    <table border="1"> <!-- border function -->
        <tr> <!-- table row -->
            <th> Title 1</th> <!-- table head -->
            <th> Title 2</th> 
            <th> Title 3</th> 
        </tr>
        <tr>
            <td>Cell 1-1</td> <!-- table data -->
            <td>Cell 1-2</td>
            <td>Cell 1-3</td>
        </tr>
    </table>
    <br>
```
![image](https://user-images.githubusercontent.com/38516906/72769476-313de400-3c3e-11ea-88ed-40f0e368e983.png)

2. The merge of Table
  * colspan
  ```
  <h3>1-2-1. colspan</h3>
    <table border="1" width="200" height="200">
        <tr>
            <td colspan="200">1</td>
            <!-- <td>2</td> -->
        </tr>
        <tr>
            <td>3</td>
            <td>4</td>
        </tr>
    </table>
    <br>
  ```
  ![image](https://user-images.githubusercontent.com/38516906/72769525-56caed80-3c3e-11ea-88a7-ca22b4918d38.png)

  * rowspan
  ```
  <h3>1-2-2. rowspan</h3>
    <table border="1" width="200", height="200">
        <tr>
            <td rowspan="200">1</td>
            <td width="100", height="100">2</td>
        </tr>
        <tr>
            <!-- <td>3</td> -->
            <td width="100", height="100">4</td>
        </tr>
    </table>
  ```
  ![image](https://user-images.githubusercontent.com/38516906/72769542-6b0eea80-3c3e-11ea-9aa2-d38caec4bc67.png)

<br>

## 11. Form & Input
1. Input
  * text input
  ```
  <h2>1-1. input: text</h2>
    <form action="">
        Input Text: <br>
        <input type="text">
    </form>
  ```
  ![image](https://user-images.githubusercontent.com/38516906/72770394-191b9400-3c41-11ea-8dfd-f17d910e5da4.png)
  
  * password input
  ```
  <h2>1-2. input: password</h2>
    <form action="">
        ID: <br><input type="text"> <br>
        PW: <br><input type="password">
    </form>
  ```
  ![image](https://user-images.githubusercontent.com/38516906/72770410-23d62900-3c41-11ea-8d97-98e6b10f220e.png)

  * radio input
  ```
  <h2>1-3. input: radio</h2>
    <form action="">
        <!-- name->grouping. if not, all of radio are selected-->
        <input type="radio" name="radio" value="radio_value"> Radio button 1<br>
        <input type="radio" name="radio"> Radio button 2<br>
        <input type="radio"> Radio button 3<br>
    </form>
  ```
  ![image](https://user-images.githubusercontent.com/38516906/72770727-0eadca00-3c42-11ea-9f7a-bdae14989794.png)

  * check box input
  ```
  <h2>1-4. input: check box</h2>
    <form action="">
        <input type="checkbox" name="" checked> checkbox 1<br>
        <input type="checkbox" name=""> checkbox 2<br>
    </form>
  ```
  ![image](https://user-images.githubusercontent.com/38516906/72771118-35203500-3c43-11ea-806b-acdf413b22d4.png)

2. select
```
<h2>1-5. select</h2>
  <select name="" id="">
      <option value="">option 1</option>
      <option value="" selected>option 2</option>
      <option value="">option 3</option>       
      <option value="">option 4</option>
  </select>
```
![image](https://user-images.githubusercontent.com/38516906/72771224-89c3b000-3c43-11ea-918c-ba512037197e.png)

3. button
```
<h2> 1-6. button</h2>
    <button>
        Click this button
    </button>
```
![image](https://user-images.githubusercontent.com/38516906/72771433-3aca4a80-3c44-11ea-8721-0592a8220537.png)

  * submit input
  ```
  <h2>1-7. input: submit</h2>
    <form action="">
        Input text:<br>
        <input type="text" placeholder="No wrong answer">
        <input type="submit">
    </form>
  ```
  ![image](https://user-images.githubusercontent.com/38516906/72771407-271ee400-3c44-11ea-9c45-081cb63aaccd.png)
  
  * submit input: query (using Naver engine)
  ```
  <h2>1-8. input: query(submit)</h2>
    <form action="https://search.naver.com/search.naver?">
        Input text:<br>
        <input type="text" name="query" placeholder="Input what you want">
        <input type="submit">
    </form>
  ```
  ![image](https://user-images.githubusercontent.com/38516906/72777028-9225e600-3c57-11ea-86e8-2f37883682f6.png)

