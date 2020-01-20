# HTML
HyperText Markup Language
* HyperText: **Link**를 통해 웹 사이를 이동하는 것
* Markup: 어떠한 필요한 문서 내에서 정해진 규정대로 사용하는 것. </>
* Language: 언어

웹에서는 표준으로 **HTML5**를 사용한다.

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
<h1>This is a Title 1(h1)</h1>
<h2>This is a Title 2(h2)</h2>
<h3>This is a Title 3(h3)</h3>
<h4>This is a Title 4(h4)</h4>
<h5>This is a Title 5(h5)</h5>
<h6>This is a Title 6(h6)</h6>
```
![image](https://user-images.githubusercontent.com/38516906/72694656-16556c00-3b79-11ea-8bac-3a6398a6cf2c.png)

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
<h1>4. Style</h1>
<h3>Before: This is a content before applying style</h3>
<br>
<h3 style="font-size: 150%;">This is a style which is related in font size</h3>
<h3 style="color:cornflowerblue;">This is a style which is related in color</h3>
<h3 style="text-align: center;">This is a style which is related in font align</h3>
<br>
<h3 style="font-size: 150%; color: cornflowerblue; text-align: center;">After: This is a content after applying all of styles</h3>
```
![image](https://user-images.githubusercontent.com/38516906/72700034-ed8ba180-3b8d-11ea-93a5-2c80978379db.png)
