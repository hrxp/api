# hrxp-api

API and backend for the HRX Project

## Table of Contents

- [Getting Started](#getting-started)
- [Database Tables](#database-tables)
  - [Schema](#schema)
  - [User](#user)
  - [User_Type](#user_type)
  - [Organization_Contact](#organization_contact)
  - [Organization_Owner](#organization_owner)
- [Endpoints](#endpoints)
- [Data requests and responses](#Data-requests-and-responses)

# Getting Started

- Run `npm i` from the command line
- Navigate to db/config.example.js and rename to db/config.js
- Insert the MongoURL into the appropiate spot
- Run `npm start`
-

# Database Tables

## Schema

[Back to table of Contents](#table-of-contents)

# Endpoints

### Channels

| Endpoint            | METHOD | Description | Completed |
| ------------------- | ------ | ----------- | :-------: |
| [`/hello`](#/hello) | GET    |             |     X     |
| []()                | GET    |             |           |

### Users

| Endpoint             | METHOD | Description | Completed |
| -------------------- | ------ | ----------- | :-------: |
| [`/users` ](#/users) | GET    |             |           |
| []()                 | GET    |             |           |

### messages

| Endpoint                   | METHOD | Description | Completed |
| -------------------------- | ------ | ----------- | :-------: |
| [`/messages` ](#/messages) | GET    |             |           |
| []()                       | GET    |             |           |

# Data requests and responses

Below are all expected request body shapes and data responses

## `/channels`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/usres`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/messages`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

---

**Method:** PATCH

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)
