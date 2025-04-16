# Thieve's Den!

Login, then see the content of the vault, unique per user.

## Data

## Thief

id, unique identifier (email), password, name, imagePath

```js
const thief = {
  id: 1,
  email: "",
  name: "",
  password: "",
  imagePath: "",
};
```

## ThiefList

Object: Easy to access a specific key
Array: Easy to loop over the content


```js
const thievesArr = [thief, thief];
const thievesObj = { "email": thief, "email": thief };
```

## Seed

```jsx

const thief1 = {
  id:"1",
  name:"Arsène Lupin",
  email:"gentleman@cambrioleur.com",
  password:"tophat",
  imagePath:"/arsene.gif"
}

const thief2 = {
  id:"2",
  name:"Doug Judy",
  email:"pontiac@bandit.com",
  password:"rosa",
  imagePath:"/doug.webp"
}

const thieves = {
  "gentleman@cambrioleur.com":thief1,
  "pontiac@bandit.com":thief2
}

```

## Structure

### Helpers!

#### Authenticate a thief

#### Fetch a thief by email

#### Create a thief account

### HTML
