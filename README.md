Javascript Functional Programming 
=================================

### Intro  

One technique for building JavaScript applications is called “functional programming,” which in a nutshell,
consists of the following techniques:

+ Identifying an abstraction and building a function for it
+ Using existing functions to build more complex abstractions
+ Passing existing functions to other functions to build even more complex abstractions

However, functions are not enough. In fact, functional programming very often works
best when implemented in concert with powerful data abstractions. There is a beautiful
symmetry between functional programming and data.

Having said that, a nice image of a system built along functional principles is an
assembly-line device that takes raw materials in one end, and gradually builds a product
that comes out the other end.

**The first rule of my personal programming style has always been the following: Write
beautiful code. I’ve achieved this goal to varying degrees of success throughout my
career, but it’s always something that I strive for. Writing beautiful code allows me to
optimize another aspect of computer time: the time that I spend sitting at a desk typing
on a keyboard. I find a functional style of writing code to be exceptionally beautiful if
done well, and I hope that you’ll agree by the time you reach the end (Michael Fogus)**


### Why Functional 
As programs get bigger, they also become more complex and harder to understand. We all think
ourselves pretty clever, of course, but we are mere human beings, and even a moderate amount
of chaos tends to baffle us. And then it all goes downhill.

That JavaScript supports both models means that systems can and should be composed of both
models. Finding the balance between functional and object-oriented styles is a tricky task,
but javascripts good part is a lot inside the functional part. 

### OO Vs Functional 
In a system observing a strict object-oriented style, the interactions between objects
cause internal change to each object, leading to an overall system state that is the amal‐
gamation of many smaller, potentially subtle state changes. These interrelated state
changes form a conceptual “web of change” that, at times, can be confusing to keep in
your head. This confusion becomes a problem when the act of adding new objects and
system features requires a working knowledge of the subtleties of potentially far-
reaching state changes.

A functional system, on the other hand, strives to minimize observable state modifica‐
tion. Therefore, adding new features to a system built using functional principles is a
matter of understanding how new functions can operate within the context of localized,
nondestructive (i.e., original data is never changed) data transformations. However, I
hesitate to create a false dichotomy and say that functional and object-oriented styles
should stand in opposition. 

**That JavaScript supports both models means that systems can and should be composed of both models. Finding the balance between functional and object-oriented styles is a tricky task**

### Content 
In the folder are present the main functional programming guideliine for Javascript based on the underscore package : 

+ Function as Unit 
+ First-Class Functions 
+ Variable Scope and Closure 
+ Higher-Order Functions 
+ Functions-Building-Functions 
+ Recursion

