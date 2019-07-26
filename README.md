# hrxp-api

API and backend for the HRX Project.

## Table of Contents

- [Getting Started](#getting-started)
- [Database Tables](#database-tables)
  - [Schema](#schema)
- [UI Endpoints](#ui-endpoints)
- [Ingestor Endpoints](#ingestor-endpoints)
- [UI Data Requests and Responses](#ui-data-requests-and-responses)
- [Ingestor Data Requests and Reponses](#ingestor-data-requests-and-responses)

# Getting Started


- Install npm packages by running `npm i` from the command line
- Start the server for the backe by running `npm start`


# Database Tables

## Schema

[Back to table of Contents](#table-of-contents)

# UI Endpoints

### Channels

| Endpoint                                                                   | METHOD | Description                       | Completed |
| -------------------------------------------------------------------------- | ------ | --------------------------------- | :-------: |
| [`/channels`](#/channels)                                                  | GET    | All channels                      |           |
| [`/channels/:channel_id`](#/channels/:channel_id)                          | GET    | Specific channel                  |           |
| [`/channels/:channel_id/msgs`](#/channels/:channel_id/msgs)                | GET    | All msgs for specific channel     |           |
| [`/channels/:channel_id/msgs/:msg_id`](#/channels/:channel_id/msgs/msg_id) | GET    | A specific message in the channel |           |

### users

| Endpoint                                                        | METHOD | Description             | Completed |
| --------------------------------------------------------------- | ------ | ----------------------- | :-------: |
| [`/users` ](#/users)                                            | GET    | All users               |           |
| [`/users/:user_id`](#/users/:user_id)                           | GET    | Specific user           |           |
| [`/users/:user_id/msgs`](#/users/:user_id/msgs)                 | GET    | All msgs for a user     |           |
| [`/users/:user_id/msgs/:msg_id`](#/users/:user_id/msgs/:msg_id) | GET    | Specific msg for a user |           |

# Ingestor Endpoints

### TBD

| Endpoint | METHOD | Description | Completed |
| -------- | ------ | ----------- | :-------: |


### TBD

| Endpoint | METHOD | Description | Completed |
| -------- | ------ | ----------- | :-------: |


# UI data requests and responses

Below are all expected request data responses.

# /channels

**Method:** GET

Structure of request:

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

## `/channels/:channel_id`
## `/users`


**Method:** GET

Structure of request:

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

## `/channels/:channel_id/msgs`

**Method:** GET

Structure of request:

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

## `/channels/:channel_id`

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

[Back to table of Contents](#table-of-contents)## `/channels/:channel_id`

## `/channels/:channel_id/msgs/:msg_id

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

[Back to table of Contents](#table-of-contents)## `/channels/:channel_id`

## `/users`

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

[Back to table of Contents](#table-of-contents)## `/channels/:channel_id`

## `/users/:user_id`

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

[Back to table of Contents](#table-of-contents)## `/channels/:channel_id`

## `/users/:user_id/msgs`

**Method:** GET

Structure of request

```
{

}
```

[Back to table of Contents](#table-of-contents)## `/channels/:channel_id`

## `/users/:user_id/msgs/:msg_id`

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

# Ingestor data requests and responses
