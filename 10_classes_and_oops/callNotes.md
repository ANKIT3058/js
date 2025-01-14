# Execution Flow

## 1. When you execute:
```javascript
const chai = new createUser("chai", "chai@fb.com", "123");
```
- The new operator creates an empty object and assigns it to this in the createUser function.
- Inside createUser, SetUsername.call(this, username) is invoked.

## 2. Inside SetUsername:
- .call(this, username) binds the this of SetUsername to the object created by new createUser().
- this.username = username; sets the username property on the same object.

## 3. Back in createUser:
- this.email = email; and this.password = password; assign properties to the same object.