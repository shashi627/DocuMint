---
title: What is JavaScript?
---

This lesson is one of the most important because **TypeScript is built on top of JavaScript**. If you understand JavaScript first, TypeScript will make much more sense.

---

## Lesson 2: What is JavaScript?

Before answering this, let's answer another question.

## How does a website work?

Imagine you open **YouTube**.

What do you see?

- Buttons
- Videos
- Search bar
- Sidebar
- Like button
- Comments

Now think:

If you click the **Like** button, why does it increase the like count?

Because **something** is listening for your click and deciding what to do.

That "something" is JavaScript.

---

## A Website Has 3 Main Parts

Think of building a house.

### 1. HTML → Structure 🧱

HTML creates the things on the page.

Example:

- Button
- Heading
- Image
- Input box
- Paragraph

It's like the walls, doors, and windows of a house.

---

### 2. CSS → Design 🎨

CSS makes the page look beautiful.

It changes:

- Colors
- Fonts
- Size
- Spacing
- Animations

It's like painting and decorating the house.

---

### 3. JavaScript → Brain 🧠

JavaScript makes the website interactive.

It decides:

- What happens when you click a button?
- What happens when you type?
- What happens when data comes from a server?
- What happens when a timer finishes?

Without JavaScript, a webpage is mostly static.

---

# Real-Life Analogy

Imagine a human body.

- HTML = Skeleton (structure)
- CSS = Clothes and appearance
- JavaScript = Brain and muscles (behavior and actions)

Without the brain, the body can't react or move.

---

# Example

Suppose you have a button.

HTML:

```html
<button>Click Me</button>
```

This creates the button.

CSS:

```css
button {
  background: blue;
}
```

This makes it blue.

JavaScript:

```javascript
button.onclick = function () {
  alert("Hello!");
};
```

Now, when you click the button, something happens.

That's JavaScript adding behavior.

---

## What can JavaScript do?

JavaScript can:

- Do calculations
- Show messages
- Validate forms
- Play videos
- Build games
- Update a page without reloading
- Communicate with servers
- Create animations
- Build web applications

Today, JavaScript is also used outside the browser, such as on servers using **Node.js**.

---

## Why is JavaScript so popular?

Because it's the language that web browsers understand natively.

Every major browser (Chrome, Firefox, Edge, Safari) can run JavaScript directly.

That's why it's one of the most widely used programming languages.

---

## But JavaScript has a problem...

JavaScript is very flexible.

For example:

```javascript
let age = 20;

age = "Twenty";
```

JavaScript allows this.

The variable `age` first stores a **number**, then later stores a **string**.

The program might still run, but this flexibility can lead to bugs that are hard to find in large projects.

---

# Imagine a Bank App

Suppose a customer's balance should always be a number.

Correct:

```text
Balance = 5000
```

Incorrect:

```text
Balance = "Five Thousand"
```

If the program expects a number but gets text instead, calculations may fail.

In a large application with thousands of files, mistakes like this become difficult to track.

---

## This is why TypeScript was created.

TypeScript adds a **type system** to JavaScript.

You can tell the computer what kind of value a variable should hold.

Example:

```typescript
let age: number = 20;
```

Now if you try:

```typescript
age = "Twenty";
```

TypeScript reports an error **before you run the program**, helping you catch bugs earlier.

We'll learn exactly how this works in upcoming lessons.

---

## Relationship Between JavaScript and TypeScript

Think of it like this:

```
JavaScript
     +
Extra Safety
     +
Better Developer Tools
     =
TypeScript
```

Or another analogy:

- JavaScript is like riding a bicycle without a helmet.
- TypeScript is like riding the same bicycle while wearing a helmet.

You can still ride the bike, but you have extra protection.

---

## Key Points

- JavaScript makes websites interactive.
- HTML provides structure.
- CSS provides appearance.
- JavaScript provides behavior.
- Browsers understand JavaScript directly.
- TypeScript is built on top of JavaScript.
- TypeScript helps catch many mistakes before the code runs.

---

## Quick Quiz

1. What are the roles of HTML, CSS, and JavaScript?
2. Why can JavaScript cause bugs in large projects?
3. What problem does TypeScript solve?
4. Does TypeScript replace JavaScript or build on top of it?
5. Can browsers run TypeScript directly?
