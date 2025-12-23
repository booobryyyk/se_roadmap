## Ubuntu container with installing htop

### Task

Install docker. You may have it installed after completing [Mate developer setup](https://docs.google.com/document/u/0/d/1-Tc4rOG7tHXgwWoF1eihtFyE9PY28tYLO7yDgfqpvGs/edit)

- Run container ubuntu:latest
- Inside container install htop
- Inside container check running processes using htop

### Start Ubuntu container

```sh
docker run -it --name my-bubuntu ubuntu /bin/bash
```

### Update apt package manager

```sh
apt update
```

### Install htop

```sh
apt install htop
```

### Run htop

```sh
htop
```
