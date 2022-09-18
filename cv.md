# Siarhei Muliarenka
![photo](photo.jpg)

### Contact information:

**Phone:** +375 (29) 517-79-98<br/>
**Email:** warwhisper@tut.by<br/>
**Telegram:** warwhisper<br>
[**LinkedId**](https://www.linkedin.com/in/sierhei-muliarenka-9a8163115)

---
### Briefly About Myself:
I have started my cariera as a programmer for SCADA-systems. I developed the software for PC to control the chemical proсesses. Then I have some courses of programming PLC-controllers: Alan Bredlly and Siemens. At the same time I got some skills in C# - ASP.Net - SQL stack to develop software for integration SCADA-systems and Enterprise level.

Some times ago I've become passionate the Web Development . It provides you enless possibilities for develope anything you can imagine.

I believe, that my ability to learn and to gain new skills will lead me through this path of becoming a proficient Frontend Developer.

---
### Skills and Proficiency:
* HTML, CSS Basics
* Git, GitHub, SVN
* VS Code, VIsual Studio, Intellij IDEA
* Figma Basics
* C#, ASP.NET
* MS SQL, Transact SQL

---
### Code example:
**Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer**
Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
 
```
const solution = num => {
    const dec = [900,500,400,100,90,50,40,10,9,5,4,1];
    const rom = ['CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

    let result = '';
    if (num >= 1000) {
        result = 'M'.repeat(num / 1000);
        num %= 1000;
    }
    return dec.reduce((result, item, i) => {
        while (num >= item) {
            result +=rom[i];
            num -= item;
        }
        return result;
    }, result);
};
```
---
### Projects:
* [**Delivery Food**](https://surface74.github.io/delivery-food/) - HTML,CSS,JS
* [**Netclicks**](https://surface74.github.io/netclicks/) - HTML,CSS,JS
* [**Logitech**](https://surface74.github.io/Logitech/) - HTML,CSS,JS

---
### Courses:
* JavaScript Manual on [The Modern JavaScript Tutorial](https://javascript.info/)
* Algorithms, Part I on [Coursera](https://www.coursera.org)

---
### Languages:
* English - Pre Intermediate (B2)
* Russian - Native