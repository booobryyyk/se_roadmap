## SQL Injection

### Task

Demonstrate how SQL injection works by crafting a malicious input that bypasses authentication logic.

### How it works

SQL injection occurs when user input is concatenated directly into a SQL query without sanitization or parameterization.

Consider a login query:

```sql
SELECT * FROM users WHERE email='admin@mail.com' AND password='12345678'
```

An attacker can use a crafted email input like:

```
'admin@mail.com'; --
```

This produces the following query:

```sql
SELECT * FROM users WHERE email='admin@mail.com'; -- AND password=12345678-HAHAHAHA
```

The `--` comments out the password check entirely, granting access with just a known email.

### Script

The script generates the injected SQL query and writes it to a file:

```js
const email = "'admin@mail.com'; --";
const password = '12345678-HAHAHAHA';

const query = `SELECT * FROM users WHERE email=${email} AND password=${password}`;
```

### Prevention

- Use parameterized queries / prepared statements
- Use ORM libraries that handle escaping
- Validate and sanitize user input
- Apply the principle of least privilege to database accounts
