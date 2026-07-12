---
title: Setting Up TypeScript
---

Now we're going to write and run our first TypeScript program.

## Lesson 4: Setting Up TypeScript

Before we write code, we need to understand the tools.

---

## Step 1: What is Node.js?

Many beginners think:

> "TypeScript needs Node.js to work."

That's **not exactly true**.

Node.js is **not TypeScript**.

Node.js is a program that lets you run **JavaScript outside a web browser**.

# Example

Normally:

```text
JavaScript
      ↓
Browser (Chrome, Firefox, Edge)
```

But with Node.js:

```text
JavaScript
      ↓
Node.js
      ↓
Your Computer
```

This means you can write JavaScript programs without opening a browser.

---

# Why do we need Node.js?

Because the TypeScript compiler (`tsc`) is distributed as an **npm package**, and npm comes with Node.js.

So installing Node.js gives you:

- Node.js (to run JavaScript)
- npm (Node Package Manager)

---

## Step 2: What is npm?

**npm** stands for:

> **Node Package Manager**

Think of npm like an **app store for developers**.

On your phone:

```text
Play Store
      ↓
Download WhatsApp
Download Instagram
Download Spotify
```

For programmers:

```text
npm
      ↓
Install TypeScript
Install React
Install Express
Install Thousands of Libraries
```

npm helps you download and manage packages.

---

## Step 3: Install Node.js

Go to the official Node.js website and install the **LTS (Long-Term Support)** version.

After installing, open a terminal (Command Prompt, PowerShell, or Terminal) and check:

```bash
node -v
```

Example output:

```text
v22.5.0
```

Now check npm:

```bash
npm -v
```

Example:

```text
10.8.2
```

If both commands show version numbers, you're ready.

---

## Step 4: Install TypeScript

Run:

```bash
npm install -g typescript
```

Let's understand this command.

```text
npm
```

Use the package manager.

```text
install
```

Download and install a package.

```text
-g
```

Install it **globally**, so you can use it from any folder.

```text
typescript
```

The package to install.

---

## Step 5: Check TypeScript

Run:

```bash
tsc -v
```

Example:

```text
Version 5.9.0
```

Now TypeScript is installed.

---

## Step 6: Create a Project

Create a folder:

```text
TypeScript-Learning
```

Inside it, create a file:

```text
index.ts
```

Notice the extension:

```text
.ts
```

That tells us it's a TypeScript file.

---

## Step 7: Write Your First TypeScript Code

Open `index.ts` and write:

```typescript
console.log("Hello TypeScript!");
```

You already know this is an instruction telling the computer to display some text.

---

## Step 8: Compile the Code

Run:

```bash
tsc index.ts
```

What happens?

The TypeScript compiler reads:

```text
index.ts
```

and creates:

```text
index.js
```

Your folder now looks like:

```text
TypeScript-Learning/
│
├── index.ts
└── index.js
```

---

## Step 9: What's Inside `index.js`?

Open it.

You'll likely see:

```javascript
console.log("Hello TypeScript!");
```

In this simple example, it's the same because there were no TypeScript-only features to remove.

---

## Step 10: Run the Program

Now execute the JavaScript with Node.js:

```bash
node index.js
```

Output:

```text
Hello TypeScript!
```

🎉 Congratulations! You've written, compiled, and run your first TypeScript program.

---

## Let's Understand the Entire Flow

```text
You write:
index.ts
      │
      ▼
tsc index.ts
      │
      ▼
Creates:
index.js
      │
      ▼
node index.js
      │
      ▼
Output appears on the screen
```

This is the basic workflow you'll use over and over.

---

## Two Very Important Commands

### Compile

```bash
tsc index.ts
```

Converts TypeScript to JavaScript.

### Run

```bash
node index.js
```

Runs the generated JavaScript.

Remember:

- `tsc` **creates** JavaScript.
- `node` **runs** JavaScript.

---

## Common Beginner Confusion

Many beginners think:

> "Why not just run `index.ts`?"

Because Node.js runs **JavaScript**, not TypeScript.

That's why we compile first.

Later, we'll learn tools like `ts-node` that let you run TypeScript more conveniently during development, but it's important to first understand the underlying process.

---

## Key Points

- **Node.js** runs JavaScript outside the browser.
- **npm** installs packages.
- **TypeScript** is installed through npm.
- `tsc` compiles `.ts` files into `.js` files.
- Node.js runs the generated `.js` file.

---

## Your First Practical Task

1. Install Node.js (if you haven't already).
2. Verify:

   ```bash
   node -v
   npm -v
   ```

3. Install TypeScript:

   ```bash
   npm install -g typescript
   ```

4. Verify:

   ```bash
   tsc -v
   ```

5. Create `index.ts` with:

   ```typescript
   console.log("Hello TypeScript!");
   ```

6. Compile:

   ```bash
   tsc index.ts
   ```

7. Run:

   ```bash
   node index.js
   ```
