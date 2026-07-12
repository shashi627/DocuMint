---
title: Why TypeScript?
---

Now we reach one of the **most important lessons** in TypeScript.

---

## Lesson 3: Why TypeScript Was Created & How It Works

By the end of this lesson, you'll understand:

- Why TypeScript exists
- Why browsers can't run it directly
- What happens after you write `.ts` code
- What a compiler is

---

## Step 1: Imagine You're Building a Small App

Suppose you write JavaScript like this:

```javascript
let name = "Rahul";

name = 100;

console.log(name.toUpperCase());
```

Let's follow it step by step.

Initially:

```
name = "Rahul"
```

Everything is fine.

Then:

```
name = 100
```

Now `name` is no longer a string—it's a number.

Next:

```javascript
name.toUpperCase();
```

You're asking the computer:

> "Convert this value to uppercase."

But numbers don't have an uppercase form.

So the program crashes with an error.

---

## The Problem

JavaScript doesn't warn you when you change a variable from one type to another.

You only discover the mistake **when the program runs**.

Imagine this happening in a banking app with millions of users!

---

## Microsoft's Idea

Microsoft asked:

> "What if we could detect these mistakes **before** running the program?"

That idea became **TypeScript**.

---

## Same Example in TypeScript

```typescript
let name: string = "Rahul";

name = 100;
```

TypeScript immediately reports an error.

It says something like:

```
Type 'number' is not assignable to type 'string'.
```

Instead of letting you find the bug later, it points it out while you're writing the code.

---

## What Does "Type" Mean?

A **type** tells us what kind of value something can hold.

Examples:

```
25          → number
"Hello"     → string
true        → boolean
```

TypeScript lets you describe these types so it can help catch mistakes.

---

## Can Browsers Understand TypeScript?

**No.**

Browsers understand **JavaScript**, not TypeScript.

If you write:

```typescript
let age: number = 20;
```

The browser sees:

```
:number
```

and doesn't know what it means.

So it cannot run TypeScript directly.

---

## Then How Does TypeScript Work?

A special tool called the **TypeScript Compiler** converts TypeScript into JavaScript.

Think of it like a translator.

```
TypeScript
      │
      ▼
TypeScript Compiler
      │
      ▼
JavaScript
      │
      ▼
Browser
```

---

# Real-Life Analogy

Imagine you write a letter in **Hindi**, but your friend understands only **English**.

You need a translator.

```
Hindi
   ↓
Translator
   ↓
English
```

Similarly:

```
TypeScript
      ↓
Compiler
      ↓
JavaScript
```

The compiler translates your code into JavaScript that browsers can run.

---

## What Is a Compiler?

A **compiler** is a program that converts code written in one language into another language.

In our case:

```
TypeScript
      ↓
Compiler
      ↓
JavaScript
```

It also checks for many kinds of mistakes before producing the JavaScript.

---

## What Does the Compiler Remove?

Suppose you write:

```typescript
let age: number = 20;
```

After compilation, it becomes:

```javascript
let age = 20;
```

Notice that `: number` is gone.

Type information is mainly for development—it isn't needed by the browser.

---

## Complete Flow

When you write TypeScript:

```
You
 │
 ▼
Write TypeScript (.ts)
 │
 ▼
Compiler checks for errors
 │
 ▼
Compiler converts to JavaScript (.js)
 │
 ▼
Browser runs the JavaScript
```

This is the workflow you'll use throughout your TypeScript projects.

---

## Why Is TypeScript Better?

TypeScript helps by:

- Catching many errors early
- Making code easier to understand
- Providing better autocomplete and suggestions
- Improving code navigation in editors
- Making large projects easier to maintain

That's why many professional teams use TypeScript.

---

## Key Points

- TypeScript was created by Microsoft.
- It builds on JavaScript by adding a type system.
- Browsers cannot run TypeScript directly.
- A compiler converts TypeScript into JavaScript.
- Type information is removed during compilation.
- The browser runs the resulting JavaScript.

---

## Quick Quiz

1. Why was TypeScript created?
2. Can browsers run `.ts` files directly?
3. What is a compiler?
4. What does the compiler convert?
5. Why is `: number` removed from the final JavaScript?

---
