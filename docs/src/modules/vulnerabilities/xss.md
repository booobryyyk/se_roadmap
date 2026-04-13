## Cross-Site Scripting (XSS)

### Task

Demonstrate how XSS works by comparing vulnerable and protected rendering of user-supplied HTML content.

### How it works

XSS occurs when an application includes untrusted data in a web page without proper escaping. An attacker can inject scripts that execute in the victim's browser.

Example malicious input:

```html
<img src="x" onerror="alert('Hello!')"><b>Bold</b> and <i>italic</i> text
```

### Three rendering approaches

#### 1. Vulnerable — `innerHTML` without sanitization

```js
document.getElementById('vulnerable').innerHTML = COMMENT;
```

The `onerror` handler executes, triggering the alert. This is a classic stored/reflected XSS vector.

#### 2. Protected — `textContent`

```js
document.getElementById('protected').textContent = COMMENT;
```

All HTML is escaped and rendered as plain text. Safe, but no formatting is preserved.

#### 3. Protected with formatting — DOMPurify

```js
document.getElementById('protected-formatted').innerHTML =
  DOMPurify.sanitize(COMMENT, { ALLOWED_TAGS: ['b', 'i', 'img'] });
```

DOMPurify strips dangerous attributes (`onerror`) while keeping allowed tags. This gives safe HTML rendering with formatting.

### Prevention

- Never use `innerHTML` with unsanitized user input
- Use `textContent` when formatting is not needed
- Use a sanitization library like DOMPurify when HTML formatting is required
- Implement Content Security Policy (CSP) headers
